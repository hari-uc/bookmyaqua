import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricePageRoutingModule } from './price-routing.module';

import { PricePage } from './price.page';
import { AddcategoryPage } from '../addcategory/addcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricePageRoutingModule,
  ],
  declarations: [PricePage]
})
export class PricePageModule {}
