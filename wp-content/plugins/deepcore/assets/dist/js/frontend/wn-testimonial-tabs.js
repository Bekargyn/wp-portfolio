!function(){function t(t,i){i("#wn-testimonial-tab .testimonial-tab-items .testimonial-tabs .testimonial-tab-item:first-child .testimonial-tab-switch").attr("checked","checked"),i(".testimonial-tab-item").find(".testimonial-tab-label").click(function(t){i(this).closest(".testimonial-tabs").find(".testimonial-tab-switch").removeAttr("checked"),i(this).closest(".testimonial-tab-item").find(".testimonial-tab-switch").attr("checked","checked")})}jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/testimonial_tabs.default",t)})}();