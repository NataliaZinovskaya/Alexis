!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var n={exports:{}};t(n,n.exports),e.WOW=n.exports}}(this,function(e,t){"use strict";var n,i;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t){return 0<=t.indexOf(e)}function l(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function c(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var u=window.WeakMap||window.MozWeakMap||(s(h,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++)if(this.keys[t]===e)return this.values[t]}},{key:"set",value:function(e,t){for(var n=0;n<this.keys.length;n++)if(this.keys[n]===e)return this.values[n]=t,this;return this.keys.push(e),this.values.push(t),this}}]),h);function h(){o(this,h),this.keys=[],this.values=[]}var d=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(s(f,[{key:"observe",value:function(){}}]),i=n=f,n.notSupported=!0,i);function f(){o(this,f),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}var v=window.getComputedStyle||function(n){var i=/(\-([a-z]){1})/g;return{getPropertyValue:function(e){"float"===e&&(e="styleFloat"),i.test(e)&&e.replace(i,function(e,t){return t.toUpperCase()});var t=n.currentStyle;return(null!=t?t[e]:void 0)||null}}},m=(s(y,[{key:"init",value:function(){this.element=window.document.documentElement,r(document.readyState,["interactive","complete"])?this.start():l(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var s=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var e=0;e<this.boxes.length;e++){var t=this.boxes[e];this.applyStyle(t,!0)}this.disabled()||(l(this.config.scrollContainer||window,"scroll",this.scrollHandler),l(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live&&new d(function(e){for(var t=0;t<e.length;t++)for(var n=e[t],i=0;i<n.addedNodes.length;i++){var o=n.addedNodes[i];s.doSync(o)}}).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,c(this.config.scrollContainer||window,"scroll",this.scrollHandler),c(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){d.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var i=t[n];r(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function(e){var t,n;return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),t=e,n=this.wowEvent,null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)&&t["on"+n](),this.config.resetAnimation&&(l(e,"animationend",this.resetAnimation),l(e,"oanimationend",this.resetAnimation),l(e,"webkitAnimationEnd",this.resetAnimation),l(e,"MSAnimationEnd",this.resetAnimation)),e}},{key:"applyStyle",value:function(e,t){var n=this,i=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),s=e.getAttribute("data-wow-iteration");return this.animate(function(){return n.customStyle(e,t,i,o,s)})}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++)this.boxes[e].style.visibility="visible"}},{key:"resetAnimation",value:function(e){if(0<=e.type.toLowerCase().indexOf("animationend")){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e[""+n]=i;for(var o=0;o<this.vendors.length;o++)e[""+this.vendors[o]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}},{key:"vendorCSS",value:function(e,t){for(var n=v(e),i=n.getPropertyCSSValue(t),o=0;o<this.vendors.length;o++){var s=this.vendors[o];i=i||n.getPropertyCSSValue("-"+s+"-"+t)}return i}},{key:"animationName",value:function(t){var n=void 0;try{n=this.vendorCSS(t,"animation-name").cssText}catch(e){n=v(t).getPropertyValue("animation-name")}return"none"===n?"":n}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-t,o=this.offsetTop(e),s=o+e.clientHeight;return o<=i&&n<=s}},{key:"disabled",value:function(){return!this.config.mobile&&(e=navigator.userAgent,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));var e}}]),y);function y(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,y),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=function(e,t){for(var n in t)if(null==e[n]){var i=t[n];e[n]=i}return e}(e,this.defaults),null!=e.scrollContainer&&(this.config.scrollContainer=document.querySelector(e.scrollContainer)),this.animationNameCache=new u,this.wowEvent=function(e,t,n,i){var o=!(arguments.length<=1||void 0===t)&&t,s=!(arguments.length<=2||void 0===n)&&n,a=arguments.length<=3||void 0===i?null:i,r=void 0;return null!=document.createEvent?(r=document.createEvent("CustomEvent")).initCustomEvent(e,o,s,a):null!=document.createEventObject?(r=document.createEventObject()).eventType=e:r.eventName=e,r}(this.config.boxClass)}t.default=m,e.exports=t.default}),$(document).ready(function(){$('a[href*="#"]').on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},700,"linear")})});