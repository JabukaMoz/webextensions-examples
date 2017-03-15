# WebExtension Webpack Example
Um exemplo mínimo de como usar o [webpack](https://webpack.github.io) para empacotar módulos do
[Npm](https://npmjs.com) para que eles possam ser usados ​​em uma WebExtension.
O pacote de exemplo usado por esta extensão é `left-pad`.

## O que faz
Este exemplo mostra como usar um módulo de nodejs em backgrond e um script de conteúdo.
Define dois destinos de compilação em [webpack.config.js](webpack.config.js), cada um deles
gera um arquivo que inclue todos os módulos usados ​​no ponto de entrada e guarda esse arquivo na pasta [addon](addon/). O primeiro começa com [background_scripts/background.js](background_scripts/background.js)
E guarda em `addon/background_scripts/index.js`. O outro faz o
Mesmo para [popup/left-pad.js](popup/left-pad.js) e armazena-o em `addon/popup/index.js`.

A extensão inclui uma ação do navegador com um pop-up que fornece uma interface
executando left-pad em uma string com um caractere escolhido. A operação pode ser
executada com o módulo incluído no popup ou no script de background.

## O que poderia fazer
Isso poderia ser infinitamente estendido - injetando jQuery global, adicionando babel,
react / jsx, módulos css, processamento de imagem, módulos locais e assim por diante.

## O que ele mostra

 Como usar npm ou módulos personalizados em uma WebExtension.

## Como compilar

 - `npm install`
 - `npm run build`

A WebExtension vai aparecer na pasta [addon](addon/).

## E quanto a Browserify?
[Browserify](http://browserify.org/) funciona tão bem quanto o webpack para extensões. No final, é uma
escolha pessoal sobre a sua ferramenta preferida.

## desenvolvimento em tempo real
Além de observar a pasta com o seu `manifest.json`, você também
tem que executar o webpack no modo de monitoramento.