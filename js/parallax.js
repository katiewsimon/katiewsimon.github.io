/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
          // Save a reference to the element
          var $this = $(this);
 
          // define image redraw fn

          function img_redraw(){

            var scrollTop = $(window).scrollTop();
            var offset = $this.offset().top;
            var height = $this.outerHeight();
 
            // Check if above or below viewport
            if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
              return;
            }
 
            var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
            // Apply the Y Background Position to Set the Parallax Effect
            var bg = $this.css('background-position').split(' ');
            bg[1] = yBgPosition + 'px';
            $this.css('background-position', bg.join(' '));
                
            }

          // Set up Scroll Handler
          $(document).scroll(function(){
            img_redraw();
          });

          $(document).ready(function(){
            img_redraw();
          });
        });
    }
}(jQuery));

$('.bg-1').parallax({
  speed : 0.60
});

$('.bg-2').parallax({
  speed : 0.60
});

$('.bg-3').parallax({
  speed : 0.70