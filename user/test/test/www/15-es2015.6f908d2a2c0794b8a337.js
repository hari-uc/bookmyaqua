(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{wdPO:function(e,t,n){"use strict";n.r(t),n.d(t,"ChangePasswordPageModule",function(){return p});var o=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),a=n("H+bZ"),d=n("2Rin"),l=n("fXoL");const c=[{path:"",component:(()=>{class e{constructor(e,t,n){this.api=e,this.nav=t,this.util=n,this.password="",this.err={}}ngOnInit(){}settingg(){let e={password:this.password};this.util.presentLoading(),this.api.postDataWithToken("newpassword",e).subscribe(e=>{this.util.dismissLoading(),e.success&&this.util.presentToast("Your Password is Changed!"),this.nav.navigateForward("/signin")},e=>{this.err=e.error.errors||e.error.message,this.util.presentToast(this.err)})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](a.a),l["\u0275\u0275directiveInject"](s.Q),l["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-change-password"]],decls:16,vars:1,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["auto-hide","false"],["slot","end"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[1,"ion-padding"],["mode","md","lines","none"],["position","stacked","mode","ios",1,"st_lbl"],["placeholder","* * * * * * * *","type","password",3,"ngModel","ngModelChange"],["expand","full",1,"main_btn","ion-text-capitalize",3,"click"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"ion-header",0),l["\u0275\u0275elementStart"](1,"ion-toolbar",1),l["\u0275\u0275elementStart"](2,"ion-buttons",2),l["\u0275\u0275element"](3,"ion-menu-button",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"ion-buttons",4),l["\u0275\u0275element"](5,"ion-back-button",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"ion-title"),l["\u0275\u0275text"](7,"change password"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"ion-content",6),l["\u0275\u0275elementStart"](9,"ion-item",7),l["\u0275\u0275elementStart"](10,"ion-label",8),l["\u0275\u0275text"](11," New Password "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"ion-input",9),l["\u0275\u0275listener"]("ngModelChange",function(e){return t.password=e}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"ion-footer",0),l["\u0275\u0275elementStart"](14,"ion-button",10),l["\u0275\u0275listener"]("click",function(){return t.settingg()}),l["\u0275\u0275text"](15," Save "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](12),l["\u0275\u0275property"]("ngModel",t.password))},directives:[s.p,s.K,s.h,s.w,s.e,s.f,s.I,s.k,s.s,s.t,s.r,s.V,i.e,i.h,s.o,s.g],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[r.i.forChild(c)],r.i]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[o.b,i.a,s.L,m]]}),e})()}}]);