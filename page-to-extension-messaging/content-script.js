/*
Ouça as mensagens da página.
Se a mensagem foi a partir do script de página, mostre um alerta.
*/
window.addEventListener("message", function(event) {
  if (event.source == window &&
      event.data.direction &&
      event.data.direction == "from-page-script") {
    alert("Mensagem recebida do script de conteúdo: \"" + event.data.message + "\"");
  }
});

/*
Enviar uma mensagem para o script da página.
*/
function messagePageScript() {
  window.postMessage({
    direction: "from-content-script",
    message: "Mensagem do script de conteúdo"
  }, "https://mdn.github.io");
}

/*
Adicione messagePageScript() como um _listener_ para clicar em eventos em
O elemento "from-content-script".
*/
var fromContentScript = document.getElementById("from-content-script");
fromContentScript.addEventListener("click", messagePageScript);
