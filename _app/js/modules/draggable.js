module.exports = function () {
  var $ = require('./../lib/jquery');
  require('./../lib/jquery-ui');

  jQuery(document).ready(function($) {
    jQuery('.i-draggable').draggable().css({
      "left": (Math.random() * 80 + "vw"),
      "top": (Math.random() * 20 + "vw"),
    })
  });
}
