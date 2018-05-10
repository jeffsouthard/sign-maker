// The first theme is the default if none is specified

class Theme {

  constructor(params) {
    this.name = params['name'];
    this.badgeSetName = params['badgeSetName'];
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
  new Theme({'name': 'generic', 'badgeSetName': 'tech'}),
  new Theme({'name': 'pivotal', 'badgeSetName': 'tech'}),
  new Theme({'name': 'allstate', 'badgeSetName': 'agile-practices'})
];
