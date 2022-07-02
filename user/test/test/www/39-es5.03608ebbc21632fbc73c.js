!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{uc96:function(t,o,r){"use strict";r.r(o),r.d(o,"TrackPageModule",function(){return h});var l,a,i,s=r("cxbk"),p=r("ofXK"),c=r("3Pt+"),d=r("TEn/"),m=r("tyNb"),y=r("H+bZ"),f=r("fXoL"),g=r("pxUr"),u=r("IZFd"),b=[{path:"",component:(l=function(){function t(n){e(this,t),this.api=n,this.origin={},this.destination={},this.newori={},this.renderOptions={suppressMarkers:!0,draggable:!1},this.markerOptions={origin:{icon:"../../../assets/image/send.png"},destination:{icon:"../../../assets/image/gas_truck.png"},draggable:!0},this.makOptions={origin:{icon:"../../../assets/image/sender_ic.png"},destination:{icon:"../../../assets/image/send.png"},draggable:!0},this.styles=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]}return n(t,[{key:"ngOnInit",value:function(){this.address=this.api.address,this.Centerlat=JSON.parse(localStorage.getItem("proLattt")),this.Centerlng=JSON.parse(localStorage.getItem("proLanggg")),this.origin={lat:JSON.parse(localStorage.getItem("proLattt")),lng:JSON.parse(localStorage.getItem("proLangg"))},console.log(this.origin),this.destination={lat:this.api.proLatTrack,lng:this.api.proLangTrack},console.log(this.destination)}}]),t}(),l.\u0275fac=function(e){return new(e||l)(f["\u0275\u0275directiveInject"](y.a))},l.\u0275cmp=f["\u0275\u0275defineComponent"]({type:l,selectors:[["app-track"]],decls:17,vars:9,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["slot","end"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[3,"styles","latitude","longitude","disableDefaultUI"],[3,"origin","destination","renderOptions","markerOptions"],[1,"location_div"],[1,"loc_lbl"],[1,"input_div"],["src","../../../assets/image_icon/location.svg"],["readonly","",3,"value"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"ion-header",0),f["\u0275\u0275elementStart"](1,"ion-toolbar",1),f["\u0275\u0275elementStart"](2,"ion-buttons",2),f["\u0275\u0275element"](3,"ion-menu-button"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](4,"ion-buttons",3),f["\u0275\u0275element"](5,"ion-back-button",4),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"ion-title"),f["\u0275\u0275text"](7,"Map"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](8,"ion-content"),f["\u0275\u0275elementStart"](9,"agm-map",5),f["\u0275\u0275element"](10,"agm-direction",6),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](11,"div",7),f["\u0275\u0275elementStart"](12,"h3",8),f["\u0275\u0275text"](13,"Delivery Location"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](14,"div",9),f["\u0275\u0275element"](15,"ion-icon",10),f["\u0275\u0275element"](16,"ion-input",11),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](9),f["\u0275\u0275property"]("styles",t.styles)("latitude",t.Centerlat)("longitude",t.Centerlng)("disableDefaultUI",!0),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("origin",t.origin)("destination",t.destination)("renderOptions",t.renderOptions)("markerOptions",t.markerOptions),f["\u0275\u0275advance"](6),f["\u0275\u0275propertyInterpolate"]("value",t.address))},directives:[d.p,d.K,d.h,d.w,d.e,d.f,d.I,d.k,g.b,u.a,d.q,d.r,d.V],styles:[""]}),l)}],T=((i=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||i)},i.\u0275mod=f["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=f["\u0275\u0275defineInjector"]({imports:[[m.i.forChild(b)],m.i]}),i),h=((a=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||a)},a.\u0275mod=f["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=f["\u0275\u0275defineInjector"]({imports:[[p.b,c.a,d.L,g.a.forRoot({apiKey:s.a.google_map_key}),u.b,T]]}),a)}}])}();