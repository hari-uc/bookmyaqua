import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePassword2PageRoutingModule } from './change-password2-routing.module';

import { ChangePassword2Page } from './change-password2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePassword2PageRoutingModule
  ],
  declarations: [ChangePassword2Page]
})
export class ChangePassword2PageModule {}
