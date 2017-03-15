# React / ES6 Popup Exemple

## O que faz

Este é um exemplo de criação de uma ação do navegador
[Popup](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Add_a_button_to_the_toolbar#Adding_a_popup)
UI em [React][react] e [ES6](http://es6-features.org/) JavaScript.

## O que ele mostra

* Como usar [React][react] e qualquer outro módulo [NodeJS][nodejs] em uma
  extensão.
* Como transpilar o código que não é suportado nativamente em
  um navegador como sintaxe de 
  [Importação / exportação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
   e [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).
* Como construir código continuamente enquanto edita arquivos.
* Como personalizar [web-ext][web-ext] para as necessidades específicas da sua extensão.
* Como estruturar seu código em módulos ES6 reutilizáveis.

## Uso

Primeiro, você precisa mudar para o subdiretório de exemplo e instalar todos as dependencias de
[NodeJS][nodejs] com [npm](http://npmjs.com/) ou
[Yarn](https://yarnpkg.com/):

    npm install

Inicie o processo de compilação contínua para transpilar o código para algo que
Pode ser executado no Firefox ou Chrome:

    npm run build

Isso cria uma WebExtension no subdiretório `extension`.
Toda vez que você editar um arquivo, ela será reconstruído automaticamente.

Em outra janela de shell, execute a extensão no Firefox usando um wrapper
em torno de [web-ext] [web-ext]:

    npm start

Toda vez que você editar um arquivo, [web-ext][web-ext] irá recarregar a extensão
no Firefox. Para ver o pop-up, clique no ícone de melancia na barra do navegador.
Veja como se parece:

! [Screenshot popup](screenshots/popup.png "React screenshot popup")

[react]: https://facebook.github.io/react/
[Nodejs]: https://nodejs.org/en/
[Web-ext]: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext

## Icones

O ícone para esta extensão são fornecidos por [icons8] (https://icons8.com/).