!function(){function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var i=e&&e.prototype instanceof f?e:f,o=Object.create(i.prototype),a=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return S()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=c;var u={};function f(){}function d(){}function p(){}var v={};l(v,o,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(H([])));m&&m!==e&&n.call(m,o)&&(v=m);var y=p.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){function r(i,o,a,s){var l=h(t[i],t,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then(function(t){r("next",t,a,s)},function(t){r("throw",t,a,s)}):e.resolve(u).then(function(t){c.value=t,a(c)},function(t){return r("throw",t,a,s)})}s(l.arg)}var i;this._invoke=function(t,n){function o(){return new e(function(e,i){r(t,n,e,i)})}return i=i?i.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function H(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=p,l(y,"constructor",p),l(p,"constructor",d),d.displayName=l(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new b(c(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(y),l(y,s,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=H,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:H(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function n(t,e,r,n,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,l,"next",t)}function l(t){n(a,i,o,s,l,"throw",t)}s(void 0)})}}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"8Mb5":function(e,n,a){"use strict";a.r(n),a.d(n,"ion_virtual_scroll",function(){return f});var s=a("wEJo"),l=a("W6o/"),c=function(t,e){var r=h(t,e);return r&&t.ownerDocument?t.ownerDocument.importNode(r.content,!0).children[0]:null},h=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},u=function(t,e,r,n,i,o,a,s,l,c,h,u){for(var f=[],d=u+h,p=h;p<d;p++){var v=t[p];if(i){var g=i(v,p,t);null!=g&&f.push({i:c++,type:"header",value:g,index:p,height:r?r(g,p):a,reads:r?0:2,visible:!!r})}if(f.push({i:c++,type:"item",value:v,index:p,height:e?e(v,p):l,reads:e?0:2,visible:!!e}),o){var m=o(v,p,t);null!=m&&f.push({i:c++,type:"footer",value:m,index:p,height:n?n(m,p):s,reads:n?0:2,visible:!!n})}}return f},f=function(){function e(t){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Object(s.o)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){r.updateVirtualScroll()}}var n,a,h,f,p,v;return n=e,a=[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"componentWillLoad",value:function(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}},{key:"connectedCallback",value:(v=i(r().mark(function t(){var e;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.el.closest("ion-content"))){t.next=10;break}return t.next=4,e.getScrollElement();case 4:this.scrollEl=t.sent,this.contentEl=e,this.calcCells(),this.updateState(),t.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(t,e,r){var n=e.find(function(e){return"item"===e.type&&e.index===t});return n?r[n.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:(p=i(r().mark(function t(e){var n,i,o,a,s=arguments;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:-1,this.items){t.next=3;break}return t.abrupt("return");case 3:i=-1===n?this.items.length-e:n,o=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(function(t){return t.index===e})}(this.cells,e),a=u(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,o,e,i),this.cells=function(t,e,r){if(0===r&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+r]=e[n];return t}(this.cells,a,o),this.lastItemLen=this.items.length,this.indexDirty=Math.max(e-1,0),this.scheduleUpdate();case 5:case"end":return t.stop()}},t,this)})),function(t){return p.apply(this,arguments)})},{key:"checkEnd",value:(f=i(r().mark(function t(){return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)})},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(s.h)(this.readVS.bind(this)),Object(s.f)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,e=this.scrollEl,r=0,n=this.el;n&&n!==t;)r+=n.offsetTop,n=n.offsetParent;this.viewportOffset=r,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}},{key:"writeVS",value:function(){var e,r,n=this.indexDirty,i=(e=this.currentScrollTop-this.viewportOffset,r=this.viewportHeight,{top:Math.max(e-100,0),bottom:e+r+100}),o=this.getHeightIndex(),a=function(t,e,r){for(var n=e.top,i=e.bottom,o=0;o<t.length&&!(t[o]>n);o++);for(var a=Math.max(o-2-1,0);o<t.length&&!(t[o]>=i);o++);return{offset:a,length:Math.min(o+2,t.length)-a}}(o,i);(function(t,e,r){return t<=r.offset+r.length||e.offset!==r.offset||e.length!==r.length})(n,this.range,a)&&(this.range=a,function(e,r,n,i){var o,a=t(e);try{for(a.s();!(o=a.n()).done;){var s=o.value;s.change=0,s.d=!0}}catch(g){a.e(g)}finally{a.f()}for(var l=[],c=i.offset+i.length,h=function(t){var i=n[t],o=e.find(function(t){return t.d&&t.cell===i});if(o){var a=r[t];a!==o.top&&(o.top=a,o.change=1),o.d=!1}else l.push(i)},u=i.offset;u<c;u++)h(u);for(var f=e.filter(function(t){return t.d}),d=function(){var t=v[p],n=f.find(function(e){return e.d&&e.cell.type===t.type}),i=t.i;n?(n.d=!1,n.change=2,n.cell=t,n.top=r[i]):e.push({d:!1,cell:t,visible:!0,change:2,top:r[i]})},p=0,v=l;p<v.length;p++)d();e.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,o,this.cells,a),this.nodeRender?function(t,e,r,n){for(var i,o=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),a=o.length,s=0;s<r.length;s++){var l=r[s],h=l.cell;if(2===l.change){if(s<a)e(i=o[s],h,s);else{var u=c(t,h.type);(i=e(u,h,s)||u).classList.add("virtual-item"),t.appendChild(i)}i.$ionCell=h}else i=o[s];0!==l.change&&(i.style.transform="translate3d(0,".concat(l.top,"px,0)"));var f=h.visible;l.visible!==f&&(f?i.classList.remove("virtual-loading"):i.classList.add("virtual-loading"),l.visible=f),h.reads>0&&(n(h,i),h.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(s.l)(this))}},{key:"updateCellHeight",value:function(t,e){var r=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),i=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));r.setCellHeight(t,i)}};e?Object(l.c)(e,n):n()}},{key:"setCellHeight",value:function(t,e){var r=t.i;t===this.cells[r]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,r),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)}},{key:"updateState",value:function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=u(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var r=new Uint32Array(e);return r.set(t),r}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,r){for(var n=t[r],i=r;i<t.length;i++)t[i]=n,n+=e[i].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var r=this.scrollEl;r&&(this.isEnabled=t,r.addEventListener("scroll",this.onScroll),this.rmEvent=function(){r.removeEventListener("scroll",e.onScroll)})}},{key:"renderVirtualNode",value:function(t){var e=t.cell,r=e.type,n=e.value,i=e.index;switch(r){case"item":return this.renderItem(n,i);case"header":return this.renderHeader(n,i);case"footer":return this.renderFooter(n,i)}}},{key:"render",value:function(){var t=this;return Object(s.j)(s.c,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&Object(s.j)(d,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)})))}},{key:"el",get:function(){return Object(s.k)(this)}}],h=[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}],a&&o(n.prototype,a),h&&o(n,h),Object.defineProperty(n,"prototype",{writable:!1}),e}(),d=function(t,e,r){var n=t.dom;return r.map(e,function(t,e){var r=n[e],i=t.vattrs||{},o=i.class||"";return o+="virtual-item ",r.visible||(o+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},i),{class:o,style:Object.assign(Object.assign({},i.style),{transform:"translate3d(0,".concat(r.top,"px,0)")})})})})};f.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}])}();