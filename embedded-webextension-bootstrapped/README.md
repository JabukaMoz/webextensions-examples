Este é um exemplo de como usar [WebExtensions incorporadas](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Embedded_WebExtensions) para converter uma [extensão Bootstrapped legada](https: // developer. Mozilla.org/en-US/Add-ons/Bootstrapped_extensions) para uma [WebExtension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) em etapas e migrar o add-on legado para WebExtension.

O Addon legado contém:

- alguns dados de usuário armazenados nas preferências do Firefox
- um botão na barra de ferramentas

Quando o botão é pressionado, o complemento exibe um painel contendo os dados armazenados.

Este diretório contém três versões do complemento.

- **step0-legacy-addon**: o add-on inicial, escrito inteiramente usando o método de extensão bootstrapped.
- **step1-hybrid-addon**: um híbrido que consiste em uma extensão bootstrap que contém uma WebExtension incorporada. O bootstrap extensão lê os dados armazenados e envia-lo para a WebExtension incorporada. A WebExtension incorporada armazena os dados usando a API [`storage`] (https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage) e também implementa a interface do usuário.
- **step2-pure-webextension**: a versão final, escrita inteiramente usando o método WebExtensions. Esta versão pode ser implementada após a versão híbrida ter migrado os dados armazenados para a API `storage`.