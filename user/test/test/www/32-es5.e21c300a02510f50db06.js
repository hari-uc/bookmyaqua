!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"80Qg":function(t,o,i){"use strict";i.r(o),i.d(o,"PickDetailPageModule",function(){return T});var a=i("cxbk"),r=i("ofXK"),l=i("3Pt+"),c=i("TEn/"),s=i("tyNb"),d=i("h+qT"),p=i("7itd"),g=i("H+bZ"),u=i("2Rin"),m=i("fXoL"),f=i("pxUr"),_=["placesRef"],v=["search"];function y(e,t){if(1&e&&m["\u0275\u0275element"](0,"agm-marker",26),2&e){var n=t.$implicit,o=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("latitude",null==n?null:n.lat)("longitude",null==n?null:n.lang)("iconUrl",o.Truckicon)}}function h(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div",27),m["\u0275\u0275listener"]("click",function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit;return m["\u0275\u0275nextContext"]().match(e)}),m["\u0275\u0275elementStart"](1,"h3",28),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit,i=m["\u0275\u0275nextContext"]();m["\u0275\u0275classProp"]("active",i.select==o.name),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](null==o?null:o.name)}}function C(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-select-option",29),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;m["\u0275\u0275propertyInterpolate"]("value",null==n?null:n.id),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](null==n?null:n.name)}}function P(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"span",30),m["\u0275\u0275listener"]("click",function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit;return m["\u0275\u0275nextContext"]().selectQty(e)}),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit,i=m["\u0275\u0275nextContext"]();m["\u0275\u0275classProp"]("at_span",i.qty==o),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](null==o?null:o.p)}}function O(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-label",31),m["\u0275\u0275listener"]("click",function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit;return m["\u0275\u0275nextContext"]().myPrice(e)}),m["\u0275\u0275elementStart"](1,"h3",32),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p",33),m["\u0275\u0275text"](4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit,i=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](null==o?null:o.name),m["\u0275\u0275advance"](1),m["\u0275\u0275classProp"]("my_price",i.priceSelect==o.name),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate2"]("",i.currency,"",null==o?null:o.price,"")}}function b(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p",34),m["\u0275\u0275text"](1," No Data Found "),m["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-footer",0),m["\u0275\u0275elementStart"](1,"div",35),m["\u0275\u0275listener"]("click",function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().cartData()}),m["\u0275\u0275elementStart"](2,"p",36),m["\u0275\u0275text"](3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"img",37),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var o=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate2"]("Proceed to pay ",o.currency,"",o.totalAmount,"")}}var x,k,w,S=[{path:"",component:(x=function(){function t(n,o,i,a){e(this,t),this.nav=n,this.api=o,this.util=i,this.nativeGeocoder=a,this.Centerlat=22.298922,this.Centerlng=70.802177,this.trucklat=22.298555,this.trucklng=70.802177,this.redius="10",this.lat=22.2648,this.lang=70.7846,this.radius=100,this.icon="../../../assets/image/gas_truck.png",this.cng=1,this.lpg=0,this.origin={},this.destination={},this.renderOptions={suppressMarkers:!0,draggable:!1},this.iconUrl="../../../assets/image/sender_ic.png",this.Truckicon="../../../assets/image/gas_truck.png",this.qty=5,this.totalAmount=0,this.iconTruck="../../../assets/image/petrol_truck.png",this.styles=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],this.quantityArray=[{p:"1"},{p:"2"},{p:"3"},{p:"4"},{p:"5"},{p:"6"},{p:"7"},{p:"8"},{p:"9"},{p:"10"}],this.geoencoderOptions={useLocale:!0,maxResults:5}}return n(t,[{key:"ngOnInit",value:function(){var e=this;setTimeout(function(){e.newMapFunction()},500)}},{key:"ionViewWillEnter",value:function(){var e=this;this.qty=this.quantityArray[5],this.api.qty=this.qty.p,this.addr=localStorage.getItem("addressOfLast"),this.page=this.api.select_fuel,setTimeout(function(){e.setCurrentLocation()},500);var t={lat:JSON.parse(localStorage.getItem("curentLat")),lang:JSON.parse(localStorage.getItem("curentLang")),radius:100};this.util.presentLoading(),this.api.postDataWithToken("home",t).subscribe(function(t){t.success&&(e.data=t.data,e.provider=t.data.provider,e.selectPro=t.data.provider[0].id,e.api.pro_id=e.selectPro,e.data.fuel_type.forEach(function(t,n){t.id==localStorage.getItem("pro_id")&&(e.sub_fuel_type=e.data.fuel_type[n].sub_fuel_type,e.select=e.sub_fuel_type[0].name,e.matchId=e.sub_fuel_type[0].id)}),e.util.dismissLoading())},function(t){e.util.dismissLoading()})}},{key:"selectQty",value:function(e){0==this.pricing.length?this.util.presentToast("There is no any price found"):(this.qty=e,this.api.qty=this.qty.p,this.totalAmount=JSON.parse(this.qty.p)*this.price,this.api.total=this.totalAmount)}},{key:"match",value:function(e){var t=this;console.log("item math",e),this.select=e.name,this.matchId=e.id,localStorage.setItem("matchId",e.id),this.api.getData("provider/"+this.selectPro+"/"+e.id).subscribe(function(e){e.success&&(null==e.data.price?(t.pricing=[],t.totalAmount=0,t.api.total=t.totalAmount,t.util.dismissLoading()):(t.pricing=e.data.price.fuel_pricing,t.currency=e.data.price.currency,t.priceSelect=e.data.price.fuel_pricing[0].name,t.price=e.data.price.fuel_pricing[0].price,t.api.price=t.price,t.totalAmount=JSON.parse(t.qty.p)*t.price,t.api.total=t.totalAmount,localStorage.setItem("proLattt",JSON.stringify(e.data.lat)),localStorage.setItem("proLangg",JSON.stringify(e.data.lang)),t.util.dismissLoading()),t.util.dismissLoading())},function(e){t.util.dismissLoading()})}},{key:"providerCost",value:function(e){var t=this;console.log("select provider",e),console.log("this.matchId",this.matchId),console.log("this.api.pro_id",this.api.pro_id),console.log("this.selectPro",this.selectPro),this.api.pro_id=e.detail.value,this.selectPro=e.detail.value,this.provider.forEach(function(e){e.fuel_type.forEach(function(e){console.log("this.api.pro_id == this.selectPro",t.api.pro_id==t.selectPro),t.api.pro_id==t.selectPro?t.api.getData("provider/"+t.selectPro+"/"+t.matchId).subscribe(function(e){console.log("select pro data",e),e.success&&(null==e.data.price?(t.pricing=[],t.totalAmount=0):(t.pricing=e.data.price.fuel_pricing,t.currency=e.data.price.currency,t.priceSelect=e.data.price.fuel_pricing[0].name,t.price=e.data.price.fuel_pricing[0].price,t.api.price=t.price,t.totalAmount=JSON.parse(t.qty.p)*t.price,t.api.total=t.totalAmount,localStorage.setItem("proLattt",JSON.stringify(e.data.lat)),localStorage.setItem("proLangg",JSON.stringify(e.data.lat))))},function(e){t.util.dismissLoading()}):(t.pricing=[],t.totalAmount=0,t.api.total=t.totalAmount,t.util.dismissLoading())})})}},{key:"myPrice",value:function(e){this.priceSelect=e.name,this.price=e.price,this.api.price=this.price,this.totalAmount=this.price*this.qty.p,this.api.total=this.totalAmount}},{key:"ionViewWillLeave",value:function(){localStorage.removeItem("pro_id"),localStorage.removeItem("matchId")}},{key:"handleAddressChange",value:function(e){this.latitude=e.geometry.location.lat(),this.longitude=e.geometry.location.lng(),localStorage.setItem("lat",JSON.stringify(this.latitude)),localStorage.setItem("lang",JSON.stringify(this.longitude)),localStorage.setItem("addressOfLast",e.formatted_address),this.setMapCenterLocation(e.geometry.location.lng(),e.geometry.location.lat())}},{key:"getLocationCoordinates",value:function(){var e=this;setTimeout(function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(t){e.latitude=t.coords.latitude,e.longitude=t.coords.longitude,e.getGeoencoder(e.latitude,e.longitude),e.zoom=8,e.setMapCenterLocation(e.longitude,e.latitude)})},500)}},{key:"getGeoencoder",value:function(e,t){var n=this;this.nativeGeocoder.reverseGeocode(e,t,this.geoencoderOptions).then(function(e){n.address=n.generateAddress(e[0])}).catch(function(e){})}},{key:"generateAddress",value:function(e){var t=[],n="";for(var o in e)t.push(e[o]);for(var i in t.reverse(),t)t[i].length&&(n+=t[i]+", ");return n.slice(0,-2)}},{key:"setCurrentLocation",value:function(){var e=this;"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(t){e.latitude=t.coords.latitude,e.longitude=t.coords.longitude,e.zoom=8,e.setMapCenterLocation(e.longitude,e.latitude)})}},{key:"setMapCenterLocation",value:function(e,t){var n=this.getPointFromLongLat(e,t);this.iconFeature2.getGeometry().setCoordinates(n),this.map.getView().setCenter(n),this.map.getView().setZoom(14)}},{key:"getPointFromLongLat",value:function(e,t){return ol.proj.transform([e,t],"EPSG:4326","EPSG:3857")}},{key:"newMapFunction",value:function(){var e=this;this.iconFeature2=new ol.Feature({geometry:new ol.geom.Point(ol.proj.fromLonLat([this.longitude,this.latitude])),name:"Somewhere else"});var t=new ol.interaction.Translate({features:new ol.Collection([this.iconFeature2])});this.iconFeature2.setStyle(new ol.style.Style({image:new ol.style.Icon({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:this.icon})}));var n=new ol.source.Vector({features:[this.iconFeature2]}),o=new ol.layer.Vector({source:n,style:new ol.style.Style({image:new ol.style.Icon({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"})})});this.map=new ol.Map({target:"map2",interactions:ol.interaction.defaults({mouseWheelZoom:!1}),layers:[new ol.layer.Tile({source:new ol.source.OSM}),o],view:new ol.View({center:ol.proj.fromLonLat([this.longitude,this.latitude]),zoom:8})}),this.map.addInteraction(t),t.on("translateend",function(t){var n=ol.proj.toLonLat(t.coordinate);e.latitude=n[1],e.longitude=n[0]}),setTimeout(function(){e.map.updateSize()},500)}},{key:"markerDragEnd",value:function(e){this.latitude=e.lat}},{key:"cartData",value:function(){this.nav.navigateForward("/cart")}}]),t}(),x.\u0275fac=function(e){return new(e||x)(m["\u0275\u0275directiveInject"](c.Q),m["\u0275\u0275directiveInject"](g.a),m["\u0275\u0275directiveInject"](u.a),m["\u0275\u0275directiveInject"](d.a))},x.\u0275cmp=m["\u0275\u0275defineComponent"]({type:x,selectors:[["app-pick-detail"]],viewQuery:function(e,t){var n;1&e&&(m["\u0275\u0275viewQuery"](_,1),m["\u0275\u0275viewQuery"](v,1)),2&e&&(m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.placesRef=n.first),m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.searchElementRef=n.first))},decls:33,vars:14,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["slot","end"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[3,"styles","latitude","longitude","disableDefaultUI"],[3,"latitude","longitude","iconUrl",4,"ngFor","ngForOf"],[1,"location_div"],[1,"loc_lbl"],[1,"input_div"],["src","../../../assets/image_icon/location.svg"],["autofocus","true","ngx-google-places-autocomplete","",3,"value","onAddressChange"],["placesRef","ngx-places"],[1,"gallon_div"],[1,"how_lbl"],[1,"info_div"],[1,"gas_div"],["class","cng_div",3,"active","click",4,"ngFor","ngForOf"],["lines","none","mode","md"],["placeholder","Select Provider",3,"value","ionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"div_item"],[3,"at_span","click",4,"ngFor","ngForOf"],["class","ion-text-center",3,"click",4,"ngFor","ngForOf"],["class","ion-text-center err",4,"ngIf"],["class","ion-no-border",4,"ngIf"],[3,"latitude","longitude","iconUrl"],[1,"cng_div",3,"click"],[1,"gs_lbl"],[3,"value"],[3,"click"],[1,"ion-text-center",3,"click"],[1,"info_lbl"],[1,"price_lbl"],[1,"ion-text-center","err"],[1,"btn_div",3,"click"],[1,"pay_lbl"],["src","../../../assets/image/arrow_img.png"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header",0),m["\u0275\u0275elementStart"](1,"ion-toolbar",1),m["\u0275\u0275elementStart"](2,"ion-buttons",2),m["\u0275\u0275element"](3,"ion-menu-button"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-buttons",3),m["\u0275\u0275element"](5,"ion-back-button",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"ion-title"),m["\u0275\u0275text"](7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"ion-content"),m["\u0275\u0275elementStart"](9,"agm-map",5),m["\u0275\u0275template"](10,y,1,3,"agm-marker",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"div",7),m["\u0275\u0275elementStart"](12,"h3",8),m["\u0275\u0275text"](13,"Delivery Location"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"div",9),m["\u0275\u0275element"](15,"ion-icon",10),m["\u0275\u0275elementStart"](16,"input",11,12),m["\u0275\u0275listener"]("onAddressChange",function(e){return t.handleAddressChange(e)}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"div",13),m["\u0275\u0275elementStart"](19,"h3",14),m["\u0275\u0275text"](20,"How Many Gallon?"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](21,"div",15),m["\u0275\u0275elementStart"](22,"div",16),m["\u0275\u0275template"](23,h,3,3,"div",17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"ion-item",18),m["\u0275\u0275elementStart"](25,"ion-select",19),m["\u0275\u0275listener"]("ionChange",function(e){return t.providerCost(e)}),m["\u0275\u0275template"](26,C,2,2,"ion-select-option",20),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](27,"div",21),m["\u0275\u0275template"](28,P,2,3,"span",22),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](29,"ion-item",18),m["\u0275\u0275template"](30,O,5,5,"ion-label",23),m["\u0275\u0275template"](31,b,2,0,"p",24),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](32,M,5,2,"ion-footer",25)),2&e&&(m["\u0275\u0275advance"](7),m["\u0275\u0275textInterpolate1"]("",t.page," Detail"),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("styles",t.styles)("latitude",t.latitude)("longitude",t.longitude)("disableDefaultUI",!0),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.provider),m["\u0275\u0275advance"](6),m["\u0275\u0275propertyInterpolate"]("value",t.addr),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("ngForOf",t.sub_fuel_type),m["\u0275\u0275advance"](2),m["\u0275\u0275propertyInterpolate"]("value",t.selectPro),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.provider),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngForOf",t.quantityArray),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngForOf",t.pricing),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",0==(null==t.pricing?null:t.pricing.length)),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.totalAmount>0))},directives:[c.p,c.K,c.h,c.w,c.e,c.f,c.I,c.k,f.b,r.k,c.q,p.GooglePlaceDirective,c.s,c.B,c.U,r.l,f.c,c.C,c.t,c.o],styles:["ion-content[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:var(--my_theme);color:#fff}ion-content[_ngcontent-%COMP%]   .err[_ngcontent-%COMP%]{color:red;font-family:rubik_md;font-size:13px;position:absolute;left:0;right:0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]{height:305px;box-shadow:0 -1px 6px 0 rgba(0,0,0,.16);width:100%;background-color:var(--white);position:absolute;bottom:0;border-radius:20px 20px 0 0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .how_lbl[_ngcontent-%COMP%]{font-size:18px;color:var(--blue);font-family:rubik_md;text-align:center}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]{padding:0 20px}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]{display:flex;justify-content:space-around;padding:12px 0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]   .cng_div[_ngcontent-%COMP%]{height:40px;width:130px;border-radius:5px;box-shadow:0 0 4px 0 rgba(0,0,0,.16);display:flex;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]   .cng_div[_ngcontent-%COMP%]   .gs_lbl[_ngcontent-%COMP%]{font-size:15px;color:var(--my_theme);font-family:rubik_md;margin:0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:var(--my_theme);box-shadow:none}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .gs_lbl[_ngcontent-%COMP%]{color:var(--white)}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-bottom:dashed;border-bottom-width:1px;border-bottom-color:var(--silver);--padding-start:0;--inner-padding-end:0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:100%;font-family:rubik_md;font-size:15px;padding:0;color:var(--blue);display:contents}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .info_lbl[_ngcontent-%COMP%]{font-size:15px;color:var(--blue);font-family:rubik_r}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]{font-size:15px;color:var(--blue);font-family:rubik_md}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .at_price[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .my_price[_ngcontent-%COMP%]{color:var(--my_theme)}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .div_item[_ngcontent-%COMP%]{border-bottom:dashed;border-bottom-width:1px;border-bottom-color:var(--silver);padding:20px 0;display:flex;justify-content:space-evenly}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .div_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-family:rubik_md;color:var(--blue)}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .div_item[_ngcontent-%COMP%]   .at_span[_ngcontent-%COMP%]{color:var(--my_theme)}.map[_ngcontent-%COMP%]{height:100%;width:100%}input[_ngcontent-%COMP%]{background:transparent;border:none;font-family:rubik_r;margin-left:10px;color:#fff}input[_ngcontent-%COMP%]:focus{outline:none}ion-footer[_ngcontent-%COMP%]   .btn_div[_ngcontent-%COMP%]{background-color:var(--my_theme);height:50px;display:flex;align-items:center;justify-content:space-between;padding:0 16px}ion-footer[_ngcontent-%COMP%]   .btn_div[_ngcontent-%COMP%]   .pay_lbl[_ngcontent-%COMP%]{font-size:18px;color:var(--white);font-family:rubik_md;margin:0}"]}),x)}],I=((w=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||w)},w.\u0275mod=m["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[s.i.forChild(S)],s.i]}),w),T=((k=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||k)},k.\u0275mod=m["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[r.b,l.a,c.L,f.a.forRoot({apiKey:a.a.google_map_key}),I,p.GooglePlaceModule]]}),k)}}])}();