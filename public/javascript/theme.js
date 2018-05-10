// The first theme is the default if none is specified

class Theme {

  constructor(params) {
    this.name = params['name'];
  }

  stylesheetPath() {
    return ['themes', this.name, 'theme.css'].join('/');
  }

  static pickTheme(name) {
    var theme = Theme.findByName(name);
    if ( theme == null ) {
      console.log("Theme not found: " + name + ". Using " + THEMES[0].name + ". All themes: " + Theme.allNames().join(', '));
      theme = THEMES[0];
    }
    return theme;
  }

  static findByName(name) {
    for (var theme of THEMES) {
      if (name === theme.name) return theme;
    }
    return null;
  }

  static allNames() {
    return THEMES.map(a => a.name);
  }

}

const THEMES = [
  new Theme({'name': 'generic'}),
  new Theme({'name': 'pivotal'}),
  new Theme({'name': 'allstate'})
];
