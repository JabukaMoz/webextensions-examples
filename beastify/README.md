# beastify

**Esse Addon injeta JS na página. O domínio `addons.mozilla.org` não permite este tipo de operação, então esse Addon não irá funcionar em `addons.mozilla.org` .**

## O que faz ##

A extensão inclui:

* Uma ação do navegador com um pop-up incluindo HTML, CSS e JS
* Um script de conteúdo
* Três imagens, cada uma de uma monstro diferente, empacotados como recursos acessíveis da web

Quando o usuário clica no botão de ação do navegador, o popup aparece e permite ao usuário a escolher um dos três monstros.

Quando escolhem um monstro, a extensão injeta o script de conteúdo
na página atual e envia ao script de conteúdo uma mensagem contendo
O nome do monstro escolhido.

Quando o script de conteúdo recebe esta mensagem, ele substitui a página atual com
o conteúdo de uma imagem do monstro escolhido.

Quando o usuário clica no botão Redefinir, a página é recarregada e volta para seu formato original.

## O que mostra ##

* Escrever uma ação do navegador com um popup
* Dar o estilo e comportamento ao popup usando CSS e JS
* Injetar um script de conteúdo usando programaticamente `tabs.executeScript ()`
* Enviar uma mensagem do Addon principal para um script de conteúdo
* Usar recursos acessíveis na web para permitir que páginas da Web carregem conteúdo empacotado
* Recarregar páginas da web
