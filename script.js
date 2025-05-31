document.addEventListener('DOMContentLoaded', () => {
    // I tuoi dati di rischio (questi potrebbero provenire da un file data.json per maggiore pulizia)
    const riskData = {
        "Siccità Prolungata": {
            "Vigneti": { impact: 5, probability: 4, desc: "Stress idrico, riduzione resa...", strategies: "Irrigazione goccia a goccia, vitigni resistenti." },
            "Edifici": { impact: 1, probability: 4, desc: "Nessun impatto diretto significativo.", strategies: "N/A" },
            "Lavoratori": { impact: 3, probability: 5, desc: "Stress da calore, turni modificati.", strategies: "Idratazione, orari flessibili." },
            // ... altri asset
        },
        "Piogge Intese/Alluvioni": {
            "Vigneti": { impact: 4, probability: 3, desc: "Erosione suolo, malattie fungine.", strategies: "Drenaggio, inerbimento controllato." },
            // ...
        }
        // ... altri eventi climatici
    };

    const riskTable = document.getElementById('risk-table');
    const detailPanel = document.getElementById('detail-panel');
    const detailTitle = document.getElementById('detail-title');
    const detailImpact = document.getElementById('detail-impact');
    const detailProbability = document.getElementById('detail-probability');
    const detailDescription = document.getElementById('detail-description');
    const detailStrategies = document.getElementById('detail-strategies');
    const scenarioSlider = document.getElementById('scenario-slider');
    const currentScenarioSpan = document.getElementById('current-scenario');

    // Funzione per popolare la tabella e gestire l'interattività
    function populateTable() {
        const tbody = riskTable.querySelector('tbody');
        tbody.innerHTML = ''; // Pulisci la tabella per ripopolarla

        for (const eventName in riskData) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${eventName}</td>`;
            const eventAssets = riskData[eventName];

            // Ordine degli asset (deve corrispondere all'header)
            const assetsOrder = ["Vigneti", "Edifici", "Lavoratori", "Clienti", "Comunicazione", "Energia"];

            assetsOrder.forEach(assetName => {
                const cellData = eventAssets[assetName];
                const cell = document.createElement('td');
                cell.classList.add('cell');
                cell.dataset.event = eventName;
                cell.dataset.asset = assetName;

                if (cellData) {
                    const combinedRisk = cellData.impact * cellData.probability; // Esempio di calcolo rischio
                    if (combinedRisk <= 6) { // Esempio di soglie
                        cell.classList.add('risk-low');
                    } else if (combinedRisk <= 15) {
                        cell.classList.add('risk-medium');
                    } else {
                        cell.classList.add('risk-high');
                    }
                    cell.textContent = `${cellData.impact}/${cellData.probability}`; // Mostra impatto/probabilità
                } else {
                    cell.textContent = '-'; // Nessun dato
                }

                cell.addEventListener('click', () => {
                    if (cellData) {
                        detailTitle.textContent = `${eventName} su ${assetName}`;
                        detailImpact.textContent = cellData.impact;
                        detailProbability.textContent = cellData.probability;
                        detailDescription.textContent = cellData.desc;
                        detailStrategies.textContent = cellData.strategies;
                        detailPanel.classList.remove('hidden');
                    } else {
                        detailPanel.classList.add('hidden');
                    }
                });
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        }
    }

    // Gestione dello slider per gli scenari futuri
    scenarioSlider.addEventListener('input', (event) => {
        const scenarioIndex = event.target.value;
        const scenarios = ["Oggi", "Scenario Medio (2050)", "Scenario Estremo (2100)"];
        currentScenarioSpan.textContent = scenarios[scenarioIndex];
        // QUI: Dovresti avere una logica più complessa per aggiornare riskData
        // in base allo scenario selezionato (es. dati diversi per ogni scenario)
        // Per semplicità, qui ripopoliamo solo la tabella con i dati correnti
        // ma in un progetto reale dovresti caricare dati specifici per scenario.
        populateTable(); // Chiamata per ricaricare la tabella (con logica aggiornata)
    });

    // Inizializzazione della pagina
    populateTable();

    // Inizializzazione Chart.js (se lo usi)
    // const ctx = document.getElementById('riskChart').getContext('2d');
    // const myChart = new Chart(ctx, { /* ... configurazione del grafico ... */ });
});
