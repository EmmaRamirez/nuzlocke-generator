!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=20)}({0:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"q",function(){return d}),n.d(t,"k",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"j",function(){return c}),n.d(t,"i",function(){return u}),n.d(t,"l",function(){return f}),n.d(t,"f",function(){return b}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return m}),n.d(t,"n",function(){return v}),n.d(t,"o",function(){return y}),n.d(t,"p",function(){return g}),n.d(t,"e",function(){return h});var r=nnads.config,o=nnads.cmd,a=nnads.fn.CMPTool,i=nnads.fn.DOMReady,d=(nnads.fn.checkForMoat,nnads.fn.checkPermutive,nnads.fn.loadScript),l=(nnads.fn.loadJSON,nnads.fn.getBrowserWidth),s=nnads.fn.getHeight,c=nnads.fn.elementInViewport,u=nnads.fn.element50InViewport,f=(nnads.fn.percentageElementInView,nnads.fn.getCookie),b=(nnads.fn.setCookie,nnads.debug.debugAll),p=nnads.debug.debugging,m=nnads.debug.debuggingTest,v=nnads.debug.getflag,y=nnads.debug.info,g=nnads.debug.kdebug,h=nnads.debug.log},20:function(e,t,n){e.exports=n(87)},21:function(e,t,n){var r=n(4),n=n(22),o={insert:"head",singleton:!1};r(n="string"==typeof(n=n.__esModule?n.default:n)?[[e.i,n,""]]:n,o);e.exports=n.locals||{}},22:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"#nn_1by1,#nn_bfa{width:100%}.celtra-ad-inline-host{left:0}.demopage #nn_1by1,.demopage #nn_bfa{border:0;margin-bottom:0}.demopage #celtra-reveal-wrapper{overflow:hidden}.celtra-reveal-header-non-sticky{top:0;width:100%}.celtra-reveal-header-sticky{width:100%}body:not(.celtra-loaded):not(.bfa-loaded) #nn_bfa_wrapper{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}body:not(.celtra-loaded):not(.bfa-loaded) #celtra-reveal-wrapper{width:100%;text-align:center}body:not(.celtra-loaded):not(.bfa-loaded) .celtra-reveal-header-sticky{position:fixed!important}body.celtra-loaded #celtra-reveal-wrapper{left:0}body.celtra-loaded #celtra-reveal-wrapper>[id^=nn_]{all:unset!important}body.celtra-loaded .celtra-reveal-header-non-sticky{position:absolute!important}body.celtra-unloaded .celtra-reveal-header-sticky:not(.bfa-header-sticky){position:fixed!important;top:0!important}",""])},4:function(e,t,o){"use strict";var n,r,d=function(){return n=void 0===n?Boolean(window&&document&&document.all&&!window.atob):n},a=(r={},function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}),s=[];function c(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],d=n[i]||0,l="".concat(i," ").concat(d),i=(n[i]=d+1,c(l)),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==i?(s[i].references++,s[i].updater(d)):s.push({identifier:l,updater:function(t,e){var n,r,o;{var a;o=e.singleton?(a=m++,n=p=p||u(e),r=b.bind(null,n,a,!1),b.bind(null,n,a,!0)):(n=u(e),r=function(e,t,n){var r=n.css,o=n.media,n=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media");n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */"));if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,e),function(){var e=n;null!==e.parentNode&&e.parentNode.removeChild(e)})}return r(t),function(e){e?e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap||r(t=e):o()}}(d,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0!==n.nonce||(r=o.nc)&&(n.nonce=r),Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}i=[];var i,f=function(e,t){return i[e]=t,i.filter(Boolean).join("\n")};function b(e,t,n,r){var n=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;e.styleSheet?e.styleSheet.cssText=f(t,n):(r=document.createTextNode(n),(n=e.childNodes)[t]&&e.removeChild(n[t]),n.length?e.insertBefore(r,n[t]):e.appendChild(r))}var p=null,m=0;e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=d());var i=l(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<i.length;t++){var n=c(i[t]);s[n].references--}for(var e=l(e,a),r=0;r<i.length;r++){var o=c(i[r]);0===s[o].references&&(s[o].updater(),s.splice(o,1))}i=e}}}},5:function(e,t,n){"use strict";e.exports=function(n){var i=[];return i.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa)return e=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),t=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}),[n].concat(t).concat([e]).join("\n");return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},i.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),i.push(a))}},i}},87:function(e,t,n){"use strict";n.r(t);function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];s.p.apply(void 0,["nndebug=bfa",{title:"nn__BFA:",style:"font-weight:bold;font-size:13px;color:maroon"}].concat(t))}var s=n(0);n(21);function o(e){var n=window,r=document,t="celtra-reveal-header-sticky",o="celtra-reveal-header-non-sticky",a=Object.assign({},{navbar:null,callback:null,divUnitId:"nn_1by1",stickyNav:{mobile:!1,desktop:!1},miniMenuOffsetHeight:250,miniMenuOffsetHeightMobile:250,mobileBreakpoint:900,removeVideoDesktop:!1},0<arguments.length&&void 0!==e?e:{});function i(e){var t=a.miniMenuOffsetHeight;Object(s.k)()<=a.mobileBreakpoint&&(t=a.miniMenuOffsetHeightMobile),n.requestAnimationFrame(function(){var e=n.scrollY>t;r.body.classList.toggle("celtra-mini",e)})}function d(){r.body.classList.remove("celtra-loaded"),i()}l("BFA Setup",a),Object(s.b)(function(){r.body.style.cssText,a.navbar&&(a.navbar.style.cssText,Object(s.k)()<=a.mobileBreakpoint&&(l("Mobile mode",a.mobileBreakpoint),a.navbar.classList.add(a.stickyNav.mobile?t:o)),Object(s.k)()>a.mobileBreakpoint&&(l("Desktop mode",a.mobileBreakpoint),a.navbar.classList.add(a.stickyNav.desktop?t:o)))}),AdSlots.cmd.push(function(){Object(s.b)(function(){var e,t=r.querySelector("#"+a.divUnitId);!r.querySelector("#celtra-reveal-wrapper")&&t&&((e=r.createElement("div")).id="celtra-reveal-wrapper",t.parentNode.insertBefore(e,t),e.appendChild(t),l("Celtra wrapper injected to unit "+a.divUnitId))})}),n.addEventListener("scroll",i),n.celtraDestroy=d,n.addEventListener("nn_refresh",function(e){var t=!1;void 0===e.detail.slots&&(t=!0),"slots"in e.detail&&Array.isArray(e.detail.slots)&&(0<e.detail.slots.length&&e.detail.slots.includes(a.divUnitId)&&(t=!0),0===e.detail.slots.length&&(t=!0)),!1!==t&&(l("BFA RESET: %c%s%c - slots called:","font-weight:bold",a.divUnitId,"",e.detail.slots),d(),r.body.classList.remove("celtra-loaded"),r.body.style.removeProperty("padding-top"),a.navbar&&a.navbar.style.removeProperty("top"),(t=r.querySelector("#celtra-reveal-wrapper"))&&(t.style=""))}),n.addEventListener("celtraDismissAd",function(){l("Ad dismissed"),r.body.classList.remove("celtra-loaded"),r.body.classList.add("celtra-unloaded"),d()}),n.addEventListener("nn_primis_setup",function(e){e.detail.player;e=!1;!1!==r.body.classList.contains("bfa-loaded")&&(a.removeVideoDesktop&&Object(s.k)()>a.mobileBreakpoint&&(e=!0),(e=Object(s.k)()<=a.mobileBreakpoint?!0:e)&&n.dispatchEvent(new Event("nn_primis_remove")))}),n.addEventListener("celtraRevealAd",function(){l("Has revealed! Tada!"),r.body.classList.remove("celtra-unloaded","bfa-loaded","bfa-unloaded","bfa-sticky-leaderboard"),Object(s.b)(function(){r.body.classList.add("celtra-loaded")})})}var a=document,i=window.googletag||{cmd:[]};s.c.push("celtra-bfa",function(){var r;"celtra-bfa"in s.d.modules&&(r={navbar:s.d.modules["celtra-bfa"].navbar?a.querySelector(s.d.modules["celtra-bfa"].navbar):null,stickyNav:{mobile:s.d.modules["celtra-bfa"].stickyNavMobile,desktop:s.d.modules["celtra-bfa"].stickyNavDesktop}},s.d.modules["celtra-bfa"].mobileBreakpoint&&(r.mobileBreakpoint=s.d.modules["celtra-bfa"].mobileBreakpoint),s.d.modules["celtra-bfa"].miniMenuOffsetHeight&&(r.miniMenuOffsetHeight=s.d.modules["celtra-bfa"].miniMenuOffsetHeight),s.d.modules["celtra-bfa"].miniMenuOffsetHeightMobile&&(r.miniMenuOffsetHeightMobile=s.d.modules["celtra-bfa"].miniMenuOffsetHeightMobile),i.cmd.push(function(){Object.keys(s.d.modules.gpt.units).forEach(function(e){var t=s.d.modules.gpt.units[e],n=t.sizes.join().includes("1,1");t.defined&&n&&(l("BFA unit set to:%c %s","font-weight:bold",e),r.divUnitId=e)}),window.AdSlots.bfaDivUnitId&&(r.divUnitId=window.AdSlots.bfaDivUnitId),o(r)}))})}});