"use strict";

/*
Esta é a página para a qual queremos reescrever o cabeçalho User-Agent.
*/
var targetPage = "https://httpbin.org/*";

/*
Map browser names to UA strings.
*/
var uaStrings = {
  "Firefox 41": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0",
  "Chrome 41": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
  "IE 11": "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0;  rv:11.0) like Gecko"
}

/*
Inicialize a UA para Firefox 41.
*/
var ua = uaStrings["Firefox 41"];

/*
Reescreva o cabeçalho User-Agent para "ua".
*/
function rewriteUserAgentHeader(e) {
  for (var header of e.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  }
  return {requestHeaders: e.requestHeaders};
}

/*
Adicionar rewriteUserAgentHeader como um _listener_ para onBeforeSendHeaders,
apenas para a página de destino.

Faça o _listener_ "blocking" para que possamos modificar os cabeçalhos.
*/
browser.webRequest.onBeforeSendHeaders.addListener(rewriteUserAgentHeader,
                                          {urls: [targetPage]},
                                          ["blocking", "requestHeaders"]);

/*
Atualize ua para um novo valor, mapeado a partir do parâmetro uaString.
*/
function setUaString(uaString) {
  ua = uaStrings[uaString];
}
