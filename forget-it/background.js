/*
Configurações padrão. Se não houver nada no armazenamento, use esses valores.
*/
var defaultSettings = {
  since: "hour",
  dataTypes: ["history", "downloads"]
};

/*
Log de erro genérico.
*/
function onError(e) {
  console.error(e);
}

/*
Na inicialização, verifique se temos configurações armazenadas.
Se não possuirmos, armazene as configurações padrão.
*/
function checkStoredSettings(storedSettings) {
  if (!storedSettings.since || !storedSettings.dataTypes) {
    browser.storage.local.set(defaultSettings);
  }
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);

/*
Esqueça os dados de navegação, de acordo com as configurações passadas como storedSettings
Ou, se este estiver vazio, de acordo com as configurações padrão.
*/
function forget(storedSettings) {

  /*
  Converter de uma seqüência de caracteres para um tempo.
   A string é uma das seguintes: "hora", "dia", "semana", "para sempre".
   O tempo é dado em milissegundos desde a época.
  */
  function getSince(selectedSince) {
    if (selectedSince === "forever") {
      return 0;
    }

    const times = {
      hour: () => { return 1000 * 60 * 60 },
      day: () => { return 1000 * 60 * 60 * 24 },
      week: () => { return 1000 * 60 * 60 * 24 * 7}
    }

    const sinceMilliseconds = times[selectedSince].call();
    return Date.now() - sinceMilliseconds;
  }

  /*
  Converter de uma matriz de strings, representando tipos de dados,
   em um objeto adequado para passar para browsingData.remove().
  */
  function getTypes(selectedTypes) {
    let dataTypes = {};
    for (let item of selectedTypes) {
      dataTypes[item] = true;
    }
    return dataTypes;
  }

  const since = getSince(storedSettings.since);
  const dataTypes = getTypes(storedSettings.dataTypes);

  function notify() {
    let dataTypesString = Object.keys(dataTypes).join(", ");
    let sinceString = new Date(since).toLocaleString();
    browser.notifications.create({
      "type": "basic",
      "title": "Dados de navegação removidos",
      "message": `Removemos ${dataTypesString}\ndesde ${sinceString}`
    });
  }

  browser.browsingData.remove({since}, dataTypes).then(notify);
}

/*
Ao clicar, obtenha as configurações armazenadas e esqueça os dados de navegação.
*/
browser.browserAction.onClicked.addListener(() => {
  const gettingStoredSettings = browser.storage.local.get();
  gettingStoredSettings.then(forget, onError);
});
