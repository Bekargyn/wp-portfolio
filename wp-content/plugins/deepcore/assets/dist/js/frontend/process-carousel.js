!function(){function e(e,t){t(".process-carousel").owlCarousel({items:1,dots:!1,nav:!0,autoplay:!1,slideSpeed:600,paginationSpeed:400,autoPlay:6e3,navText:["<span id='process-carousel' class='ol-pre'></span>","<span id='process-carousel' class='ol-nxt'></span>","",""]}),t(".process-carousel").each(function(e,s){var n=t(this).find(".owl-item").length;0<n&&n<10&&(n="0"+n);var o=t(this).find(".owl-item.active").index()+1;0<o&&o<10&&(o="0"+o),t(this).parent().find(".process-carousel-num").html(o+"/"+n),t(this).find("#process-carousel").owlCarousel({interval:2e3}),t(this).on("changed.owl.carousel",function(e){e=e.item.index+1;0<e&&e<10&&(e="0"+e),t(this).siblings(".process-carousel-num").html(e+"/"+n)})})}jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/process_carousel.default",e)})}();