# apply-css

**Esse Addon injeta CSS na p'agina. O domínio `addons.mozilla.org` não permite este tipo de operação, então esse Addon não irá funcionar em `addons.mozilla.org` .**

## O que ele faz

Essa WebExtension inclui:

* um script de background, "background.js"
* uma _page action_

Ele adiciona uma [page action](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction)
para cada guia que o usuário abre. Clicar na _page action_ faz com que um CSS seja inserido com [tabs.insertCSS](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS).

Clicar novamente remove o CSS usando [tabs.removeCSS](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS).

## O que ele ensina

* Umas _page actions_ básicas.
* Como aplicar e remover CSS.
