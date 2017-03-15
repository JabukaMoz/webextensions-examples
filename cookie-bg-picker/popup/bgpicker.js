/* inicializa variáveis */

var bgBtns = document.querySelectorAll('.bg-container button');
var colorPick = document.querySelector('input');
var reset = document.querySelector('.color-reset button');
var cookieVal = { image : '',
                  color : '' };

function getActiveTab() {
  return browser.tabs.query({active: true, currentWindow: true});
}

/* aplica _background_ nos botões */
/* adiciona um _listener_ que quando clicado aplica o _background_ no HTML */

for(var i = 0; i < bgBtns.length; i++) {
  var imgName = bgBtns[i].getAttribute('class');
  var bgImg = 'url(\'images/' + imgName + '.png\')';
  bgBtns[i].style.backgroundImage = bgImg;

  bgBtns[i].onclick = function(e) {
    getActiveTab().then((tabs) => {
      var imgName = e.target.getAttribute('class');
      var fullURL = browser.extension.getURL('popup/images/'+ imgName + '.png');
      browser.tabs.sendMessage(tabs[0].id, {image: fullURL});

      cookieVal.image = fullURL;
      browser.cookies.set({
        url: tabs[0].url,
        name: "bgpicker", 
        value: JSON.stringify(cookieVal)
      })
    });
  }
}

/* Aplica a cor escolhida no background do HTML */

colorPick.onchange = function(e) {
  getActiveTab().then((tabs) => {
    var currColor = e.target.value;
    browser.tabs.sendMessage(tabs[0].id, {color: currColor});

    cookieVal.color = currColor;
    browser.cookies.set({
      url: tabs[0].url,
      name: "bgpicker", 
      value: JSON.stringify(cookieVal)
    })
  });
}

/* reseta o background */

reset.onclick = function() {
  getActiveTab().then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, {reset: true});

    cookieVal = { image : '',
                  color : '' };
    browser.cookies.remove({
      url: tabs[0].url,
      name: "bgpicker" 
    })
  });
}

/* Mostra mudanças de cookie no console */

browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(`Cookie changed:\n
              * Cookie: ${JSON.stringify(changeInfo.cookie)}\n
              * Cause: ${changeInfo.cause}\n
              * Removed: ${changeInfo.removed}`);
});
