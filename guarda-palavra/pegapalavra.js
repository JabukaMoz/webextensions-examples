function pegaPalavra() {
    var linguaOriginal = document.querySelectorAll(".jfk-button-checked")[0].innerText;
    var linguaTraducao = document.querySelectorAll(".jfk-button-checked")[1].innerText;
    var palavraOriginal = document.getElementById("source").value;
    var palavraTraduzida = document.getElementById("result_box").innerText;

    var resultado = {
        lingua: {
            original: linguaOriginal,
            traducao: linguaTraducao
        },
        conteudo: {
            original: palavraOriginal,
            traducao: palavraTraduzida
        }
    }

    return resultado;
}

function recebiMensagem() {
    var dados = pegaPalavra()
    console.log("[content script] palavras: ", dados);
    browser.runtime.sendMessage(dados);
}

browser.runtime.onMessage.addListener(recebiMensagem);
