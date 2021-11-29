import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeTransportePage } from './je-transporte.page';

const routes: Routes = [
  {
    path: '',
    component: JeTransportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeTransportePageRoutingModule {}
