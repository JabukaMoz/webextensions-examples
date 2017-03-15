/*
Abra uma nova guia e carregue "my-page.html" nele.
*/
function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "/my-page.html"
   });
}


/*
Adicione openMyPage() como um _listener_ aos cliques na ação do navegador.
*/
browser.browserAction.onClicked.addListener(openMyPage);
 
