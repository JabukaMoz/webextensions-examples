var myWindowId;
const contentBox = document.querySelector("#content");

/*
Tornar a caixa de conteúdo editável assim que o usuário passar o mouse sobre a barra lateral.
*/
window.addEventListener("mouseover", (e) => {
  contentBox.setAttribute("contenteditable", true);
});

/*
Quando o usuário der mouseout, salve o conteúdo atual da caixa.
*/
window.addEventListener("mouseout", (e) => {
  contentBox.setAttribute("contenteditable", false);
  browser.tabs.query({windowId: myWindowId, active: true}).then((tabs) => {
    let contentToStore = {};
    contentToStore[tabs[0].url] = contentBox.textContent;
    browser.storage.local.set(contentToStore);
  });
});

/*
Atualize o conteúdo da barra lateral.

1) Obter a guia ativa na janela desta barra lateral.
2) Obtenha seu conteúdo armazenado.
3) Colocá-lo na caixa de conteúdo.
*/
function updateContent() {
  browser.tabs.query({windowId: myWindowId, active: true})
    .then((tabs) => {
      return browser.storage.local.get(tabs[0].url);
    })
    .then((storedInfo) => {
      contentBox.textContent = storedInfo[Object.keys(storedInfo)[0]];
    });
}

/*
Atualizar conteúdo quando uma nova guia se torna ativa.
*/
browser.tabs.onActivated.addListener(updateContent);

/*
Atualizar conteúdo quando uma nova página é carregada em uma guia.
*/
browser.tabs.onUpdated.addListener(updateContent);

/*
Quando a barra lateral carrega, obtenha o ID da janela,
E atualize seu conteúdo.
*/
browser.windows.getCurrent({populate: true}).then((windowInfo) => {
  myWindowId = windowInfo.id;
  updateContent();
});
