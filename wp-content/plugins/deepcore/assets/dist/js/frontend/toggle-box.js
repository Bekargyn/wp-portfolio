!function(){function t(t,e){e(".suite-toggle").find(".extra-content").hide(),e(document).on("click",".suite-toggle .toggle-content .ti-plus",function(){e(this).parent().parent().find(".extra-content").show(300),e(this).closest(".suite-toggle").addClass("click"),e(this).removeClass("ti-plus").addClass("ti-minus")}),e(document).on("click",".suite-toggle .toggle-content .ti-minus",function(){e(this).parent().parent().find(".extra-content").hide(300),e(this).closest(".suite-toggle").removeClass("click"),e(this).removeClass("ti-minus").addClass("ti-plus")})}jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/toggle_box.default",t)})}();