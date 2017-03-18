function apertouBotao() {
  console.log("[background] Apertou o botão. Guarde a palavra!!!");

   var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {});
    });
}

function recebiMensagem(dados) {
  console.log("[background] recebi os dados: ", dados);
  var contemPalavras = JSON.parse(localStorage.getItem("palavras")) || [];
  contemPalavras.push(dados);
  localStorage.setItem("palavras", JSON.stringify(contemPalavras));
  console.log("Palavras: ", contemPalavras);

}

browser.browserAction.onClicked.addListener(apertouBotao);
browser.runtime.onMessage.addListener(recebiMensagem);
