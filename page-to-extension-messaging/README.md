# page-to-extension-messaging

## O que faz

Esta extensão inclui um script de conteúdo, que é injetado apenas em: "https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html".

O script de conteúdo atende a cliques em um botão específico na página. Quando o botão é clicado, o script de conteúdo envia uma mensagem para todos os scripts executados na página.

Por outro lado, o script de conteúdo escuta as mensagens da mesma janela postada usando window.postMessage. Quando o script de conteúdo recebe essa mensagem, ele exibe um alerta.

Para testá-lo, acesse https://mdn.github.io/webextensions-examples/content-script-page-script-messaging.html e pressione os botões. Um botão envia uma mensagem do script de página para o script de conteúdo, o outro botão envia uma mensagem na outra direção.

## O que ele mostra

Como trocar mensagens entre scripts de conteúdo de uma extensão e scripts em uma página da Web.