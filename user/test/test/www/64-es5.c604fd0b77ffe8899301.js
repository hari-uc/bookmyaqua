!function(){function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},r=Object.prototype,o=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var n=e&&e.prototype instanceof p?e:p,a=Object.create(n.prototype),i=new O(o||[]);return a._invoke=function(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return S()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=l(t,e,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=d;var h={};function p(){}function m(){}function u(){}var f={};c(f,a,function(){return this});var b=Object.getPrototypeOf,y=b&&b(b(E([])));y&&y!==r&&o.call(y,a)&&(f=y);var v=u.prototype=p.prototype=Object.create(f);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function g(t,e){function r(n,a,i,s){var c=l(t[n],t,a);if("throw"!==c.type){var d=c.arg,h=d.value;return h&&"object"==typeof h&&o.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,s)},function(t){r("throw",t,i,s)}):e.resolve(h).then(function(t){d.value=t,i(d)},function(t){return r("throw",t,i,s)})}s(c.arg)}var n;this._invoke=function(t,o){function a(){return new e(function(e,n){r(t,o,e,n)})}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=u,c(v,"constructor",u),c(u,"constructor",m),m.displayName=c(u,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,c(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},w(g.prototype),c(g.prototype,i,function(){return this}),t.AsyncIterator=g,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new g(d(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(v),c(v,s,"Generator"),c(v,a,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=E,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;j(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function r(t,e,r,o,n,a,i){try{var s=t[a](i),c=s.value}catch(d){return void r(d)}s.done?e(c):Promise.resolve(c).then(o,n)}function o(t){return function(){var e=this,o=arguments;return new Promise(function(n,a){var i=t.apply(e,o);function s(t){r(i,n,a,s,c,"next",t)}function c(t){r(i,n,a,s,c,"throw",t)}s(void 0)})}}function n(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{TvZU:function(r,a,i){"use strict";i.r(a),i.d(a,"ion_modal",function(){return x});var s=i("wEJo"),c=i("E/Mt"),d=i("spDm"),l=i("f9PN"),h=i("74mu"),p=i("qb1Q"),m=i("Kfhc"),u=i("bC4P"),f=i("KF81"),b=i("W6o/");i("B4Jq"),i("y08P");var y=function(t,e){var r=Object(m.a)().addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o=Object(m.a)().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),n=Object(m.a)().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(e){var a=window.innerWidth<768,i="ION-MODAL"===e.tagName&&void 0!==e.presentingElement,s=Object(m.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),c=document.body;if(a){var d=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",l="translateY(".concat(i?"-10px":d,") scale(0.93)");s.afterStyles({transform:l}).beforeAddWrite(function(){return c.style.setProperty("background-color","black")}).addElement(e).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:l,borderRadius:"10px 10px 0 0"}]),n.addAnimation(s)}else if(n.addAnimation(r),i){var h="translateY(-10px) scale(".concat(i?.93:1,")");s.afterStyles({transform:h}).addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:h}]);var p=Object(m.a)().afterStyles({transform:h}).addElement(e.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:h}]);n.addAnimation([s,p])}else o.fromTo("opacity","0","1")}else n.addAnimation(r);return n},v=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,o=Object(m.a)().addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n=Object(m.a)().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),a=Object(m.a)().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(n);if(e){var i=window.innerWidth<768,s="ION-MODAL"===e.tagName&&void 0!==e.presentingElement,c=Object(m.a)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(function(t){1===t&&(e.style.setProperty("overflow",""),Array.from(d.querySelectorAll("ion-modal")).filter(function(t){return void 0!==t.presentingElement}).length<=1&&d.style.setProperty("background-color",""))}),d=document.body;if(i){var l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",h="translateY(".concat(s?"-10px":l,") scale(0.93)");c.addElement(e).keyframes([{offset:0,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),a.addAnimation(c)}else if(a.addAnimation(o),s){var p="translateY(-10px) scale(".concat(s?.93:1,")");c.addElement(e.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:p},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var u=Object(m.a)().addElement(e.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:p},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);a.addAnimation([c,u])}else n.fromTo("opacity","1","0")}else a.addAnimation(o);return a},w=function(t){var e=Object(m.a)(),r=Object(m.a)(),o=Object(m.a)();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),e.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,o])},g=function(t){var e=Object(m.a)(),r=Object(m.a)(),o=Object(m.a)(),n=t.querySelector(".modal-wrapper");return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(n).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),e.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,o])},x=function(){function r(t){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),Object(s.o)(this,t),this.didPresent=Object(s.g)(this,"ionModalDidPresent",7),this.willPresent=Object(s.g)(this,"ionModalWillPresent",7),this.willDismiss=Object(s.g)(this,"ionModalWillDismiss",7),this.didDismiss=Object(s.g)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){e.dismiss(void 0,l.a)},this.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),e.dismiss()},this.onLifecycle=function(t){var r=e.usersElement,o=k[t.type];if(r&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});r.dispatchEvent(n)}}}var a,i,m,x,j;return a=r,i=[{key:"swipeToCloseChanged",value:function(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}},{key:"connectedCallback",value:function(){Object(l.f)(this.el)}},{key:"present",value:(j=o(e().mark(function t(){var r,o,n=this;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.presented){t.next=2;break}return t.abrupt("return");case 2:if(r=this.el.querySelector(".modal-wrapper")){t.next=5;break}throw new Error("container is undefined");case 5:return o=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),t.next=8,Object(d.a)(this.delegate,r,this.component,["ion-page"],o);case 8:return this.usersElement=t.sent,t.next=11,Object(p.f)(this.usersElement);case 11:return Object(s.f)(function(){return n.el.classList.add("show-modal")}),t.next=14,Object(l.e)(this,"modalEnter",y,w,this.presentingElement);case 14:this.swipeToClose&&this.initSwipeToClose();case 15:case"end":return t.stop()}},t,this)})),function(){return j.apply(this,arguments)})},{key:"initSwipeToClose",value:function(){var t=this;if("ios"===Object(c.b)(this)){var r,n,a,i,s,d=this.leaveAnimation||c.c.get("modalLeave",v),l=this.animation=d(this.el,this.presentingElement);this.gesture=(r=this.el,n=l,a=r.offsetHeight,i=!1,s=Object(f.createGesture)({el:r,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(t){var e=t.event.target;return null===e||!e.closest||null===e.closest("ion-content, ion-footer")},onStart:function(){n.progressStart(!0,i?1:0)},onMove:function(t){var e=Object(b.k)(1e-4,t.deltaY/a,.9999);n.progressStep(e)},onEnd:function(r){var c=r.velocityY,d=Object(b.k)(1e-4,r.deltaY/a,.9999),l=(r.deltaY+1e3*c)/a>=.5,h=l?-.001:.001;l?(n.easing("cubic-bezier(0.32, 0.72, 0, 1)"),h+=Object(u.a)([0,0],[.32,.72],[0,1],[1,1],d)[0]):(n.easing("cubic-bezier(1, 0, 0.68, 0.28)"),h+=Object(u.a)([0,0],[1,0],[.68,.28],[1,1],d)[0]);var p=function(t,e){return Object(b.k)(400,t/Math.abs(1.1*e),500)}(l?d*a:(1-d)*a,c);i=l,s.enable(!1),n.onFinish(function(){l||s.enable(!0)}).progressEnd(l?1:0,h,p),l&&(t.gestureAnimationDismissing=!0,t.animation.onFinish(o(e().mark(function r(){return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dismiss(void 0,"gesture");case 2:t.gestureAnimationDismissing=!1;case 3:case"end":return e.stop()}},r)}))))}})),this.gesture.enable(!0)}}},{key:"dismiss",value:(x=o(e().mark(function t(r,o){var n,a;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.gestureAnimationDismissing||"gesture"===o){t.next=2;break}return t.abrupt("return",!1);case 2:return n=l.i.get(this)||[],t.next=5,Object(l.g)(this,r,o,"modalLeave",v,g,this.presentingElement);case 5:if(a=t.sent,t.t0=a,!t.t0){t.next=12;break}return t.next=10,Object(d.b)(this.delegate,this.usersElement);case 10:this.animation&&this.animation.destroy(),n.forEach(function(t){return t.destroy()});case 12:return this.animation=void 0,t.abrupt("return",a);case 14:case"end":return t.stop()}},t,this)})),function(t,e){return x.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(l.h)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(l.h)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var e,r=this.htmlAttributes,o=Object(c.b)(this);return Object(s.j)(s.c,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},r,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((e={},t(e,o,!0),t(e,"modal-card",void 0!==this.presentingElement&&"ios"===o),e),Object(h.b)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),Object(s.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===o&&Object(s.j)("div",{class:"modal-shadow"}),Object(s.j)("div",{tabindex:"0"}),Object(s.j)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),Object(s.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(s.k)(this)}}],m=[{key:"watchers",get:function(){return{swipeToClose:["swipeToCloseChanged"]}}}],i&&n(a.prototype,i),m&&n(a,m),Object.defineProperty(a,"prototype",{writable:!1}),r}(),k={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};x.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}])}();