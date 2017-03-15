/**
 * Retorna todos os comandos de extensão registrados para esta extensão
 * e seus atalhos (se estiver ativo).
 *
 * Uma vez que existe apenas um comando registrado nesta extensão de demonstração,
 * O `commandsArray` retornado será semelhante ao seguinte:
 *    [{
 *       name: "toggle-feature",
 *       description: "Send a 'toggle-feature' event to the extension"
 *       shortcut: "Ctrl+Shift+U"
 *    }]
*/
var gettingAllCommands = browser.commands.getAll();
gettingAllCommands.then((commands) => {
  for (command of commands) {
    console.log(command);
  }
});

/**
 * Dispara quando um comando registrado é ativado usando um atalho de teclado.
 *
 * Nesta extensão de exemplo, existe apenas um comando registrado: "Ctrl + Shift + U".
 * No Mac, este comando será automaticamente convertido para "Command + Shift + U".
 */
browser.commands.onCommand.addListener((command) => {
  console.log("onCommand event received for message: ", command);
});
