!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=52)}({0:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c}),n.d(t,"q",function(){return a}),n.d(t,"k",function(){return u}),n.d(t,"m",function(){return l}),n.d(t,"j",function(){return s}),n.d(t,"i",function(){return d}),n.d(t,"l",function(){return f}),n.d(t,"f",function(){return g}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return b}),n.d(t,"n",function(){return h}),n.d(t,"o",function(){return v}),n.d(t,"p",function(){return y}),n.d(t,"e",function(){return m});var o=nnads.config,r=nnads.cmd,i=nnads.fn.CMPTool,c=nnads.fn.DOMReady,a=(nnads.fn.checkForMoat,nnads.fn.checkPermutive,nnads.fn.loadScript),u=(nnads.fn.loadJSON,nnads.fn.getBrowserWidth),l=nnads.fn.getHeight,s=nnads.fn.elementInViewport,d=nnads.fn.element50InViewport,f=(nnads.fn.percentageElementInView,nnads.fn.getCookie),g=(nnads.fn.setCookie,nnads.debug.debugAll),p=nnads.debug.debugging,b=nnads.debug.debuggingTest,h=nnads.debug.getflag,v=nnads.debug.info,y=nnads.debug.kdebug,m=nnads.debug.log},1:function(e,t,n){"use strict";n.d(t,"n",function(){return o}),n.d(t,"j",function(){return c.b}),n.d(t,"o",function(){return c.c}),n.d(t,"d",function(){return c.a}),n.d(t,"a",function(){return s}),n.d(t,"h",function(){return b}),n.d(t,"c",function(){return h}),n.d(t,"k",function(){return v}),n.d(t,"m",function(){return y}),n.d(t,"l",function(){return m}),n.d(t,"b",function(){return w}),n.d(t,"e",function(){return C}),n.d(t,"i",function(){return O}),n.d(t,"g",function(){return k}),n.d(t,"f",function(){return j});var i=n(2);function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=new(function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function")}var t,n,o;return t=e,(n=[{key:"sideBisectsViewport",value:function(e,t,n,o,r,i,c,a,u,l){var s;return o=o,r=r,i=i,c=c,l=l,s=["top","left"].includes(e=e)&&i<0&&(l?a:u)<c,e=["right","bottom"].includes(e)&&c<0&&(l?a:u)<i,c={},s||e?(s={},0<=o&&o<=(l?u:a)||0<=r&&r<=(l?u:a)?(s.amt="some",s.result=!0):o<0&&(l?u:a)<r?(s.amt="all",s.result=!0):s.result=!1,s):(o<=0&&(l?u:a)<=r&&0<=i&&i<=(l?a:u)?(c.amt="some",c.result=!0):c.result=!1,c)}},{key:"calculateLengthInViewport",value:function(e,t,n,o,r,i,c,a,u,l){var s=l?u:a;if(t||n)return(n?r:0<r?s:0)-(t||0<o?o:0);var t=this.sideBisectsViewport(e,t,n,o,r,i,c,a,u,l);if(t.result){if("all"===t.amt)return s;if("some"===t.amt){n=o,i=r,c=a,l=u,s={adjusted:!1,length:0},["left","right"].includes(t=e)?(s.adjusted=!0,s.length=n<0?i:l-n):["top","bottom"].includes(t)&&(s.adjusted=!0,s.length=n<0?c<(l=n+i)?c:l:c-n);o=s;if(o.adjusted)return o.length}}return 0}},{key:"vertexInViewport",value:function(e,t,n,o,r){return 0<=e&&e<=(r?o:n)&&0<=t&&t<=(r?n:o)}},{key:"sideInViewport",value:function(e,t,n,o,r,i,c){var a=!(7<arguments.length&&void 0!==arguments[7])||arguments[7],u=this.vertexInViewport(t,o,i,c,a),l=this.vertexInViewport(n,o,i,c,a);return{lowerPointView:u,higherPointInView:l,lengthOfSideInView:this.calculateLengthInViewport(e,u,l,t,n,o,r,i,c,a)}}},{key:"calculateAreaInView",value:function(e,t,n,o){function r(e,t){return e||t||0}return r(o,t)*r(e,n)}},{key:"calculatePercentageInView",value:function(e,t,n){return e/(t*n)*100}},{key:"elementInViewport",value:function(e){var e=e.getBoundingClientRect(),t=window.innerWidth,n=window.innerHeight,o=e.top,r=e.top+e.height,i=e.left,c=e.left+e.width,a=this.sideInViewport("top",i,c,o,r,t,n,!1),u=this.sideInViewport("right",o,r,c,i,t,n,!0),l=this.sideInViewport("bottom",i,c,r,o,t,n,!1),o=this.sideInViewport("left",o,r,i,c,t,n,!0),r=this.calculateAreaInView(a.lengthOfSideInView,u.lengthOfSideInView,l.lengthOfSideInView,o.lengthOfSideInView);return this.calculatePercentageInView(r,e.width,e.height)}}])&&r(t.prototype,n),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()),c=n(3);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=window,s=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");this.debug=i.a,this.loaded=!1,this.closed=!1,this.mobileWidth=480,this.timeout=null,this.fallbackCalled=!1,this.fallbackTimeout=2e3,this.callback=function(){return!1}}var t,n,o;return t=e,(n=[{key:"getVersion",value:function(){var e="function"==typeof l.__cmp,t="function"==typeof l.__tcfapi,n="function"==typeof l.__uspapi;return e&&!t?"cmp":t?"tcfapi":n&&"uspapi"}},{key:"getConsentString",value:function(){var n=null;return l.__tcfapi&&l.__tcfapi("getTCData",2,function(e,t){n=e}),n&&n.tcString?n.tcString:null}},{key:"getConsent",value:function(e){if(!this.getVersion())throw"CMPTool: No valid CMP";if(!e)throw"CMPTool: No vendor ID set";var t,n=null;switch(this.getVersion()){case"cmp":(n=l.__cmp("getCMPData"))&&n.vendorConsents&&(t=n.vendorConsents);break;case"tcfapi":l.__tcfapi("getTCData",2,function(e,t){n=e}),n&&"vendor"in n&&"consents"in n.vendor&&(t=n.vendor.consents)}var o=!1;return(t=!n&&l.__cmp&&(n=l.__cmp("getCMPData"))&&n.vendorConsents?n.vendorConsents:t)&&e in t?o=t[e]:n&&"googleVendorConsents"in n&&e in n.googleVendorConsents?o=n.googleVendorConsents[e]:n&&"customVendorConsents"in n&&e in n.customVendorConsents&&(o=n.customVendorConsents[e]),"object"===a(n)&&null!==n&&n&&"gdprApplies"in n&&n.gdprApplies?o:null}},{key:"fallback",value:function(){var e=this;this.loaded||(0<arguments.length&&void 0!==arguments[0]&&arguments[0]?(this.debug("CMP // %cFallback timeout reached! Executing callback!","font-weight:bold"),this.callback(),this.fallbackCalled=!0,this.callback=function(){return!1}):(this.debug("CMP // %cSetting fallback timeout...","font-weight:bold"),this.timeout=setTimeout(function(){e.fallback(!0)},this.fallbackTimeout)))}},{key:"removeListener",value:function(t){var n=this;l.__tcfapi("removeEventListener",2,function(e){e&&n.debug("CMP listener removed. Id:",t)},t)}},{key:"ready",value:function(n){var o=this;if(this.callback=n,this.fallbackCalled=!1,!l.__tcfapi)return this.debug("CMP // %cNOT FOUND. Executing callback!","font-weight:bold"),n();this.fallback(),l.__tcfapi("addEventListener",2,function(e,t){if(o.debug("CMP call",t,e),o.fallbackCalled)return o.debug("CMP fallback has already occurred. Removing listener."),o.removeListener(e.listenerId);if(t){if("loaded"===e.cmpStatus&&!1===e.gdprApplies)return clearTimeout(o.timeout),o.debug("CMP call 2"),o.removeListener(e.listenerId),n();switch(e.eventStatus){case"useractioncomplete":case"tcloaded":clearTimeout(o.timeout),o.debug("CMP call 1"),n(),o.removeListener(e.listenerId);break;case"cmpuishown":clearTimeout(o.timeout)}}})}}])&&u(t.prototype,n),o&&u(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function f(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach(function(e){var t,n;t=o,n=r[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}var g=window,p=document,b=(p.getElementById.bind(p),[].concat(["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GI","GR","HR","HU","IE","IS","IT","LI","LT","LU","LV","MT","NL","NO","PL","PT","RO","SE","SI","SK"],["US","CH"])),h={US:["CA"]};function v(){return Math.max(p.body.scrollHeight,p.documentElement.scrollHeight,p.body.offsetHeight,p.documentElement.offsetHeight,p.documentElement.clientHeight)}function y(e){var t,n,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=f(f({},{async:!0,defer:!1,callback:null,injectOnce:!0,debug:null}),o),r=p.createElement("script");r.src=e,r.async=!!o.async,r.defer=!!o.defer,t="nn-"+function(e){var t,n=0;if(0===e.length)return n;for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return Math.abs(n).toString(16)}(e),r.id=t,null==o.debug&&(o.debug=i.a),!1!==o.injectOnce&&p.getElementById(t)?o.debug("%c(WARN) Script Already Present: %c%s","color:red","font-weight:bold",e,t):(r.onload=function(){return o.debug("Script Loaded: %c%s","font-weight:bold",e,t)},"function"==typeof o.callback&&(r.onload=o.callback.call(this,e)),(n=p.getElementsByTagName("script")[0]).parentNode.insertBefore(r,n))}function m(e,t){var n,o,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(g.fetch&&"function"==typeof AbortController)return n=new AbortController,r&&(o=setTimeout(function(){n.abort()},r)),fetch(e,{signal:n.signal}).then(function(e){return clearTimeout(o),e.ok?e.json():Promise.reject(e)}).then(function(e){t(e)}).catch(function(e){t(e),console.error("nnAds:"+e)});var i=new XMLHttpRequest;i.overrideMimeType("application/json"),i.open("GET",e,!0),r&&(i.timeout=r),i.onerror=function(){t(new Error("Error occurred while fetching data"))},i.onreadystatechange=function(){4===i.readyState&&(200<=i.status&&i.status<300?t(JSON.parse(i.responseText)):(console.log("error",i),t(new Error("State Ready: Error occurred while fetching data"))))},i.send(null)}function w(e){"loading"!==p.readyState?e():p.addEventListener("DOMContentLoaded",function(){e()})}function C(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=p.createElement("img");t.width=1,t.height=1,t.style.display="none",t.src=nnads.script.domain+"/images/blank.png",t.src+=e?"?nnbranch=".concat(e):"?expire",w(function(){p.body.appendChild(t)})}function O(){return Math.max(g.innerWidth||p.documentElement.clientWidth||p.body.clientWidth)}function k(e){e=e.getBoundingClientRect();return e.top<window.innerHeight&&e.left<window.innerWidth&&0<e.top+e.height&&0<e.left+e.width}function j(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50;return 100===t?k(e):t<=o.elementInViewport(e)}},2:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"f",function(){return c}),n.d(t,"g",function(){return s});var t=n(3),a=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=-1<window.location.search.indexOf(e);return t?new URLSearchParams(window.location.search).get(e):n},n=(a("nndebug=1")&&Object(t.c)("nndebug","1",{"max-age":3600}),a("nndebug=0")&&Object(t.c)("nndebug","",{"max-age":0}),"1"===Object(t.b)("nndebug"));function u(){for(var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=void 0===t.title?"":t.title,o=void 0===t.style?"font-weight:bold;font-size:13px;color:green":t.style,t=void 0===t.dlevel?"log":t.dlevel,r=arguments.length,i=new Array(1<r?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];var a="string"==typeof i[0]?" "+i.shift():"";(e=console)[t].apply(e,["%c"+n+"%c"+a,o,""].concat(i))}var o=a("nndebug"),l=o&&!a("nndebug="),r=(l=l||n,a("nntest"));function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l&&u.apply(void 0,[{title:"nn__DEBUG:"}].concat(t))}function c(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];u.apply(void 0,[{title:e,dlevel:"info",style:"font-weight:bold;color:blue"}].concat(n))}function s(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=void 0===t.title?"":t.title,t=void 0===t.style?"font-weight:bold;font-size:13px;color:green":t.style,o=a(e),r=arguments.length,i=new Array(2<r?r-2:0),c=2;c<r;c++)i[c-2]=arguments[c];(o||l)&&u.apply(void 0,[{title:n||e.toUpperCase(),style:t}].concat(i))}i("Version:","1.26.2")},3:function(e,t,n){"use strict";function i(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function r(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){var t,n;t=o,n=r[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return u});var c=document;function o(e){e=c.cookie.match("(^|[^;]+)\\s*"+e+"\\s*=\\s*([^;]+)");return e?e.pop():null}function a(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=(o=(o=(o="")+(e+"="+t)+(";path="+(n=r(r({},{path:"/","max-age":60,samesite:"Lax",secure:!0}),n)).path))+(";max-age="+n["max-age"]))+(";samesite="+n.samesite);n.secure&&(o+=";secure"),c.cookie=o}function u(e){a(e,null,{"max-age":-1})}},52:function(e,t,n){e.exports=n(94)},6:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return d});var r=n(1),i=n(0);function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");this.cookieVersion="1.0",this.instanceID=Math.random().toString(36).slice(-4).toUpperCase(),this.serviceUrl="https://geoip.network-n.com",this.serviceCallTimeLimit=2e3,this.cookieMaxLifeInSeconds=604800,this.antiSpamCookieMaxLifeInSeconds=3600,this.cookieName="geo-store-location",this.antiSpamCookieName="geo-store-anti-spam"}var t,n,o;return t=e,(n=[{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];i.p.apply(void 0,["nndebug=geoip",{title:"nn__GEOIP[".concat(this.instanceID,"]:"),style:"font-weight:bold;font-size:13px;color:steelblue"}].concat(t))}},{key:"getLocationFromService",value:function(n){var o=this;this.debug("Call initiated to retrieve the location from service"),Object(r.l)(this.serviceUrl,function(e){e instanceof Error&&o.debug("[error occured while fetching location] - ".concat(e.message));var t=e.countryCode||"";t?(o.debug("Successfully retrieved the location from service"),o.saveLocationObj({countryCode:t,stateProvCode:e.stateProvCode||"",stateProv:e.stateProv||"",isEuMember:e.isEuMember||!1,version:o.cookieVersion})):(o.debug("Could not retrieve the location from service"),o.saveAntiSpamminCookie()),n()},this.serviceCallTimeLimit)}},{key:"allowedToCallService",value:function(){return this.debug("Checking to ensure we can call service at this time."),!Object(r.j)(this.antiSpamCookieName)||(this.debug("Anti-Spam: Not allowed to call service"),!1)}},{key:"saveAntiSpamminCookie",value:function(){Object(r.o)(this.antiSpamCookieName,"prevent-antispam",{"max-age":this.antiSpamCookieMaxLifeInSeconds}),this.debug("Saved the anti-spam cookie")}},{key:"cookieEncoder",value:function(t){var e=Object.keys(t);e.length&&e.forEach(function(e){t[e]=encodeURIComponent(t[e])})}},{key:"saveLocationObj",value:function(e){this.cookieEncoder(e),Object(r.o)(this.cookieName,JSON.stringify(e),{"max-age":this.cookieMaxLifeInSeconds}),this.debug("Saved the geoip cookie")}},{key:"getLocationFromCookie",value:function(){this.debug("Call initiated to retrieve the location from cookie");var e={},t=Object(r.j)(this.cookieName);if(t)try{e=JSON.parse(decodeURIComponent(t))}catch(e){Object(r.d)(this.cookieName),this.debug("could not parse location cookie")}return e}},{key:"cookieVersionUpToDate",value:function(e){return e.version&&e.version===this.cookieVersion?(this.debug("location cookie version: ".concat(e.version," matches the required version: ").concat(this.cookieVersion)),!0):(this.debug("FETCH NEW : location cookie version is ".concat(e.version," but the required is ").concat(this.cookieVersion)),!1)}},{key:"getLocation",value:function(e){function t(e){n.debug("location object retrieved",e)}var n=this,o=this.getLocationFromCookie();o.countryCode&&this.cookieVersionUpToDate(o)?(t(o),e(o)):this.allowedToCallService()?this.getLocationFromService(function(){o=n.getLocationFromCookie(),t(o),e(o)}):(t({}),e({}))}}])&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function u(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach(function(e){var t,n;t=o,n=r[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}var l=function(e){var t=e;return Array.isArray(e)&&-1===e[0].indexOf(",")?e:"string"==typeof(t=void 0!==e[0]&&-1<e[0].indexOf(",")?e[0]:t)?t.replace(/[^(a-zA-Z)|,]/gi,"").toUpperCase().split(","):[]},s=function(n,t,e,o){function r(e,t){n.debug("".concat(e," allowed?"),t),t||n.debug("Exclude List:",i)}var i=e&&l(e);i.length?n.getLocation(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e.countryCode&&i.includes(e.countryCode)?(r(t,!1),o(!1,e)):(r(t,!0),o(!0,e))}):(n.debug("GEOIP - excluded countries not applicable - list length: ",i.length),r(t,!0),o(!0,null))};function d(t){t=u(u({},{countryCodes:[],debug:null,filterType:"exclude",callback:null}),t);var r=new o;if("function"!=typeof t.debug?t.debug=function(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.debug).call.apply(e,[r].concat(n))}:"function"==typeof t.debug&&(r.debug=t.debug),t.countryCodes=l(t.countryCodes),t.countryCodes.length<1)return t.debug("No valid country codes to check against.");r.getLocation(function(e){return"include"===t.filterType&&!1===t.countryCodes.includes(e.countryCode)?t.debug("GEO INCLUDE - Country Code (".concat(e.countryCode,") match NOT FOUND in list:"),t.countryCodes):"exclude"===t.filterType&&!0===t.countryCodes.includes(e.countryCode)?t.debug("GEO EXCLUDE - Country Code (".concat(e.countryCode,") FOUND in list:"),t.countryCodes):(t.debug("GEO - Country Code (".concat(e.countryCode,") allowed for this callback.")),void(t.callback&&t.callback(e)))})}},94:function(e,t,n){"use strict";n.r(t);function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.p.apply(void 0,["nndebug=iiq",{title:"nn__IntentIQ:",style:"font-weight:bold;font-size:13px;color:pink;"}].concat(t))}var o=n(0),i=n(6),c=window,a=(c.pbjs=c.pbjs||{que:[]},c.pbjs.que.push(function(){c.pbjs.onEvent("bidWon",function(e){var t=null==(t=o.d.modules["intent-iq"])?void 0:t.instance,n={biddingPlatformId:1,partnerAuctionId:e.auctionId,bidderCode:e.bidderCode,prebidAuctionId:e.auctionId,cpm:e.cpm,currency:e.currency,originalCpm:e.originalCpm,originalCurrency:e.originalCurrency,status:e.status,placementId:e.adUnitCode};t&&(t.reportExternalWin(n),r("Prebid won for ".concat(e.adUnitCode," @ cpm ").concat(e.cpm),n))})}),o.d.modules["intent-iq"]),u=window.googletag||{cmd:[]};Object(o.q)(nnads.script.domain+"/external-scripts/intentiq-tag.js"),o.c.push("intent-iq",function(){var e=new o.a;e.debug=r,e.ready(function(){Object(i.b)({countryCodes:["US"],debug:r,filterType:"include",callback:function(e){nnads.fn.callIntentIQ=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(!window.IntentIqObject)return"function"==typeof t&&t(),r("No IntentIQ function found");r("IntentIQ Call started...");var n=Date.now(),e=a.timeout||1e3,e={partner:1663834226,pbjs:window.pbjs,shouldClearDuplicatresForRubicon:!0,shouldFilerTdidFromPPuid:!1,manualWinReportEnabled:!0,browserBlackList:"chrome",domainName:window.location.hostname,callback:function(e){r("IntentIQ IDs:",e),r("IntentIQ Time Taken: %sms",Date.now()-n),setTimeout(function(){var e,t=null==a||null==(e=a.instance)||null==(e=e.intentIqConfig)||null==(e=e.abTesting)?void 0:e.currentTestGroup;t&&(r("AB Test Group:",t),u.cmd.push(function(){u.pubads().setTargeting("iiq_test_group",t.toUpperCase())}))},0),"function"==typeof t&&t()},timeoutInMillis:e},o=null!=(o=a.abtestPercentage)?o:95;return o&&(e.abPercentage=o,e.ABTestingConfigurationSource="percentage",r("IntentIQ A/B test initiated at percentage ".concat(o))),new IntentIqObject(e)}}})})})}});