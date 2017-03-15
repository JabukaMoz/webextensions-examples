# chill-out

## O que faz

Após N segundos de inatividade (que significa que o usuário não navegou ou trocou a guia ativa) exibe uma
[ação de página](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction) para essa guia.

Quando o usuário clica na ação de página,
Navegue para http://chilloutandwatchsomecatgifs.com/.

"N" é definido como 6 segundos neste exemplo. Um período tão curto foi escolhido para mostrar o comportamento da extenção mais facilmente, porém isso não é recomendado na vida real.

Note que no Chrome, os alarmes não podem ser definidos com intervalos menores que um minuto. No Chrome:

* Se instalar esta extensão "descompactada", verá um aviso
no console, mas o alarme continuará disparando após 6 segundos
* Se você compactar a extensão e instalá-la, então o alarme será disparado após
um minuto.

## O que ele mostra

* Como usar várias funções de `tabs`
* Como mostrar / ocultar uma ação de página
* Como definir alarmes e lidar com alarmes disparando
