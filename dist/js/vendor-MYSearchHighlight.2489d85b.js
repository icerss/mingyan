/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-4-6 08:27:28
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["vendor-MYSearchHighlight"],{6370:function(e,t,r){var n=r("8735"),i=r("3b43"),c=r("fec2").MISSED_STICKY,o=r("8ad4"),f=r("98fb").f,a=r("ef7c").get,s=RegExp.prototype,u=n.TypeError;i&&c&&f(s,"sticky",{configurable:!0,get:function(){if(this!==s){if("RegExp"===o(this))return!!a(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"87bf":function(e,t,r){var n=r("3b43"),i=r("8735"),c=r("ce5b"),o=r("4a63"),f=r("55f9"),a=r("ee7c"),s=r("98fb").f,u=r("a9c5").f,g=r("a7b6"),p=r("485c"),l=r("3ffc"),h=r("23f2"),d=r("fec2"),b=r("ef11"),E=r("9ad2"),v=r("6c75"),y=r("ef7c").enforce,w=r("5763"),x=r("d0ff"),R=r("3c7e"),S=r("99b3"),k=x("match"),I=i.RegExp,A=I.prototype,T=i.SyntaxError,m=c(h),Y=c(A.exec),D=c("".charAt),M=c("".replace),_=c("".indexOf),q=c("".slice),C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,J=/a/g,K=/a/g,O=new I(J)!==J,P=d.MISSED_STICKY,U=d.UNSUPPORTED_Y,H=n&&(!O||P||R||S||E((function(){return K[k]=!1,I(J)!=J||I(K)==K||"/a/i"!=I(J,"i")})));if(o("RegExp",H)){for(var N=function(e,t){var r,n,i,c,o,s,u=g(A,this),h=p(e),d=void 0===t,b=[],E=e;if(!u&&h&&d&&e.constructor===N)return e;if((h||g(A,e))&&(e=e.source,d&&(t="flags"in E?E.flags:m(E))),e=void 0===e?"":l(e),t=void 0===t?"":l(t),E=e,R&&"dotAll"in J&&(n=!!t&&_(t,"s")>-1)&&(t=M(t,/s/g,"")),r=t,P&&"sticky"in J&&(i=!!t&&_(t,"y")>-1)&&U&&(t=M(t,/y/g,"")),S&&(e=(c=function(e){for(var t,r=e.length,n=0,i="",c=[],o={},f=!1,a=!1,s=0,u="";n<=r;n++){if("\\"===(t=D(e,n)))t+=D(e,++n);else if("]"===t)f=!1;else if(!f)switch(!0){case"["===t:f=!0;break;case"("===t:Y(C,q(e,n+1))&&(n+=2,a=!0),i+=t,s++;continue;case">"===t&&a:if(""===u||v(o,u))throw new T("Invalid capture group name");o[u]=!0,c[c.length]=[u,s],a=!1,u="";continue}a?u+=t:i+=t}return[i,c]}(e))[0],b=c[1]),o=f(I(e,t),u?this:A,N),(n||i||b.length)&&(s=y(o),n&&(s.dotAll=!0,s.raw=N(function(e){for(var t,r=e.length,n=0,i="",c=!1;n<=r;n++)"\\"!==(t=D(e,n))?c||"."!==t?("["===t?c=!0:"]"===t&&(c=!1),i+=t):i+="[\\s\\S]":i+=t+D(e,++n);return i}(e),r)),i&&(s.sticky=!0),b.length&&(s.groups=b)),e!==E)try{a(o,"source",""===E?"(?:)":E)}catch(e){}return o},j=function(e){e in N||s(N,e,{configurable:!0,get:function(){return I[e]},set:function(t){I[e]=t}})},z=u(I),B=0;z.length>B;)j(z[B++]);A.constructor=N,N.prototype=A,b(i,"RegExp",N)}w("RegExp")},cea3:function(e,t,r){var n=r("8735"),i=r("3b43"),c=r("3c7e"),o=r("8ad4"),f=r("98fb").f,a=r("ef7c").get,s=RegExp.prototype,u=n.TypeError;i&&c&&f(s,"dotAll",{configurable:!0,get:function(){if(this!==s){if("RegExp"===o(this))return!!a(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})}}]);