/*
copia o texto selecionado para a área de transferência
*/
function copySelection(e) {
    var selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        document.execCommand("Copy");
    }
}

/*
Adiciona copySelection() como _listener_ para eventos de mouseup.
*/
document.addEventListener("mouseup", copySelection);