import { environment } from "./../../../environments/environment.prod";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CompleteOrderPageRoutingModule } from "./complete-order-routing.module";

import { CompleteOrderPage } from "./complete-order.page";
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
    CompleteOrderPageRoutingModule,
  ],
  declarations: [CompleteOrderPage],
})
export class CompleteOrderPageModule {}
