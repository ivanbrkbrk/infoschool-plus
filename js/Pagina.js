/**
 * Classe per la gestione di una nuova pagina.
 */
function Pagina(contenuto) {
  
  this.pag = new String;
  
  /**
   * Costruttore.
   */
  this.pag = '<!doctype><html>';
  this.pag += Pagina.getDocumento('html/head.html');
  this.pag += '<body>';
  this.pag += Pagina.getDocumento('html/header.html');
  this.pag += contenuto;
  this.pag += '</body></html>';
  
  /**
   * Metodo che restituisce la pagina.
   */
  this.getPagina = function() {
    return this.pag;
  }

}

/**
 * Metodo statico che restituisce il documento nel percorso specificato come parametro.
 * @param path Il percorso del documento.
 * @return Una striga contenente la pagina.
 */
Pagina.getDocumento = function(path){
  
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", chrome.extension.getURL("/")+path, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
  
}
