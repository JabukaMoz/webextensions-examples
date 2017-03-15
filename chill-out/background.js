/*
DELAY é definido como 6 segundos neste exemplo. Um período tão curto foi escolhido para mostrar o comportamento da extenção mais facilmente, porém isso não é recomendado na vida real.

Note que no Chrome, os alarmes não podem ser definidos com intervalos menores que um minuto. No Chrome:

* Se instalar esta extensão "descompactada", verá um aviso
no console, mas o alarme continuará disparando após 6 segundos
* Se você compactar a extensão e instalá-la, então o alarme será disparado após
um minuto.
*/
var DELAY = 0.1;
var CATGIFS = "http://chilloutandwatchsomecatgifs.com/";

/*
Reinicie o alarme da guia ativa atualmente, sempre que background.js for executado.
*/
var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
gettingActiveTab.then((tabs) => {
  restartAlarm(tabs[0].id);
});

/*
Reinicie o alarme da guia atualmente ativa, sempre que o usuário navegar.
*/
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!changeInfo.url) {
    return;
  }
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then((tabs) => {
    if (tabId == tabs[0].id) {
      restartAlarm(tabId);
    }
  });
});

/*
Reinicie o alarme da guia ativa atualmente, sempre que uma nova guia se tornar ativa.
*/
browser.tabs.onActivated.addListener((activeInfo) => {
  restartAlarm(activeInfo.tabId);
});

/*
RestartAlarm: limpa todos os alarmes,
Em seguida, define um novo alarme para a guia fornecida.
*/
function restartAlarm(tabId) {
  browser.pageAction.hide(tabId);
  browser.alarms.clearAll();
  var gettingTab = browser.tabs.get(tabId);
  gettingTab.then((tab) => {
    if (tab.url != CATGIFS) {
      browser.alarms.create("", {delayInMinutes: DELAY});
    }
  });
}

/*
Quando o alarme disparar, mostra a ação da página
*/
browser.alarms.onAlarm.addListener((alarm) => {
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then((tabs) => {
    browser.pageAction.show(tabs[0].id);
  });
});

/*
Quando clicar na ação da página, navegue para a página com as gifs de gatinhos
*/
browser.pageAction.onClicked.addListener(function () {
  browser.tabs.update({url: CATGIFS});
});
