$( document ).ready(function() {
    
    // Use query params to set values, if present
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('title')) $('#title').text(urlParams.get('title'));
    if (urlParams.has('subtitle')) $('#subtitle').text(urlParams.get('subtitle'));
    if (urlParams.has('badges')) setBadges(urlParams.get('badges'));

    $( ".adjust-font-size" ).each(function() {
        adjustFontSize(this);
    });
    
    $( ".adjust-font-size" ).change(function() {
        adjustFontSize(this);
    });

    $( ".badge-checkbox" ).change(function() {
      if(this.checked) {
        buildBadge(this.value);
      } else {
        destroyBadge(this.value);
      }
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
            $this.trigger('change');
        }
        return $this;
    });
    
    
});

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

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};