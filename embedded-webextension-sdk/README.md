Este é um exemplo de como usar [WebExtensions incorporadas] (https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Embedded_WebExtensions) para converter um Addons legado construído com [SDK add-on] (https: // Developer.mozilla.org/en-US/Add-ons/SDK) para uma [WebExtension] (https://developer.mozilla.org/en-US/Add-ons/WebExtensions) em etapas e migrar o legado para WebExtension.

O suplemento legado contém:

- Um script de conteúdo anexado a qualquer página sob "mozilla.org" ou qualquer um dos seus subdomínios. O script de conteúdo envia uma mensagem para o complemento principal, que exibe uma [notificação](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/notifications).
- Alguns dados de usuário armazenados usando a API do SDK [`simple-prefs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/simple-prefs).
- Alguns dados de usuário armazenados usando a API do SDK [`simple-storage`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/simple-storage).
- Um botão na barra de ferramentas: quando o botão é pressionado, o complemento mostra um painel contendo os dados armazenados.

Este diretório contém três versões do complemento.

- **step0-legacy-addon**: o add-on inicial, escrito inteiramente usando o Add-on SDK.
- **step1-hybrid-addon**: um híbrido que consiste em um Add-on SDK add-on contendo um WebExtension incorporado. A parte Add-on SDK envia os dados armazenados para o WebExtension incorporado. Ele também ouve as alterações nos dados [`simple-prefs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/simple-prefs) e atualiza o WebExtension Sempre que esses dados forem alterados (por exemplo, se o usuário alterar os dados na interface de usuário das preferências do add-on em about: addons). O WebExtension incorporado armazena os dados usando a API [`storage`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage) e implementa tudo o mais, incluindo o botão / painel e O script de conteúdo.
- **step2-pure-webextension**: a versão final, escrita inteiramente usando o método WebExtensions. Esta versão pode ser implementada após a versão híbrida ter migrado os dados armazenados para a API `storage`. Nesta versão, o complemento usa uma [página de opções](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Options_pages) para fornecer uma IU para os dados de preferências.