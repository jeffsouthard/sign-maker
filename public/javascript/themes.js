function setThemeFromQueryString() {

  // The first theme is the default if none is specified
  const THEME_NAMES = [
    'generic',
    'pivotal',
    'allstate'
  ];

  var themeName = THEME_NAMES[0];

  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('theme')) {
    themeName = urlParams.get('theme');
    if ( THEME_NAMES.indexOf(themeName) == -1 ) {
      console.log("Theme not found: " + themeName + ". Using " + THEME_NAMES[0] + ". All themes: " + THEME_NAMES.join(', '));
      themeName = THEME_NAMES[0];
    }
  }

  var url = ['themes', themeName, 'theme.css'].join('/');
  $('#theme-stylesheet').attr('href',url);
}
