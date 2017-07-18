const BADGE_NAMES = [
  'balanced-team',
  'co-location',
  'emergent-velocity',
  'frequent-releases',
  'lean-experiments',
  'metric-driven',
  'pairing',
  'release-train',
  'tdd'
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
