// The first theme is the default if none is specified
const THEMES = [
  {'name': 'generic', 'badgeSetName': 'tech'},
  {'name': 'pivotal', 'badgeSetName': 'tech'},
  {'name': 'allstate', 'badgeSetName': 'agile-practices'}
];

function setupThemes() {
  setThemeFromQueryString();
}

function setThemeFromQueryString() {

  var themeName = THEMES[0]['name'];

  var urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('theme')) {
    themeName = urlParams.get('theme');
    matchingTheme = findThemeByName(themeName);
    if ( matchingTheme == null ) {
      console.log("Theme not found: " + themeName + ". Using " + THEMES[0]['name'] + ". All themes: " + allThemeNames().join(', '));
      themeName = THEMES[0]['name'];
    }
  }

  var url = ['themes', themeName, 'theme.css'].join('/');
  $('#theme-stylesheet').attr('href',url);
}

function findThemeByName(name) {
  for (var theme of THEMES) {
    if (name === theme['name']) return theme;
  }
  return null;
}

function allThemeNames() {
  var array = [];
  for (var theme of THEMES) array.push(theme['name']);
  return array;
}
