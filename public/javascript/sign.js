

class Sign {

  constructor(params) {
    this.theme = Theme.pickTheme(params['theme']);
    this.template = Template.pickTemplate(params['template']);
  }

  initializePage() {
    // theme
    $('#theme-stylesheet').attr('href',this.theme.stylesheetPath());
    // template
    this.template.buildSign(this, $('#sign-container'));
    this.template.loadBadges();
    // rest
    TextBox.initializePage();
    GraphicBox.initializePage();
  }

}
