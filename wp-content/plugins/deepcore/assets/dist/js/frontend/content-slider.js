!function(){function n(n,c){c(".ww-cs-cn").each(function(n,t){var a=c(this),e=a.data("bullet"),o=a.data("arrow"),s=a.data("speed"),l=a.data("arrow-left"),i=a.data("arrow-right"),r="",r=1==a.data("play");a.owlCarousel({items:1,dots:e,nav:o,navText:["<span class='wn-owl-prev content-slider-arrow-icon'>"+l+"</span>","<span class='wn-owl-next content-slider-arrow-icon'>"+i+"</span>","",""],autoplayTimeout:s,responsiveClass:!0,animateIn:"fadeIn",animateOut:"fadeOut",mouseDrag:!1,loop:!0,autoplay:r})}),c(".wn-content-slider-wrap").each(function(n,t){var a,e,o=c(this);!0===o.data("number")&&(0<(a=o.find(".owl-item:not(.cloned)").length)&&a<10&&(a="0"+a),0<(e=o.find(".owl-item.active").index()-1)&&e<10&&(e="0"+e),o.find(".content-slider-num").html('<span class="content-slider-num-current">'+e+'</span><span class="content-slider-num-total">/'+a+"</span>"),o.on("changed.owl.carousel",function(n){n=n.item.index-1;0<n&&n<10&&(n="0"+n),"0"==n&&(n=a),total_container.siblings(".content-slider-num").html('<span class="content-slider-num-current">'+n+'</span><span class="content-slider-num-total">/'+a+"</span>")}))})}jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/content-slider.default",n)})}();