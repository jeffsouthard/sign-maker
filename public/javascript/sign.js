$( document ).ready(function() {
    
    // Use query params to set values, if present
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('title')) $('#title').text(urlParams.get('title'));
    if (urlParams.has('subtitle')) $('#subtitle').text(urlParams.get('subtitle'));

    $( ".adjust-font-size" ).each(function() {
        adjustFontSize(this);
    });
    
    $( ".adjust-font-size" ).change(function() {
        adjustFontSize(this);
    });
    
    // Trigger change event on contenteditable elements
    // From https://stackoverflow.com/questions/1391278/contenteditable-change-events
    $('body').on('focus', '[contenteditable]', function() {
        var $this = $(this);
        $this.data('before', $this.html());
        return $this;
    }).on('blur keyup paste input', '[contenteditable]', function() {
        var $this = $(this);
        if ($this.data('before') !== $this.html()) {
            $this.data('before', $this.html());
            setUrlForText();
            $this.trigger('change');
        }
        return $this;
    });
});

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
