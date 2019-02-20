module.exports = function () {
  require('./../lib/jquery-ui');

  $(document).ready(function($) {
    $('.i-draggable').draggable().css({
      "left": (Math.random() * 80 + "vw"),
      "top": (Math.random() * 20 + "vw"),
    })
  });
}
