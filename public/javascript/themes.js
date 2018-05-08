function setThemeFromQueryString() {

  // The first theme is the default if none is specified
  const THEMES = [
    'generic',
    'allstate'
  ];

  var theme = THEMES[0];

  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('theme')) {
    theme = urlParams.get('theme');
    if ( THEMES.indexOf(theme) == -1 ) {
      console.log("Theme not found: " + theme + ". Using " + THEMES[0] + ". All themes: " + THEMES.join(', '));
      theme = THEMES[0];
    }
  }

  var url = ['themes', theme, 'theme.css'].join('/');
  $('#theme-stylesheet').attr('href',url);
}
