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

        if($(".partners-slider-list").find("li").length > 6){
            $(".partners-wraper").removeClass("partners-wraper-normal");
            var index_partner_list = $(".partners-slider-list").bxSlider({
                slideWidth: 110,
                minSlides: 5,
                maxSlides: 6,
                slideMargin: 10,
                nextText: ">",
                prevText: "<",
                nextSelector: $(".partners-wraper .control-right-btn"),
                prevSelector: $(".partners-wraper .control-left-btn")
            });
        }

        var index_news_slider = $('.news-slider-list-index').bxSlider({
            mode: 'fade',
            captions: true,
            auto: true,
            controls:false,
            autoHover: true,
            onSlideAfter: function(e, x){
                // do mind-blowing JS stuff here
                if(x === 5){
                    x = -1;
                }
                $(".news-img-link-index").find("li.active").removeClass("active");
                $(".news-img-link-index").find("li:eq("+(x+1)+")").addClass("active");
            }
        });

        $(".news-img-link-index").find("li").mouseover(function(e){
            e.preventDefault();
            $(".news-img-link-index").find("li.active").removeClass("active");
            $(this).addClass("active");
            var idx = $(".news-img-link-index").find("li").index($(this));
            index_news_slider.goToSlide(idx);
        })

        $(window).scroll(function(){
            var sh = $(window).scrollTop();

            console.log($(window).scrollTop())
            //console.log($(window).height())
            //console.log($(document).height())

            if(sh > 30){
                $(".banner").css("background-size", "contain");
            }else{
                $(".banner").css("background-size", "cover");
            }

            $(".banner").height(590 - sh);
            $(".banner h2").css("font-size", 62 * (590-sh*3)/(590)+"px");
            $(".banner h3").css("font-size", 54 * (590-sh*3)/(590)+"px");


        })


  })
		
	
})(jQuery);


