/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-3-6 22:14:51
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["vendor-MYSearchHighlight"],{4278:function(e,t,r){var n=r("72ae"),i=r("7adc"),c=r("ad5f"),o=r("7928"),a=r("a9c9").f,f=r("2719").get,s=RegExp.prototype,u=n.TypeError;i&&c&&a(s,"dotAll",{configurable:!0,get:function(){if(this!==s){if("RegExp"===o(this))return!!f(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},"5de7":function(e,t,r){var n=r("7adc"),i=r("72ae"),c=r("b2e7"),o=r("ccb6"),a=r("9e41"),f=r("8d99"),s=r("a9c9").f,u=r("d2a3").f,g=r("7b4c"),p=r("3df9"),l=r("3727"),d=r("9b2d"),h=r("81f5"),E=r("fc96"),v=r("73d2"),y=r("9056"),b=r("2719").enforce,w=r("5b38"),x=r("ec39"),R=r("ad5f"),S=r("7576"),k=x("match"),I=i.RegExp,A=I.prototype,T=i.SyntaxError,m=c(d),Y=c(A.exec),D=c("".charAt),M=c("".replace),_=c("".indexOf),q=c("".slice),C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,J=/a/g,K=/a/g,O=new I(J)!==J,P=h.MISSED_STICKY,U=h.UNSUPPORTED_Y,H=n&&(!O||P||R||S||v((function(){return K[k]=!1,I(J)!=J||I(K)==K||"/a/i"!=I(J,"i")})));if(o("RegExp",H)){for(var N=function(e,t){var r,n,i,c,o,s,u=g(A,this),d=p(e),h=void 0===t,E=[],v=e;if(!u&&d&&h&&e.constructor===N)return e;if((d||g(A,e))&&(e=e.source,h&&(t="flags"in v?v.flags:m(v))),e=void 0===e?"":l(e),t=void 0===t?"":l(t),v=e,R&&"dotAll"in J&&(n=!!t&&_(t,"s")>-1)&&(t=M(t,/s/g,"")),r=t,P&&"sticky"in J&&(i=!!t&&_(t,"y")>-1)&&U&&(t=M(t,/y/g,"")),S&&(e=(c=function(e){for(var t,r=e.length,n=0,i="",c=[],o={},a=!1,f=!1,s=0,u="";n<=r;n++){if("\\"===(t=D(e,n)))t+=D(e,++n);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:Y(C,q(e,n+1))&&(n+=2,f=!0),i+=t,s++;continue;case">"===t&&f:if(""===u||y(o,u))throw new T("Invalid capture group name");o[u]=!0,c[c.length]=[u,s],f=!1,u="";continue}f?u+=t:i+=t}return[i,c]}(e))[0],E=c[1]),o=a(I(e,t),u?this:A,N),(n||i||E.length)&&(s=b(o),n&&(s.dotAll=!0,s.raw=N(function(e){for(var t,r=e.length,n=0,i="",c=!1;n<=r;n++)"\\"!==(t=D(e,n))?c||"."!==t?("["===t?c=!0:"]"===t&&(c=!1),i+=t):i+="[\\s\\S]":i+=t+D(e,++n);return i}(e),r)),i&&(s.sticky=!0),E.length&&(s.groups=E)),e!==v)try{f(o,"source",""===v?"(?:)":v)}catch(e){}return o},j=function(e){e in N||s(N,e,{configurable:!0,get:function(){return I[e]},set:function(t){I[e]=t}})},z=u(I),B=0;z.length>B;)j(z[B++]);A.constructor=N,N.prototype=A,E(i,"RegExp",N)}w("RegExp")},"6c2e":function(e,t,r){var n=r("72ae"),i=r("7adc"),c=r("81f5").MISSED_STICKY,o=r("7928"),a=r("a9c9").f,f=r("2719").get,s=RegExp.prototype,u=n.TypeError;i&&c&&a(s,"sticky",{configurable:!0,get:function(){if(this!==s){if("RegExp"===o(this))return!!f(this).sticky;throw u("Incompatible receiver, RegExp required")}}})}}]);