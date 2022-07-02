import { IonBottomDrawerModule } from "ion-bottom-drawer";
import { environment } from "./../../../environments/environment";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google_map_key,
    }),
    AgmDirectionModule,
    IonBottomDrawerModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
