/**
 * Classe per la gestione della pagina dei voti.
 */
function PaginaVoti(pagina) {
  
  /**
   * Costruttore
   */
  this.materie = new Array();
  getVotiDaPagina(pagina);
  
  /**
   * Metodo che legge i dati dalla pagina originaria e crea una struttura di dati con materie e voti.
   * @return Un array di oggetti Materia che contengono i voti.
   */
  function getVotiDaPagina(pagina) {
    
    var j=0, y=0, classe, nome, materia, voto;
    var righeVoti = new Array();
    var materie = new Array();
    
    var tabellaVoti = pagina.getElementById("data_table_2");
    var righeTabella = tabellaVoti.getElementsByTagName("tr");
    
    for(var i = 0; i<righeTabella.length; i++) {
      classe = righeTabella[i].className;
      if(classe.indexOf("rigtab")>=0){
        righeVoti[j]=righeTabella[i];
        j++;
      }
    }
    
    for(var i=0; i<righeVoti.length; i++) {
      
      nome = righeVoti[i].getElementsByTagName("td")[1].innerHTML;
      nome = nome.replace("&nbsp","");
      nome = nome.replace(";","");
      materia = materie[i] = new Materia(nome);
      
      y=0;
      for(var j= 2; j <= 31; j++) {
        voto = righeVoti[i].getElementsByTagName("td")[j].getElementsByTagName("p")[0].innerHTML;
        if(parseInt(voto)){
          materia.aggiungiVoto(parseInt(voto),"",10,10,"bla");
          y++;
        }
      
      }
    }

    this.materie = materie;
    
  }

  /**
   * Metodo che restituisce la tabella dei voti in html.
   * @param voti Un array di oggetti Materia che contengono i voti.
   * @return La tabella dei voti in html.
   */
  this.getTabellaVotiHtml = function() {
    
    var tabellaVotiHtml = "", materia;
    
    tabellaVotiHtml += "<table>";
    
    for(var i=0; i<materie.length; i++) {
      
      materia = materie[i];
      
      tabellaVotiHtml += "<tr>";
      tabellaVotiHtml += "<th>"+materia.nome+"</th>";
      
      for(var j=0; j<materia.voti.length; j++)
        tabellaVotiHtml += "<td>"+materia.voti[j].valore+materia.voti[j].commento+"</td>";
      
      tabellaVotiHtml += "</tr>";
      
    }
    
    tabellaVotiHtml += "</table>";
    
    return tabellaVotiHtml;

  }



}

/**
 * Classe per la gestione dei dati di una materia.
 */
function Materia(nomeMateria) {
  
  /**
   * Costruttore
   */
  this.nome = nomeMateria;
  this.voti = new Array();
  
  /**
   * Metodo che aggiunge un voto.
   */
  this.aggiungiVoto = function(valoreVoto, tipoVoto, giornoDataVoto, meseDataVoto, commentoVoto) {
    
    this.voti[this.voti.length] = new Voto(valoreVoto, tipoVoto, giornoDataVoto, meseDataVoto, commentoVoto);
    
  }
      
  /**
   * Metodo che restituisce la media.
   */
  this.media = function() {
    
    var media=0;
    for(var i = 0; i<this.voti.length; i++)
      media+=this.voti[i];
    media = media/this.voti.length;
    media = math.round(media);
    
    return media;
    
  }

}

/**
 * Classe per la gestione di un voto.
 */
function Voto(valoreVoto, tipoVoto, giornoDataVoto, meseDataVoto, commentoVoto) {
  
  /**
   * Costruttore.
   */
  this.valore = valoreVoto;
  this.tipo = tipoVoto;
  this.giornoData = giornoDataVoto;
  this.meseData = meseDataVoto;
  this.commento = commentoVoto;
  
}
