function setUrlForText() {
  var urlParams = new URLSearchParams(window.location.search);
  urlParams.set("title", $("#title").html());
  urlParams.set("subtitle", $("#subtitle").html());
  window.history.replaceState(null, null, "sign.html?"+urlParams.toString());
}

function adjustFontSize(element) {
    el = $(element);
    var length = el.text().length;
    var fontSize = getFontSize(el.text(),8,16, "vw");
    el.css("font-size", fontSize );
}

function getFontSize(text, minSize, maxSize, units) {
    var length = text.length;
    if (length < 10) {
        return "" + maxSize + units;
    } else if (length < 20) {
        return "" + ((maxSize+minSize)/2) + units;
    } else return "" + minSize + units;
}
