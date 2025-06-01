// script.js

document.addEventListener('DOMContentLoaded', () => {
    const riskTableBody = document.querySelector('#risk-table tbody');
    const detailPanel = document.getElementById('detail-panel');
    const detailEventAsset = document.getElementById('detail-event-asset');
    const detailImpactValue = document.getElementById('detail-impact-value');
    const detailDescription = document.getElementById('detail-description');
    const detailStrategies = document.getElementById('detail-strategies');
    const closeDetailButton = document.getElementById('close-detail');

    const scenarioSlider = document.getElementById('scenario-slider');
    const currentScenarioSpan = document.getElementById('current-scenario');

  
    const backToTopBtn = document.getElementById('backToTopBtn');


 

    const climateEvents = Object.keys(climateRiskData);
    const assets = ["Edifici", "Comunicazione", "Lavoratori", "Clienti", "Energia", "Vigneti"];

    let currentScenarioIndex = 0; 


    function populateTable() {
        riskTableBody.innerHTML = ''; 
        const selectedScenario = scenarioOptions[currentScenarioIndex];
        currentScenarioSpan.textContent = selectedScenario; 

        climateEvents.forEach(event => {
            const row = document.createElement('tr');
            const eventCell = document.createElement('td');
            eventCell.textContent = event;
            row.appendChild(eventCell);

            assets.forEach(asset => {
                const cell = document.createElement('td');
        
                const scenarioData = climateRiskData[event] && climateRiskData[event][asset] ?
                                             climateRiskData[event][asset].scenarios[selectedScenario] : null;

                if (scenarioData) {
                    const impact = scenarioData.impact;
                    cell.textContent = impact; 
                    cell.classList.add('cell', `impact-${impact}`); 
                    cell.dataset.event = event;
                    cell.dataset.asset = asset;
                    cell.dataset.scenario = selectedScenario; 
                } else {
                    cell.textContent = '-'; 
                    cell.classList.add('cell', 'impact-1'); 
                }
                row.appendChild(cell);
            });
            riskTableBody.appendChild(row);
        });

        addCellClickListeners(); 
    }

    
    function addCellClickListeners() {
        const cells = document.querySelectorAll('#risk-table .cell');
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                const eventName = cell.dataset.event;
                const assetName = cell.dataset.asset;
                const scenario = cell.dataset.scenario;
               
                const data = climateRiskData[eventName]?.[assetName]?.scenarios[scenario];

                if (data) {
                    detailEventAsset.textContent = `${eventName} su ${assetName} (${scenario})`;
                    detailImpactValue.textContent = data.impact;
                    detailDescription.textContent = data.desc;
                    detailStrategies.textContent = data.strategies;
                    detailPanel.classList.remove('hidden');

            
                } else {
            
                    detailPanel.classList.add('hidden');
                    console.warn(`Dati non trovati per Evento: ${eventName}, Asset: ${assetName}, Scenario: ${scenario}`);
                }
            });
        });
    }

    
    closeDetailButton.addEventListener('click', () => {
        detailPanel.classList.add('hidden');
    });

  
    scenarioSlider.addEventListener('input', (event) => {
        currentScenarioIndex = parseInt(event.target.value);
        populateTable(); 
        updateCharts(); 
    });


    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scorrimento fluido
        });
    });


   
    if (typeof L !== 'undefined') {
        const siracusaCoords = [37.0754, 15.2891]; 

        const mymap = L.map('mapid').setView(siracusaCoords, 10); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

     
        const wineryCoords = [37.05, 15.2]; 
        L.marker(wineryCoords).addTo(mymap)
            .bindPopup("<b>La Tua Cantina Qui!</b><br> Punto di analisi principale.").openPopup();


        const coastalArea = L.polygon([
            [36.95, 15.2], 
            [37.00, 15.3],
            [37.05, 15.25],
            [37.00, 15.15]
        ], {
            color: 'blue',
            fillColor: '#00BFFF',
            fillOpacity: 0.2
        }).addTo(mymap).bindPopup("<b>Area Costiera</b><br>Rischio prevalente: Piogge intense, Venti forti.");

        const inlandArea = L.polygon([
            [37.15, 15.0], 
            [37.20, 15.1],
            [37.10, 15.2],
            [37.05, 15.1]
        ], {
            color: 'brown',
            fillColor: '#A0522D',
            fillOpacity: 0.2
        }).addTo(mymap).bindPopup("<b>Area Interna/Collinare</b><br>Rischio prevalente: Siccità prolungata, Aumento temperature, Frane/Smottamenti.");

  
    } else {
        console.error("Leaflet (L) non è definito. Assicurati che leaflet.js sia caricato correttamente.");
    }


   
    if (typeof Chart !== 'undefined') {
        const eventImpactCtx = document.getElementById('eventImpactChart').getContext('2d');
        const assetVulnerabilityCtx = document.getElementById('assetVulnerabilityChart').getContext('2d');

        let eventImpactChart; 
        let assetVulnerabilityChart;

        function updateCharts() {
            const selectedScenario = scenarioOptions[currentScenarioIndex];

     
            const eventAverageImpacts = {};
            climateEvents.forEach(event => {
                let totalImpact = 0;
                let count = 0;
                assets.forEach(asset => {
                    const data = climateRiskData[event]?.[asset]?.scenarios[selectedScenario];
                    if (data) {
                        totalImpact += data.impact;
                        count++;
                    }
                });
                eventAverageImpacts[event] = count > 0 ? (totalImpact / count).toFixed(1) : 0;
            });

            const eventChartLabels = Object.keys(eventAverageImpacts);
            const eventChartData = Object.values(eventAverageImpacts).map(Number); 

            if (eventImpactChart) {
                eventImpactChart.destroy();
            }
            eventImpactChart = new Chart(eventImpactCtx, {
                type: 'bar',
                data: {
                    labels: eventChartLabels,
                    datasets: [{
                        label: 'Impatto Medio (1-5)',
                        data: eventChartData,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 5,
                            title: {
                                display: true,
                                text: 'Livello di Impatto'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

         
            const assetAverageVulnerabilities = {};
            assets.forEach(asset => {
                let totalImpact = 0;
                let count = 0;
                climateEvents.forEach(event => {
                    const data = climateRiskData[event]?.[asset]?.scenarios[selectedScenario];
                    if (data) {
                        totalImpact += data.impact;
                        count++;
                    }
                });
                assetAverageVulnerabilities[asset] = count > 0 ? (totalImpact / count).toFixed(1) : 0;
            });

            const assetChartLabels = Object.keys(assetAverageVulnerabilities);
            const assetChartData = Object.values(assetAverageVulnerabilities).map(Number);

            if (assetVulnerabilityChart) {
                assetVulnerabilityChart.destroy(); 
            }
            assetVulnerabilityChart = new Chart(assetVulnerabilityCtx, {
                type: 'bar',
                data: {
                    labels: assetChartLabels,
                    datasets: [{
                        label: 'Vulnerabilità Media (1-5)',
                        data: assetChartData,
                        backgroundColor: 'rgba(153, 102, 255, 0.6)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 5,
                            title: {
                                display: true,
                                text: 'Livello di Vulnerabilità'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }

       
        updateCharts();

    } else {
        console.error("Chart.js non è definito. Assicurati che chart.js sia caricato correttamente.");
    }

   
    populateTable();
});
