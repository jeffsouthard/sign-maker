function setTemplateFromQueryString() {

  // The first theme is the default if none is specified
  const TEMPLATE_NAMES = [
    'title-logo',
    'title-subtitle-badges'
  ];

  var templateName = TEMPLATE_NAMES[0];

  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('template')) {
    templateName = urlParams.get('template');
    if ( TEMPLATE_NAMES.indexOf(templateName) == -1 ) {
      console.log("Template not found: " + templateName + ". Using " + TEMPLATE_NAMES[0] + ". All templates: " + TEMPLATE_NAMES.join(', '));
      template = TEMPLATE_NAMES[0];
    }
  }

  for(var t of TEMPLATE_NAMES) {
    var selector = 'div.template-' + t;
    if (t == templateName) {
      $(selector).show();
    } else {
      $(selector).hide();
    }
  }


}
