"use strict";!function(P){P.redux=P.redux||{},P.redux.wbc_importer=function(){var l,p,m,u="no",w="no",h="no",g="no",f="no",b="no",y="no",k="no",v="elementor",x=!1,C=[],i=P(".wn-lightbox-wrap"),e=P(".wn-pagebuilder-wrap");function j(e,n,t,o,i,s){C=[],P.ajax({url:ajaxurl,type:"POST",data:e,beforeSend:function(e,n){C.push(e)}}).done(function(e){n.find(".wbc_image").css("opacity","1"),n.find(".spinner").css("display","none"),0<e.length&&e.match(/Have fun!/gi)?(n.addClass("rendered").find(".wbc-importer-buttons .importer-button").removeClass("import-demo-data"),n.find(".theme-actions .wbc-importer-buttons").append('<div id="wbc-importer-reimport" class="wbc-importer-buttons button-primary import-demo-data importer-button">Re-Import</div>'),n.find(".importer-button:not(#wbc-importer-reimport)").removeClass("button-primary").addClass("button").text("Imported").show(),n.find(".importer-button").attr("style",""),n.addClass("imported active").removeClass("not-imported"),n.find("#wbc-importer-reimport").hide(),"wbc-import-2"==o?location.reload(!1):(t.find("i.ti-close").show(),(e=P('.wn-lightbox[data-demo-id="'+(e=o)+'"]')).children("h2").hide(),e.find(".wni-start").hide(),e.children(".wn-suc-imp-title").fadeIn(),e.find(".wn-suc-imp-t100").fadeIn(),e.find(".wn-suc-imp-links").fadeIn(),P(".wsw-menu").find("li.active:last").next().addClass("active"),P(".wsw-btn-step").hide())):(p.trigger("click"),console.log("ReImport"))}).fail(function(){p.trigger("click")}),i.find(".wni-downloading-data").hide(),0==P(".wbc-progress-back").length&&(i.prepend('<div class="wbc-progress-back"><div class="wbc-progress-bar button-primary"><span class="wbc-progress-count">0%</span></div>'),function t(o,i,s){var e=jQuery('.wrap-importer[data-demo-id="wbc-import-75"]').next('.wn-lightbox-wrap[style="display: block;"]').length,n=jQuery('.wrap-importer[data-demo-id="wbc-import-76"]').next('.wn-lightbox-wrap[style="display: block;"]').length,r=jQuery('.wrap-importer[data-demo-id="wbc-import-77"]').next('.wn-lightbox-wrap[style="display: block;"]').length,a=jQuery('.wrap-importer[data-demo-id="wbc-import-78"]').next('.wn-lightbox-wrap[style="display: block;"]').length;{var d;(0<e||0<n||0<r||0<a)&&0<P(".wbc-progress-bar").length&&(d=setInterval(function(){var e=P(".wbc-progress-count").text(),e=parseInt(e.split("%",1)[0]);e<99?(e++,P(".wbc-progress-count").text(e+"%"),P(".wbc-progress-bar").css("width",e+"%")):clearInterval(d)},12e3))}o.action="redux_wbc_importer_progress";console.log(o);jQuery.ajax({url:ajaxurl,data:o,beforeSend:function(e,n){C.push(e)},success:function(e){var n=jQuery.parseJSON(e);console.log(n),0<e.length&&"object"==typeof n?n.imported_count!=n.total_post&&(console.log("Total: "+n.total_post),console.log("Imported: "+n.imported_count),e=Math.floor(n.imported_count/n.total_post*100),(n=P(".wbc-progress-count").text().replace("%",""))<=e&&(e=0<e?e-1:e,P(".wbc-progress-bar").css("width",e+"%"),P(".wbc-progress-count").text(e+"%")),e==n?s--:s=20,1==s&&(console.log("Progress repeat: "+s),i.trigger("click")),setTimeout(function(){t(o,i,s)},2e3)):setTimeout(function(){t(o,i,s)},2e3)},fail:function(){setTimeout(function(){t(o,i,s)},2e3)},complete:function(e){C.splice(P.inArray(e,C),1)}})}(e,n,s))}P(".elementor-builder").each(function(e,n){var t=P(n),o=t.closest(".wni-settings"),i=o.find(".kc-builder"),n=o.find(".vc-builder");"none"==t.css("display")&&(t.removeClass("checked"),t.find(".wn-radio-indicator").removeClass("checked"),"none"==i.css("display")?(i.removeClass("checked"),i.find(".wn-radio-indicator").removeClass("checked"),n.addClass("checked"),n.find(".wn-radio-indicator").addClass("checked")):(i.addClass("checked"),i.find(".wn-radio-indicator").addClass("checked"))),t.hasClass("checked")?(o.find('.wn-plugin[data-plugin-name="Elementor"]').show(),o.find('.wn-plugin[data-plugin-name="KingComposer pro"]').hide(),o.find('.wn-plugin[data-plugin-name="WPBakery Page Builder"]').hide(),o.find('.wn-plugin[data-plugin-name="KingComposer"]').hide()):i.hasClass("checked")?(o.find('.wn-plugin[data-plugin-name="Elementor"]').hide(),o.find('.wn-plugin[data-plugin-name="KingComposer"]').show(),o.find('.wn-plugin[data-plugin-name="KingComposer pro"]').show(),o.find('.wn-plugin[data-plugin-name="WPBakery Page Builder"]').hide()):(o.find('.wn-plugin[data-plugin-name="Elementor"]').hide(),o.find('.wn-plugin[data-plugin-name="KingComposer"]').hide(),o.find('.wn-plugin[data-plugin-name="KingComposer pro"]').hide(),o.find('.wn-plugin[data-plugin-name="WPBakery Page Builder"]').show())}),P(document).on("click",".import-risk-btn",function(e){e.preventDefault(),P("#wni-bad-status-message").fadeOut()}),P(".wrap-importer.theme.not-imported .wbc-importer-buttons .button, #wbc-importer-reimport").unbind("click").on("click",function(e){e.preventDefault();var n,t=P(this).closest(".wrap-importer").data("demo-id"),o=P("#wni-bad-status-message"),e=P("#wnInvalidPurchaseCode");0<e.length?(n=e.clone().show(),e.remove(),i.find('.wn-lightbox[data-demo-id="'+t+'"]').children("h2").after(n)):0<o.length&&(n=o.clone().show(),o.remove(),i.find('.wn-lightbox[data-demo-id="'+t+'"]').children("h2").after(n)),i.find('.wn-lightbox[data-demo-id="'+t+'"]').find(".wni-settings").niceScroll({scrollbarid:"wn-lb-content",cursorwidth:"10px",cursorborder:"0",touchbehavior:!0,autohidemode:!1,background:"#e7e7e7",cursorcolor:"#91989e"}),i.find('.wn-lightbox[data-demo-id="'+t+'"]').find(".wni-settings").getNiceScroll().resize(),i.find('.wn-lightbox[data-demo-id="'+t+'"]').find(".wn-import-content-wrap").find(".wn-checkbox-wrap").find("input").each(function(){var e=P(this),n=e.attr("id").slice(0,-1);e.is(":checked")?"all"==n?u=w=h=g=f=k=y=b="yes":"pages"==n?u="yes":"posts"==n?w="yes":"contact_forms"==n?h="yes":"portfolios"==n?g="yes":"images"==n?f="yes":"widgets"==n?b="yes":"themeoptions"==n?y="yes":"sliders"==n&&(k="yes"):"all"==n?u=w=h=g=f=k=y=b="no":"pages"==n?u="no":"posts"==n?w="no":"contact_forms"==n?h="no":"portfolios"==n?g="no":"images"==n?f="no":"widgets"==n?b="no":"themeoptions"==n?y="no":"sliders"==n&&(k="no"),"yes"==u||"yes"==w||"yes"==h||"yes"==g||"yes"==f||"yes"==k||"yes"==y||"yes"==b?(x=!0,e.closest(".wn-lb-content").find(".wn-import-demo-btn").css({opacity:"1",cursor:"pointer"})):(x=!1,e.closest(".wn-lb-content").find(".wn-import-demo-btn").css({opacity:"0.6",cursor:"not-allowed"}))}),i.find('.wn-lightbox[data-demo-id="'+t+'"]').show().closest(".wn-lightbox-wrap").show()}),i.find("i.ti-close").on("click",function(e){e.preventDefault(),i.hide(),P(".wni-settings").getNiceScroll().remove()}),e.find("input").on("change",function(e){e.preventDefault();var n=P(this),t=n.closest(".wnl-row").next(),o=t.find('.wn-plugin[data-plugin-name="WPBakery Page Builder"]'),i=t.find('.wn-plugin[data-plugin-name="KingComposer"]'),s=t.find('.wn-plugin[data-plugin-name="KingComposer pro"]'),r=t.find('.wn-plugin[data-plugin-name="Elementor"]'),e=n.parent(),t=n.siblings(".wn-radio-indicator");n.closest(".wn-pagebuilder-wrap").find(".wn-radio-control").removeClass("checked").end().find("input").removeAttr("checked").end().find(".wn-radio-indicator").removeClass("checked"),n.attr("checked","checked"),e.addClass("checked"),t.addClass("checked"),"kingcomposer"==n.val()?(v="kc",i.show(),s.show(),o.hide(),r.hide()):"visualcomposer"==n.val()?(v="vc",i.hide(),s.hide(),r.hide(),o.show()):(v="elementor",r.show(),i.hide(),s.hide(),o.hide())}),P(".wn-import-content-wrap").find("label").on("click",function(){var e=P(this),n=e.attr("for").replace(/\d+/g,""),t=P(this).siblings("input"),o=e.closest(".wn-checkbox-wrap").siblings(".wn-checkbox-wrap").find("input"),i=e.closest(".wn-checkbox-wrap").siblings(".wn-checkbox-wrap.wn-all-contents").find("input");t.is(":checked")?"all"==n?(u=w=h=g=f=k=y=b="no",o.attr("checked",!1)):(i.attr("checked",!1),"pages"==n?u="no":"posts"==n?w="no":"contact_forms"==n?h="no":"portfolios"==n?g="no":"images"==n?f="no":"widgets"==n?b="no":"themeoptions"==n?y="no":"sliders"==n&&(k="no")):"all"==n?(u=w=h=g=f=k=y=b="yes",o.attr("checked",!0)):(1<o.not(":checked").length?i.attr("checked",!1):i.attr("checked",!0),"pages"==n?u="yes":"posts"==n?w="yes":"contact_forms"==n?h="yes":"portfolios"==n?g="yes":"images"==n?f="yes":"widgets"==n?b="yes":"themeoptions"==n?y="yes":"sliders"==n&&(k="yes")),"yes"==u||"yes"==w||"yes"==h||"yes"==g||"yes"==f||"yes"==k||"yes"==y||"yes"==b?(x=!0,e.closest(".wn-lb-content").find(".wn-import-demo-btn").css({opacity:"1",cursor:"pointer"})):(x=!1,e.closest(".wn-lb-content").find(".wn-import-demo-btn").css({opacity:"0.6",cursor:"not-allowed"}))}),P(".wn-import-demo-btn").unbind("click").on("click",function(e){if(e.preventDefault(),console.log("start import"),x){var n=(p=P(this)).closest(".wn-lightbox").data("demo-id");"kingcomposer"==(v=p.closest(".wni-settings").find(".wn-pagebuilder-wrap").find(".wn-radio-control.checked").find("input").val())?v="kc":"visualcomposer"==v&&(v="vc"),P(".wsw-btn-step").hide(),l=P('.wrap-importer[data-demo-id="'+n+'"]');if(0==C.length)if(0==confirm("By importing the demo content, items such as pages, posts, images, sliders, theme options, widgets and other configurations will be imported as well. it will take several minutes.\n\n Note: 'Shop' and 'Buddypress' demos will take 15 minutes approximately to be imported."))return;l.find(".spinner").css("display","inline-block"),l.removeClass("active imported"),l.find(".importer-button").hide();var t={action:"webnus_create_demo_dir"};t.demo_import_id=l.attr("data-demo-id"),t.nonce=l.attr("data-nonce");var o={action:"redux_wbc_importer"};o.demo_import_id=l.attr("data-demo-id"),o.nonce=l.attr("data-nonce"),o.type="import-demo-content",o.pages=u,o.posts=w,o.contact_forms=h,o.portfolios=g,o.fetch_attachments=f,o.import_widgets=b,o.import_theme_opts=y,o.import_sliders=k,o.page_builder=v,l.find(".wbc_image").css("opacity","0.5"),0<C.length&&(P.each(C,function(e,n){n.abort()}),C.length=0);var i,s,r,a=P('.wn-lightbox[data-demo-id="'+n+'"]'),d=a.closest(".wn-lightbox-wrap"),c=a.find(".wni-start");return s=P('.wn-lightbox[data-demo-id="'+(i=n)+'"]'),r=s.closest(".wn-lightbox-wrap"),e=s.find(".wni-settings"),a=s.find(".wn-suc-imp-content-wrap"),i=s.find(".wni-start"),s=r.find(".nicescroll-rails"),r.find("i.ti-close").hide(),e.hide(),s.hide(),a.fadeIn(),a.find(".wn-suc-imp-t100").hide().end().find(".wn-suc-imp-links").hide(),i.prepend('<span class="wni-downloading-data">Downloading Demo Data ...</span>'),m?(P.isEmptyObject(C)?console.log("empty xhrPool"):(console.log(C),P.each(C,function(e,n){n.abort()}),C=[]),j(o,l,d,n,c,24)):(m=!0,P.ajax({url:ajaxurl,type:"POST",data:t,tryCount:0,retryLimit:3,beforeSend:function(e,n){C.push(e)}}).done(function(){P.isEmptyObject(C)?console.log("empty xhrPool"):(console.log(C),P.each(C,function(e,n){n.abort()}),C=[]),j(o,l,d,n,c,24)}).fail(function(e,n,t){return"timeout"==n?(this.tryCount++,this.tryCount<=this.retryLimit?void P.ajax(this):void 0):void e.status})),!1}}),P.xhrPool=[],P.xhrPool.abortAll=function(){_.each(this,function(e){e.abort()})},P.ajaxSetup({beforeSend:function(e){P.xhrPool.push(e)}})},P(document).ready(function(){P.redux.wbc_importer()})}(jQuery);