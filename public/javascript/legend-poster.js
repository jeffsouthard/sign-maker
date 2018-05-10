class LegendPoster {

  constructor(params) {
    this.theme = Theme.pickTheme(params['theme']);
  }

  initializePage() {
    for (var badge of BADGES) {
      var badgeName = badge.name;
      var legendItem = $("<li></li>");
      var badgeEl = badge.buildBadge().appendTo(legendItem);
      $("<span>"+badgeName+"</span>").appendTo(legendItem);
      legendItem.appendTo($(".legend"));
    }
  }

}
