# user-agent-rewriter

## O que faz

Esta extensão usa a API webRequest para reescrever o cabeçalho do Agente do Usuário do navegador, mas somente quando visitar páginas em "https://httpbin.org", por exemplo: https://httpbin.org/user-agent

Adiciona uma ação do navegador. A ação do navegador tem um pop-up que permite ao usuário escolher um dos três navegadores: Firefox 41, Chrome 41 e IE 11. Quando o usuário escolhe um navegador, a extensão reescreve o cabeçalho do Agente de Usuário para que o navegador real se identifique como o escolhido no site https://httpbin.org/.

## O que ele mostra

* Como interceptar e modificar requisições HTTP
* Como escrever uma ação do navegador com um popup
* Como dar o estilo popup e comportamento usando CSS e JS
* Como enviar uma mensagem de um script pop-up para um script de fundo