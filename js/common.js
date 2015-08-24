// JavaScript Document

if(jQuery)(function($){
   $.extend($.easing,{
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
    });

	$(document).ready(function(){
        $(".to-bottom").click(function(){
          var target = $(this).attr('href');
          $.scrollTo($(target), 1000, { axis: 'y', easing: 'easeOutCubic'});
          var _h = $(target).offset().top;
          //$("html,body").animate({scrollTop:_h},1000,"easeOutCubic");
          return false;
        });
        $("#submit-modal").click(function(){
          $("#success-modal").modal();
          return false;
        });
        $(".video-slider-list").bxSlider({
            slideWidth: 220,
            minSlides: 2,
            maxSlides: 3,
            slideMargin: 10
        });

        $(".partners-slider-list").bxSlider({
            slideWidth: 80,
            minSlides: 2,
            maxSlides: 7,
            slideMargin: 10
        });
  })
		
	
})(jQuery);


