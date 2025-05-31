// data.js

const climateRiskData = {
    "Piogge intense/Alluvioni": {
        "Edifici": {
            scenarios: {
                "Oggi": { impact: 4, desc: "Potenziali danni strutturali, infiltrazioni, interruzione operatività.", strategies: "Verifica impermeabilizzazione, sistemi di drenaggio potenziati, piani di emergenza." },
                "2050 - Moderato": { impact: 4, desc: "Aumento della frequenza e intensità, maggiori rischi di danni strutturali e infiltrazioni.", strategies: "Rinforzo fondazioni, sistemi di drenaggio autonomi, materiali idrorepellenti." },
                "2050 - Severo": { impact: 5, desc: "Danni strutturali gravi e diffusi, inagibilità prolungata, rischio di collasso parziale.", strategies: "Riprogettazione con standard anti-alluvione, barriere fisiche, assicurazioni complete." }
            }
        },
        "Comunicazione": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Interruzione connettività, difficoltà nella gestione delle comunicazioni esterne.", strategies: "Piani di comunicazione di crisi, sistemi di backup per internet/telefonia." },
                "2050 - Moderato": { impact: 3, desc: "Maggiore frequenza di interruzioni, necessità di risposte rapide e multi-canale.", strategies: "Connettività satellitare di backup, protocolli di comunicazione decentralizzati." },
                "2050 - Severo": { impact: 4, desc: "Blackout prolungati dei sistemi di comunicazione, isolamento, danni alla reputazione irrecuperabili.", strategies: "Infrastrutture di comunicazione ridondanti e resilienti, sistemi di allerta precoce." }
            }
        },
        "Lavoratori": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Rischio di sicurezza per spostamenti, interruzione lavoro, necessità di soccorso.", strategies: "Protocolli di evacuazione, formazione sulla sicurezza, mezzi di trasporto alternativi." },
                "2050 - Moderato": { impact: 4, desc: "Aumento dei rischi per la sicurezza, difficoltà di accesso, stress psicologico.", strategies: "Formazione avanzata sulla sicurezza, equipaggiamento protettivo, supporto psicologico." },
                "2050 - Severo": { impact: 4, desc: "Pericolo costante per la sicurezza, inagibilità delle aree di lavoro, rischio di incidenti gravi.", strategies: "Riprogettazione degli spazi di lavoro, telelavoro ove possibile, programmi di resilienza del personale." }
            }
        },
        "Clienti": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Difficoltà di accesso alla cantina, disdette eventi, impatto sulla reputazione.", strategies: "Informazioni tempestive sui percorsi, riprogrammazione eventi, storytelling sulla resilienza." },
                "2050 - Moderato": { impact: 3, desc: "Maggiore frequenza di disdette, percezione negativa, calo delle visite.", strategies: "Piattaforme virtuali per visite/degustazioni, partnership con operatori turistici resilienti." },
                "2050 - Severo": { impact: 3, desc: "Impossibilità di accesso fisico, danno permanente alla reputazione, perdita di clientela.", strategies: "Riconversione dell'offerta, delocalizzazione parziale di attività connesse." }
            }
        },
        "Energia": {
            scenarios: {
                "Oggi": { impact: 4, desc: "Blackout elettrici, danni alle infrastrutture di distribuzione, interruzione catena del freddo.", strategies: "Generatore di emergenza, sistemi fotovoltaici con accumulo, monitoraggio rete." },
                "2050 - Moderato": { impact: 4, desc: "Più frequenti e prolungate interruzioni, danni agli impianti elettrici interni.", strategies: "Micro-grid energetiche, sistemi di accumulo avanzati, manutenzione predittiva." },
                "2050 - Severo": { impact: 5, desc: "Danni estesi e sistematici alle infrastrutture energetiche, dipendenza da fonti esterne precarie.", strategies: "Autosufficienza energetica totale, partnership strategiche con fornitori di energia rinnovabile." }
            }
        },
        "Vigneti": {
            scenarios: {
                "Oggi": { impact: 4, desc: "Erosione del suolo, asfissia radicale, diffusione malattie fungine, difficoltà di accesso.", strategies: "Miglioramento drenaggio, inerbimento, trattamenti preventivi, vitigni resistenti all'umidità." },
                "2050 - Moderato": { impact: 4, desc: "Aumento erosione, stress idrico per asfissia, endemicità delle malattie fungine.", strategies: "Terrazzamenti, gestione idrogeologica avanzata, selezione di vitigni e portainnesti specifici." },
                "2050 - Severo": { impact: 5, desc: "Compromissione strutturale dei terreni, mortalità diffusa delle viti, inquinamento del suolo.", strategies: "Riconversione del sistema viticolo, agricoltura di precisione adattata, bio-ingegneria." }
            }
        }
    },
    "Frane/Smottamenti": {
        "Edifici": {
            scenarios: {
                "Oggi": { impact: 4, desc: "Danni strutturali significativi, inagibilità, costi elevati di ripristino.", strategies: "Monitoraggio geologico, opere di contenimento, valutazione rischio sismico." },
                "2050 - Moderato": { impact: 4, desc: "Maggiore frequenza e intensità delle frane, rischi per la stabilità a lungo termine.", strategies: "Consolidamento preventivo del terreno, sistemi di allerta integrati." },
                "2050 - Severo": { impact: 5, desc: "Rischio costante di inagibilità, costi proibitivi di mantenimento o delocalizzazione.", strategies: "Piani di delocalizzazione strategica, opere di ingegneria geotecnica massiva." }
            }
        },
        "Comunicazione": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Interruzione accesso fisico, impatto sulla percezione di stabilità.", strategies: "Comunicazione proattiva sullo stato della sicurezza, percorsi alternativi." },
                "2050 - Moderato": { impact: 2, desc: "Necessità di comunicare tempestivamente rischi e percorsi alternativi.", strategies: "Piattaforme di comunicazione dedicate, aggiornamenti in tempo reale sulla viabilità." },
                "2050 - Severo": { impact: 3, desc: "Isolamento prolungato, difficoltà nel coordinamento delle operazioni di soccorso e ripristino.", strategies: "Sistemi di comunicazione d'emergenza robusti, piani di continuità comunicativa." }
            }
        },
        "Lavoratori": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Pericolo per la sicurezza sul lavoro, interruzione accesso al sito.", strategies: "Formazione sui rischi geologici, percorsi di emergenza, valutazione della stabilità dei terreni." },
                "2050 - Moderato": { impact: 3, desc: "Aumento dei rischi per la sicurezza sul lavoro, necessità di riorganizzazione costante.", strategies: "Addestramento per scenari di emergenza, miglioramento dei protocolli di sicurezza." },
                "2050 - Severo": { impact: 4, desc: "Pericolo imminente per la sicurezza, necessità di evacuazione permanente da aree a rischio.", strategies: "Rilocalizzazione di attività ad alto rischio, robotica per lavori pericolosi." }
            }
        },
        "Clienti": {
            scenarios: {
                "Oggi": { impact: 1, desc: "Limitazioni all'accesso alla cantina, percepito senso di insicurezza.", strategies: "Informazioni chiare sui percorsi sicuri, offerta di esperienze alternative." },
                "2050 - Moderato": { impact: 2, desc: "Percezione di instabilità che impatta le visite, necessità di rassicurazione costante.", strategies: "Certificazioni di sicurezza, comunicazione trasparente sulla mitigazione dei rischi." },
                "2050 - Severo": { impact: 2, desc: "Danno alla reputazione legato all'instabilità del territorio, calo delle visite.", strategies: "Riconversione verso un modello di business meno dipendente dall'accesso fisico." }
            }
        },
        "Energia": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Danni a linee elettriche o gas, interruzione forniture.", strategies: "Mappatura delle linee, sistemi di protezione per le infrastrutture critiche." },
                "2050 - Moderato": { impact: 3, desc: "Maggiore vulnerabilità delle reti energetiche, interruzioni più frequenti.", strategies: "Interramento linee strategiche, rafforzamento pali, generatori di backup." },
                "2050 - Severo": { impact: 4, desc: "Danni sistemici alle forniture energetiche, costi elevati di ripristino e manutenzione.", strategies: "Sistemi energetici distribuiti e autonomi, resilienza della rete aziendale." }
            }
        },
        "Vigneti": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Perdita di sezioni di vigneto, danni alle viti e al suolo, alterazione del microclima.", strategies: "Consolidamento dei versanti, tecniche di coltivazione conservative, ripristino suoli." },
                "2050 - Moderato": { impact: 4, desc: "Espansione delle aree a rischio frana, perdita di produttività e terreni agricoli.", strategies: "Modifica dei sistemi di allevamento, colture di copertura, interventi di bio-ingegneria." },
                "2050 - Severo": { impact: 4, desc: "Compromissione strutturale dei terreni agricoli, perdita di biodiversità e fertilità.", strategies: "Ricollocazione vigneti in aree più stabili, ricerca e sviluppo su terreni difficili." }
            }
        }
    },
    "Grandine": {
        "Edifici": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Danni a tetti, finestre, strutture leggere, pannelli solari.", strategies: "Materiali resistenti alla grandine, reti di protezione per strutture sensibili." },
                "2050 - Moderato": { impact: 3, desc: "Aumento della frequenza e intensità, maggiori danni a tetti e infrastrutture.", strategies: "Tecnologie costruttive resilienti, sistemi di protezione automatizzati." },
                "2050 - Severo": { impact: 4, desc: "Danni strutturali significativi e ripetuti, costi elevati di manutenzione e riparazione.", strategies: "Materiali innovativi ad alta resistenza, design anti-grandine per nuove costruzioni." }
            }
        },
        "Comunicazione": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Necessità di comunicare tempestivamente l'impatto sulla produzione e sugli eventi.", strategies: "Piani di comunicazione di crisi, aggiornamenti in tempo reale ai clienti." },
                "2050 - Moderato": { impact: 2, desc: "Maggiore necessità di informazione tempestiva sull'impatto della grandine.", strategies: "Sistemi di allerta rapida, canali di comunicazione diversificati." },
                "2050 - Severo": { impact: 3, desc: "Percezione di instabilità e rischio per la produzione, impatto negativo sulla reputazione.", strategies: "Strategie di comunicazione proattive sulla resilienza del prodotto e del territorio." }
            }
        },
        "Lavoratori": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Rischio di infortuni per chi è all'aperto, stress post-evento.", strategies: "Protocolli di sicurezza in caso di grandine, ripari d'emergenza." },
                "2050 - Moderato": { impact: 3, desc: "Aumento del rischio di infortuni, necessità di pause frequenti per la sicurezza.", strategies: "Equipaggiamento protettivo avanzato, formazione specifica per scenari di grandine." },
                "2050 - Severo": { impact: 3, desc: "Pericolo costante per i lavoratori all'aperto, limitazioni delle attività.", strategies: "Automazione di processi a rischio, telelavoro, riorganizzazione delle mansioni." }
            }
        },
        "Clienti": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Percezione di minore qualità o disponibilità del prodotto, impatto sugli eventi.", strategies: "Trasparenza sull'annata, eventi speciali per promuovere la resilienza." },
                "2050 - Moderato": { impact: 2, desc: "Maggiore percezione di rischio e variabilità del prodotto, necessità di rassicurazione.", strategies: "Marketing della resilienza, storytelling sulle pratiche di adattamento." },
                "2050 - Severo": { impact: 3, desc: "Danno alla reputazione del prodotto e del territorio, calo della fiducia del consumatore.", strategies: "Diversificazione dell'offerta, creazione di prodotti con etichettatura di resilienza." }
            }
        },
        "Energia": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Danni a pannelli solari o infrastrutture esterne.", strategies: "Protezione fisica degli impianti, ispezioni post-grandine." },
                "2050 - Moderato": { impact: 3, desc: "Aumento dei danni a impianti fotovoltaici e infrastrutture di rete esterne.", strategies: "Materiali fotovoltaici resilienti, sistemi di protezione attiva, micro-grid." },
                "2050 - Severo": { impact: 3, desc: "Danni significativi e frequenti alle infrastrutture energetiche rinnovabili.", strategies: "Interramento cavi, bunkerizzazione di impianti critici, ridondanza dei sistemi." }
            }
        },
        "Vigneti": {
            scenarios: {
                "Oggi": { impact: 5, desc: "Danni gravissimi a foglie, tralci e grappoli, riduzione drastica della resa, compromissione annata.", strategies: "Reti antigrandine, trattamenti post-grandine per prevenire malattie, assicurazioni." },
                "2050 - Moderato": { impact: 5, desc: "Aumento della frequenza e intensità della grandine, danni strutturali e produttivi maggiori.", strategies: "Reti antigrandine automatiche, sistemi di monitoraggio e allerta precoce, innovazione varietale." },
                "2050 - Severo": { impact: 5, desc: "Perdita quasi totale della produzione in annate critiche, danni permanenti alle piante.", strategies: "Ricollocazione vigneti in aree meno esposte, viticoltura in ambiente protetto (es. serre), assicurazioni integrate." }
            }
        }
    },
    "Siccità prolungata": {
        "Edifici": {
            scenarios: {
                "Oggi": { impact: 1, desc: "Nessun impatto diretto significativo sugli edifici.", strategies: "N/A" },
                "2050 - Moderato": { impact: 1, desc: "Lieve stress per le fondamenta dovuto alla contrazione del suolo.", strategies: "Monitoraggio delle strutture, sistemi di fondazione flessibili." },
                "2050 - Severo": { impact: 2, desc: "Rischio di crepe strutturali per essiccamento del terreno, necessità di rinforzi.", strategies: "Iniezioni di resine per stabilizzare il terreno, ispezioni periodiche." }
            }
        },
        "Comunicazione": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Necessità di comunicare la gestione della risorsa idrica e l'impatto sulla produzione.", strategies: "Trasparenza sulle pratiche sostenibili, aggiornamenti sull'andamento climatico." },
                "2050 - Moderato": { impact: 2, desc: "Maggiore necessità di informare i clienti sulle pratiche di sostenibilità idrica.", strategies: "Campagne di sensibilizzazione, marketing focalizzato sulla resilienza." },
                "2050 - Severo": { impact: 3, desc: "Percezione negativa sulla sostenibilità del prodotto in contesti aridi, critiche pubbliche.", strategies: "Comunicazione proattiva sulla gestione della risorsa idrica, certificazioni di sostenibilità." }
            }
        },
        "Lavoratori": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Aumento del disagio da calore, necessità di maggiori pause, possibile riduzione produttività.", strategies: "Idratazione costante, orari di lavoro flessibili, aree ombreggiate." },
                "2050 - Moderato": { impact: 4, desc: "Disagio termico severo, rischio di colpi di calore, calo significativo della produttività.", strategies: "Climatizzazione degli ambienti, abbigliamento tecnico, programmi di gestione del calore." },
                "2050 - Severo": { impact: 4, desc: "Inagibilità di alcune mansioni all'aperto, rischio per la salute dei lavoratori, necessità di automatizzazione.", strategies: "Tecnologie per il lavoro in ambienti estremi, formazione su emergenze sanitarie." }
            }
        },
        "Clienti": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Possibile variazione della qualità del vino, riduzione della disponibilità, preoccupazioni sulla sostenibilità.", strategies: "Educazione del consumatore sulla viticoltura sostenibile, valorizzazione dei prodotti resilienti." },
                "2050 - Moderato": { impact: 4, desc: "Cambiamenti marcati nella qualità del vino, percezione di instabilità e scarsità.", strategies: "Sviluppo di nuovi prodotti adattati, comunicazione sull'evoluzione sensoriale del vino." },
                "2050 - Severo": { impact: 4, desc: "Drastica riduzione della disponibilità, perdita di tipicità, impatto sulla reputazione del 'terroir'.", strategies: "Diversificazione dell'offerta vinicola, esplorazione di nuove aree viticole." }
            }
        },
        "Energia": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Aumento dei consumi per irrigazione e climatizzazione, potenziale stress sulla rete elettrica.", strategies: "Sistemi di irrigazione efficienti, ottimizzazione energetica, fonti rinnovabili." },
                "2050 - Moderato": { impact: 4, desc: "Consumo energetico elevato per irrigazione e raffreddamento, sovraccarico della rete.", strategies: "Sistemi di gestione intelligente dell'energia, uso massivo di energie rinnovabili con accumulo." },
                "2050 - Severo": { impact: 5, desc: "Fabbisogno energetico insostenibile per la gestione idrica e termica, rischio di blackout diffusi.", strategies: "Autosufficienza energetica completa, soluzioni innovative di raffreddamento passivo." }
            }
        },
        "Vigneti": {
            scenarios: {
                "Oggi": { impact: 5, desc: "Grave stress idrico delle viti, riduzione drastica della resa, alterazione profili aromatici, rischio mortalità piante.", strategies: "Vitigni autoctoni resistenti, portainnesti tolleranti, pratiche agronomiche per ritenzione idrica, irrigazione di precisione." },
                "2050 - Moderato": { impact: 5, desc: "Danni permanenti alle viti, perdita di produttività e qualità, necessità di rimpiazzi continui.", strategies: "Selezione genetica per la resistenza alla siccità, sistemi di irrigazione a goccia avanzati, teli riflettenti." },
                "2050 - Severo": { impact: 5, desc: "Mortalità diffusa del vigneto, impossibilità di coltivazione in alcune aree, perdita del 'terroir' storico.", strategies: "Delocalizzazione vigneti in aree più fresche/umide, viticoltura di precisione estrema, ricerca su piante deserto-resistenti." }
            }
        }
    },
    "Aumento temperature": {
        "Edifici": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Aumento fabbisogno raffreddamento, stress materiali da costruzione.", strategies: "Miglioramento isolamento termico, sistemi di raffreddamento efficienti." },
                "2050 - Moderato": { impact: 3, desc: "Surriscaldamento degli edifici, necessità di investimenti in sistemi di raffreddamento.", strategies: "Materiali a bassa emissività, ventilazione naturale potenziata, tetti verdi." },
                "2050 - Severo": { impact: 3, desc: "Inagibilità di alcune aree, costi energetici elevati per mantenere temperature vivibili.", strategies: "Riprogettazione degli edifici per il clima caldo, sistemi di raffreddamento geotermico." }
            }
        },
        "Comunicazione": {
            scenarios: {
                "Oggi": { impact: 2, desc: "Necessità di spiegare come il clima impatta il vino, focus sulla sostenibilità e adattamento.", strategies: "Marketing della resilienza, comunicazione scientifica sui metodi di adattamento." },
                "2050 - Moderato": { impact: 3, desc: "Maggiore pressione per comunicare strategie di adattamento e sostenibilità.", strategies: "Campagne informative sui processi di produzione in climi caldi, certificazioni climatiche." },
                "2050 - Severo": { impact: 3, desc: "Danno alla reputazione legato all'alterazione della tipicità del prodotto.", strategies: "Comunicazione sulla nuova identità del vino, storytelling sul cambiamento climatico." }
            }
        },
        "Lavoratori": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Disagio termico, colpi di calore, necessità di riorganizzazione orari lavorativi.", strategies: "Climatizzazione ambienti, orari flessibili (es. lavoro notturno), protocolli di sicurezza." },
                "2050 - Moderato": { impact: 4, desc: "Rischio elevato di colpi di calore, calo drastico della produttività, costi sanitari.", strategies: "Aree di riposo climatizzate, automazione dei lavori più pesanti, monitoraggio salute." },
                "2050 - Severo": { impact: 5, desc: "Inagibilità di molte attività all'aperto, rischio vita per i lavoratori, necessità di forte riorganizzazione.", strategies: "Robotica agricola, delocalizzazione di alcune fasi, sussidi per la salute dei lavoratori." }
            }
        },
        "Clienti": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Percezione del vino che cambia (es. più alcolico), esperienze in cantina meno confortevoli in estate.", strategies: "Offerta di vini con diversi profili, gestione della temperatura nelle sale di degustazione." },
                "2050 - Moderato": { impact: 4, desc: "Cambiamenti significativi nel profilo del vino, difficoltà a mantenere lo stile tradizionale.", strategies: "Comunicazione sull'evoluzione del vino, tour guidati con percorsi climatizzati." },
                "2050 - Severo": { impact: 4, desc: "Perdita dell'identità storica del vino, calo di interesse dei consumatori per il prodotto 'tradizionale'.", strategies: "Lancio di nuove etichette, esperienze enogastronomiche immersive in ambienti controllati." }
            }
        },
        "Energia": {
            scenarios: {
                "Oggi": { impact: 4, desc: "Aumento significativo dei consumi per climatizzazione cantina e uffici.", strategies: "Efficienza energetica, pompe di calore, produzione di energia rinnovabile in loco." },
                "2050 - Moderato": { impact: 5, desc: "Costi energetici insostenibili per il raffreddamento, stress sulla rete elettrica.", strategies: "Sistemi di raffreddamento geotermico/solare, smart grid, accumulo di energia." },
                "2050 - Severo": { impact: 5, desc: "Fabbisogno energetico superiore alle capacità di fornitura, rischio di interruzioni continue.", strategies: "Autosufficienza energetica completa con surplus per vendita, innovazione nel raffreddamento passivo." }
            }
        },
        "Vigneti": {
            scenarios: {
                "Oggi": { impact: 5, desc: "Maturazione anticipata, squilibri aromatici, alterazione acidità/pH, rischio stress da calore per le viti.", strategies: "Scelta di cloni/vitigni tardivi, pratiche di ombreggiatura, gestione canopy, vendemmia anticipata." },
                "2050 - Moderato": { impact: 5, desc: "Compromissione della qualità e tipicità, rischio di mortalità per stress da calore, necessità di irrigazione.", strategies: "Ricerca su nuove varietà resistenti al calore, ombreggiatura artificiale, vendemmia notturna." },
                "2050 - Severo": { impact: 5, desc: "Inagibilità di ampie aree viticole, perdita irreversibile del 'terroir', necessità di delocalizzazione.", strategies: "Cloni resistenti al calore estremo, viticoltura di montagna/altitudini, agricoltura idroponica." }
            }
        }
    },
    "Venti forti": {
        "Edifici": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Danni a tetti, infissi, strutture leggere, caduta alberi su edifici.", strategies: "Rinforzo strutturale, manutenzione tetti e grondaie, ancoraggio sicuro." },
                "2050 - Moderato": { impact: 3, desc: "Maggiore frequenza e intensità, danni ripetuti a strutture e infrastrutture.", strategies: "Materiali da costruzione ad alta resistenza, design aerodinamico, sistemi di ancoraggio avanzati." },
                "2050 - Severo": { impact: 4, desc: "Danni strutturali significativi e diffusi, necessità di ricostruzioni costose e frequenti.", strategies: "Riprogettazione degli edifici per resistere a venti estremi, assicurazioni specifiche." }
            }
        },
        "Comunicazione": {
            scenarios: {
                "Oggi": { impact: 4, desc: "Interruzione linee internet/telefoniche, blackout, difficoltà a raggiungere i clienti.", strategies: "Sistemi di comunicazione di backup (satellitare/radio), generatori di emergenza." },
                "2050 - Moderato": { impact: 4, desc: "Più frequenti e prolungate interruzioni delle comunicazioni, isolamento.", strategies: "Infrastrutture di comunicazione ridondanti, sistemi di energia autonoma per le reti." },
                "2050 - Severo": { impact: 5, desc: "Danni estesi alle infrastrutture di comunicazione, isolamento totale, impatto sulla sicurezza.", strategies: "Autosufficienza comunicativa, partnership con fornitori di servizi satellitari." }
            }
        },
        "Lavoratori": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Rischio di caduta oggetti, infortuni, difficoltà a lavorare all'aperto.", strategies: "Protocolli di sicurezza per venti forti, DPI specifici, sospensione attività pericolose." },
                "2050 - Moderato": { impact: 3, desc: "Aumento del rischio di infortuni, necessità di sospensione frequente delle attività all'aperto.", strategies: "Formazione avanzata sulla sicurezza, tecnologie per il lavoro in condizioni avverse." },
                "2050 - Severo": { impact: 4, desc: "Pericolo costante per i lavoratori, inagibilità prolungata di aree di lavoro esterne.", strategies: "Automazione completa di processi a rischio, telelavoro per mansioni interne." }
            }
        },
        "Clienti": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Difficoltà di accesso, danni alle auto, esperienze all'aperto compromesse.", strategies: "Avvisi preventivi, percorsi alternativi, aree di parcheggio sicure." },
                "2050 - Moderato": { impact: 3, desc: "Maggiore frequenza di interruzioni alle visite, necessità di percorsi sicuri e alternativi.", strategies: "Gestione delle prenotazioni basata su previsioni meteo, spazi interni accoglienti." },
                "2050 - Severo": { impact: 4, desc: "Danni alle proprietà dei clienti, percezione di insicurezza, calo significativo delle visite.", strategies: "Comunicazione proattiva sui rischi, pacchetti di esperienze esclusive per il post-evento." }
            }
        },
        "Energia": {
            scenarios: {
                "Oggi": { impact: 4, desc: "Caduta pali elettrici, danni a linee di trasmissione, blackout prolungati.", strategies: "Interramento linee, generatori di backup, partnership con fornitori per ripristini rapidi." },
                "2050 - Moderato": { impact: 4, desc: "Blackout più frequenti e prolungati, danni alle infrastrutture energetiche interne.", strategies: "Sistemi di energia eolica resilienti, micro-grid aziendale, accumulo avanzato." },
                "2050 - Severo": { impact: 5, desc: "Danni estesi e sistematici alla rete energetica, interruzioni prolungate, costi esorbitanti.", strategies: "Autosufficienza energetica, design strutturale anti-vento per tutti gli impianti." }
            }
        },
        "Vigneti": {
            scenarios: {
                "Oggi": { impact: 3, desc: "Danni meccanici a tralci e foglie, rottura pali, stress idrico acuto, ritardo allegagione.", strategies: "Sistemi di allevamento resilienti, tutori rinforzati, posizionamento barriere frangivento." },
                "2050 - Moderato": { impact: 4, desc: "Danni strutturali significativi alle viti e ai supporti, impatto sulla produttività.", strategies: "Rinforzo esteso delle infrastrutture, sviluppo di vitigni a basso vigore vegetativo, allevamento a spalliera." },
                "2050 - Severo": { impact: 4, desc: "Perdita diffusa di viti e infrastrutture, erosione del suolo, compromissione del ciclo produttivo.", strategies: "Ricollocazione vigneti in zone protette, viticoltura in ambiente controllato, clonazione di viti resilienti." }
            }
        }
    }
};

const scenarioOptions = ["Oggi", "2050 - Moderato", "2050 - Severo"];
