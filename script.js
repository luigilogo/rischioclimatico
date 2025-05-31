// script.js

document.addEventListener('DOMContentLoaded', () => {
    const riskTableBody = document.querySelector('#risk-table tbody');
    const detailPanel = document.getElementById('detail-panel');
    const detailEventAsset = document.getElementById('detail-event-asset');
    const detailImpactValue = document.getElementById('detail-impact-value');
    const detailDescription = document.getElementById('detail-description');
    const detailStrategies = document.getElementById('detail-strategies');
    const closeDetailButton = document.getElementById('close-detail');

    const climateEvents = Object.keys(climateRiskData);
    const assets = ["Edifici", "Comunicazione", "Lavoratori", "Clienti", "Energia", "Vigneti"];

    // Funzione per popolare la tabella con i dati e applicare gli stili heatmap
    function populateTable() {
        riskTableBody.innerHTML = ''; // Pulisci il corpo della tabella

        climateEvents.forEach(event => {
            const row = document.createElement('tr');
            const eventCell = document.createElement('td');
            eventCell.textContent = event;
            row.appendChild(eventCell);

            assets.forEach(asset => {
                const cell = document.createElement('td');
                const data = climateRiskData[event][asset];

                if (data) {
                    const impact = data.impact;
                    cell.textContent = impact; // Mostra solo il livello di impatto
                    cell.classList.add('cell', `impact-${impact}`); // Applica la classe per il colore
                    cell.dataset.event = event;
                    cell.dataset.asset = asset;
                } else {
                    cell.textContent = '-'; // Se non ci sono dati specifici
                }
                row.appendChild(cell);
            });
            riskTableBody.appendChild(row);
        });

        // Aggiungi listener dopo che le celle sono state create
        addCellClickListeners();
    }

    // Funzione per aggiungere i listener di click alle celle
    function addCellClickListeners() {
        const cells = document.querySelectorAll('#risk-table .cell');
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                const eventName = cell.dataset.event;
                const assetName = cell.dataset.asset;
                const data = climateRiskData[eventName][assetName];

                if (data) {
                    detailEventAsset.textContent = `${eventName} su ${assetName}`;
                    detailImpactValue.textContent = data.impact;
                    detailDescription.textContent = data.desc;
                    detailStrategies.textContent = data.strategies;
                    detailPanel.classList.remove('hidden');
                }
            });
        });
    }

    // Listener per chiudere il pannello dei dettagli
    closeDetailButton.addEventListener('click', () => {
        detailPanel.classList.add('hidden');
    });

    // Inizializza la pagina
    populateTable();
});
