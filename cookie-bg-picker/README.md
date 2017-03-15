# Cookie BG Picker
Um personalizador de papel de parede - clique em um botão na interface do usuário do navegador e selecione a partir de uma coleção de papeis de parede e cores para personalizar a aparência de qualquer página da web em que você se encontra.

A WebExtension também usa cookies para salvar preferências para cada site que você personalizar (desde que o cookie possa ser salvo). No seu retorno, suas personalizações serão lembradas.

Funciona no Firefox 47+, e também funciona como uma extensão do Chrome.

** Este complemento injeta JavaScript em páginas da web. O domínio `addons.mozilla.org` não permite esta operação, por isso este complemento não funciona correctamente quando é executado em páginas no domínio` addons.mozilla.org`. **

## O que faz

Esta extensão inclui:

* Uma ação do navegador que cria um popup - dentro do popup é:
* Vários botões para selecionar diferentes imagens de fundo.
* Um elemento de entrada de selecionador de cores para selecionar uma nova cor de plano de fundo.
* Um botão de reinicialização para remover quaisquer personalizações que foram definidas.
* Funções para guardar preferências de personalização em cookies para cada site visitado e personalizado.
* Funções para enviar mensagens para o script de conteúdo (veja abaixo) contendo informações de estilo para que as personalizações de estilo possam ser aplicadas às páginas.
* Um script de fundo para recuperar quaisquer cookies previamente definidos pelo WebExtension para cada página visitada e, se assim, enviar mensagens para o script de conteúdo (veja abaixo) contendo informações de estilo para que as personalizações de estilo salvas anteriormente possam ser aplicadas às páginas assim que elas forem Visitado no navegador. O script de plano de fundo também injeta o script de conteúdo em cada página visitada.
* Um script de conteúdo que é injetado em cada página visitada. Sua função é receber mensagens da ação do navegador e scripts de fundo e aplicar as informações de estilo contidas na página atual.


Cookie BG Picker usa as seguintes APIs de WebExtension:

* [Cookies API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies) para salvar / recuperar / remover os cookies.
* [Tabs API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs) para obter informações sobre a guia atual (sempre que uma nova URL é carregada e em cada ponto significativo depois disso ), Injetar o script de conteúdo nela e enviar mensagens entre o script de ação / fundo do navegador eo script de conteúdo.
* [API de tempo de execução](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime) para receber e manipular mensagens enviadas para o script de conteúdo.

## O que ele mostra

* Como persistir dados através de cookies usando um WebExtension.
* Como enviar mensagens entre as ações do navegador / scripts de fundo e scripts de conteúdo.

## Agradecimentos

* WebExtension ícone cortesia de [icons8.com] (http://icons8.com).
* Imagens transparentes de fundo tiradas de [Transparent Textures] (https://www.transparenttextures.com/).