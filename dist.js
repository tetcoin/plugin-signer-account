!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=4)}([function(e,t){e.exports=React},function(e,t,n){e.exports=n(6)()},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=v[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],t));v[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u=i[1],s=i[2],c=i[3],f={css:u,media:s,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}function i(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function u(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function f(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=g++;n=m||(m=u(t)),r=l.bind(null,n,c,!1),o=l.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=d.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=_(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}var v={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),y=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,g=0,b=[],_=n(16);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],s=v[u.id];s.refs--,i.push(s)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete v[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(5),i=r(o),a=n(23),u=r(a);if("undefined"==typeof window||void 0===window.parity||"function"!=typeof window.parity.extendShell)throw new Error("Unable unable to register Parity Signer plugin, the window.parity.extendShell function is not exposed.");window.parity.extendShell({type:"signer",component:i.default,isHandler:u.default})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(e.accounts,e.className),n=(e.date,e.gasLimit,e.isFocussed,e.isSending,e.netVersion,e.onConfirm,e.onReject,e.payload);e.origin,n.sendTransaction||n.signTransaction;return a.default.createElement(c.default,{className:t},a.default.createElement(TransactionMainDetails,null))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(0),a=r(i),u=n(1),s=(r(u),n(10)),c=r(s)},function(e,t,n){"use strict";var r=n(7),o=n(8),i=n(9);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,r,i,a,u,s],l=0;c=new Error(t.replace(/%s/g,function(){return f[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(11),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.className,n=e.children;return a.default.createElement("div",{className:p.default.signerLayout+" "+t},n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(0),a=r(i),u=n(1),s=(r(u),n(12)),c=r(s),f=n(17),l=r(f),d=n(21),p=r(d);o.Main=c.default,o.Side=l.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(13),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:c.default.signerMain+" "+n},t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(0),a=r(i),u=n(1),s=(r(u),n(14)),c=r(s)},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,".main_signerMain_5tWl1OqXXG{flex:1;overflow:auto}",""]),t.locals={signerMain:"main_signerMain_5tWl1OqXXG"}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(18),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.children,n=e.className;return a.default.createElement("div",{className:c.default.signerSide+" "+n},t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(0),a=r(i),u=n(1),s=(r(u),n(19)),c=r(s)},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,".side_signerSide_1pMB3envw6{box-sizing:border-box;padding:1em 0 0 2em;flex:0 0 270px}",""]),t.locals={signerSide:"side_signerSide_1pMB3envw6"}},function(e,t,n){var r=n(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,".layout_signerLayout_2Dce-l-NPu{display:flex;padding:1.5em 1em 1.5em 0}.layout_signerLayout_2Dce-l-NPu>*{vertical-align:middle}",""]),t.locals={signerLayout:"layout_signerLayout_2Dce-l-NPu"}},function(e,t,n){"use strict";function r(e,t){return!(!e.sendTransaction&&!e.signTransaction)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}]);
//# sourceMappingURL=dist.js.map