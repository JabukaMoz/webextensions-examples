// Uma maneira útil de extrair o domínio de url.
function get_hostname(url) {
  var a = document.createElement('a');
  a.href = url;
  set_domain(a.hostname);
  return a.hostname;
}

function set_domain(domain) {
  spans = document.getElementsByClassName('domain');
  [].slice.call(spans).forEach((span) => {
    span.textContent = domain;
  });
}

function no_history(hostname) {
  var history_text = document.getElementById('history');
  while(history_text.firstChild)
    history_text.removeChild(history_text.firstChild);
  history_text.textContent = `No history for ${hostname}.`;
}

function getActiveTab() {
  return browser.tabs.query({active: true, currentWindow: true});
}

// Quando a página é carregada, localize a guia atual e use-a para consultar
// o histórico.
getActiveTab().then((tabs) => {
  var list = document.getElementById('history');
  var hostname = get_hostname(tabs[0].url);

   // Pesquisar todas as entradas no histórico para o domínio da janela atual.
   // Vamos limitar a 5 itens para não ficar demais...
  var searchingHistory = browser.history.search({text: hostname, maxResults: 5});
  searchingHistory.then((results) => {
    //O que mostrar se não tiver nenhum resultado.
    if (results.length < 1) {
      no_history(hostname);
    } else {
      for (var k in results) {
        var history = results[k];
        var li = document.createElement('p');
        var a = document.createElement('a');
        var url = document.createTextNode(history.url);
        a.href = history.url;
        a.target = '_blank';
        a.appendChild(url);
        li.appendChild(a);
        list.appendChild(li);
      }
    }
  });
});

function clearAll(e) {
  getActiveTab().then((tabs) => {
    var hostname = get_hostname(tabs[0].url);
    if (!hostname) {
      // Não tente excluir o histórico quando não houver nenhum hostname.
      return;
    }

     // A busca retornará uma lista de itens do histórico para este domínio.
     // Vamos excluir um por um usando um loop.
    var searchingHistory = browser.history.search({text: hostname})
    searchingHistory.then((results) => {
        for (k = 0; k < results.length; k++) {
          browser.history.deleteUrl({url: results[k].url});
        }
        // Limpa a UI.
        no_history(hostname);
      }
    );
  });
  e.preventDefault();
}

document.getElementById('clear').addEventListener('click', clearAll);
