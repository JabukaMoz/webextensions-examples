/* Recuperar qualquer cookie previamente configurado e envia para o script de conteúdo */

browser.tabs.onUpdated.addListener(cookieUpdate);

function getActiveTab() {
  return browser.tabs.query({active: true, currentWindow: true});
}

function cookieUpdate(tabId, changeInfo, tab) {
  getActiveTab().then((tabs) => {
    /* Injetar script de conteúdo na guia atual */

    browser.tabs.executeScript(null, {
      file: "/content_scripts/updatebg.js"
    });

    // Obter qualquer cookie previamente configurado para a guia atual 
    var gettingCookies = browser.cookies.get({
      url: tabs[0].url,
      name: "bgpicker"
    });
    gettingCookies.then((cookie) => {
      if(cookie) {
        var cookieVal = JSON.parse(cookie.value);
        browser.tabs.sendMessage(tabs[0].id, {image: cookieVal.image});
        browser.tabs.sendMessage(tabs[0].id, {color: cookieVal.color});
      }
    });
  }); 
}
