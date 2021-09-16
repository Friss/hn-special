HNSpecial.settings.registerModule("hide_downvote", function hideDownvotes() {
  var arrows = _.toArray(document.getElementsByClassName("votearrow"));

  arrows.forEach(function (arrow) {
    if (arrow.classList.contains("rotate180")) {
      arrow.parentElement.remove();
    }
  });
});
