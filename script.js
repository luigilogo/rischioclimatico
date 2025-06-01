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

    // Nuovo: Pulsante Torna su
    const backToTopBtn = document.getElementById('backToTopBtn');


    // climateRiskData e scenarioOptions sono definiti in data.js
    // Assicurati che data.js sia caricato prima di script.js nell'HTML
    // (Verificato nell'HTML aggiornato)

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
                // Verifica che climateRiskData[event][asset] esista prima di accedere a .scenarios
                const scenarioData = climateRiskData[event] && climateRiskData[event][asset] ?
                                             climateRiskData[event][asset].scenarios[selectedScenario] : null;

                if (scenarioData) {
                    const impact = scenarioData.impact;
                    cell.textContent = impact; // Mostra solo il livello di impatto
                    cell.classList.add('cell', `impact-${impact}`); // Applica la classe per il colore
                    cell.dataset.event = event;
                    cell.dataset.asset = asset;
                    cell.dataset.scenario = selectedScenario; // Salva lo scenario nel dataset
                } else {
                    cell.textContent = '-'; // Se non ci sono dati specifici
                    cell.classList.add('cell', 'impact-1'); // Applica uno stile di default per le celle senza dati
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
                // Aggiunto controllo per dati nulli, anche se populateTable già lo gestisce per l'impatto,
                // è meglio essere sicuri per i dettagli.
                const data = climateRiskData[eventName]?.[assetName]?.scenarios[scenario];

                if (data) {
                    detailEventAsset.textContent = `${eventName} su ${assetName} (${scenario})`;
                    detailImpactValue.textContent = data.impact;
                    detailDescription.textContent = data.desc;
                    detailStrategies.textContent = data.strategies;
                    detailPanel.classList.remove('hidden');

                    // LA RIGA CHE CAUSAVA LO SCROLL AUTOMATICO È STATA RIMOSSA:
                    // const matriceRischioSection = document.getElementById('matrice-rischio');
                    // if (matriceRischioSection) {
                    //    matriceRischioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // }
                } else {
                    // Opzionale: Nascondi il pannello se non ci sono dati o mostra un messaggio di errore
                    detailPanel.classList.add('hidden');
                    console.warn(`Dati non trovati per Evento: ${eventName}, Asset: ${assetName}, Scenario: ${scenario}`);
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

    // --- NUOVO: LOGICA PULSANTE TORNA SU ---
    // Mostra il pulsante quando l'utente scorre verso il basso di un certo numero di pixel
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Quando l'utente clicca sul pulsante, scorri verso l'alto della pagina
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scorrimento fluido
        });
    });


    // --- LOGICA MAPPA ---
    // Assicurati che 'L' sia definito da Leaflet.js
    if (typeof L !== 'undefined') {
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
    } else {
        console.error("Leaflet (L) non è definito. Assicurati che leaflet.js sia caricato correttamente.");
    }


    // --- LOGICA GRAFICI ---
    // Assicurati che 'Chart' sia definito da Chart.js
    if (typeof Chart !== 'undefined') {
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
                    const data = climateRiskData[event]?.[asset]?.scenarios[selectedScenario];
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
                    const data = climateRiskData[event]?.[asset]?.scenarios[selectedScenario];
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

        // Inizializzazione dei grafici al caricamento
        updateCharts();

    } else {
        console.error("Chart.js non è definito. Assicurati che chart.js sia caricato correttamente.");
    }

    // Inizializzazione della pagina (popola tabella e avvia grafici se Chart.js è pronto)
    populateTable();
});
