!function(){function e(e,o){var n=o(".our-service-carousel-wrap").data("items");o(".our-service-carousel-wrap").owlCarousel({items:n,autoplay:!0,nav:!1,dots:!0,navText:["",""],479:{item:1},960:{item:2},1200:{item:3}})}jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/service_carousel.default",e)})}();