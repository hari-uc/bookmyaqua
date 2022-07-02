import { PopoverPageModule } from "./pages/popover/popover.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import {
  IonicModule,
  IonicRouteStrategy,
  PopoverController,
} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { IonBottomDrawerModule } from "ion-bottom-drawer";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NgSelectModule,
    IonBottomDrawerModule,
    PopoverPageModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    OneSignal,
    NativeGeocoder,
    Geolocation,
    LocationAccuracy,
    Diagnostic,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
