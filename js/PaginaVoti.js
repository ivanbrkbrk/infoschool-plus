/**
 * Classe per la gestione della pagina dei voti.
 */
function PaginaVoti() {
  
  /**
   * Costruttore
   */
  this.materie = new Array();
  
  /**
   * Metodo che legge i dati dalla pagina originaria e crea una struttura di dati con materie e voti.
   * @return Un array di oggetti Materia che contengono i voti.
   */
  this.getVotiDaPagina = function(pagina) {
    
    var j=0, y=0, classe, nome, materia, voto, nodoVoto, data, dataGiorno, dataMese, tipo, periodo;
    var righeVoti = new Array();
    
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
      materia = this.materie[i] = new Materia(nome);
      
      y=0;
      for(var j= 2; j <= 31; j++) {
        nodoVoto = righeVoti[i].getElementsByTagName("td")[j].getElementsByTagName("p")[0];
        voto = nodoVoto.innerHTML;
        if(parseInt(voto)){
          
          voto = parseInt(voto);
          data = nodoVoto.parentNode.parentNode.getElementsByClassName("voto_data")[0].innerHTML;
          dataGiorno = parseInt(data.charAt(0)+""+data.charAt(1));
          dataMese = parseInt(data.charAt(3)+""+data.charAt(4));
          if( (j>=2&&j<=6) || (j>=17&&j<=21) )
            tipo = "Scritto/Grafico";
          if( (j>=7&&j<=11) || (j>=22&&j<=26) )
            tipo = "Orale";
          if( (j>=12&&j<=16) || (j>=27&&j<=31) )
            tipo = "Orale";
          if( j>=2&&j<=16 )
            periodo = "primo";
          else
            periodo = "secondo";
            
          materia.aggiungiVoto(voto,tipo,dataGiorno,dataMese,periodo,"Lorem ipsum");

          y++;
        }
      
      }
    }
    
  }

  /**
   * Metodo che restituisce la tabella dei voti in html.
   * @param voti Un array di oggetti Materia che contengono i voti.
   * @return La tabella dei voti in html.
   */
  this.getTabellaVotiHtml = function() {
    
    var tabellaVotiHtml = "", materia;
    
    tabellaVotiHtml += '<div id="tabellaVoti">';
    
    for(var i=0; i<this.materie.length; i++) {
      
      materia = this.materie[i];
      
      tabellaVotiHtml += '<div class="rigaMateria" id="riga'+materia.nome.replace(" ","_")+'">';
      tabellaVotiHtml += '<div class="nomeMateria">'+materia.nome+'</div>';
      
      tabellaVotiHtml += '<div class="bloccoVoti">';
      for(var j=0; j<materia.voti.length; j++) {
        tabellaVotiHtml += '<div class="voto voto' + materia.voti[j].valore + '">';
        tabellaVotiHtml += materia.voti[j].valore;
        tabellaVotiHtml += '<div class="infoVoto">data:'+materia.voti[j].giornoData+' / '+materia.voti[j].meseData+'<br>'+materia.voti[j].tipo+'</div>';
        tabellaVotiHtml += '</div>';
      }
      
      tabellaVotiHtml += "</div></div>";
      
    }
    
    tabellaVotiHtml += "</div>";
    
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
  this.aggiungiVoto = function(valoreVoto, tipoVoto, giornoDataVoto, meseDataVoto, periodoVoto, commentoVoto) {
    
    this.voti[this.voti.length] = new Voto(valoreVoto, tipoVoto, giornoDataVoto, meseDataVoto, periodoVoto, commentoVoto);
    
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
function Voto(valoreVoto, tipoVoto, giornoDataVoto, meseDataVoto, periodoVoto, commentoVoto) {
  
  /**
   * Costruttore.
   */
  this.valore = valoreVoto;
  this.tipo = tipoVoto;
  this.giornoData = giornoDataVoto;
  this.meseData = meseDataVoto;
  this.periodo = periodoVoto;
  this.commento = commentoVoto;
  
}
