!function(e){"use strict";var n=e(".pg-loading-screen").data("timeout");n?(e(" body ").removeClass("wn-preloader").addClass("wn-start-rendering"),setTimeout(function(){e(".pg-loading-screen").hide()},n)):e(document).ready(function(){e(" body ").removeClass("wn-preloader").addClass("wn-start-rendering"),e(window).on("load",function(){setTimeout(function(){e(".pg-loading-screen").fadeOut(400)},1e3)})})}(jQuery);