(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"80Qg":function(t,e,n){"use strict";n.r(e),n.d(e,"PickDetailPageModule",function(){return x});var o=n("cxbk"),i=n("ofXK"),l=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),s=n("h+qT"),c=n("7itd"),d=n("H+bZ"),p=n("2Rin"),g=n("fXoL"),m=n("pxUr");const u=["placesRef"],h=["search"];function _(t,e){if(1&t&&g["\u0275\u0275element"](0,"agm-marker",26),2&t){const t=e.$implicit,n=g["\u0275\u0275nextContext"]();g["\u0275\u0275property"]("latitude",null==t?null:t.lat)("longitude",null==t?null:t.lang)("iconUrl",n.Truckicon)}}function f(t,e){if(1&t){const t=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"div",27),g["\u0275\u0275listener"]("click",function(){g["\u0275\u0275restoreView"](t);const n=e.$implicit;return g["\u0275\u0275nextContext"]().match(n)}),g["\u0275\u0275elementStart"](1,"h3",28),g["\u0275\u0275text"](2),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=g["\u0275\u0275nextContext"]();g["\u0275\u0275classProp"]("active",n.select==t.name),g["\u0275\u0275advance"](2),g["\u0275\u0275textInterpolate"](null==t?null:t.name)}}function y(t,e){if(1&t&&(g["\u0275\u0275elementStart"](0,"ion-select-option",29),g["\u0275\u0275text"](1),g["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;g["\u0275\u0275propertyInterpolate"]("value",null==t?null:t.id),g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate"](null==t?null:t.name)}}function v(t,e){if(1&t){const t=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"span",30),g["\u0275\u0275listener"]("click",function(){g["\u0275\u0275restoreView"](t);const n=e.$implicit;return g["\u0275\u0275nextContext"]().selectQty(n)}),g["\u0275\u0275text"](1),g["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=g["\u0275\u0275nextContext"]();g["\u0275\u0275classProp"]("at_span",n.qty==t),g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate"](null==t?null:t.p)}}function C(t,e){if(1&t){const t=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"ion-label",31),g["\u0275\u0275listener"]("click",function(){g["\u0275\u0275restoreView"](t);const n=e.$implicit;return g["\u0275\u0275nextContext"]().myPrice(n)}),g["\u0275\u0275elementStart"](1,"h3",32),g["\u0275\u0275text"](2),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](3,"p",33),g["\u0275\u0275text"](4),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=g["\u0275\u0275nextContext"]();g["\u0275\u0275advance"](2),g["\u0275\u0275textInterpolate"](null==t?null:t.name),g["\u0275\u0275advance"](1),g["\u0275\u0275classProp"]("my_price",n.priceSelect==t.name),g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate2"]("",n.currency,"",null==t?null:t.price,"")}}function P(t,e){1&t&&(g["\u0275\u0275elementStart"](0,"p",34),g["\u0275\u0275text"](1," No Data Found "),g["\u0275\u0275elementEnd"]())}function O(t,e){if(1&t){const t=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"ion-footer",0),g["\u0275\u0275elementStart"](1,"div",35),g["\u0275\u0275listener"]("click",function(){return g["\u0275\u0275restoreView"](t),g["\u0275\u0275nextContext"]().cartData()}),g["\u0275\u0275elementStart"](2,"p",36),g["\u0275\u0275text"](3),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](4,"img",37),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()}if(2&t){const t=g["\u0275\u0275nextContext"]();g["\u0275\u0275advance"](3),g["\u0275\u0275textInterpolate2"]("Proceed to pay ",t.currency,"",t.totalAmount,"")}}const b=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.nav=t,this.api=e,this.util=n,this.nativeGeocoder=o,this.Centerlat=22.298922,this.Centerlng=70.802177,this.trucklat=22.298555,this.trucklng=70.802177,this.redius="10",this.lat=22.2648,this.lang=70.7846,this.radius=100,this.icon="../../../assets/image/gas_truck.png",this.cng=1,this.lpg=0,this.origin={},this.destination={},this.renderOptions={suppressMarkers:!0,draggable:!1},this.iconUrl="../../../assets/image/sender_ic.png",this.Truckicon="../../../assets/image/gas_truck.png",this.qty=5,this.totalAmount=0,this.iconTruck="../../../assets/image/petrol_truck.png",this.styles=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],this.quantityArray=[{p:"1"},{p:"2"},{p:"3"},{p:"4"},{p:"5"},{p:"6"},{p:"7"},{p:"8"},{p:"9"},{p:"10"}],this.geoencoderOptions={useLocale:!0,maxResults:5}}ngOnInit(){setTimeout(()=>{this.newMapFunction()},500)}ionViewWillEnter(){this.qty=this.quantityArray[5],this.api.qty=this.qty.p,this.addr=localStorage.getItem("addressOfLast"),this.page=this.api.select_fuel,setTimeout(()=>{this.setCurrentLocation()},500);let t={lat:JSON.parse(localStorage.getItem("curentLat")),lang:JSON.parse(localStorage.getItem("curentLang")),radius:100};this.util.presentLoading(),this.api.postDataWithToken("home",t).subscribe(t=>{t.success&&(this.data=t.data,this.provider=t.data.provider,this.selectPro=t.data.provider[0].id,this.api.pro_id=this.selectPro,this.data.fuel_type.forEach((t,e)=>{t.id==localStorage.getItem("pro_id")&&(this.sub_fuel_type=this.data.fuel_type[e].sub_fuel_type,this.select=this.sub_fuel_type[0].name,this.matchId=this.sub_fuel_type[0].id)}),this.util.dismissLoading())},t=>{this.util.dismissLoading()})}selectQty(t){0==this.pricing.length?this.util.presentToast("There is no any price found"):(this.qty=t,this.api.qty=this.qty.p,this.totalAmount=JSON.parse(this.qty.p)*this.price,this.api.total=this.totalAmount)}match(t){console.log("item math",t),this.select=t.name,this.matchId=t.id,localStorage.setItem("matchId",t.id),this.api.getData("provider/"+this.selectPro+"/"+t.id).subscribe(t=>{t.success&&(null==t.data.price?(this.pricing=[],this.totalAmount=0,this.api.total=this.totalAmount,this.util.dismissLoading()):(this.pricing=t.data.price.fuel_pricing,this.currency=t.data.price.currency,this.priceSelect=t.data.price.fuel_pricing[0].name,this.price=t.data.price.fuel_pricing[0].price,this.api.price=this.price,this.totalAmount=JSON.parse(this.qty.p)*this.price,this.api.total=this.totalAmount,localStorage.setItem("proLattt",JSON.stringify(t.data.lat)),localStorage.setItem("proLangg",JSON.stringify(t.data.lang)),this.util.dismissLoading()),this.util.dismissLoading())},t=>{this.util.dismissLoading()})}providerCost(t){console.log("select provider",t),console.log("this.matchId",this.matchId),console.log("this.api.pro_id",this.api.pro_id),console.log("this.selectPro",this.selectPro),this.api.pro_id=t.detail.value,this.selectPro=t.detail.value,this.provider.forEach(t=>{t.fuel_type.forEach(t=>{console.log("this.api.pro_id == this.selectPro",this.api.pro_id==this.selectPro),this.api.pro_id==this.selectPro?this.api.getData("provider/"+this.selectPro+"/"+this.matchId).subscribe(t=>{console.log("select pro data",t),t.success&&(null==t.data.price?(this.pricing=[],this.totalAmount=0):(this.pricing=t.data.price.fuel_pricing,this.currency=t.data.price.currency,this.priceSelect=t.data.price.fuel_pricing[0].name,this.price=t.data.price.fuel_pricing[0].price,this.api.price=this.price,this.totalAmount=JSON.parse(this.qty.p)*this.price,this.api.total=this.totalAmount,localStorage.setItem("proLattt",JSON.stringify(t.data.lat)),localStorage.setItem("proLangg",JSON.stringify(t.data.lat))))},t=>{this.util.dismissLoading()}):(this.pricing=[],this.totalAmount=0,this.api.total=this.totalAmount,this.util.dismissLoading())})})}myPrice(t){this.priceSelect=t.name,this.price=t.price,this.api.price=this.price,this.totalAmount=this.price*this.qty.p,this.api.total=this.totalAmount}ionViewWillLeave(){localStorage.removeItem("pro_id"),localStorage.removeItem("matchId")}handleAddressChange(t){this.latitude=t.geometry.location.lat(),this.longitude=t.geometry.location.lng(),localStorage.setItem("lat",JSON.stringify(this.latitude)),localStorage.setItem("lang",JSON.stringify(this.longitude)),localStorage.setItem("addressOfLast",t.formatted_address),this.setMapCenterLocation(t.geometry.location.lng(),t.geometry.location.lat())}getLocationCoordinates(){setTimeout(()=>{"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.getGeoencoder(this.latitude,this.longitude),this.zoom=8,this.setMapCenterLocation(this.longitude,this.latitude)})},500)}getGeoencoder(t,e){this.nativeGeocoder.reverseGeocode(t,e,this.geoencoderOptions).then(t=>{this.address=this.generateAddress(t[0])}).catch(t=>{})}generateAddress(t){let e=[],n="";for(let o in t)e.push(t[o]);e.reverse();for(let o in e)e[o].length&&(n+=e[o]+", ");return n.slice(0,-2)}setCurrentLocation(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.zoom=8,this.setMapCenterLocation(this.longitude,this.latitude)})}setMapCenterLocation(t,e){var n=this.getPointFromLongLat(t,e);this.iconFeature2.getGeometry().setCoordinates(n),this.map.getView().setCenter(n),this.map.getView().setZoom(14)}getPointFromLongLat(t,e){return ol.proj.transform([t,e],"EPSG:4326","EPSG:3857")}newMapFunction(){this.iconFeature2=new ol.Feature({geometry:new ol.geom.Point(ol.proj.fromLonLat([this.longitude,this.latitude])),name:"Somewhere else"});const t=new ol.interaction.Translate({features:new ol.Collection([this.iconFeature2])});this.iconFeature2.setStyle(new ol.style.Style({image:new ol.style.Icon({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:this.icon})}));const e=new ol.source.Vector({features:[this.iconFeature2]}),n=new ol.layer.Vector({source:e,style:new ol.style.Style({image:new ol.style.Icon({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"})})});this.map=new ol.Map({target:"map2",interactions:ol.interaction.defaults({mouseWheelZoom:!1}),layers:[new ol.layer.Tile({source:new ol.source.OSM}),n],view:new ol.View({center:ol.proj.fromLonLat([this.longitude,this.latitude]),zoom:8})}),this.map.addInteraction(t),t.on("translateend",t=>{var e=ol.proj.toLonLat(t.coordinate);this.latitude=e[1],this.longitude=e[0]}),setTimeout(()=>{this.map.updateSize()},500)}markerDragEnd(t){this.latitude=t.lat}cartData(){this.nav.navigateForward("/cart")}}return t.\u0275fac=function(e){return new(e||t)(g["\u0275\u0275directiveInject"](a.Q),g["\u0275\u0275directiveInject"](d.a),g["\u0275\u0275directiveInject"](p.a),g["\u0275\u0275directiveInject"](s.a))},t.\u0275cmp=g["\u0275\u0275defineComponent"]({type:t,selectors:[["app-pick-detail"]],viewQuery:function(t,e){if(1&t&&(g["\u0275\u0275viewQuery"](u,1),g["\u0275\u0275viewQuery"](h,1)),2&t){let t;g["\u0275\u0275queryRefresh"](t=g["\u0275\u0275loadQuery"]())&&(e.placesRef=t.first),g["\u0275\u0275queryRefresh"](t=g["\u0275\u0275loadQuery"]())&&(e.searchElementRef=t.first)}},decls:33,vars:14,consts:[[1,"ion-no-border"],["mode","md"],["slot","start"],["slot","end"],["defaultHref","home","icon","chevron-back-outline","text","","mode","md"],[3,"styles","latitude","longitude","disableDefaultUI"],[3,"latitude","longitude","iconUrl",4,"ngFor","ngForOf"],[1,"location_div"],[1,"loc_lbl"],[1,"input_div"],["src","../../../assets/image_icon/location.svg"],["autofocus","true","ngx-google-places-autocomplete","",3,"value","onAddressChange"],["placesRef","ngx-places"],[1,"gallon_div"],[1,"how_lbl"],[1,"info_div"],[1,"gas_div"],["class","cng_div",3,"active","click",4,"ngFor","ngForOf"],["lines","none","mode","md"],["placeholder","Select Provider",3,"value","ionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"div_item"],[3,"at_span","click",4,"ngFor","ngForOf"],["class","ion-text-center",3,"click",4,"ngFor","ngForOf"],["class","ion-text-center err",4,"ngIf"],["class","ion-no-border",4,"ngIf"],[3,"latitude","longitude","iconUrl"],[1,"cng_div",3,"click"],[1,"gs_lbl"],[3,"value"],[3,"click"],[1,"ion-text-center",3,"click"],[1,"info_lbl"],[1,"price_lbl"],[1,"ion-text-center","err"],[1,"btn_div",3,"click"],[1,"pay_lbl"],["src","../../../assets/image/arrow_img.png"]],template:function(t,e){1&t&&(g["\u0275\u0275elementStart"](0,"ion-header",0),g["\u0275\u0275elementStart"](1,"ion-toolbar",1),g["\u0275\u0275elementStart"](2,"ion-buttons",2),g["\u0275\u0275element"](3,"ion-menu-button"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](4,"ion-buttons",3),g["\u0275\u0275element"](5,"ion-back-button",4),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](6,"ion-title"),g["\u0275\u0275text"](7),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](8,"ion-content"),g["\u0275\u0275elementStart"](9,"agm-map",5),g["\u0275\u0275template"](10,_,1,3,"agm-marker",6),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](11,"div",7),g["\u0275\u0275elementStart"](12,"h3",8),g["\u0275\u0275text"](13,"Delivery Location"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](14,"div",9),g["\u0275\u0275element"](15,"ion-icon",10),g["\u0275\u0275elementStart"](16,"input",11,12),g["\u0275\u0275listener"]("onAddressChange",function(t){return e.handleAddressChange(t)}),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](18,"div",13),g["\u0275\u0275elementStart"](19,"h3",14),g["\u0275\u0275text"](20,"How Many Gallon?"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](21,"div",15),g["\u0275\u0275elementStart"](22,"div",16),g["\u0275\u0275template"](23,f,3,3,"div",17),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](24,"ion-item",18),g["\u0275\u0275elementStart"](25,"ion-select",19),g["\u0275\u0275listener"]("ionChange",function(t){return e.providerCost(t)}),g["\u0275\u0275template"](26,y,2,2,"ion-select-option",20),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](27,"div",21),g["\u0275\u0275template"](28,v,2,3,"span",22),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](29,"ion-item",18),g["\u0275\u0275template"](30,C,5,5,"ion-label",23),g["\u0275\u0275template"](31,P,2,0,"p",24),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275template"](32,O,5,2,"ion-footer",25)),2&t&&(g["\u0275\u0275advance"](7),g["\u0275\u0275textInterpolate1"]("",e.page," Detail"),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("styles",e.styles)("latitude",e.latitude)("longitude",e.longitude)("disableDefaultUI",!0),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngForOf",e.provider),g["\u0275\u0275advance"](6),g["\u0275\u0275propertyInterpolate"]("value",e.addr),g["\u0275\u0275advance"](7),g["\u0275\u0275property"]("ngForOf",e.sub_fuel_type),g["\u0275\u0275advance"](2),g["\u0275\u0275propertyInterpolate"]("value",e.selectPro),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngForOf",e.provider),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("ngForOf",e.quantityArray),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("ngForOf",e.pricing),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngIf",0==(null==e.pricing?null:e.pricing.length)),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngIf",e.totalAmount>0))},directives:[a.p,a.K,a.h,a.w,a.e,a.f,a.I,a.k,m.b,i.k,a.q,c.GooglePlaceDirective,a.s,a.B,a.U,i.l,m.c,a.C,a.t,a.o],styles:["ion-content[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:var(--my_theme);color:#fff}ion-content[_ngcontent-%COMP%]   .err[_ngcontent-%COMP%]{color:red;font-family:rubik_md;font-size:13px;position:absolute;left:0;right:0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]{height:305px;box-shadow:0 -1px 6px 0 rgba(0,0,0,.16);width:100%;background-color:var(--white);position:absolute;bottom:0;border-radius:20px 20px 0 0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .how_lbl[_ngcontent-%COMP%]{font-size:18px;color:var(--blue);font-family:rubik_md;text-align:center}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]{padding:0 20px}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]{display:flex;justify-content:space-around;padding:12px 0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]   .cng_div[_ngcontent-%COMP%]{height:40px;width:130px;border-radius:5px;box-shadow:0 0 4px 0 rgba(0,0,0,.16);display:flex;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]   .cng_div[_ngcontent-%COMP%]   .gs_lbl[_ngcontent-%COMP%]{font-size:15px;color:var(--my_theme);font-family:rubik_md;margin:0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:var(--my_theme);box-shadow:none}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .gas_div[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .gs_lbl[_ngcontent-%COMP%]{color:var(--white)}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-bottom:dashed;border-bottom-width:1px;border-bottom-color:var(--silver);--padding-start:0;--inner-padding-end:0}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{max-width:100%;font-family:rubik_md;font-size:15px;padding:0;color:var(--blue);display:contents}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .info_lbl[_ngcontent-%COMP%]{font-size:15px;color:var(--blue);font-family:rubik_r}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]{font-size:15px;color:var(--blue);font-family:rubik_md}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .at_price[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .my_price[_ngcontent-%COMP%]{color:var(--my_theme)}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .div_item[_ngcontent-%COMP%]{border-bottom:dashed;border-bottom-width:1px;border-bottom-color:var(--silver);padding:20px 0;display:flex;justify-content:space-evenly}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .div_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-family:rubik_md;color:var(--blue)}ion-content[_ngcontent-%COMP%]   .gallon_div[_ngcontent-%COMP%]   .info_div[_ngcontent-%COMP%]   .div_item[_ngcontent-%COMP%]   .at_span[_ngcontent-%COMP%]{color:var(--my_theme)}.map[_ngcontent-%COMP%]{height:100%;width:100%}input[_ngcontent-%COMP%]{background:transparent;border:none;font-family:rubik_r;margin-left:10px;color:#fff}input[_ngcontent-%COMP%]:focus{outline:none}ion-footer[_ngcontent-%COMP%]   .btn_div[_ngcontent-%COMP%]{background-color:var(--my_theme);height:50px;display:flex;align-items:center;justify-content:space-between;padding:0 16px}ion-footer[_ngcontent-%COMP%]   .btn_div[_ngcontent-%COMP%]   .pay_lbl[_ngcontent-%COMP%]{font-size:18px;color:var(--white);font-family:rubik_md;margin:0}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=g["\u0275\u0275defineInjector"]({imports:[[r.i.forChild(b)],r.i]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=g["\u0275\u0275defineInjector"]({imports:[[i.b,l.a,a.L,m.a.forRoot({apiKey:o.a.google_map_key}),M,c.GooglePlaceModule]]}),t})()}}]);