function showCookiesForTab(tabs) {
  // obter o primeiro objeto de Aba/guia
  tab = tabs.pop();

  // pegar todos os cookies para o dominio
  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    // configurar o cabeçalho do painel
    var activeTabUrl = document.getElementById('header-title');
    var text = document.createTextNode("Cookies at: "+tab.title);
    var cookieList = document.getElementById('cookie-list');
    activeTabUrl.appendChild(text);

    if (cookies.length > 0) {
      //adicionar um <li> com o nome e o valor do cookie para a lista
      for (cookie of cookies) {
        var li = document.createElement("li");
        var content = document.createTextNode(cookie.name + ": "+ cookie.value);
        li.appendChild(content);
        cookieList.appendChild(li);
      }
    } else {
      var p = document.createElement("p");
      var content = document.createTextNode("No cookies in this tab.");
      var parent = cookieList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);
    }
  });
};

// obter guia ativa para executar uma função de retorno de chamada.
// envia para o nosso callback uma matriz de objetos de tabulação
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}
getActiveTab().then(showCookiesForTab);
