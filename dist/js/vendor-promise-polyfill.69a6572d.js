/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-3-6 22:14:51
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["vendor-promise-polyfill"],{"0261":function(e,t,n){"use strict";n.r(t);var o=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))};var r=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,(function(t){i(e,t)}),(function(n){o[e]={status:"rejected",reason:n},0==--r&&t(o)}))}o[e]={status:"fulfilled",value:n},0==--r&&t(o)}for(var u=0;u<o.length;u++)i(u,o[u])}))},i=setTimeout,u="undefined"!=typeof setImmediate?setImmediate:null;function f(e){return Boolean(e&&void 0!==e.length)}function c(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],v(e,this)}function l(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void d(t.promise,e)}s(t.promise,o)}else(1===e._state?s:d)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void h(e);if("function"==typeof n)return void v((o=n,r=t,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=t,h(e)}catch(t){d(e,t)}var o,r}function d(e,t){e._state=2,e._value=t,h(e)}function h(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)l(e,e._deferreds[t]);e._deferreds=null}function p(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function v(e,t){var n=!1;try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,d(t,e))}))}catch(e){if(n)return;n=!0,d(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(c);return l(this,new p(e,t,n)),n},a.prototype.finally=o,a.all=function(e){return new a((function(t,n){if(!f(e))return n(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var f=u.then;if("function"==typeof f)return void f.call(u,(function(t){i(e,t)}),n)}o[e]=u,0==--r&&t(o)}catch(e){n(e)}}for(var u=0;u<o.length;u++)i(u,o[u])}))},a.allSettled=r,a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){if(!f(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,r=e.length;o<r;o++)a.resolve(e[o]).then(t,n)}))},a._immediateFn="function"==typeof u&&function(e){u(e)}||function(e){i(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};t.default=a}}]);