/**
 * Script che legge le pagine e le riformatta
 */
 
var url = document.location.toString();
var pagina;

if(url.indexOf("menu")>0) {
  
  pagina = new Pagina( Pagina.getDocumento("html/home.html") );
  document.write(pagina.getPagina());

} else if(url.indexOf("voti")>0) {
  
  var paginaVoti = new PaginaVoti();
  paginaVoti.getVotiDaPagina(document);
  pagina = paginaVoti.getTabellaVotiHtml();
  var pag = new Pagina(pagina);

  document.write(pag.getPagina());
  
} else if((url.indexOf("login")>0)) {
  
  chrome.extension.sendRequest({method: "getLocalStorage", key: "login"}, function(response) {
    document.getElementsByClassName("input_account")[0].value = response.data;
  });
  chrome.extension.sendRequest({method: "getLocalStorage", key: "password"}, function(response) {
    document.getElementsByClassName("input_account")[1].value = response.data;
    document.getElementById('formlogin').submit();
  });
  
}
