

class Template {

  constructor(params) {
    this.name = params['name'];
  }

  elementSelector() {
    return 'div.template-' + this.name;
  }

  buildSign(sign,container) {
    var signElement = $('<div class="sign '+ this.name + '"/>');

    // title and subtitle
    var titleContainer = $('<div class="title-container"/>');
    if (this.name.includes('title')) {
      var el = $('<div class="title editable adjust-font-size" contenteditable="true">Title</div>');
      el.appendTo(titleContainer);
    }
    if (this.name.includes('subtitle')) {
      var el = $('<div class="subtitle editable" contenteditable="true">Subtitle</div>');
      el.appendTo(titleContainer);
    }
    titleContainer.appendTo(signElement);

    // badges
    if (this.name.includes('badges')) {
      var el = $('<div class="badges-container">');
      el.appendTo(signElement);
    }

    signElement.appendTo(container);
    return signElement;
  }

  static pickTemplate(name) {
    var template = Template.findByName(name);
    if ( template == null ) {
      console.log("Template not found: " + name + ". Using " + TEMPLATES[0].name + ". All templates: " + Template.allNames().join(', '));
      template = TEMPLATES[0];
    }
    return template;
  }

  static findByName(name) {
    for (var template of TEMPLATES) {
      if (name === template.name) return template;
    }
    return null;
  }

  static allNames() {
    return TEMPLATES.map(a => a.name);
  }

}

// The first theme is the default if none is specified
const TEMPLATES = [
  new Template({'name': 'title-logo'}),
  new Template({'name': 'title-badges-with-labels'}),
  new Template({'name': 'title-subtitle-badges'})
];
