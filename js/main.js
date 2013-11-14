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
  
}







