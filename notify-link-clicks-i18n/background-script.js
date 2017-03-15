/*
Log que recebemos a mensagem.
Em seguida, exiba uma notificação. A notificação contém o URL,
que lemos a partir da mensagem.
*/
function notify(message) {
  console.log("Mensagem recebida do script de background");
  var title = browser.i18n.getMessage("notificationTitle");
  var content = browser.i18n.getMessage("notificationContent", message.url);
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("icons/link-48.png"),
    "title": title,
    "message": content
  });
}

/*
Atribua `notify()` como _listener_ para as mensagens do script de conteúdo.
*/
browser.runtime.onMessage.addListener(notify);
