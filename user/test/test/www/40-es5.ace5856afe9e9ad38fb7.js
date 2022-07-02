!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{LE4e:function(n,i,o){"use strict";o.r(i),o.d(i,"VehicleListPageModule",function(){return x});var l=o("ofXK"),a=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),d=o("H+bZ"),s=o("2Rin"),m=o("fXoL");function u(e,n){1&e&&m["\u0275\u0275element"](0,"ion-icon",15)}function f(e,n){if(1&e){var t=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-item",11),m["\u0275\u0275listener"]("click",function(){m["\u0275\u0275restoreView"](t);var e=n.$implicit;return m["\u0275\u0275nextContext"]().selectVehicle(e)}),m["\u0275\u0275elementStart"](1,"ion-label",12),m["\u0275\u0275text"](2),m["\u0275\u0275template"](3,u,1,0,"ion-icon",13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-label",14),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var i=n.$implicit,o=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate2"](" ",null==i||null==i.model||null==i.model.brand?null:i.model.brand.name," ",null==i||null==i.model?null:i.model.name," "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",o.isselect==i),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",null==i?null:i.reg_number," ")}}function p(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"div",16),m["\u0275\u0275element"](1,"img",17),m["\u0275\u0275elementEnd"]())}var g,b,v,h=[{path:"",component:(g=function(){function n(t,i,o){e(this,n),this.nav=t,this.api=i,this.util=o,this.v=""}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.util.presentLoading(),this.api.getDataWithToken("vehicle").subscribe(function(n){n.success&&(console.log(n.data),e.data=n.data,e.util.dismissLoading())},function(n){console.log(n),e.util.dismissLoading()})}},{key:"selectVehicle",value:function(e){this.isselect=e,console.log(e),this.v=e.id,this.api.veId=e.id,this.api.vehicleObj={modelName:e.model.brand.name,model:e.model.name,number:e.reg_number}}},{key:"cart",value:function(){this.nav.navigateForward("/cart")}}]),n}(),g.\u0275fac=function(e){return new(e||g)(m["\u0275\u0275directiveInject"](r.Q),m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](s.a))},g.\u0275cmp=m["\u0275\u0275defineComponent"]({type:g,selectors:[["app-vehicle-list"]],decls:17,vars:3,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["slot","end"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[1,"ion-padding-top"],[1,"head_div"],[1,"head_lbl"],["mode","md","lines","none",3,"click",4,"ngFor","ngForOf"],["no-data","",4,"ngIf"],["expand","full",1,"main_btn","ion-text-capitalize",3,"disabled","click"],["mode","md","lines","none",3,"click"],["slot","start",1,"st_lbl"],["src","../../../assets/image_icon/tick_ic.svg",4,"ngIf"],["slot","end",1,"num_lbl"],["src","../../../assets/image_icon/tick_ic.svg"],["no-data",""],["src","../../../assets/nodata.png","alt",""]],template:function(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header",0),m["\u0275\u0275elementStart"](1,"ion-toolbar",1),m["\u0275\u0275elementStart"](2,"ion-buttons",2),m["\u0275\u0275element"](3,"ion-menu-button"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-buttons",3),m["\u0275\u0275element"](5,"ion-back-button",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"ion-title"),m["\u0275\u0275text"](7,"vehicle list"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"ion-content",5),m["\u0275\u0275elementStart"](9,"div",6),m["\u0275\u0275elementStart"](10,"h3",7),m["\u0275\u0275text"](11,"Vehicle List"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](12,f,6,4,"ion-item",8),m["\u0275\u0275template"](13,p,2,0,"div",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"ion-footer",0),m["\u0275\u0275elementStart"](15,"ion-button",10),m["\u0275\u0275listener"]("click",function(){return n.cart()}),m["\u0275\u0275text"](16," Save "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](12),m["\u0275\u0275property"]("ngForOf",n.data),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",0==(null==n.data?null:n.data.length)),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("disabled",""==n.v))},directives:[r.p,r.K,r.h,r.w,r.e,r.f,r.I,r.k,l.k,l.l,r.o,r.g,r.s,r.t,r.q],styles:["ion-content[_ngcontent-%COMP%]   .head_div[_ngcontent-%COMP%]{height:40px;background-color:var(--div_back);padding-left:16px;display:flex;align-items:center;margin-top:10px}ion-content[_ngcontent-%COMP%]   .head_div[_ngcontent-%COMP%]   .head_lbl[_ngcontent-%COMP%]{font-size:16px;color:var(--blue);font-family:rubik_r;margin:0}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0;--inner-padding-end:0;border-bottom:dashed;border-bottom-width:1px;border-bottom-color:var(--silver);margin:0 16px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .st_lbl[_ngcontent-%COMP%]{font-size:14px;color:var(--blue);font-family:rubik_r;display:flex;align-items:center}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .st_lbl[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:7px;height:17px;width:17px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .num_lbl[_ngcontent-%COMP%]{font-size:14px;color:var(--my_theme);white-space:normal;font-family:rubik_r}"]}),g)}],_=((v=t(function n(){e(this,n)})).\u0275fac=function(e){return new(e||v)},v.\u0275mod=m["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[c.i.forChild(h)],c.i]}),v),x=((b=t(function n(){e(this,n)})).\u0275fac=function(e){return new(e||b)},b.\u0275mod=m["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[l.b,a.a,r.L,_]]}),b)}}])}();