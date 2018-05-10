
class Badge {

  constructor(params) {
    this.name = params['name'];
  }

  buildBadgeFormField() {
    var checkbox = $('<input />', {
      id: this.name + '-badge',
      type: 'checkbox',
      id: this.name + '-checkbox',
      class: 'badge-checkbox',
      value: this.name
    });

    var label = $('<label />').text(this.name);
    checkbox.prependTo(label);
    label.appendTo($('.badge-form'));
    return label;
  }

  buildBadge() {
    var el = $('<img />', {
      id: this.name + '-badge',
      class: 'badge',
      src: 'badges/agile-practices/' + this.name + '.svg',
      alt: this.name
    });
    return el;
  }

  static hideBadge(badgeName) {
    return $('#' + badgeName + '-badge').hide();
  }

  static showBadge(badgeName) {
    return $('#' + badgeName + '-badge').show();
  }

  static setBadgesFromQueryString() {
    var urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('badges')) return;

    var badgesString = urlParams.get('badges');
    var badgeNames = badgesString.split(",").map(str => str.trim());
    for(var badgeName of badgeNames) {
      Badge.showBadge(badgeName);
      $('#' + badgeName + '-checkbox').prop('checked', true);
    }
  }

  static setUrlForBadges() {
    var urlParams = new URLSearchParams(window.location.search);
    var checkedBadges = $.map($('.badge-checkbox'), function(badgeCheckbox) {
      if($(badgeCheckbox).prop('checked')) return badgeCheckbox.value;
    });
    urlParams.set("badges", checkedBadges.join());
    window.history.replaceState(null, null, "sign.html?"+urlParams.toString());
  }

}

const BADGES = [
  new Badge ({'name': 'pairing' }),
  new Badge ({'name': 'co-location' }),
  new Badge ({'name': 'tdd' }),
  new Badge ({'name': 'emergent-velocity' }),
  new Badge ({'name': 'cloud-native' }),
  new Badge ({'name': 'release-train' }),
  new Badge ({'name': 'frequent-releases' }),
  new Badge ({'name': 'balanced-team' }),
  new Badge ({'name': 'metric-driven' }),
  new Badge ({'name': 'lean-experiments' })
];
