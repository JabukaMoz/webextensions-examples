# Quicknote
Um aplicativo de lista persistente de nota / lista de tarefas - clique em um botão no navegador e registre notas, que persistirão mesmo após o reinício do navegador.

Funciona no Firefox 47+, e também funciona como uma extensão do Chrome.

## O que faz

Esta extensão inclui:

* Uma ação do navegador que cria um popup - dentro do popup é:
* Dois elementos de formulário para inserir o texto do título e do corpo para uma nova nota, juntamente com um botão para adicionar uma nota e um botão para limpar todas as notas.
* Uma lista das notas que foram adicionadas à extensão - cada nota inclui um botão de exclusão para excluir apenas essa nota. Você também pode clicar no título da nota e no corpo para editá-los. No modo de edição, cada nota inclui:
* Um botão de atualização para enviar uma atualização.
* Um botão cancelar para cancelar a atualização.

O Quicknote usa o WebExtensions [API de armazenamento](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage) para manter as notas.

## O que ele mostra

Como persistir dados em um WebExtension usando a API de armazenamento.