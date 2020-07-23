(function () {
  var $_window = $(window),
    scroll = $_window.scrollTop(),
    wH = $_window.height(),
    wW = $_window.width(),
    current;

  $_window.on("resize", function () {
    (scroll = $_window.scrollTop()),
      (wH = $_window.height()),
      (wW = $_window.width());
  });
  $_window.on("scroll", function () {
    scroll = $_window.scrollTop();
  });

  $(function () {
    $(".js-mv").css("height", wH + "px");
    $_window.on("resize", function () {
      $(".js-mv").css("height", wH + "px");
    });

  });
})();
