/*
beastify():
* Remove cada nó no document.body,
* Então insere o monstro escolhido
* Em seguida, retira o _listener_
*/
function beastify(request, sender, sendResponse) {
  removeEverything();
  insertBeast(request.beastURL);
  browser.runtime.onMessage.removeListener(beastify);
}

/*
Remove cada nó no document.body
*/
function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

/*
Dado um URL para uma imagem de um monstro, crie e estilize um nó IMG apontando para
essa imagem e, em seguida, insira o nó no documento.
*/
function insertBeast(beastURL) {
  var beastImage = document.createElement("img");
  beastImage.setAttribute("src", beastURL);
  beastImage.setAttribute("style", "width: 100vw");
  beastImage.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImage);
}

/*
Atribua beastify() como _listener_ para mensagens da extensão.
*/
browser.runtime.onMessage.addListener(beastify);
