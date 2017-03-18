function apertouBotao() {
  console.log("[background] Apertou o botão. Guarde a palavra!!!");

   var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {});
    });
}

browser.browserAction.onClicked.addListener(apertouBotao);
