# Assistente Sindacale FIOM-CGIL

Starter di Progressive Web App (PWA) in italiano, mobile-first e installabile su browser compatibili. È un progetto iniziale: **non è un servizio ufficiale FIOM-CGIL e non è pronto per gestire documenti riservati o fornire consulenza legale**.

## Cosa contiene
- Interfaccia responsive con sezioni Assistente, Fonti, Scadenze e Documenti.
- Manifest PWA e service worker per uso offline di base.
- Elenco di fonti istituzionali e sindacali da verificare.
- Modalità demo: le risposte sono indicazioni generali e non vengono generate da un modello AI.

## Avvio locale
Serve un server HTTP locale. Dalla cartella del progetto, ad esempio:
```bash
npx serve .
```
Apri l'indirizzo locale indicato. Per installare la PWA è richiesto HTTPS, tranne su `localhost`. Il supporto all'installazione varia in base al browser.

## Pubblicazione
Puoi caricare i contenuti di questa cartella nel repository GitHub e attivare GitHub Pages dalle impostazioni del repository. GitHub Pages ospita il frontend statico, **non** esegue un backend AI.

## Sicurezza e accuratezza
- Non inserire dati personali, documenti aziendali, verbali riservati, credenziali o informazioni sensibili.
- Questa versione non implementa autenticazione, ruoli, archivio protetto, cifratura dei documenti o collegamento a un modello AI.
- Non inserire mai chiavi API nel codice frontend o in GitHub.
- Prima di gestire dati reali servono autenticazione robusta, autorizzazioni per ruolo, backend protetto, segreti lato server, valutazione privacy, retention definita e test di sicurezza.
- Per ogni risposta normativa destinata all'uso pratico occorre indicare fonte, versione e data di verifica. Non presumere quale CCNL sia applicato: va confermato sul contratto effettivo dell'azienda.
- Per scadenze, contestazioni o questioni controverse, verificare con FIOM-CGIL Perugia o un consulente qualificato.

## Fonti da verificare
- Normattiva: https://www.normattiva.it/
- Gazzetta Ufficiale: https://www.gazzettaufficiale.it/
- Archivio CCNL CNEL: https://www.cnel.it/archivio-contratti/
- Ministero del Lavoro: https://www.lavoro.gov.it/
- Ispettorato Nazionale del Lavoro: https://www.ispettorato.gov.it/
- FIOM-CGIL nazionale: https://www.fiom-cgil.it/
- FIOM-CGIL Umbria: https://www.cgilumbria.it/fiom/
- CSI: https://www.centrosiderurgico.com/azienda/
- Gruppo Arvedi: https://www.arvedi.it/mondo-arvedi/news-e-media/archivio-news/
- ASSISTAL: https://www.assistal.it/lavoro/

## Stato del progetto
La UI è funzionante come demo locale. Le funzionalità AI reali, la ricerca automatica di fonti aggiornate, gli account, l'archivio protetto e le notifiche push sono lavori successivi e non sono presenti in questa versione.
