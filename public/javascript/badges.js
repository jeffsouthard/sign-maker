const BADGE_NAMES = [
  'pairing',
  'co-location',
  'tdd',
  'emergent-velocity',
  'release-train',
  'frequent-releases',
  'balanced-team',
  'metric-driven',
  'lean-experiments'
];
$( document ).ready(function() {
  for(var badgeName of BADGE_NAMES) {
    var checkbox = $('<input />', {
        id: badgeName + '-badge',
        type: 'checkbox',
        id: badgeName + '-checkbox',
        class: 'badge-checkbox',
        value: badgeName
      });
      checkbox.appendTo($('.badge-form form'));
      var label = $('<label for="'+badgeName+'-checkbox">'+badgeName+'</label>');
      label.appendTo($('.badge-form form'));
  }
});

function setBadges(badgesString) {
  var badgeNames = badgesString.split(",").map(str => str.trim());
  for(var badgeName of badgeNames) {
    buildBadge(badgeName);
  }
}

function buildBadge(badgeName) {
  var img = $('<img />', {
    id: badgeName + '-badge',
    class: 'badge',
    src: 'icons/' + badgeName + '.svg',
    alt: badgeName
  });
  img.appendTo($('.badges-container'));
  $('#' + badgeName + '-checkbox').prop('checked', true);
}

function destroyBadge(badgeName) {
  $('#' + badgeName + '-badge').remove();
}
