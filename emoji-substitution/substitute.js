/*
* Este arquivo é responsável por executar a lógica de substituição
* Todas as ocorrências de cada palavra mapeada com sua contrapartida emoji.
 */

// emojiMap.js define a variável 'sortedEmojiMap'.
// Referenciado aqui para reduzir a confusão.
const emojiMap = sortedEmojiMap;

/*
 * Para eficiência, crie uma Mapa com RegEx para palavra -> pesquisa também.
 */
let regexs = new Map();
for (let word of emojiMap.keys()) {
  // Queremos uma substituição global, sem distinção de maiúsculas e minúsculas.
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  regexs.set(word, new RegExp(word, 'gi'));
}

/**
  * Substitui emojis em nós de texto.
  * Se o nó contém mais do que apenas texto (ex: tem nós filhos),
  * Chame replaceText() em cada um dos seus filhos.
  *
  * Nó @param {nó} - O nó DOM de destino.
  * @return {void} - Nota: a substituição do emoji é feita inline.
 */
function replaceText (node) {
   // Setting textContent em um nó remove todos os seus filhos e substitui
   // eles com um único nó de texto. Uma vez que não queremos alterar o DOM de lado
   // de substituição de texto, só substituímos em nós de texto único.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
  if (node.nodeType === Node.TEXT_NODE) {
    //Esse nó contém apenas texto.
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType.

    // Pule textAreas para evitar o envio acidental de formulários com emoji
    if (node.parentNode &&
        node.parentNode.nodeName === 'TEXTAREA') {
      return;
    }

    // Como a manipulação de DOM é lenta, não queremos ficar trocando
     // textContent após cada substituição. Em vez disso, manipularemos uma
     // seqüência de caracteres (string) fora do DOM e, em seguida, executar a troca do
     // textContent apenas uma vez, no final.
    let content = node.textContent;

     // Substitua todas as ocorrências de 'palavra' em 'conteúdo' pelo seu emoji.
     // Use o emojiMap para substituições.
    for (let [word, emoji] of emojiMap) {
      // Grab the search regex for this word.
      const regex = regexs.get(word);

     // Na verdade, fazer a substituição / substituição.
     // Nota: se 'palavra' não aparecer em 'conteúdo', nada acontece.
      content = content.replace(regex, emoji);
    }

    //Agora que todas as substituições foram feitas, execute a manipulação DOM.
    node.textContent = content;
  }
  else {
    // Este nó contém mais do que apenas texto, chame replaceText() em cada
    // de seus filhos.
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceText(node.childNodes[i]);
    }    
  }
}

// Comece a recursão a partir do nó body.
replaceText(document.body);

// Agora monitorar o DOM para adições e substituir emoji em novos nós.
// @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver.
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      // Esta mudança de DOM foi a adição de novos nós. Execute nossa substituição
      // em cada nó recém adicionado.
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const newNode = mutation.addedNodes[i];
        replaceText(newNode);
      }
    }
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});
