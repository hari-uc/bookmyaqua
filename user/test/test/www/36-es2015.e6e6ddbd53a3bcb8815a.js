(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{hBK9:function(t,e,n){"use strict";n.r(e),n.d(e,"SettingPageModule",function(){return u});var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),c=n("H+bZ"),l=n("2Rin"),s=n("fXoL");const m=[{path:"",component:(()=>{class t{constructor(t,e,n){this.nav=t,this.api=e,this.util=n}ngOnInit(){""==(localStorage.getItem("token")?localStorage.getItem("token"):"")&&(localStorage.setItem("previous-request","true"),localStorage.setItem("previous-request-page","setting"),this.util.nav.navigateForward("signin")),this.api.getData("privacy").subscribe(t=>{t.successs&&console.log(t.data)},t=>{console.log(t)})}account(){this.nav.navigateForward("/account")}changeLocation(){this.nav.navigateForward("/location")}notification(){this.nav.navigateForward("/notification")}policy(){this.nav.navigateForward("/policy")}support(){this.nav.navigateForward("/help")}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275directiveInject"](a.Q),s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](l.a))},t.\u0275cmp=s["\u0275\u0275defineComponent"]({type:t,selectors:[["app-setting"]],decls:25,vars:0,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["slot","end"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[1,"ion-padding"],["mode","md","lines","none",3,"click"],["src","../../../assets/image_icon/ac_ic.svg","slot","start"],[1,"st_lbl"],["src","../../../assets/image_icon/lc_ic.svg","slot","start"],["src","../../../assets/image_icon/nt_ic.svg","slot","start"]],template:function(t,e){1&t&&(s["\u0275\u0275elementStart"](0,"ion-header",0),s["\u0275\u0275elementStart"](1,"ion-toolbar",1),s["\u0275\u0275elementStart"](2,"ion-buttons",2),s["\u0275\u0275element"](3,"ion-menu-button"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"ion-buttons",3),s["\u0275\u0275element"](5,"ion-back-button",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"ion-title"),s["\u0275\u0275text"](7,"setting"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"ion-content",5),s["\u0275\u0275elementStart"](9,"ion-item",6),s["\u0275\u0275listener"]("click",function(){return e.account()}),s["\u0275\u0275element"](10,"ion-icon",7),s["\u0275\u0275elementStart"](11,"ion-label",8),s["\u0275\u0275text"](12," Account "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"ion-item",6),s["\u0275\u0275listener"]("click",function(){return e.changeLocation()}),s["\u0275\u0275element"](14,"ion-icon",9),s["\u0275\u0275elementStart"](15,"ion-label",8),s["\u0275\u0275text"](16," Change Password "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"ion-item",6),s["\u0275\u0275listener"]("click",function(){return e.notification()}),s["\u0275\u0275element"](18,"ion-icon",10),s["\u0275\u0275elementStart"](19,"ion-label",8),s["\u0275\u0275text"](20," Notification "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"ion-item",6),s["\u0275\u0275listener"]("click",function(){return e.policy()}),s["\u0275\u0275element"](22,"ion-icon",9),s["\u0275\u0275elementStart"](23,"ion-label",8),s["\u0275\u0275text"](24," Privacy Policy "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())},directives:[a.p,a.K,a.h,a.w,a.e,a.f,a.I,a.k,a.s,a.q,a.t],styles:["ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0;margin-bottom:15px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .st_lbl[_ngcontent-%COMP%]{font-size:18px;color:var(--blue);font-family:rubik_md;border-bottom:dotted;border-bottom-color:var(--silver);border-bottom-width:1px;margin-bottom:0;padding-bottom:10px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--blue);height:17px;width:17px;margin-right:20px}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[r.i.forChild(m)],r.i]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[o.b,i.a,a.L,d]]}),t})()}}]);