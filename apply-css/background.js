const CSS = "body { border: 20px solid red; }";
const TITLE_APPLY = "Apply CSS";
const TITLE_REMOVE = "Remove CSS";
const APPLICABLE_PROTOCOLS = ["http:", "https:"];

/*
Alternar CSS: dependendo do título atual, inserir ou remover o CSS.
Atualizar o título da ação da página e o ícone para refletir o estado atual.
*/
function toggleCSS(tab) {

  function gotTitle(title) {
    if (title === TITLE_APPLY) {
      browser.pageAction.setIcon({tabId: tab.id, path: "icons/on.svg"});
      browser.pageAction.setTitle({tabId: tab.id, title: TITLE_REMOVE});
      browser.tabs.insertCSS({code: CSS});
    } else {
      browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
      browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
      browser.tabs.removeCSS({code: CSS});
    }
  }

  var gettingTitle = browser.pageAction.getTitle({tabId: tab.id});
  gettingTitle.then(gotTitle);
}

/*
Retorna true somente se o protocolo da URL estiver em APPLICABLE_PROTOCOLS.
*/
function protocolIsApplicable(url) {
  var anchor =  document.createElement('a');
  anchor.href = url;
  return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
}

/*
Inicialize a ação da página: defina o ícone e o título, depois mostre.
Só funciona em guias cujo protocolo de URL é aplicável.
*/
function initializePageAction(tab) {
  if (protocolIsApplicable(tab.url)) {
    browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
    browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
    browser.pageAction.show(tab.id);
  }
}

/*
Quando carregado pela primeira vez, inicializa a ação da página para todas as guias.
*/
var gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
  for (tab of tabs) {
    initializePageAction(tab);
  }
});

/*
Cada vez que uma guia é atualizada, redefina a ação da página para essa guia.
*/
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

/*
Alternar CSS quando a ação da página é clicada.
*/
browser.pageAction.onClicked.addListener(toggleCSS);
