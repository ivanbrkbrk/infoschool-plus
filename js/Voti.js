/**
 * Classe per la gestione della pagina dei voti.
 */
function Voti() {}

/**
 * Metodo statico che restituisce la tabella dei voti in html.
 * @param voti Un array di oggetti Materia che contengono i voti.
 * @return La tabella dei voti in html.
 */
Voti.getTabellaVotiHtml = function(voti) {
  
  var tabellaVotiHtml = "", materia;
  
  tabellaVotiHtml += "<table>";
  
  for(var i=0; i<voti.length; i++) {
    
    materia = voti[i];
    
    tabellaVotiHtml += "<tr>";
    tabellaVotiHtml += "<th>"+materia.nome+"</th>";
    
    for(var j=0; j<materia.voti.length; j++)
      tabellaVotiHtml += "<td>"+materia.voti[j]+"</td>";
    
    tabellaVotiHtml += "</tr>";
    
  }
  
  tabellaVotiHtml += "</table>";
  
  return tabellaVotiHtml;

}

/**
 * Metodo statico per la lettura dei dati dalla pagina originaria e la creazione di una struttura di dati con materie e voti.
 * @return Un array di oggetti Materia che contengono i voti.
 */
Voti.getVotiDaPagina = function() {
  
  var j=0, y=0, classe, nome, materia, voto;
  var righeVoti = new Array();
  var materie = new Array();
  
  var tabellaVoti = document.getElementById("data_table_2");
  var righeTabella = tabellaVoti.getElementsByTagName("tr");
  
  for(var i = 0; i<righeTabella.length; i++) {
    classe = righeTabella[i].className;
    if(classe.indexOf("rigtab")>=0){
      righeVoti[j]=righeTabella[i];
      j++;
    }
  }
  
  for(var i=0; i<righeVoti.length; i++) {
    
    materia = materie[i] = new Materia();
    nome = righeVoti[i].getElementsByTagName("td")[1].innerHTML;
    nome = nome.replace("&nbsp","");
    nome = nome.replace(";","");
    materia.nome = nome;
    
    y=0;
    for(var j= 2; j <= 31; j++) {
      voto = righeVoti[i].getElementsByTagName("td")[j].getElementsByTagName("p")[0].innerHTML;
      if(parseInt(voto)){
        materia.voti[y] = parseInt(voto);
        y++;
      }
    
    }
  }

  return materie;
  
}
  
/**
 * Classe per la gestione dei dati di una materia.
 */
this.Materia = function() {
  
  this.nome;
  this.voti = new Array();
  
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
