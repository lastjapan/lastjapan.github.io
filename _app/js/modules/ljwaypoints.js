module.exports = function() {

  $(document).ready(function($) {


    var obj = function(el) {
      return document.getElementById(el).getBoundingClientRect().top;
    }

    var locFashion = obj("fashion");
    var locProd = obj("production");
    var locProdBy = obj("prodBy");
    var locSoundtracks = obj("soundtracks");

    console.log(locProd);
    console.log(locProdBy);
    console.log(locSoundtracks);
    console.log(locFashion);

    $('.works__container').scroll(function(el){
      var scrollPos = $('.works__container').scrollTop();
      var el = $(this).attr("class");

      console.log(scrollPos);

      if (scrollPos < locProd + 300 && scrollPos < locProdBy) {
        $('#to-production').addClass('o-100').removeClass('o-30');
        $('#to-prodby').addClass('o-30').removeClass('o-100');
        $('#to-soundtracks').addClass('o-30').removeClass('o-100');
        $('#to-fashion').addClass('o-30').removeClass('o-100');
      }

      if (scrollPos > locProdBy - 300 && scrollPos < locSoundtracks + 400) {
        $('#to-prodby').addClass('o-100').removeClass('o-30');
        $('#to-production').addClass('o-30').removeClass('o-100');
        $('#to-soundtracks').addClass('o-30').removeClass('o-100');
      }

      if (scrollPos > locSoundtracks - 300 && scrollPos < locFashion) {
        $('#to-prodby').addClass('o-30').removeClass('o-100');
        $('#to-soundtracks').addClass('o-100').removeClass('o-30');
      }

      if (scrollPos > locFashion - 300) {
        $('#to-fashion').addClass('o-100').removeClass('o-30');
        $('#to-soundtracks').addClass('o-30').removeClass('o-100');
        $('#to-production').addClass('o-30').removeClass('o-100');
      }

      if (scrollPos < locFashion) {
        $('#to-fashion').addClass('o-30').removeClass('o-100');
      }

    });


    // $('#i-worksMenu a').on("click", function(e, location){
    //   $(this).addClass('o-100');
    //   $(this).siblings().removeClass('o-100').addClass('o-30');
    // });

  });

}
