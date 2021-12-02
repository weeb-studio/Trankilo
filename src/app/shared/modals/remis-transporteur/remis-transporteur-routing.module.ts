import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemisTransporteurPage } from './remis-transporteur.page';

const routes: Routes = [
  {
    path: '',
    component: RemisTransporteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemisTransporteurPageRoutingModule {}
