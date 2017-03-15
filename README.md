# Webextensions-examples

[Https://github.com/mdn/webextensions-examples](https://github.com/mdn/webextensions-examples)

Mantido pela [equipe MDN da Mozilla](https://wiki.mozilla.org/MDN).

As WebExtensions são uma maneira de escrever extensões de navegador: isto é, programas
instalados dentro de um navegador da Web que modificam o comportamento do navegador ou
de páginas da Web carregadas pelo navegador. Elas são construídas com técnicas cross-browsers e em geral funcionam no Firefox, Chrome, Opera e as vezes no Edge.

O repositório "webextensions-examples" é uma coleção de
WebExtensions de demonstração. Você pode usar os exemplos para ver como usar as APIs de
WebExtensions, e como um ponto de partida para o sua própria WebExtension.

Os exemplos estão disponíveis com a licença
[Mozilla Public License 2.0] (https://www.mozilla.org/en-US/MPL/2.0/).

## Como usar "webextensions-examples"

Para usar o repositório, faça um clone ou baixe o zip.

Cada exemplo está em seu próprio diretório. Instale um exemplo no seu
Navegador favorito ([instruções de instalação](#installation-an-example) estão abaixo),
e veja como ela funciona. Cada exemplo tem seu próprio README curto explicando o que
ele faz.

Para saber mais sobre a estrutura interna das WebExtensions, dê uma olhada em
[Anatomia de uma WebExtension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
na MDN.

Para usar esses exemplos no Firefox, você precisa pelo menos do Firefox 45. Alguns exemplos
Dependem de APIs que foram adicionadas em versões mais recentes do Firefox.
Para verificar a versão mínima do Firefox necessária para um determinado exemplo,
Consulte a parte `strict_min_version` da [chave de aplicativos] (https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/applications)
no arquivo manifest.json do exemplo.

## Instalando um exemplo

Existem algumas maneiras de testar as extensões de exemplo.

1. Abra o Firefox e carregue `about: debugging` na barra de URLs. Clique no
   [Carregar Add-on Temporário](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
   e selecione o arquivo `manifest.json` no
   diretório de uma extensão de exemplo que você deseja instalar.
   aqui está um [vídeo] (https://www.youtube.com/watch?v=cer9EUKegG4)
   que demonstra como fazer isso.
2. Instale o
   [Web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)
   , mude para o diretório da extensão de exemplo
   que você deseja instalar e digite `web-ext run`. Isto irá lançar o Firefox e
   instalar a extensão automaticamente. Esta ferramenta oferece alguns
   recursos de desenvolvimento adicionais, como por exemplo: 
   [Recarregamento automático] (https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext#Automatic_extension_reloading).

## Saber mais

Para saber mais sobre o desenvolvimento de WebExtensions, vá para
[Documentação do WebExtensions no MDN] (https://developer.mozilla.org/en-US/Add-ons/WebExtensions).

## Problemas?

Se você encontrar um problema, [envie um bug](https://github.com/mdn/webextensions-examples/issues/new).

Se precisar de ajuda, envie um e-mail para a lista de discussão [dev-addons](https://mail.mozilla.org/listinfo/dev-addons) ou entre em contato com a equipe do WebExtensions no canal IRC #webextensions no irc.mozilla.org.

## Contribuindo

Adoramos contribuições, sejam elas são novos exemplos completos, novos recursos,
correções de bugs, ou traduções de strings localizáveis ​​em novos idiomas. Por favor
consulte o arquivo [CONTRIBUTING.md] (https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md) para obter mais detalhes.