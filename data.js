// data.js

const climateRiskData = {
    "Piogge intense/Alluvioni": {
        "Edifici": { impact: 4, desc: "Potenziali danni strutturali, infiltrazioni, interruzione operatività.", strategies: "Verifica impermeabilizzazione, sistemi di drenaggio potenziati, piani di emergenza." },
        "Comunicazione": { impact: 3, desc: "Interruzione connettività, difficoltà nella gestione delle comunicazioni esterne.", strategies: "Piani di comunicazione di crisi, sistemi di backup per internet/telefonia." },
        "Lavoratori": { impact: 3, desc: "Rischio di sicurezza per spostamenti, interruzione lavoro, necessità di soccorso.", strategies: "Protocolli di evacuazione, formazione sulla sicurezza, mezzi di trasporto alternativi." },
        "Clienti": { impact: 2, desc: "Difficoltà di accesso alla cantina, disdette eventi, impatto sulla reputazione.", strategies: "Informazioni tempestive sui percorsi, riprogrammazione eventi, storytelling sulla resilienza." },
        "Energia": { impact: 4, desc: "Blackout elettrici, danni alle infrastrutture di distribuzione, interruzione catena del freddo.", strategies: "Generatore di emergenza, sistemi fotovoltaici con accumulo, monitoraggio rete." },
        "Vigneti": { impact: 4, desc: "Erosione del suolo, asfissia radicale, diffusione malattie fungine, difficoltà di accesso.", strategies: "Miglioramento drenaggio, inerbimento, trattamenti preventivi, vitigni resistenti all'umidità." }
    },
    "Frane/Smottamenti": {
        "Edifici": { impact: 4, desc: "Danni strutturali significativi, inagibilità, costi elevati di ripristino.", strategies: "Monitoraggio geologico, opere di contenimento, valutazione rischio sismico." },
        "Comunicazione": { impact: 2, desc: "Interruzione accesso fisico, impatto sulla percezione di stabilità.", strategies: "Comunicazione proattiva sullo stato della sicurezza, percorsi alternativi." },
        "Lavoratori": { impact: 3, desc: "Pericolo per la sicurezza sul lavoro, interruzione accesso al sito.", strategies: "Formazione sui rischi geologici, percorsi di emergenza, valutazione della stabilità dei terreni." },
        "Clienti": { impact: 1, desc: "Limitazioni all'accesso alla cantina, percepito senso di insicurezza.", strategies: "Informazioni chiare sui percorsi sicuri, offerta di esperienze alternative." },
        "Energia": { impact: 3, desc: "Danni a linee elettriche o gas, interruzione forniture.", strategies: "Mappatura delle linee, sistemi di protezione per le infrastrutture critiche." },
        "Vigneti": { impact: 3, desc: "Perdita di sezioni di vigneto, danni alle viti e al suolo, alterazione del microclima.", strategies: "Consolidamento dei versanti, tecniche di coltivazione conservative, ripristino suoli." }
    },
    "Grandine": {
        "Edifici": { impact: 3, desc: "Danni a tetti, finestre, strutture leggere, pannelli solari.", strategies: "Materiali resistenti alla grandine, reti di protezione per strutture sensibili." },
        "Comunicazione": { impact: 2, desc: "Necessità di comunicare tempestivamente l'impatto sulla produzione e sugli eventi.", strategies: "Piani di comunicazione di crisi, aggiornamenti in tempo reale ai clienti." },
        "Lavoratori": { impact: 2, desc: "Rischio di infortuni per chi è all'aperto, stress post-evento.", strategies: "Protocolli di sicurezza in caso di grandine, ripari d'emergenza." },
        "Clienti": { impact: 2, desc: "Percezione di minore qualità o disponibilità del prodotto, impatto sugli eventi.", strategies: "Trasparenza sull'annata, eventi speciali per promuovere la resilienza." },
        "Energia": { impact: 2, desc: "Danni a pannelli solari o infrastrutture esterne.", strategies: "Protezione fisica degli impianti, ispezioni post-grandine." },
        "Vigneti": { impact: 5, desc: "Danni gravissimi a foglie, tralci e grappoli, riduzione drastica della resa, compromissione annata.", strategies: "Reti antigrandine, trattamenti post-grandine per prevenire malattie, assicurazioni." }
    },
    "Siccità prolungata": {
        "Edifici": { impact: 1, desc: "Nessun impatto diretto significativo sugli edifici.", strategies: "N/A" },
        "Comunicazione": { impact: 2, desc: "Necessità di comunicare la gestione della risorsa idrica e l'impatto sulla produzione.", strategies: "Trasparenza sulle pratiche sostenibili, aggiornamenti sull'andamento climatico." },
        "Lavoratori": { impact: 3, desc: "Aumento del disagio da calore, necessità di maggiori pause, possibile riduzione produttività.", strategies: "Idratazione costante, orari di lavoro flessibili, aree ombreggiate." },
        "Clienti": { impact: 3, desc: "Possibile variazione della qualità del vino, riduzione della disponibilità, preoccupazioni sulla sostenibilità.", strategies: "Educazione del consumatore sulla viticoltura sostenibile, valorizzazione dei prodotti resilienti." },
        "Energia": { impact: 3, desc: "Aumento dei consumi per irrigazione e climatizzazione, potenziale stress sulla rete elettrica.", strategies: "Sistemi di irrigazione efficienti, ottimizzazione energetica, fonti rinnovabili." },
        "Vigneti": { impact: 5, desc: "Grave stress idrico delle viti, riduzione drastica della resa, alterazione profili aromatici, rischio mortalità piante.", strategies: "Vitigni autoctoni resistenti, portainnesti tolleranti, pratiche agronomiche per ritenzione idrica, irrigazione di precisione." }
    },
    "Aumento temperature": {
        "Edifici": { impact: 2, desc: "Aumento fabbisogno raffreddamento, stress materiali da costruzione.", strategies: "Miglioramento isolamento termico, sistemi di raffreddamento efficienti." },
        "Comunicazione": { impact: 2, desc: "Necessità di spiegare come il clima impatta il vino, focus sulla sostenibilità e adattamento.", strategies: "Marketing della resilienza, comunicazione scientifica sui metodi di adattamento." },
        "Lavoratori": { impact: 3, desc: "Disagio termico, colpi di calore, necessità di riorganizzazione orari lavorativi.", strategies: "Climatizzazione ambienti, orari flessibili (es. lavoro notturno), protocolli di sicurezza." },
        "Clienti": { impact: 3, desc: "Percezione del vino che cambia (es. più alcolico), esperienze in cantina meno confortevoli in estate.", strategies: "Offerta di vini con diversi profili, gestione della temperatura nelle sale di degustazione." },
        "Energia": { impact: 4, desc: "Aumento significativo dei consumi per climatizzazione cantina e uffici.", strategies: "Efficienza energetica, pompe di calore, produzione di energia rinnovabile in loco." },
        "Vigneti": { impact: 5, desc: "Maturazione anticipata, squilibri aromatici, alterazione acidità/pH, rischio stress da calore per le viti.", strategies: "Scelta di cloni/vitigni tardivi, pratiche di ombreggiatura, gestione canopy, vendemmia anticipata." }
    },
    "Venti forti": {
        "Edifici": { impact: 3, desc: "Danni a tetti, infissi, strutture leggere, caduta alberi su edifici.", strategies: "Rinforzo strutturale, manutenzione tetti e grondaie, ancoraggio sicuro." },
        "Comunicazione": { impact: 4, desc: "Interruzione linee internet/telefoniche, blackout, difficoltà a raggiungere i clienti.", strategies: "Sistemi di comunicazione di backup (satellitare/radio), generatori di emergenza." },
        "Lavoratori": { impact: 3, desc: "Rischio di caduta oggetti, infortuni, difficoltà a lavorare all'aperto.", strategies: "Protocolli di sicurezza per venti forti, DPI specifici, sospensione attività pericolose." },
        "Clienti": { impact: 3, desc: "Difficoltà di accesso, danni alle auto, esperienze all'aperto compromesse.", strategies: "Avvisi preventivi, percorsi alternativi, aree di parcheggio sicure." },
        "Energia": { impact: 4, desc: "Caduta pali elettrici, danni a linee di trasmissione, blackout prolungati.", strategies: "Interramento linee, generatori di backup, partnership con fornitori per ripristini rapidi." },
        "Vigneti": { impact: 3, desc: "Danni meccanici a tralci e foglie, rottura pali, stress idrico acuto, ritardo allegagione.", strategies: "Sistemi di allevamento resilienti, tutori rinforzati, posizionamento barriere frangivento." }
    }
};
