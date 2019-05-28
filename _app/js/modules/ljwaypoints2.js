module.exports = function() {
  $(document).ready(function() {

    var waypoint = new Waypoint({
      element: document.getElementById('production'),
      handler: function(direction) {
        if(direction === 'down') {
          $('.cr001-ep').addClass('cr001-ep-active');
          $('#cr001-menu').addClass('cr001-menu-active');
          $('.cr001-logo').addClass('logo-active');
        }
      },
      offset: '70%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('production'),
      handler: function(direction) {
        if(direction === 'up') {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-a').removeClass('o-30').addClass('o-100');
          $('.cr001-ep').removeClass('cr001-ep-active');
          $('#cr001-menu').removeClass('cr001-menu-active');
          $('.cr001-logo').removeClass('logo-active');
        }
      },
      offset: '50%'
    });
    var waypoint = new Waypoint({
      element: document.getElementById('prodby'),
      handler: function(direction) {
        if(direction === 'down') {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-b').removeClass('o-30').addClass('o-100');
        } else {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-a').removeClass('o-30').addClass('o-100');
          $('.cr001-logo').removeClass('logo-active');
        }
      },
      offset: '50%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('soundtracks'),
      handler: function(direction) {
        if(direction === 'down') {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-c').removeClass('o-30').addClass('o-100');
        } else {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-b').removeClass('o-30').addClass('o-100');
        }
      },
      offset: '50%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('fashion'),
      handler: function(direction) {
        if(direction === 'down') {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-d').removeClass('o-30').addClass('o-100');
        } else {
          $('.menu-link').removeClass('o-100').addClass('o-30');
          $('#menu-link-cr001-c').removeClass('o-30').addClass('o-100');
        }
      },
      offset: '50%'
    });

    var scrollToContent = function(id) {
      $('html, body').animate({
          scrollTop: $(id).offset().top
      }, 2000);
    }

    $('body').on('click', '.menu-link', function(e) {
      e.preventDefault();
      var id = $(this).attr('id')
      if (id === 'to-production') {
        scrollToContent('#production');
      }
      if (id === 'to-prodby') {
        scrollToContent('#prodBy');
      }
      if (id === 'to-soundtracks') {
        scrollToContent('#soundtracks');
      }
      if (id === 'to-fashion') {
        scrollToContent('#fashion');
      }
    });

    $('body').on('scroll', function(){Waypoint.refreshAll();});

  });

}
