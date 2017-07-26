const BADGE_NAMES = [
  'pairing',
  'co-location',
  'tdd',
  'emergent-velocity',
  'cloud-native',
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

      var label = $('<label />').text(badgeName);
      checkbox.prependTo(label);
      label.appendTo($('.badge-form'));

      buildBadge(badgeName).hide();
  }

  setBadgesFromQueryString();

  $( ".badge-checkbox" ).change(function() {
    if(this.checked) {
      showBadge(this.value);
    } else {
      hideBadge(this.value);
    }
    setUrlForBadges();
  });
});

function setBadgesFromQueryString() {
  var urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has('badges')) return;

  var badgesString = urlParams.get('badges');
  var badgeNames = badgesString.split(",").map(str => str.trim());
  for(var badgeName of badgeNames) {
    showBadge(badgeName);
    $('#' + badgeName + '-checkbox').prop('checked', true);
  }
}

function buildBadge(badgeName) {
  var badge = $('<img />', {
    id: badgeName + '-badge',
    class: 'badge',
    src: 'icons/' + badgeName + '.svg',
    alt: badgeName
  });
  badge.appendTo($('.badges-container'));
  return badge;
}

function setUrlForBadges() {
  var urlParams = new URLSearchParams(window.location.search);
  var checkedBadges = $.map($('.badge-checkbox'), function(badgeCheckbox) {
    if($(badgeCheckbox).prop('checked')) return badgeCheckbox.value;
  });
  urlParams.set("badges", checkedBadges.join());
  window.history.replaceState(null, null, "sign.html?"+urlParams.toString());
}

function hideBadge(badgeName) {
  return $('#' + badgeName + '-badge').hide();
}

function showBadge(badgeName) {
  return $('#' + badgeName + '-badge').show();
}