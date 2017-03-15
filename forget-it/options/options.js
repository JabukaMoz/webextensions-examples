/*
Armazene as configurações atualmente selecionadas usando browser.storage.local.
*/
function storeSettings() {

  function getSince() {
    const since = document.querySelector("#since");
    return since.value;
  }

  function getTypes() {
    let dataTypes = [];
    const checkboxes = document.querySelectorAll(".data-types [type=checkbox]");
    for (let item of checkboxes) {
      if (item.checked) {
        dataTypes.push(item.getAttribute("data-type"));
      }
    }
    return dataTypes;
  }

  const since = getSince();
  const dataTypes = getTypes();
  browser.storage.local.set({
    since,
    dataTypes
  });
}

/*
Atualizar as opções UI com os valores de configurações recuperados do armazenamento,
ou as configurações padrão se as configurações armazenadas estiverem vazias.
*/
function updateUI(restoredSettings) {
  const selectList = document.querySelector("#since");
  selectList.value = restoredSettings.since;

  const checkboxes = document.querySelectorAll(".data-types [type=checkbox]");
  for (let item of checkboxes) {
    if (restoredSettings.dataTypes.indexOf(item.getAttribute("data-type")) != -1) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  }
}

function onError(e) {
  console.error(e);
}

/*
Ao abrir a página de opções, obtenha as configurações armazenadas e atualize a interface do usuário com elas.
*/
const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);

/*
Ao clicar no botão Salvar, salve as configurações selecionadas atuais.
*/
const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", storeSettings);
