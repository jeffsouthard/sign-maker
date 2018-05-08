const BADGES = [
  {'name': 'pairing' },
  {'name': 'co-location' },
  {'name': 'tdd' },
  {'name': 'emergent-velocity' },
  {'name': 'cloud-native' },
  {'name': 'release-train' },
  {'name': 'frequent-releases' },
  {'name': 'balanced-team' },
  {'name': 'metric-driven' },
  {'name': 'lean-experiments' }
];

function setupBadges() {

  for (var badge of BADGES) {
    var badgeName = badge['name'];
    buildBadgeFormField(badgeName);
    buildBadge(badgeName, $('.badges-container')).hide();
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

}
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

function buildBadgeFormField(badgeName) {
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
  return label;
}

function buildBadge(badgeName, container) {
  var badge = $('<img />', {
    id: badgeName + '-badge',
    class: 'badge',
    src: 'badges/agile-practices/' + badgeName + '.svg',
    alt: badgeName
  });
  badge.appendTo(container);
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
