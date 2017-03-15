// Carregar estatísticas existentes com a API de armazenamento.
var gettingStoredStats = browser.storage.local.get("hostNavigationStats");
gettingStoredStats.then(results => {
  // Inicialize as estatísticas armazenadas se não tiver inicializado ainda.
  if (!results.hostNavigationStats) {
    results = {
      hostNavigationStats: {}
    };
  }

  const {hostNavigationStats} = results;

   // Monitorar os eventos de navegação concluídos e atualizar
   // as estatísticas se necessário.
  browser.webNavigation.onCompleted.addListener(evt => {
    // Descarte qualquer evento de navegação relacionado a uma sub-frame
    if (evt.frameId !== 0) {
      return;
    }

    const url = new URL(evt.url);

    hostNavigationStats[url.hostname] = hostNavigationStats[url.hostname] || 0;
    hostNavigationStats[url.hostname]++;

    // Persistir as novas estatísticas .
    browser.storage.local.set(results);
  }, {
    url: [{schemes: ["http", "https"]}]});
});
