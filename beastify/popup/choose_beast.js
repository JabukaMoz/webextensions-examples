/*
Dado o nome de um monstro, pegue o URL para a imagem correspondente.
*/
function beastNameToURL(beastName) {
  switch (beastName) {
    case "Frog":
      return browser.extension.getURL("beasts/frog.jpg");
    case "Snake":
      return browser.extension.getURL("beasts/snake.jpg");
    case "Turtle":
      return browser.extension.getURL("beasts/turtle.jpg");
  }
}

/*
Observe os cliques no pop-up.

Se o clique estiver em uma das bestas:
   Injete o script de conteúdo "beastify.js" na guia ativa.

   Em seguida, obtenha a guia ativa e envie uma mensagem para "beastify.js"
   contendo a URL para a imagem do monstro escolhido.

Se estiver em um botão que contenha classe "clear":
   Recarregue a página.
   Feche o popup. Isso é necessário, pois o script de conteúdo não funciona corretamente após recarregar a página.
*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("beast")) {
    var chosenBeast = e.target.textContent;
    var chosenBeastURL = beastNameToURL(chosenBeast);

    browser.tabs.executeScript(null, {
      file: "/content_scripts/beastify.js"
    });

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {beastURL: chosenBeastURL});
    });
  }
  else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();

    return;
  }
});
