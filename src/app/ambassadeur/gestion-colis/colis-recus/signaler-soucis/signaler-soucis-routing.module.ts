import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignalerSoucisPage } from './signaler-soucis.page';

const routes: Routes = [
  {
    path: '',
    component: SignalerSoucisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalerSoucisPageRoutingModule {}
