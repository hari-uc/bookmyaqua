(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Ityv:function(e,n,t){"use strict";t.r(n),t.d(n,"ForgotPageModule",function(){return p});var o=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),a=t("tyNb"),s=t("H+bZ"),l=t("2Rin"),c=t("fXoL");const d=["input"],u=[{path:"",component:(()=>{class e{constructor(e,n,t,o){this.nav=e,this.menu=n,this.api=t,this.util=o,this.err={},this.menu.enable(!1)}ngOnInit(){setTimeout(()=>{this.myInput.setFocus()},150)}verify(){let e={phone_no:this.phone_no,type:0};this.util.presentLoading(),this.api.postData("forgot",e).subscribe(e=>{this.util.dismissLoading(),this.api.phone_no=this.phone_no,e.success?this.nav.navigateForward("/password-otp"):this.util.presentToast(e.msg)},e=>{this.err=e.error.errors||e.error.message,this.util.presentToast(this.err)})}}return e.\u0275fac=function(n){return new(n||e)(c["\u0275\u0275directiveInject"](r.Q),c["\u0275\u0275directiveInject"](r.O),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-forgot"]],viewQuery:function(e,n){if(1&e&&c["\u0275\u0275viewQuery"](d,3),2&e){let e;c["\u0275\u0275queryRefresh"](e=c["\u0275\u0275loadQuery"]())&&(n.myInput=e.first)}},decls:14,vars:1,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[1,"ion-padding-horizontal"],[1,"main_lbl"],[1,"info_lbl"],["mode","md","lines","none"],["slot","start","name","call"],["placeholder","Phone Number",3,"ngModel","ngModelChange"],["mode","md","fill","solid","expand","round",1,"main_btn","ion-text-capitalize","send_btn",3,"click"]],template:function(e,n){1&e&&(c["\u0275\u0275elementStart"](0,"ion-header",0),c["\u0275\u0275elementStart"](1,"ion-toolbar",1),c["\u0275\u0275elementStart"](2,"ion-buttons",2),c["\u0275\u0275element"](3,"ion-back-button",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-content",4),c["\u0275\u0275elementStart"](5,"h3",5),c["\u0275\u0275text"](6,"Forgot Password"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"p",6),c["\u0275\u0275text"](8," Please enter your Phone Number. You will receive a code to create a new password via email. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"ion-item",7),c["\u0275\u0275element"](10,"ion-icon",8),c["\u0275\u0275elementStart"](11,"ion-input",9),c["\u0275\u0275listener"]("ngModelChange",function(e){return n.phone_no=e}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"ion-button",10),c["\u0275\u0275listener"]("click",function(){return n.verify()}),c["\u0275\u0275text"](13," Reset Password "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("ngModel",n.phone_no))},directives:[r.p,r.K,r.h,r.e,r.f,r.k,r.s,r.q,r.r,r.V,i.e,i.h,r.g],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border-radius:none;box-shadow:none}ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:var(--blue)}ion-content[_ngcontent-%COMP%]   .main_lbl[_ngcontent-%COMP%]{font-size:30px;color:var(--my_theme);font-family:rubik_md;text-align:center}ion-content[_ngcontent-%COMP%]   .info_lbl[_ngcontent-%COMP%]{font-size:15px;color:var(--gray);font-family:rubik_r;text-align:center;padding:0 3vh}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:var(--input_back);border-radius:25px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:14px;color:var(--blue);font-family:rubik_md}ion-content[_ngcontent-%COMP%]   .send_btn[_ngcontent-%COMP%]{height:44px;width:100%;font-size:16px;margin-top:40px}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[a.i.forChild(u)],a.i]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[o.b,i.a,r.L,m]]}),e})()}}]);