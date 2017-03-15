/*
Se o clique estava em um link, envie uma mensagem para a página de plano de fundo.
A mensagem contém o URL do link.
*/
function notifyExtension(e) {
  var target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;

  console.log("Script de conteúdo enviando mensagem");
  browser.runtime.sendMessage({"url": target.href});
}

/*
Adicione notifyExtension () como ouvinte para clicar em eventos.
*/
window.addEventListener("click", notifyExtension);
