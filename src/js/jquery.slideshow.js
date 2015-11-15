(function($){

    $.fn.slideshow = function(params){

        var defaults = {
            activeClass: 'active',
            duration: 7500
        };

        params = $.extend({}, defaults, params);

        return this.each(function(){

            var $slider = $(this);
            var $items = $('.item', $slider);
            var timer = null;
            var current = 0;

            /**
            * Activate a slide.
            *
            * @param i slide position.
            */
            var activateSlide = function(i){

                // Remove active class from all slides
                $items.removeClass(params.activeClass);

                // Set active class on slide i
                $($items.get(i)).addClass('active');

            };

            /**
            * Activate next slide.
            */
            var nextSlide = function(){
                current++;
                if (current >= $items.length) {
                    current = 0;
                }
                activateSlide(current);
            };

            /**
            * Activate previous slide.
            */
            var prevSlide = function(){
                current--;
                if (current < 0) {
                    current = $items.length - 1;
                }
                activateSlide(current);
            };

            // Activate first slide
            activateSlide(current);

            timer = setInterval(nextSlide, params.duration);

        });

    };

})(jQuery);
