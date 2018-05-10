
class GraphicBox {

  constuctor() {
    // this.element = $(element);
    this.badgesString = ""; // like "badgename1,badgename3"
  }

  static initializePage() {

    // for all badges, build field and badge element
    for (var badge of BADGES) {
      badge.buildBadgeFormField();
      badge.buildBadge().hide().appendTo($('.badges-container'));
    }
    var urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('badges')) return;

    var badgesString = urlParams.get('badges');
    var badgeNames = badgesString.split(",").map(str => str.trim());
    for(var badgeName of badgeNames) {
      Badge.showBadge(badgeName);
      $('#' + badgeName + '-checkbox').prop('checked', true);
    }
    Badge.setBadgesFromQueryString();

    $( ".badge-checkbox" ).change(function() {
      if(this.checked) {
        Badge.showBadge(this.value);
      } else {
        Badge.hideBadge(this.value);
      }
      Badge.setUrlForBadges();
    });
  }


}
