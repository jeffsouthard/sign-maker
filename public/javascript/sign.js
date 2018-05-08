
const EDITABLE_ATTRIBUTE_NAMES = [
  'title',
  'subtitle'
];

function setupTextEditing() {

  setEditableAttributesFromQueryString();

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
          onEditTextElement($this);
          $this.trigger('change');
      }
      return $this;
  });
}

function onEditTextElement(element) {
  var urlParams = new URLSearchParams(window.location.search);
  for (var attributeName of EDITABLE_ATTRIBUTE_NAMES) {
      if (element.hasClass(attributeName)) {
        urlParams.set(attributeName, element.html());
      }
  }
  window.history.replaceState(null, null, "sign.html?"+urlParams.toString());
}

function setEditableAttributesFromQueryString() {
  var urlParams = new URLSearchParams(window.location.search);
  for (attributeName of EDITABLE_ATTRIBUTE_NAMES) {
    if (urlParams.has(attributeName)) $('.'+attributeName).text(urlParams.get(attributeName));
  }
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
