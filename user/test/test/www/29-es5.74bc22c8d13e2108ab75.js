!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new M(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=l;var f={};function p(){}function d(){}function h(){}var g={};u(g,i,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(k([])));v&&v!==n&&r.call(v,i)&&(g=v);var y=h.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):e.resolve(f).then(function(t){l.value=t,a(l)},function(t){return n("throw",t,a,c)})}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e(function(e,o){n(t,r,e,o)})}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=h,u(y,"constructor",h),u(h,"constructor",d),d.displayName=u(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,a,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},b(y),u(y,c,"Generator"),u(y,i,function(){return this}),u(y,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"1ar1":function(n,o,i){"use strict";i.r(o),i.d(o,"PasswordOtpPageModule",function(){return O});var a,c,u,l=i("ofXK"),s=i("3Pt+"),f=i("TEn/"),p=i("tyNb"),d=i("mrSG"),h=i("H+bZ"),g=i("2Rin"),m=i("fXoL"),v=["a"],y=["b"],b=["c"],w=["d"],x=[{path:"",component:(a=function(){function n(t,r,o,i){e(this,n),this.nav=t,this.menu=r,this.api=o,this.util=i,this.otp={},this.err={},this.menu.enable(!1)}return r(n,[{key:"ngOnInit",value:function(){var t=this;setTimeout(function(){t.a.setFocus()},150)}},{key:"moveFocus",value:function(t,e,n){8==t.keyCode&&n?n.setFocus():t.keyCode>=48&&t.keyCode<=57?e&&e.setFocus():t.path[0].value=""}},{key:"sendOtp",value:function(){var e=this;this.otp=this.otp.a+this.otp.b+this.otp.c+this.otp.d;var n={otp:this.otp,phone_no:this.api.phone_no,type:0};this.util.presentLoading(),this.api.postData("forgot/validate",n).subscribe(function(n){return Object(d.a)(e,void 0,void 0,t().mark(function e(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.dismissLoading();case 2:n.success&&(localStorage.setItem("otpToken",n.data.token),localStorage.setItem("token",n.data.token)),this.nav.navigateForward("/change-password");case 4:case"end":return t.stop()}},e,this)}))},function(t){e.err=t.error.errors||t.error.message,e.util.presentToast(e.err)})}}]),n}(),a.\u0275fac=function(t){return new(t||a)(m["\u0275\u0275directiveInject"](f.Q),m["\u0275\u0275directiveInject"](f.O),m["\u0275\u0275directiveInject"](h.a),m["\u0275\u0275directiveInject"](g.a))},a.\u0275cmp=m["\u0275\u0275defineComponent"]({type:a,selectors:[["app-password-otp"]],viewQuery:function(t,e){var n;1&t&&(m["\u0275\u0275viewQuery"](v,3),m["\u0275\u0275viewQuery"](y,3),m["\u0275\u0275viewQuery"](b,3),m["\u0275\u0275viewQuery"](w,3)),2&t&&(m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(e.a=n.first),m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(e.b=n.first),m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(e.c=n.first),m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(e.d=n.first))},decls:24,vars:12,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[1,"content-section","ion-padding"],[1,"title","ion-text-center","margin-top-32","margin-bottom-13"],[1,"text","ion-text-center"],[1,"otp-input-div"],["maxlength","1","type","tel","autofocus","","name","a",3,"ngModel","ngModelChange","keyup"],["a",""],["name","b","type","tel","maxlength","1",3,"ngModel","ngModelChange","keyup"],["b",""],["name","c","type","tel","maxlength","1",3,"ngModel","ngModelChange","keyup"],["c",""],["name","d","type","tel","maxlength","1",3,"ngModel","ngModelChange","keyup"],["d",""],[1,"time"],[1,"did-not-received"],["mode","md","expand","full","shape","round","fill","solid",1,"btn-login","ion-text-capitalize",3,"click"]],template:function(t,e){if(1&t){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-header",0),m["\u0275\u0275elementStart"](1,"ion-toolbar",1),m["\u0275\u0275elementStart"](2,"ion-buttons",2),m["\u0275\u0275element"](3,"ion-back-button",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-content"),m["\u0275\u0275elementStart"](5,"div",4),m["\u0275\u0275elementStart"](6,"h2",5),m["\u0275\u0275text"](7,"Phone Verification"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"p",6),m["\u0275\u0275text"](9," Enter your OTP code here "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"div",7),m["\u0275\u0275elementStart"](11,"ion-input",8,9),m["\u0275\u0275listener"]("ngModelChange",function(t){return e.otp.a=t})("keyup",function(t){m["\u0275\u0275restoreView"](n);var r=m["\u0275\u0275reference"](14);return e.moveFocus(t,r,"")}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"ion-input",10,11),m["\u0275\u0275listener"]("ngModelChange",function(t){return e.otp.b=t})("keyup",function(t){m["\u0275\u0275restoreView"](n);var r=m["\u0275\u0275reference"](16),o=m["\u0275\u0275reference"](12);return e.moveFocus(t,r,o)}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"ion-input",12,13),m["\u0275\u0275listener"]("ngModelChange",function(t){return e.otp.c=t})("keyup",function(t){m["\u0275\u0275restoreView"](n);var r=m["\u0275\u0275reference"](18),o=m["\u0275\u0275reference"](14);return e.moveFocus(t,r,o)}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"ion-input",14,15),m["\u0275\u0275listener"]("ngModelChange",function(t){return e.otp.d=t})("keyup",function(t){m["\u0275\u0275restoreView"](n);var r=m["\u0275\u0275reference"](16);return e.moveFocus(t,"",r)}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](19,"p",16),m["\u0275\u0275elementStart"](20,"p",17),m["\u0275\u0275text"](21,"Didn\u2019t you received any code?"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"ion-button",18),m["\u0275\u0275listener"]("click",function(){return e.sendOtp()}),m["\u0275\u0275text"](23," Verify OTP "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}2&t&&(m["\u0275\u0275advance"](11),m["\u0275\u0275classProp"]("active",e.otp.a),m["\u0275\u0275property"]("ngModel",e.otp.a),m["\u0275\u0275advance"](2),m["\u0275\u0275classProp"]("active",e.otp.b),m["\u0275\u0275property"]("ngModel",e.otp.b),m["\u0275\u0275advance"](2),m["\u0275\u0275classProp"]("active",e.otp.c),m["\u0275\u0275property"]("ngModel",e.otp.c),m["\u0275\u0275advance"](2),m["\u0275\u0275classProp"]("active",e.otp.d),m["\u0275\u0275property"]("ngModel",e.otp.d))},directives:[f.p,f.K,f.h,f.e,f.f,f.k,f.r,f.V,s.b,s.e,s.h,f.g],styles:['ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border-radius:none;box-shadow:none}ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:var(--blue)}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;font-family:rubik_md;color:var(--my_theme)}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:15px;font-family:rubik_r;color:var(--gray);margin-bottom:52px}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{text-align:center;font-size:16px;font-family:rubik_md;color:var(--blue);margin-top:24px}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .did-not-received[_ngcontent-%COMP%]{text-align:center;font-size:14px;font-family:rubik_md;color:var(--blue);margin-top:40px;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]{--color:var(--white);--background:var(--my_theme);--box-shadow:none;height:44px;font-size:16px;font-family:rubik_md;margin-top:40px}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]{--color:var(--my_theme);font-size:14px;font-family:rubik_md;height:auto;width:auto;--padding-start:0;--padding-end:0;text-transform:inherit;margin:0}ion-content[_ngcontent-%COMP%]   .otp-input-div[_ngcontent-%COMP%]{display:flex;justify-content:space-around}ion-content[_ngcontent-%COMP%]   .otp-input-div[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-start:0;--background:var(--div_back);--placeholder-color:var(--lht_blue);--placeholder-font-style:"rubik_r";min-height:44px;min-width:44px;max-width:44px;max-height:44px;border-radius:22px;text-align:center;color:var(--lht_blue);font-size:22px;font-family:rubik_r;height:48px}ion-content[_ngcontent-%COMP%]   .otp-input-div[_ngcontent-%COMP%]   ion-input.active[_ngcontent-%COMP%]{background:var(--my_theme);color:var(--white)}']}),a)}],_=((u=r(function t(){e(this,t)})).\u0275fac=function(t){return new(t||u)},u.\u0275mod=m["\u0275\u0275defineNgModule"]({type:u}),u.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[p.i.forChild(x)],p.i]}),u),O=((c=r(function t(){e(this,t)})).\u0275fac=function(t){return new(t||c)},c.\u0275mod=m["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[l.b,s.a,f.L,_]]}),c)}}])}();