!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"9PJG":function(t,o,i){"use strict";i.r(o),i.d(o,"SigninPageModule",function(){return C});var a=i("ofXK"),r=i("3Pt+"),l=i("TEn/"),c=i("tyNb"),g=i("H+bZ"),s=i("2Rin"),d=i("fXoL");function p(n,t){if(1&n&&(d["\u0275\u0275elementStart"](0,"span",30),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&n){var e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](null==e.err?null:e.err.email)}}function _(n,t){if(1&n&&(d["\u0275\u0275elementStart"](0,"span",30),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&n){var e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](null==e.err?null:e.err.password)}}var m,u,f,P=[{path:"",component:(m=function(){function t(e,o,i,a,r){n(this,t),this.nav=e,this.menu=o,this.api=i,this.util=a,this.modal=r,this.showPassword=!1,this.inputData={},this.menu.enable(!1)}return e(t,[{key:"ngOnInit",value:function(){}},{key:"forgotPassword",value:function(){this.nav.navigateForward("/forgot"),this.util.modal.dismiss()}},{key:"signup",value:function(){this.nav.navigateForward("/signup"),this.util.modal.dismiss()}},{key:"signIn",value:function(){var n=this;this.util.presentLoading();var t=new FormData;t.append("email",null==this.inputData.email?"":this.inputData.email),t.append("password",null==this.inputData.password?"":this.inputData.password),t.append("device_token",this.api.deviceToken?this.api.deviceToken:localStorage.getItem("pushTokn")),this.api.postData("login",t).subscribe(function(t){if(console.log("success",t),n.err="",localStorage.getItem("previous-request")){if(t.success=!0){n.util.dismissLoading();var e=localStorage.getItem("previous-request-page");localStorage.setItem("provider","LOCAL"),n.nav.navigateRoot(e),n.util.modal.dismiss(),n.api.profileUpdate.next(!0),n.api.setNewLogin(!0),n.util.presentToast(t.msg),localStorage.setItem("token",t.data.token)}}else t.success?(n.util.dismissLoading(),n.util.modal.dismiss(),n.api.profileUpdate.next(!0),n.api.setNewLogin(!0),localStorage.setItem("provider","LOCAL"),localStorage.setItem("token",t.data.token),n.nav.navigateRoot("home"),n.util.presentToast(t.msg)):(n.util.dismissLoading(),n.util.modal.dismiss(),n.util.presentToast("Something Went Wrong"),n.util.presentToast(t.msg))},function(t){console.log(t),n.err=t.error.errors,console.log(n.err),n.util.presentToast("Something Went Wrong"),n.util.dismissLoading()})}},{key:"facebookLogin",value:function(){}},{key:"googleLogin",value:function(){}}]),t}(),m.\u0275fac=function(n){return new(n||m)(d["\u0275\u0275directiveInject"](l.Q),d["\u0275\u0275directiveInject"](l.O),d["\u0275\u0275directiveInject"](g.a),d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](l.P))},m.\u0275cmp=d["\u0275\u0275defineComponent"]({type:m,selectors:[["app-signin"]],decls:49,vars:6,consts:[[1,"ion-padding-top","ion-padding-horizontal"],[1,"logo_div"],["src","../../../assets/image/logo.png"],[1,"logo_tittle"],[1,"page_tittle"],[1,"main_lbl"],[1,"data_div"],["f","ngForm"],["lines","none",1,"data_item"],["position","stacked","mode","ios",1,"info_label"],["required","true","type","text","name","email","placeholder","Enter your email",1,"data_input",3,"ngModel","ngModelChange"],["class","err",4,"ngIf"],["required","true","name","password","placeholder","Enter your password",1,"data_input",3,"type","ngModel","ngModelChange"],["slot","end","fill","clear",1,"transparent_btn","password_btn",3,"click"],["slot","icon-only",3,"name"],[1,"first_col"],[1,"remember"],[1,"ion-text-right"],[1,"forgot-btn","ion-text-capitalize","transparent_btn",3,"click"],["mode","md","expand","full","shape","round","fill","solid",1,"main_btn",3,"click"],[1,"or"],[1,"background"],[1,"social_btn_div"],[1,"facbook","social",3,"click"],["src","../../../assets/image_icon/facebook_icon.svg"],[1,"google","social",3,"click"],["src","../../../assets/image_icon/google_plus.svg"],[1,"signup_div"],[1,"text"],[1,"transparent_btn","signup_btn",3,"click"],[1,"err"]],template:function(n,t){1&n&&(d["\u0275\u0275elementStart"](0,"ion-content",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275element"](2,"img",2),d["\u0275\u0275elementStart"](3,"h3",3),d["\u0275\u0275text"](4,"Lofuel"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"p",4),d["\u0275\u0275text"](6,"fuel or gas anywhere at any time"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"p",5),d["\u0275\u0275text"](8,"Sign In"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"div",6),d["\u0275\u0275elementStart"](10,"form",null,7),d["\u0275\u0275elementStart"](12,"ion-item",8),d["\u0275\u0275elementStart"](13,"ion-label",9),d["\u0275\u0275text"](14,"Email"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"ion-input",10),d["\u0275\u0275listener"]("ngModelChange",function(n){return t.inputData.email=n}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](16,p,2,1,"span",11),d["\u0275\u0275elementStart"](17,"ion-item",8),d["\u0275\u0275elementStart"](18,"ion-label",9),d["\u0275\u0275text"](19,"Password"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"ion-input",12),d["\u0275\u0275listener"]("ngModelChange",function(n){return t.inputData.password=n}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"ion-button",13),d["\u0275\u0275listener"]("click",function(){return t.showPassword=!t.showPassword}),d["\u0275\u0275element"](22,"ion-icon",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](23,_,2,1,"span",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"ion-row"),d["\u0275\u0275elementStart"](25,"ion-col",15),d["\u0275\u0275element"](26,"ion-checkbox"),d["\u0275\u0275elementStart"](27,"ion-label"),d["\u0275\u0275elementStart"](28,"h3",16),d["\u0275\u0275text"](29,"Remember Me"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](30,"ion-col",17),d["\u0275\u0275elementStart"](31,"ion-button",18),d["\u0275\u0275listener"]("click",function(){return t.forgotPassword()}),d["\u0275\u0275text"](32,"forgot password? "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"ion-button",19),d["\u0275\u0275listener"]("click",function(){return t.signIn()}),d["\u0275\u0275text"](34," Sign in "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](35,"div",20),d["\u0275\u0275elementStart"](36,"h2",21),d["\u0275\u0275elementStart"](37,"span"),d["\u0275\u0275text"](38,"or"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](39,"div",22),d["\u0275\u0275elementStart"](40,"ion-button",23),d["\u0275\u0275listener"]("click",function(){return t.facebookLogin()}),d["\u0275\u0275element"](41,"ion-icon",24),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](42,"ion-button",25),d["\u0275\u0275listener"]("click",function(){return t.googleLogin()}),d["\u0275\u0275element"](43,"ion-icon",26),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](44,"div",27),d["\u0275\u0275elementStart"](45,"span",28),d["\u0275\u0275text"](46,"If you are new user?"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](47,"ion-button",29),d["\u0275\u0275listener"]("click",function(){return t.signup()}),d["\u0275\u0275text"](48,"Sign up"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&n&&(d["\u0275\u0275advance"](15),d["\u0275\u0275property"]("ngModel",t.inputData.email),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==t.err?null:t.err.email),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("type",t.showPassword?"text":"password")("ngModel",t.inputData.password),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("name",t.showPassword?"eye":"eye-off"),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==t.err?null:t.err.password))},directives:[l.k,r.j,r.f,r.g,l.s,l.t,l.r,l.V,r.i,r.e,r.h,a.l,l.g,l.q,l.z,l.j,l.i,l.c],styles:['ion-content[_ngcontent-%COMP%]{--background:url(LogIn.009f3ca9fce22bc2078f.png) no-repeat center center/cover}ion-content[_ngcontent-%COMP%]   .logo_div[_ngcontent-%COMP%]{padding-top:16px;text-align:center}ion-content[_ngcontent-%COMP%]   .logo_div[_ngcontent-%COMP%]   .logo_tittle[_ngcontent-%COMP%]{font-size:40px;color:var(--white);font-family:HornbillPersonalUse_b;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .logo_div[_ngcontent-%COMP%]   .page_tittle[_ngcontent-%COMP%]{font-size:18px;color:var(--white);font-family:rubik_r;margin:0}ion-content[_ngcontent-%COMP%]   .logo_div[_ngcontent-%COMP%]   .main_lbl[_ngcontent-%COMP%]{font-size:30px;font-family:rubik_md;color:var(--white)}ion-content[_ngcontent-%COMP%]   .err[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:400;font-family:rubik_r;font-size:13px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .data_item[_ngcontent-%COMP%]{--background:transparent;--padding-start:0px;--inner-padding-end:0;border-bottom:1px solid var(--white)}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .data_item[_ngcontent-%COMP%]   .info_label[_ngcontent-%COMP%]{font-size:18px;color:var(--white);font-family:rubik_md;margin-top:15px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .data_item[_ngcontent-%COMP%]   .data_input[_ngcontent-%COMP%]{--placeholder-color:var(--white);--placeholder-font-style:"nunito_r";--placeholder-opacity:1;font-size:16px;font-family:rubik_r;color:var(--white)}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-bottom:20px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;margin-top:5px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--background:transparent;margin-right:10px;--border-radius:2px;height:15px;width:15px;--border-color:var(--white)}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .first_col[_ngcontent-%COMP%]{padding-top:8px;display:flex;align-items:center}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .first_col[_ngcontent-%COMP%]   .remember[_ngcontent-%COMP%]{font-size:14px;font-family:rubik_r;color:var(--white)}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%]{font-size:14px;font-family:rubik_r;--color:var(--white);width:auto;margin:5px 0 0}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .password_btn[_ngcontent-%COMP%]{align-self:flex-end}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .signup_div[_ngcontent-%COMP%]{margin-top:15px;display:flex;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .signup_div[_ngcontent-%COMP%]   .signup_btn[_ngcontent-%COMP%]{--color:var(--my_theme);font-size:14px;font-family:rubik_md;text-transform:capitalize;margin-left:4px}ion-content[_ngcontent-%COMP%]   .data_div[_ngcontent-%COMP%]   .signup_div[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:14px;font-family:rubik_r;color:var(--white)}.or[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-family:ComicSansMS;color:var();margin-top:30px;text-align:center;text-transform:uppercase}.or[_ngcontent-%COMP%]   h2.background[_ngcontent-%COMP%]{position:relative;z-index:1}.or[_ngcontent-%COMP%]   h2.background[_ngcontent-%COMP%]:before{border-top:2px solid #dfdfdf;content:"";margin:0 auto;position:absolute;top:50%;left:0;right:0;bottom:0;width:95%;z-index:-1}.or[_ngcontent-%COMP%]   h2.background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--white);padding:0 15px}.or[_ngcontent-%COMP%]   h2.double[_ngcontent-%COMP%]:before{border-top:none}.or[_ngcontent-%COMP%]   h2.double[_ngcontent-%COMP%]:after{border-bottom:1px solid blue;box-shadow:0 1px 0 0 red;content:"";margin:0 auto;position:absolute;top:45%;left:0;right:0;width:95%;z-index:-1}.or[_ngcontent-%COMP%]   h2.no-background[_ngcontent-%COMP%]{position:relative;overflow:hidden}.or[_ngcontent-%COMP%]   h2.no-background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:baseline;zoom:1;*display:inline;*vertical-align:auto;position:relative;padding:0 20px}.or[_ngcontent-%COMP%]   h2.no-background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .or[_ngcontent-%COMP%]   h2.no-background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";display:block;width:1000px;position:absolute;top:.73em;border-top:1px solid red}.or[_ngcontent-%COMP%]   h2.no-background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{right:100%}.or[_ngcontent-%COMP%]   h2.no-background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{left:100%}.or[_ngcontent-%COMP%]   h2.no-span[_ngcontent-%COMP%]{display:table;white-space:nowrap}.or[_ngcontent-%COMP%]   h2.no-span[_ngcontent-%COMP%]:after, .or[_ngcontent-%COMP%]   h2.no-span[_ngcontent-%COMP%]:before{border-top:1px solid green;content:"";display:table-cell;position:relative;top:.5em;width:45%}.or[_ngcontent-%COMP%]   h2.no-span[_ngcontent-%COMP%]:before{right:1.5%}.or[_ngcontent-%COMP%]   h2.no-span[_ngcontent-%COMP%]:after{left:1.5%}.social_btn_div[_ngcontent-%COMP%]{margin-top:20px;text-align:center}.social_btn_div[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]{--background:var(--twitter);--box-shadow:0px 0px 6px 0px #0baafc}.social_btn_div[_ngcontent-%COMP%]   .twitter[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:14px;height:11px}.social_btn_div[_ngcontent-%COMP%]   .facbook[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px;--background:var(--facebook);--box-shadow:0px 0px 6px 0px #465a95}.social_btn_div[_ngcontent-%COMP%]   .facbook[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:7px;height:13px}.social_btn_div[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px;--background:var(--google_plus);--box-shadow:0px 0px 6px 0px #f65a5b}.social_btn_div[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:18px;height:12px}.social_btn_div[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{height:40px;--border-radius:50%;width:40px;--padding-start:0px;--padding-end:0px;--border-width:2px;--border-style:solid;--border-color:var(--white)}']}),m)}],M=((f=e(function t(){n(this,t)})).\u0275fac=function(n){return new(n||f)},f.\u0275mod=d["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[c.i.forChild(P)],c.i]}),f),C=((u=e(function t(){n(this,t)})).\u0275fac=function(n){return new(n||u)},u.\u0275mod=d["\u0275\u0275defineNgModule"]({type:u}),u.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[a.b,r.a,l.L,M]]}),u)}}])}();