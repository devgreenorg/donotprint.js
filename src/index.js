window.onload = function (evt) {
  var cssPrint = document.createElement('style');
  var cssView = document.createElement('style');
  var infoDiv = document.createElement('h1');
  infoDiv.innerHTML = "Please do not print this document";
  infoDiv.classList.add("donotprint");
  cssPrint.type = 'text/css';
  cssView.type = 'text/css';
  cssPrint.media = 'print';
  cssView.media = 'screen';
  var stylesPrint = 'body > * { display: none; } .donotprint { display: block; }';
  var stylesView = '.donotprint { display: none; }';
  if (cssPrint.styleSheet) {
        cssPrint.styleSheet.cssText = stylesPrint;
        cssView.styleSheet.cssText = stylesView;
  } else {
      cssPrint.appendChild(document.createTextNode(stylesPrint));
      cssView.appendChild(document.createTextNode(stylesView));
  }
  document.getElementsByTagName("head")[0].appendChild(cssView);
  document.getElementsByTagName("head")[0].appendChild(cssPrint);
  document.body.append(infoDiv);
};
