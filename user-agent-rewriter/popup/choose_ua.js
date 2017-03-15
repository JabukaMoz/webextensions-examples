
/*
Se o usuário clicar em um elemento que tenha a classe "ua-choice":
* Buscar textContent do elemento: por exemplo, "IE 11"
* Passe para a função setUaString() da página de background
*/
document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("ua-choice")) {
    return;
  }

  var chosenUa = e.target.textContent;
  var backgroundPage = browser.extension.getBackgroundPage();
  backgroundPage.setUaString(chosenUa);
});
