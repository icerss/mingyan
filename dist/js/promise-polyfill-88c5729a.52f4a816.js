/*!
 * ERSS SAYING
 * (c) 2020-2023 Xhemj
 * Build: 2023-3-4 11:45:11
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["promise-polyfill-88c5729a"],{"54e4":function(e,t,n){"use strict";n.r(t);var r=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))};var o=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var u=0;u<r.length;u++)i(u,r[u])}))},i=setTimeout;function u(e){return Boolean(e&&void 0!==e.length)}function f(){}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function a(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}l(t.promise,r)}else(1===e._state?l:s)(t.promise,e._value)}))):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof c)return e._state=3,e._value=t,void d(e);if("function"==typeof n)return void p((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,d(e)}catch(t){s(e,t)}var r,o}function s(e,t){e._state=2,e._value=t,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&c._immediateFn((function(){e._handled||c._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function h(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1;try{e((function(e){n||(n=!0,l(t,e))}),(function(e){n||(n=!0,s(t,e))}))}catch(e){if(n)return;n=!0,s(t,e)}}c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var n=new this.constructor(f);return a(this,new h(e,t,n)),n},c.prototype.finally=r,c.all=function(e){return new c((function(t,n){if(!u(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var f=u.then;if("function"==typeof f)return void f.call(u,(function(t){i(e,t)}),n)}r[e]=u,0==--o&&t(r)}catch(e){n(e)}}for(var f=0;f<r.length;f++)i(f,r[f])}))},c.allSettled=o,c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c((function(t){t(e)}))},c.reject=function(e){return new c((function(t,n){n(e)}))},c.race=function(e){return new c((function(t,n){if(!u(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)c.resolve(e[r]).then(t,n)}))},c._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){i(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};t.default=c}}]);