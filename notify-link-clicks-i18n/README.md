# notify-link-clicks-i18n
**Este complemento injeta JavaScript em páginas da web. O domínio `addons.mozilla.org` não permite esta operação, por isso este complemento não funciona correctamente quando é executado em páginas no domínio` addons.mozilla.org`.**

## O que faz

Esta extensão inclui:

* Um script de conteúdo, "content-script.js", que é injetado em todas as páginas
* Um script de fundo, "background-script.js"

O script de conteúdo atende aos cliques na página em que está anexado.
Se um clique estiver em um link, o script de conteúdo enviará o link href
Para o script de plano de fundo.

O script de fundo escuta esta mensagem. Quando o script de fundo
Recebe a mensagem, ele exibe uma notificação contendo o href.

O conteúdo da notificação, bem como o nome ea descrição da extensão,
Localizada em alemão, holandês e japonês, bem como o padrão en-US.

# O que mostra

* Como injetar scripts de conteúdo declarativamente usando manifest.json
* Como enviar mensagens de um script de conteúdo para um script em segundo plano
* Como exibir notificações do sistema usando a API de notificações
* Como usar o sistema de internacionalização (i18n)