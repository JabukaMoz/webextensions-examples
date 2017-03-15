var currentTab;
var currentBookmark;

/*
 * Atualiza o icone da browserAction refletindo se a guia atual está ou não nos _bookmarks_.
 */
function updateIcon() {
  browser.browserAction.setIcon({
    path: currentBookmark ? {
      19: "icons/star-filled-19.png",
      38: "icons/star-filled-38.png"
    } : {
      19: "icons/star-empty-19.png",
      38: "icons/star-empty-38.png"
    },
    tabId: currentTab.id
  });
}

/*
 * Adiciona ou remove um marcador para a página atual.
 */
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
    currentBookmark = null;
    updateIcon();
  } else {
    var creating = browser.bookmarks.create({title: currentTab.title, url: currentTab.url});
    creating.then(function(bookmark) {
      currentBookmark = bookmark;
      updateIcon();
    });
  }
}

browser.browserAction.onClicked.addListener(toggleBookmark);

/*
 * Alterna currentTab e currentBookmark para refletir a guia ativa atual
 */
function updateActiveTab(tabs) {

  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      var searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
      });
    }
  }

  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);
}

// Observe mudanças na URL da guia
browser.tabs.onUpdated.addListener(updateActiveTab);

// Observe a mudança de guias
browser.tabs.onActivated.addListener(updateActiveTab);

// atualizar quando carregar o Addon.
updateActiveTab();
