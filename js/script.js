/**
 * Script che legge le pagine e le riformatta
 */
 
var url = document.location.toString();
var pagina;

if(url.indexOf("menu")>0) {
  
  pagina = getPagina("html/nuovaHome.html");
  document.write(pagina);

} else if(url.indexOf("voti")>0) {
  
  var paginaVoti = new PaginaVoti();
  paginaVoti.getVotiDaPagina(document);
  pagina = paginaVoti.getTabellaVotiHtml();
  document.write(pagina);
  
}







/**
 * Funzione che restituisce il documento nel percorso specificato come parametro.
 * @param path Il percorso del documento.
 * @return Una striga contenente la pagina.
 */
function getPagina(path){
  
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", chrome.extension.getURL("/")+path, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
  
}
