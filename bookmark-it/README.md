# bookmark-it

> Este exemplo usa APIs que estão disponíveis a partir do Firefox 47 em diante.

## O que faz

Exibe um botão simples na barra de menu que alterna se a guia ativa está ou não nos _bookmarks_.

Para exibir o botão, a extensão registra um [browserAction] (https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction) no manifesto.

Um script de _background_ irá observar os eventos de _tabs_ e atualizar o ícone da _browserAction_ correspondentemente. Ele também ouve os eventos `browserAction.onClicked` para criar ou remover um marcador quando o usuário clicou no ícone.

## O que ele mostra

* Como usar as várias funções `bookmarks`
   * Criar um marcador
   * Remover um marcador
   * Pesquisa de marcadores por url
* Como registrar uma browserAction
* Como ouvir as alterações de _tabs_
