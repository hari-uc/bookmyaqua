(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{KnCD:function(e,n,t){"use strict";t.r(n),t.d(n,"OtpPageModule",function(){return g});var o=t("ofXK"),r=t("3Pt+"),i=t("TEn/"),c=t("tyNb"),a=t("fXoL");const l=["a"],d=["b"],u=["c"],p=["d"],m=[{path:"",component:(()=>{class e{constructor(e,n){this.nav=e,this.menu=n,this.otp={},this.menu.enable(!1)}ngOnInit(){setTimeout(()=>{this.a.setFocus()},150)}moveFocus(e,n,t){8==e.keyCode&&t?t.setFocus():e.keyCode>=48&&e.keyCode<=57?n&&n.setFocus():e.path[0].value=""}goToHome(){this.nav.navigateForward("/onboarding")}}return e.\u0275fac=function(n){return new(n||e)(a["\u0275\u0275directiveInject"](i.Q),a["\u0275\u0275directiveInject"](i.O))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-otp"]],viewQuery:function(e,n){if(1&e&&(a["\u0275\u0275viewQuery"](l,3),a["\u0275\u0275viewQuery"](d,3),a["\u0275\u0275viewQuery"](u,3),a["\u0275\u0275viewQuery"](p,3)),2&e){let e;a["\u0275\u0275queryRefresh"](e=a["\u0275\u0275loadQuery"]())&&(n.a=e.first),a["\u0275\u0275queryRefresh"](e=a["\u0275\u0275loadQuery"]())&&(n.b=e.first),a["\u0275\u0275queryRefresh"](e=a["\u0275\u0275loadQuery"]())&&(n.c=e.first),a["\u0275\u0275queryRefresh"](e=a["\u0275\u0275loadQuery"]())&&(n.d=e.first)}},decls:28,vars:12,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[1,"content-section","ion-padding"],[1,"title","ion-text-center","margin-top-32","margin-bottom-13"],[1,"text","ion-text-center"],[1,"otp-input-div"],["maxlength","1","type","tel","autofocus","","name","a",3,"ngModel","ngModelChange","keyup"],["a",""],["name","b","type","tel","maxlength","1",3,"ngModel","ngModelChange","keyup"],["b",""],["name","c","type","tel","maxlength","1",3,"ngModel","ngModelChange","keyup"],["c",""],["name","d","type","tel","maxlength","1",3,"ngModel","ngModelChange","keyup"],["d",""],[1,"time"],[1,"did-not-received"],[1,"ion-text-center"],["fill","clear",1,"resend-btn"],["mode","md","expand","full","shape","round","fill","solid",1,"btn-login","ion-text-capitalize",3,"click"]],template:function(e,n){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ion-header",0),a["\u0275\u0275elementStart"](1,"ion-toolbar",1),a["\u0275\u0275elementStart"](2,"ion-buttons",2),a["\u0275\u0275element"](3,"ion-back-button",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"ion-content"),a["\u0275\u0275elementStart"](5,"div",4),a["\u0275\u0275elementStart"](6,"h2",5),a["\u0275\u0275text"](7,"Phone Verification"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"p",6),a["\u0275\u0275text"](9," Enter your OTP code here "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"div",7),a["\u0275\u0275elementStart"](11,"ion-input",8,9),a["\u0275\u0275listener"]("ngModelChange",function(e){return n.otp.a=e})("keyup",function(t){a["\u0275\u0275restoreView"](e);const o=a["\u0275\u0275reference"](14);return n.moveFocus(t,o,"")}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"ion-input",10,11),a["\u0275\u0275listener"]("ngModelChange",function(e){return n.otp.b=e})("keyup",function(t){a["\u0275\u0275restoreView"](e);const o=a["\u0275\u0275reference"](16),r=a["\u0275\u0275reference"](12);return n.moveFocus(t,o,r)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"ion-input",12,13),a["\u0275\u0275listener"]("ngModelChange",function(e){return n.otp.c=e})("keyup",function(t){a["\u0275\u0275restoreView"](e);const o=a["\u0275\u0275reference"](18),r=a["\u0275\u0275reference"](14);return n.moveFocus(t,o,r)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"ion-input",14,15),a["\u0275\u0275listener"]("ngModelChange",function(e){return n.otp.d=e})("keyup",function(t){a["\u0275\u0275restoreView"](e);const o=a["\u0275\u0275reference"](16);return n.moveFocus(t,"",o)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"p",16),a["\u0275\u0275text"](20," 00:30 "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"p",17),a["\u0275\u0275text"](22,"Didn\u2019t you received any code?"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"div",18),a["\u0275\u0275elementStart"](24,"ion-button",19),a["\u0275\u0275text"](25," Resend a new code. "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](26,"ion-button",20),a["\u0275\u0275listener"]("click",function(){return n.goToHome()}),a["\u0275\u0275text"](27," Verify OTP "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}2&e&&(a["\u0275\u0275advance"](11),a["\u0275\u0275classProp"]("active",n.otp.a),a["\u0275\u0275property"]("ngModel",n.otp.a),a["\u0275\u0275advance"](2),a["\u0275\u0275classProp"]("active",n.otp.b),a["\u0275\u0275property"]("ngModel",n.otp.b),a["\u0275\u0275advance"](2),a["\u0275\u0275classProp"]("active",n.otp.c),a["\u0275\u0275property"]("ngModel",n.otp.c),a["\u0275\u0275advance"](2),a["\u0275\u0275classProp"]("active",n.otp.d),a["\u0275\u0275property"]("ngModel",n.otp.d))},directives:[i.p,i.K,i.h,i.e,i.f,i.k,i.r,i.V,r.b,r.e,r.h,i.g],styles:['ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border-radius:none;box-shadow:none}ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{color:var(--blue)}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;font-family:rubik_md;color:var(--my_theme)}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:15px;font-family:rubik_r;color:var(--gray);margin-bottom:52px}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{text-align:center;font-size:16px;font-family:rubik_md;color:var(--blue);margin-top:24px}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .did-not-received[_ngcontent-%COMP%]{text-align:center;font-size:14px;font-family:rubik_md;color:var(--blue);margin-top:40px;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]{--color:var(--white);--background:var(--my_theme);--box-shadow:none;height:44px;font-size:16px;font-family:rubik_md;margin-top:40px}ion-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .resend-btn[_ngcontent-%COMP%]{--color:var(--my_theme);font-size:14px;font-family:rubik_md;height:auto;width:auto;--padding-start:0;--padding-end:0;text-transform:inherit;margin:0}ion-content[_ngcontent-%COMP%]   .otp-input-div[_ngcontent-%COMP%]{display:flex;justify-content:space-around}ion-content[_ngcontent-%COMP%]   .otp-input-div[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-start:0;--background:var(--div_back);--placeholder-color:var(--lht_blue);--placeholder-font-style:"rubik_r";min-height:44px;min-width:44px;max-width:44px;max-height:44px;border-radius:22px;text-align:center;color:var(--lht_blue);font-size:22px;font-family:rubik_r;height:48px}ion-content[_ngcontent-%COMP%]   .otp-input-div[_ngcontent-%COMP%]   ion-input.active[_ngcontent-%COMP%]{background:var(--my_theme);color:var(--white)}']}),e})()}];let s=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[c.i.forChild(m)],c.i]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[o.b,r.a,i.L,s]]}),e})()}}]);