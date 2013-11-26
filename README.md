INFOSCHOOL+
===============

**Infoschool+** è un **progetto OpenSource** (GPLv3) sviluppato da un gruppo di amici e consiste un un **estensione per Chrome / Chromium** che migliora dal punto di vista grafico il **registro elettronico [Infoschool](https://web.spaggiari.eu)** di Spaggiari.

---

**Detentore del progetto:** Mattia Dalla Via  
**Proprietari:** Tutti coloro che parteciperanno in modo consistente allo sviluppo  
**Classe:** 4iB  
**Istituto:** F.Severi (Padova)  
**Anno scolasrico:** 2013-2014  

---

## Sviluppo

Questo progetto è sviluppato secondo alcuni principi fondamentali per garantire una certa consistenza:

* Il codice prodotto è interamete in Italiano;
* Il modello di programmazione è ad oggetti;
* La presentazione delle informazioni punta principalmente alla chiarezza e alla semplicità;
* Il flusso di gestione dei contenuti segue questo modello:
  1. Caricamento della pagina
  2. Allocazione oggetto atto a contenere le informazioni della pagina
  3. estrazione delle informazioni
  4. Sostituzione contenuti della pagina iniziale con i nuovi provenienti dalle informazioni raccolte
* I file sono disposti secondo il seguente modello:

  ```
  
  infoschool-plus/
    manifest.json
    html/
      home.html
      header.html
      opzioni.html
      ...
    css/
      reset.css
      style.css
      PaginaNOMEPAGINA.css
      ...
    js/
      main.js
      PaginaNOMEPAGINA.js
      
  ```

## Collaborazione

Per collaborare al progetto sono necessarie:
* La comuncazione con gli altri sviluppatori;
* Il rispetto dei principi di sviluppio sopra citati;
* L'iscrizione a [GitHub](http://github.com/);
* L'installazione del software [git](http://git-scm.com/);
* La comprensione del flusso di sviluppo e del modello di collaborazione.

La collaborazione sfrutta gli strumenti forniti dal portale [GitHub](http://github.com/) e viene gestita secondo il modello descritto dalla [documentazione ufficiale git](http://git-scm.com/book/en/Distributed-Git-Contributing-to-a-Project#Public-Small-Project) e da quella (piu specifica) [di GitHub](https://help.github.com/articles/using-pull-requests).

## Obbiettivi

* Lanciare il progetto in modo che prenda forma ed esca dalla fase alpha;
* Riuscire a collaborare;
* Realizzare sufficienti classi per la gestione di tutti i contenuti del registro.

---

Per qualsiasi domanda rivolgersi al [detentore del pregetto](mailto:me@mattiadv.it)
