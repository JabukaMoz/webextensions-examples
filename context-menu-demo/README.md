# context-menu-demo

Um demo da API de [contextMenus](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenus/) (menus de contexto).

**Esse Addon injeta JS na página. O domínio `addons.mozilla.org` não permite este tipo de operação, então esse Addon não irá funcionar em `addons.mozilla.org` .**

## O que ele faz:

Este add-on adiciona vários itens ao menu de contexto do navegador:

* Um menu para quando há uma seleção na página, e envia o texto selecionado
para o console do navegador (```console.log()```) quando clicado.
* Um menu para todos os contextos, que é removido quando clicado.
* Dois itens do tipo "rádio" que são mostrados em todos os contextos.
esses itens são agrupados usando um item separador em cada lado.
Um item de rádio adiciona uma borda azul à página, o outro adiciona uma borda verde.
Observe que esses botões funcionam somente em páginas da web normais, e não em páginas especiais
Como ```about:debugging```.
* Um "checkbox", que aparece em todos os contextos, cujo título é atualizado quando o
item é clicado.

## O que ensina:

* Como criar vários tipos de item de menu de contexto:
   * normal
   * Rádio
   * Separador
   * Caixa de seleção
* Como usar contextos para controlar quando um item é exibido.
* Como atualizar as propriedades de um item.
* Como remover um item.
