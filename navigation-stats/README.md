# navigation-stats
## O que faz ##

A extensão inclui:

* Um fundo que coleta estatísticas de navegação usando a API webNavigation,
   E armazenar as estatísticas usando a API de armazenamento.
* Uma ação do navegador com um pop-up incluindo HTML, CSS e JS, que processa
   As estatísticas armazenadas pela página de plano de fundo


Quando o usuário navega em um site de qualquer uma das guias do navegador, o
Página coletada toda navegação concluída com os esquemas "http" ou "https"
(Usando um UrlFilter para o ouvinte dos eventos webNavigation)

Quando o usuário clica no botão de ação do navegador, o popup é
As estatísticas salvas usando a API de armazenamento são retrived e processadas no
janela de pop-up.

## O que mostra ##

* Use a API webNavigation para monitorar os eventos de navegação de navegação
* Use um UrlFilter para receber apenas o evento webNavigation usando
   Um dos critérios suportados.
* Usar a API de armazenamento para manter os dados sobre as reinicializações do navegador e compartilhá-los
   Entre páginas de extensão diferentes.