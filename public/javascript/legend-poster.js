function setupLegendPoster() {
  for (var badge of BADGES) {
    var badgeName = badge['name'];
    var legendItem = $("<li></li>");
    buildBadge(badgeName, legendItem);
    $("<span>"+badgeName+"</span>").appendTo(legendItem);
    legendItem.appendTo($(".legend"));
  }
}
