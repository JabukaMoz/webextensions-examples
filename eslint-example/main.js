// Este comentário eslint especial declara que o código abaixo se baseia em
// uma função definida no escopo global.

/* global getUsefulContents */
function start() {
   getUsefulContents(data => {
       var display = document.getElementById('display');

       display.innerHTML = data;
   });
}

document.addEventListener('DOMContentLoaded', start);
