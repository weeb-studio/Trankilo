import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpCodePage } from './otp-code.page';

const routes: Routes = [
  {
    path: '',
    component: OtpCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpCodePageRoutingModule {}
