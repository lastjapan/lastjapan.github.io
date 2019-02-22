module.exports = function() {

  $(document).ready(function($) {

    var obj = function(el) {
      return document.getElementById(el).getBoundingClientRect().top;
    }

    var locFashion = obj("fashion");
    var locProd = obj("production");
    var locProdBy = obj("prodBy");
    var locSoundtracks = obj("soundtracks");

    console.log(locFashion);
    console.log(locProd);
    console.log(locProdBy);
    console.log(locSoundtracks);

  });

}
