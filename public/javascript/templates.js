// The first theme is the default if none is specified
const TEMPLATES = [
  {'name': 'title-logo'},
  {'name': 'title-badges-with-labels'},
  {'name': 'title-subtitle-badges'}
];

function setupTemplates() {
  setTemplateFromQueryString();
}

function setTemplateFromQueryString() {

  var templateName = TEMPLATES[0]['name'];

  var urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('template')) {
    templateName = urlParams.get('template');
    matchingTemplate = findTemplateByName(templateName);
    if ( matchingTemplate == null ) {
      console.log("Template not found: " + templateName + ". Using " + TEMPLATES[0]['name'] + ". All themes: " + allTemplateNames().join(', '));
      templateName = TEMPLATES[0]['name'];
    }
  }

  for(var template of TEMPLATES) {
    var selector = 'div.template-' + template['name'];
    if (template['name'] == templateName) {
      $(selector).show();
    } else {
      $(selector).hide();
    }
  }
}

function findTemplateByName(name) {
  for (var template of TEMPLATES) {
    if (name === template['name']) return template;
  }
  return null;
}

function allTemplateNames() {
  var array = [];
  for (var template of TEMPLATES) array.push(template['name']);
  return array;
}
