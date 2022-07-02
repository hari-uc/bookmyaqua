import { NgSelectModule } from "@ng-select/ng-select";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VerifyNumberPageRoutingModule } from "./verify-number-routing.module";

import { VerifyNumberPage } from "./verify-number.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    VerifyNumberPageRoutingModule,
  ],
  declarations: [VerifyNumberPage],
})
export class VerifyNumberPageModule {}
