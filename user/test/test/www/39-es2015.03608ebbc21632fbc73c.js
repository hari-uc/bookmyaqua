(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{uc96:function(e,t,n){"use strict";n.r(t),n.d(t,"TrackPageModule",function(){return g});var r=n("cxbk"),o=n("ofXK"),l=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),i=n("H+bZ"),p=n("fXoL"),d=n("pxUr"),c=n("IZFd");const m=[{path:"",component:(()=>{class e{constructor(e){this.api=e,this.origin={},this.destination={},this.newori={},this.renderOptions={suppressMarkers:!0,draggable:!1},this.markerOptions={origin:{icon:"../../../assets/image/send.png"},destination:{icon:"../../../assets/image/gas_truck.png"},draggable:!0},this.makOptions={origin:{icon:"../../../assets/image/sender_ic.png"},destination:{icon:"../../../assets/image/send.png"},draggable:!0},this.styles=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]}ngOnInit(){this.address=this.api.address,this.Centerlat=JSON.parse(localStorage.getItem("proLattt")),this.Centerlng=JSON.parse(localStorage.getItem("proLanggg")),this.origin={lat:JSON.parse(localStorage.getItem("proLattt")),lng:JSON.parse(localStorage.getItem("proLangg"))},console.log(this.origin),this.destination={lat:this.api.proLatTrack,lng:this.api.proLangTrack},console.log(this.destination)}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["app-track"]],decls:17,vars:9,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["slot","end"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[3,"styles","latitude","longitude","disableDefaultUI"],[3,"origin","destination","renderOptions","markerOptions"],[1,"location_div"],[1,"loc_lbl"],[1,"input_div"],["src","../../../assets/image_icon/location.svg"],["readonly","",3,"value"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"ion-header",0),p["\u0275\u0275elementStart"](1,"ion-toolbar",1),p["\u0275\u0275elementStart"](2,"ion-buttons",2),p["\u0275\u0275element"](3,"ion-menu-button"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-buttons",3),p["\u0275\u0275element"](5,"ion-back-button",4),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ion-title"),p["\u0275\u0275text"](7,"Map"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"ion-content"),p["\u0275\u0275elementStart"](9,"agm-map",5),p["\u0275\u0275element"](10,"agm-direction",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"div",7),p["\u0275\u0275elementStart"](12,"h3",8),p["\u0275\u0275text"](13,"Delivery Location"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"div",9),p["\u0275\u0275element"](15,"ion-icon",10),p["\u0275\u0275element"](16,"ion-input",11),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("styles",t.styles)("latitude",t.Centerlat)("longitude",t.Centerlng)("disableDefaultUI",!0),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("origin",t.origin)("destination",t.destination)("renderOptions",t.renderOptions)("markerOptions",t.markerOptions),p["\u0275\u0275advance"](6),p["\u0275\u0275propertyInterpolate"]("value",t.address))},directives:[a.p,a.K,a.h,a.w,a.e,a.f,a.I,a.k,d.b,c.a,a.q,a.r,a.V],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({imports:[[s.i.forChild(m)],s.i]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({imports:[[o.b,l.a,a.L,d.a.forRoot({apiKey:r.a.google_map_key}),c.b,y]]}),e})()}}]);