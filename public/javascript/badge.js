

class Badge {

  constructor(params) {
    this.name = params['name'];
    this.badgeSetName = params['badgeSetName'];
  }

  static loadBadgeSet(badgeSetName) {
    for (var badgeHash of BADGE_DATA[badgeSetName]) {
      BADGES.push(new Badge({ 'badgeSetName': badgeSetName, 'name': badgeHash['name']}));
    }
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
      src: 'badges/'+this.badgeSetName+'/' + this.name + '.svg',
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

var BADGES = [];

const BADGE_DATA = {
  'agile-practices': [
    {'name': 'pairing', 'label': 'Pairing' },
    {'name': 'co-location', 'label': 'Co-Location' },
    {'name': 'tdd', 'label': 'TDD' },
    {'name': 'emergent-velocity', 'label': 'Emergent Velocity' },
    {'name': 'cloud-native', 'label': 'Cloud Native' },
    {'name': 'release-train', 'label': 'Release Train' },
    {'name': 'frequent-releases', 'label': 'Frequent Releases' },
    {'name': 'balanced-team', 'label': 'Balanced Team' },
    {'name': 'metric-driven', 'label': 'Metric Driven' },
    {'name': 'lean-experiments', 'label': 'Lean Experiments' }
  ],
  'tech': [
    {'name': 'azure', 'label': 'Azure' },
    {'name': 'concourse', 'label': 'Concourse' },
    {'name': 'elastic-runtime', 'label': 'Elastic Runtime' },
    {'name': 'elixir', 'label': 'Elixir' },
    {'name': 'gemfire', 'label': 'GemFire' },
    {'name': 'google-cloud-platform', 'label': 'GCP' },
    {'name': 'greenplum', 'label': 'Greenplum' },
    {'name': 'hawq', 'label': 'HAWQ' },
    {'name': 'heroku', 'label': 'Heroku' },
    {'name': 'ios', 'label': 'iOS' },
    {'name': 'java', 'label': 'Java' },
    {'name': 'mariadb', 'label': 'MariaDB' },
    {'name': 'microsoft-dot-net', 'label': '.net' },
    {'name': 'mysql', 'label': 'MySQL' },
    {'name': 'node-js', 'label': 'Node' },
    {'name': 'oracle', 'label': 'Oracle' },
    {'name': 'phoenix', 'label': 'Phoenix' },
    {'name': 'pivotal-app-transformation', 'label': 'AppTx' },
    {'name': 'pivotal-cloud-foundry', 'label': 'PCF' },
    {'name': 'pivotal-data-suite', 'label': 'Data' },
    {'name': 'pivotal-web-services', 'label': 'PWS' },
    {'name': 'pivotal-tracker', 'label': 'Tracker' },
    {'name': 'placeholder', 'label': 'Placeholder' },
    {'name': 'postgres', 'label': 'Postgres' },
    {'name': 'python', 'label': 'Python' },
    {'name': 'rails', 'label': 'Rails' },
    {'name': 'react', 'label': 'React' },
    {'name': 'saffron', 'label': 'Saffron' },
    {'name': 'scala', 'label': 'Scala' },
    {'name': 'spring', 'label': 'Spring' },
    {'name': 'swift', 'label': 'Swift' }
  ]
}
