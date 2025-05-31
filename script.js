// script.js (modificato per scenari e scroll)

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

    const climateEvents = Object.keys(climateRiskData);
    const assets = ["Edifici", "Comunicazione", "Lavoratori", "Clienti", "Energia", "Vigneti"];

    let currentScenarioIndex = 0; // Inizia con lo scenario "Oggi"

    // Funzione per popolare la tabella con i dati e applicare gli stili heatmap
    function populateTable() {
        riskTableBody.innerHTML = ''; // Pulisci il corpo della tabella
        const selectedScenario = scenarioOptions[currentScenarioIndex];
        currentScenarioSpan.textContent = selectedScenario; // Aggiorna l'etichetta dello slider

        climateEvents.forEach(event => {
            const row = document.createElement('tr');
            const eventCell = document.createElement('td');
            eventCell.textContent = event;
            row.appendChild(eventCell);

            assets.forEach(asset => {
                const cell = document.createElement('td');
                const scenarioData = climateRiskData[event][asset]?.scenarios[selectedScenario]; // Ottieni i dati per lo scenario selezionato

                if (scenarioData) {
                    const impact = scenarioData.impact;
                    cell.textContent = impact; // Mostra solo il livello di impatto
                    cell.classList.add('cell', `impact-${impact}`); // Applica la classe per il colore
                    cell.dataset.event = event;
                    cell.dataset.asset = asset;
                    cell.dataset.scenario = selectedScenario; // Salva lo scenario nel dataset
                } else {
                    cell.textContent = '-'; // Se non ci sono dati specifici
                }
                row.appendChild(cell);
            });
            riskTableBody.appendChild(row);
        });

        addCellClickListeners(); // Aggiungi listener dopo che le celle sono state create
    }

    // Funzione per aggiungere i listener di click alle celle
    function addCellClickListeners() {
        const cells = document.querySelectorAll('#risk-table .cell');
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                const eventName = cell.dataset.event;
                const assetName = cell.dataset.asset;
                const scenario = cell.dataset.scenario;
                const data = climateRiskData[eventName][assetName]?.scenarios[scenario];

                if (data) {
                    detailEventAsset.textContent = `${eventName} su ${assetName} (${scenario})`;
                    detailImpactValue.textContent = data.impact;
                    detailDescription.textContent = data.desc;
                    detailStrategies.textContent = data.strategies;
                    detailPanel.classList.remove('hidden');

                    // --- NUOVA RIGA AGGIUNTA QUI ---
                    detailPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // 'behavior: "smooth"' crea uno scorrimento animato.
                    // 'block: "start"' allinea l'inizio dell'elemento con l'inizio del viewport.
                    // --------------------------------
                }
            });
        });
    }

    // Listener per chiudere il pannello dei dettagli
    closeDetailButton.addEventListener('click', () => {
        detailPanel.classList.add('hidden');
    });

    // Listener per lo slider dello scenario
    scenarioSlider.addEventListener('input', (event) => {
        currentScenarioIndex = parseInt(event.target.value);
        populateTable(); // Ripopola la tabella con i nuovi dati dello scenario
        updateCharts(); // Aggiorna anche i grafici
    });

    // --- LOGICA MAPPA ---
    const siracusaCoords = [37.0754, 15.2891]; // Coordinate indicative di Siracusa

    const mymap = L.map('mapid').setView(siracusaCoords, 10); // 10 è lo zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Esempio: Aggiungi un marker per la posizione della cantina (personalizza coordinate)
    const wineryCoords = [37.05, 15.2]; // Coordinate fittizie della tua cantina
    L.marker(wineryCoords).addTo(mymap)
        .bindPopup("<b>La Tua Cantina Qui!</b><br> Punto di analisi principale.").openPopup();

    // Esempio: Aggiungi aree di vulnerabilità concettuali
    // Puoi definire aree più complesse con GeoJSON o tracciare poligoni semplici
    const coastalArea = L.polygon([
        [36.95, 15.2], // Esempio: coord per un poligono sulla costa
        [37.00, 15.3],
        [37.05, 15.25],
        [37.00, 15.15]
    ], {
        color: 'blue',
        fillColor: '#00BFFF',
        fillOpacity: 0.2
    }).addTo(mymap).bindPopup("<b>Area Costiera</b><br>Rischio prevalente: Piogge intense, Venti forti.");

    const inlandArea = L.polygon([
        [37.15, 15.0], // Esempio: coord per un poligono nell'entroterra
        [37.20, 15.1],
        [37.10, 15.2],
        [37.05, 15.1]
    ], {
        color: 'brown',
        fillColor: '#A0522D',
        fillOpacity: 0.2
    }).addTo(mymap).bindPopup("<b>Area Interna/Collinare</b><br>Rischio prevalente: Siccità prolungata, Aumento temperature, Frane/Smottamenti.");

    // Puoi aggiungere più poligoni per diverse aree o usare dati GeoJSON reali se disponibili.

    // --- LOGICA GRAFICI ---
    const eventImpactCtx = document.getElementById('eventImpactChart').getContext('2d');
    const assetVulnerabilityCtx = document.getElementById('assetVulnerabilityChart').getContext('2d');

    let eventImpactChart; // Definisci le variabili dei grafici fuori dalla funzione
    let assetVulnerabilityChart;

    function updateCharts() {
        const selectedScenario = scenarioOptions[currentScenarioIndex];

        // Dati per "Impatto Medio per Evento Climatico"
        const eventAverageImpacts = {};
        climateEvents.forEach(event => {
            let totalImpact = 0;
            let count = 0;
            assets.forEach(asset => {
                const data = climateRiskData[event][asset]?.scenarios[selectedScenario];
                if (data) {
                    totalImpact += data.impact;
                    count++;
                }
            });
            eventAverageImpacts[event] = count > 0 ? (totalImpact / count).toFixed(1) : 0;
        });

        const eventChartLabels = Object.keys(eventAverageImpacts);
        const eventChartData = Object.values(eventAverageImpacts).map(Number); // Converti a numero

        if (eventImpactChart) {
            eventImpactChart.destroy(); // Distruggi il grafico precedente
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

        // Dati per "Vulnerabilità Media per Asset"
        const assetAverageVulnerabilities = {};
        assets.forEach(asset => {
            let totalImpact = 0;
            let count = 0;
            climateEvents.forEach(event => {
                const data = climateRiskData[event][asset]?.scenarios[selectedScenario];
                if (data) {
                    totalImpact += data.impact;
                    count++;
                }
            });
            assetAverageVulnerabilities[asset] = count > 0 ? (totalImpact / count).toFixed(1) : 0;
        });

        const assetChartLabels = Object.keys(assetAverageVulnerabilities);
        const assetChartData = Object.values(assetAverageVulnerabilities).map(Number); // Converti a numero

        if (assetVulnerabilityChart) {
            assetVulnerabilityChart.destroy(); // Distruggi il grafico precedente
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

    // Inizializzazione della pagina
    populateTable();
    updateCharts(); // Inizializza anche i grafici al caricamento
});
