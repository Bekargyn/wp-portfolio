!function(c,n,i){c.migrateVersion="1.4.1";var o={};function u(e){var t=n.console,r=new Error,r={warning:e,trace:r.stack||r};c.migrateWarnings.push(r),o[e]||(o[e]=!0,t&&t.warn&&!c.migrateMute&&(t.warn("JQMIGRATE: "+e),c.migrateTrace&&t.trace&&t.trace()))}function e(e,t,r,n){if(Object.defineProperty)try{return void Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}catch(e){}c._definePropertyBroken=!0,e[t]=r}c.migrateWarnings=[],n.console&&n.console.log&&n.console.log("JQMIGRATE: Migrate is installed"+(c.migrateMute?"":" with logging active")+", version "+c.migrateVersion),c.migrateTrace===i&&(c.migrateTrace=!0),c.migrateReset=function(){o={},c.migrateWarnings.length=0},"BackCompat"===document.compatMode&&u("jQuery is not compatible with Quirks Mode");var s=c("<input/>",{size:1}).attr("size")&&c.attrFn,l=c.attr,a=c.attrHooks.value&&c.attrHooks.value.get||function(){return null},d=c.attrHooks.value&&c.attrHooks.value.set||function(){return i},p=/^(?:input|button)$/i,f=/^[238]$/,h=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=/^(?:checked|selected)$/i;e(c,"attrFn",s||{},"jQuery.attrFn is deprecated"),c.attr=function(e,t,r,n){var o=t.toLowerCase(),a=e&&e.nodeType;return n&&(l.length<4&&u("jQuery.fn.attr( props, pass ) is deprecated"),e&&!f.test(a)&&(s?t in s:c.isFunction(c.fn[t])))?c(e)[t](r):("type"===t&&r!==i&&p.test(e.nodeName)&&e.parentNode&&u("Can't change the 'type' of an input or button in IE 6/7/8"),!c.attrHooks[o]&&h.test(o)&&(c.attrHooks[o]={get:function(e,t){var r,n=c.prop(e,t);return!0===n||"boolean"!=typeof n&&(r=e.getAttributeNode(t))&&!1!==r.nodeValue?t.toLowerCase():i},set:function(e,t,r){return!1===t?c.removeAttr(e,r):((t=c.propFix[r]||r)in e&&(e[t]=!0),e.setAttribute(r,r.toLowerCase())),r}},v.test(o)&&u("jQuery.fn.attr('"+o+"') might use property instead of attribute")),l.call(c,e,t,r))},c.attrHooks.value={get:function(e,t){var r=(e.nodeName||"").toLowerCase();return"button"===r?a.apply(this,arguments):("input"!==r&&"option"!==r&&u("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var r=(e.nodeName||"").toLowerCase();if("button"===r)return d.apply(this,arguments);"input"!==r&&"option"!==r&&u("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t}};var t,r,g=c.fn.init,y=c.find,m=c.parseJSON,b=/^\s*</,w=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,j=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,x=/^([^<]*)(<[\w\W]+>)([^>]*)$/;for(r in c.fn.init=function(e,t,r){var n;return e&&"string"==typeof e&&!c.isPlainObject(t)&&(n=x.exec(c.trim(e)))&&n[0]&&(b.test(e)||u("$(html) HTML strings must start with '<' character"),n[3]&&u("$(html) HTML text after last tag is ignored"),"#"===n[0].charAt(0)&&(u("HTML string cannot start with a '#' character"),c.error("JQMIGRATE: Invalid selector string (XSS)")),t&&t.context&&t.context.nodeType&&(t=t.context),c.parseHTML)?g.call(this,c.parseHTML(n[2],t&&t.ownerDocument||t||document,!0),t,r):(n=g.apply(this,arguments),e&&e.selector!==i?(n.selector=e.selector,n.context=e.context):(n.selector="string"==typeof e?e:"",e&&(n.context=e.nodeType?e:t||document)),n)},c.fn.init.prototype=c.fn,c.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&w.test(t))try{document.querySelector(t)}catch(e){t=t.replace(j,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},y)Object.prototype.hasOwnProperty.call(y,r)&&(c.find[r]=y[r]);c.parseJSON=function(e){return e?m.apply(this,arguments):(u("jQuery.parseJSON requires a valid JSON string"),null)},c.uaMatch=function(e){e=e.toLowerCase();e=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:e[1]||"",version:e[2]||"0"}},c.browser||($={},(t=c.uaMatch(navigator.userAgent)).browser&&($[t.browser]=!0,$.version=t.version),$.chrome?$.webkit=!0:$.webkit&&($.safari=!0),c.browser=$),e(c,"browser",c.browser,"jQuery.browser is deprecated"),c.boxModel=c.support.boxModel="CSS1Compat"===document.compatMode,e(c,"boxModel",c.boxModel,"jQuery.boxModel is deprecated"),e(c.support,"boxModel",c.support.boxModel,"jQuery.support.boxModel is deprecated"),c.sub=function(){function r(e,t){return new r.fn.init(e,t)}c.extend(!0,r,this),r.superclass=this,r.fn=r.prototype=this(),(r.fn.constructor=r).sub=this.sub,r.fn.init=function(e,t){t=c.fn.init.call(this,e,t,n);return t instanceof r?t:r(t)},r.fn.init.prototype=r.fn;var n=r(document);return u("jQuery.sub() is deprecated"),r};var k=!(c.fn.size=function(){return u("jQuery.fn.size() is deprecated; use the .length property"),this.length});c.swap&&c.each(["height","width","reliableMarginRight"],function(e,t){var r=c.cssHooks[t]&&c.cssHooks[t].get;r&&(c.cssHooks[t].get=function(){var e;return k=!0,e=r.apply(this,arguments),k=!1,e})}),c.swap=function(e,t,r,n){var o,a={};for(o in k||u("jQuery.swap() is undocumented and deprecated"),t)a[o]=e.style[o],e.style[o]=t[o];for(o in n=r.apply(e,n||[]),t)e.style[o]=a[o];return n},c.ajaxSetup({converters:{"text json":c.parseJSON}});var Q=c.fn.data;c.fn.data=function(e){var t,r,n=this[0];return!n||"events"!==e||1!==arguments.length||(t=c.data(n,e),r=c._data(n,e),t!==i&&t!==r||r===i)?Q.apply(this,arguments):(u("Use of jQuery.fn.data('events') is deprecated"),r)};var M=/\/(java|ecma)script/i;function C(e){return"string"!=typeof e||c.event.special.hover?e:(F.test(e)&&u("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),e&&e.replace(F,"mouseenter$1 mouseleave$1"))}c.clean||(c.clean=function(e,t,r,n){t=(t=!(t=t||document).nodeType&&t[0]||t).ownerDocument||t,u("jQuery.clean() is deprecated");var o,a,i,s=[];if(c.merge(s,c.buildFragment(e,t).childNodes),r)for(a=function(e){if(!e.type||M.test(e.type))return n?n.push(e.parentNode?e.parentNode.removeChild(e):e):r.appendChild(e)},o=0;null!=(i=s[o]);o++)c.nodeName(i,"script")&&a(i)||(r.appendChild(i),void 0!==i.getElementsByTagName&&(i=c.grep(c.merge([],i.getElementsByTagName("script")),a),s.splice.apply(s,[o+1,0].concat(i)),o+=i.length));return s});var S=c.event.add,T=c.event.remove,N=c.event.trigger,H=c.fn.toggle,A=c.fn.live,L=c.fn.die,O=c.fn.load,$="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",E=new RegExp("\\b(?:"+$+")\\b"),F=/(?:^|\s)hover(\.\S+|)\b/;c.event.props&&"attrChange"!==c.event.props[0]&&c.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),c.event.dispatch&&e(c.event,"handle",c.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),c.event.add=function(e,t,r,n,o){e!==document&&E.test(t)&&u("AJAX events should be attached to document: "+t),S.call(this,e,C(t||""),r,n,o)},c.event.remove=function(e,t,r,n,o){T.call(this,e,C(t)||"",r,n,o)},c.each(["load","unload","error"],function(e,t){c.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?O.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),c.fn.toggle=function(r,e){if(!c.isFunction(r)||!c.isFunction(e))return H.apply(this,arguments);u("jQuery.fn.toggle(handler, handler...) is deprecated");function t(e){var t=(c._data(this,"lastToggle"+r.guid)||0)%a;return c._data(this,"lastToggle"+r.guid,1+t),e.preventDefault(),n[t].apply(this,arguments)||!1}var n=arguments,o=r.guid||c.guid++,a=0;for(t.guid=o;a<n.length;)n[a++].guid=o;return this.click(t)},c.fn.live=function(e,t,r){return u("jQuery.fn.live() is deprecated"),A?A.apply(this,arguments):(c(this.context).on(e,this.selector,t,r),this)},c.fn.die=function(e,t){return u("jQuery.fn.die() is deprecated"),L?L.apply(this,arguments):(c(this.context).off(e,this.selector||"**",t),this)},c.event.trigger=function(e,t,r,n){return r||E.test(e)||u("Global events are undocumented and deprecated"),N.call(this,e,t,r||document,n)},c.each($.split("|"),function(e,t){c.event.special[t]={setup:function(){var e=this;return e!==document&&(c.event.add(document,t+"."+c.guid,function(){c.event.trigger(t,Array.prototype.slice.call(arguments,1),e,!0)}),c._data(this,t,c.guid++)),!1},teardown:function(){return this!==document&&c.event.remove(document,t+"."+c._data(this,t)),!1}}}),c.event.special.ready={setup:function(){this===document&&u("'ready' event is deprecated")}};var R,J,B=c.fn.andSelf||c.fn.addBack,D=c.fn.find;c.fn.andSelf=function(){return u("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),B.apply(this,arguments)},c.fn.find=function(e){var t=D.apply(this,arguments);return t.context=this.context,t.selector=this.selector?this.selector+" "+e:e,t},c.Callbacks&&(R=c.Deferred,J=[["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),"rejected"],["notify","progress",c.Callbacks("memory"),c.Callbacks("memory")]],c.Deferred=function(e){var a=R(),i=a.promise();return a.pipe=i.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),c.Deferred(function(n){c.each(J,function(e,t){var r=c.isFunction(o[e])&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&c.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},a.isResolved=function(){return u("deferred.isResolved is deprecated"),"resolved"===a.state()},a.isRejected=function(){return u("deferred.isRejected is deprecated"),"rejected"===a.state()},e&&e.call(a,a),a})}(jQuery,window);