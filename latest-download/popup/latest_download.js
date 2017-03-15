
var latestDownloadId;

/*
Callback de getFileIcon.
Inicialize o ícone a ser exibido.
*/
function updateIconUrl(iconUrl) {
  var downloadIcon = document.querySelector("#icon");
  downloadIcon.setAttribute("src", iconUrl);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
Se houver um item de download,
- lembre-se de seu ID como latestDownloadId
- inicializar o ícone usando getFileIcon
- inicializara a URL
Se não houver um item de download, desative os botões "abrir" e "remover".
*/
function initializeLatestDownload(downloadItems) {
  var downloadUrl = document.querySelector("#url");
  if (downloadItems.length > 0) {
    latestDownloadId = downloadItems[0].id;
    var gettingIconUrl = browser.downloads.getFileIcon(latestDownloadId);
    gettingIconUrl.then(updateIconUrl, onError);
    downloadUrl.textContent = downloadItems[0].url;
    document.querySelector("#open").classList.remove("disabled");
    document.querySelector("#remove").classList.remove("disabled");
  } else {
    downloadUrl.textContent = "No downloaded items found."
    document.querySelector("#open").classList.add("disabled");
    document.querySelector("#remove").classList.add("disabled");
  }
}

/*
Procure o download mais recente e passe-o para initializeLatestDownload ()
*/
var searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"]
});
searching.then(initializeLatestDownload);

/*
Abra o item usando o aplicativo associado.
*/
function openItem() {
  if (!document.querySelector("#open").classList.contains("disabled")) {
    browser.downloads.open(latestDownloadId);
  }
}

/*
Remover item do disco (removeFile) e do histórico de download (erase)
*/
function removeItem() {
  if (!document.querySelector("#remove").classList.contains("disabled")) {
    browser.downloads.removeFile(latestDownloadId);
    browser.downloads.erase({id: latestDownloadId});
    window.close();
  }
}

document.querySelector("#open").addEventListener("click", openItem);
document.querySelector("#remove").addEventListener("click", removeItem);
