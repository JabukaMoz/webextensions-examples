/*
Chamado quando o item foi criado ou quando a criação falhou devido a um erro.
Vamos apenas registrar sucesso / falha aqui.
*/
function onCreated(n) {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/*
Chamado quando o item foi removido.
Vamos registrar o sucesso aqui.
*/
function onRemoved() {
  console.log("Item removed successfully");
}

/*
Chamado quando houve um erro.
Vamos registrar o erro aqui.
*/
function onError(error) {
  console.log(`Error: ${error}`);
}

/*
Crie todos os itens do menu de contexto.
*/
browser.contextMenus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
  contexts: ["selection"]
}, onCreated);

browser.contextMenus.create({
  id: "remove-me",
  title: browser.i18n.getMessage("contextMenuItemRemoveMe"),
  contexts: ["all"]
}, onCreated);

browser.contextMenus.create({
  id: "separator-1",
  type: "separator",
  contexts: ["all"]
}, onCreated);

browser.contextMenus.create({
  id: "greenify",
  type: "radio",
  title: browser.i18n.getMessage("contextMenuItemGreenify"),
  contexts: ["all"],
  checked: true
}, onCreated);

browser.contextMenus.create({
  id: "bluify",
  type: "radio",
  title: browser.i18n.getMessage("contextMenuItemBluify"),
  contexts: ["all"],
  checked: false
}, onCreated);

browser.contextMenus.create({
  id: "separator-2",
  type: "separator",
  contexts: ["all"]
}, onCreated);

var checkedState = true;

browser.contextMenus.create({
  id: "check-uncheck",
  type: "checkbox",
  title: browser.i18n.getMessage("contextMenuItemUncheckMe"),
  contexts: ["all"],
  checked: checkedState
}, onCreated);

/*
Defina uma borda colorida no documento na guia fornecida.

Observe que isso só funciona em páginas da web normais, e não em páginas especiais
Como sobre: depuração.
*/
var blue = 'document.body.style.border = "5px solid blue"';
var green = 'document.body.style.border = "5px solid green"';

function borderify(tabId, color) {
  browser.tabs.executeScript(tabId, {
    code: color
  });
}

/*
Alternar checkedState e atualizar o título do item de menu
adequadamente.

Note que não devemos ter que manter checkedState independentemente como
Isso, mas tem que porque o Firefox não passa atualmente o "checked"
Propriedade para o _listener_ de eventos.
*/
function updateCheckUncheck() {
  checkedState = !checkedState;
  if (checkedState) {
    browser.contextMenus.update("check-uncheck", {
      title: browser.i18n.getMessage("contextMenuItemUncheckMe"),
    });
  } else {
    browser.contextMenus.update("check-uncheck", {
      title: browser.i18n.getMessage("contextMenuItemCheckMe"),
    });
  }
}

/*
O _listener_ de eventos de cliques, onde executamos a ação apropriada dada a
ID do item de menu que foi clicado.
*/
browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    case "remove-me":
      var removing = browser.contextMenus.remove(info.menuItemId);
      removing.then(onRemoved, onError);
      break;
    case "bluify":
      borderify(tab.id, blue);
      break;
    case "greenify":
      borderify(tab.id, green);
      break;
    case "check-uncheck":
      updateCheckUncheck();
      break;
  }
});
