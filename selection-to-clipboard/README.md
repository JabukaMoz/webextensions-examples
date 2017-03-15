# selection-to-clipboard

**Este complemento injeta JavaScript em páginas da web. O domínio `addons.mozilla.org` não permite esta operação, por isso este complemento não funciona correctamente quando é executado em páginas no domínio` addons.mozilla.org`.**

## O que faz

Esta extensão inclui:

* Um script de conteúdo, "content-script.js", que é injetado em todas as páginas

O script de conteúdo observa as seleções de texto na página em que está anexado e copia o texto para a área de transferência no ```mouseUp```.

## O que ele mostra

* Como injetar scripts de conteúdo declarativamente usando manifest.json
* Como escrever na [área de transferência](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard)

## Nota
* Se a função `copySelection` estiver em um evento do navegador, as permissões de ``clipboardWrite` são necessárias

```
"permissions": ["clipboardWrite"]
```

Veja [Interact with the clipboard](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard.)