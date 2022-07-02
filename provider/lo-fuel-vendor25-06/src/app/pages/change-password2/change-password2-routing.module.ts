import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePassword2Page } from './change-password2.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePassword2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePassword2PageRoutingModule {}
