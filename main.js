<script>
	$(function () {
    var $page = $("#page"),
        options = {
            debug: true,
            cacheLength: 10,
        blacklist: '.no-smoothState',
        forms: 'form',
        allowFormCaching: false,
              onStart: {
                  duration: 700,
                  render: function( $container ) {
                      switch ( $container.find(".page-marker").data("page") ) {
                          case "index":
                              slider.stopTimer();
                          break;
                          default:
                          break;
                      }

                      TweenMax.to($(".transitioncover"), 0.7, { top: 0, ease: Power4.easeOut });
                  }
              },
              onReady: {
                  duration: 0,
                  render: function( $container, $newContent ) {
                      $container.html($newContent);

                      TweenMax.to($(".transitioncover"), 0.5, { top: "-100%", ease: Power3.easeIn, onComplete: function() {
                          $(".transitioncover").css({ "top": "100%" });
                      }});
                      ui.init();

                      $container.removeClass("c-fff");
                      $container.removeClass("c-000");
                      switch ( $container.find(".page-marker").data("page") ) {
                          case "index":
                              if( slider.o.slideTimerID ) {
                                  slider.stopTimer();
                              }
                              mainSet();
                              slider.init();
                          break;
                          case "view":
                              ui.checkTopColorAndVideoPlay();
                          break;
                          case "about":
                              if( $container.parent().hasClass("black") ) {
                                  ui.convertWhiteImage();
                              }
                          break;
                          case "project": break;
                          case "contact": break;
                          case "request": break;
                          default: break;
                      }
                      scrollbar.init();

                  }
              }
          },
          smoothState = $page.smoothState(options).data('smoothState');

        smoothState.clear(); 
        ui.init();
});

</script>
