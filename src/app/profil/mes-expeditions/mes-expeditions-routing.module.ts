import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesExpeditionsPage } from './mes-expeditions.page';

const routes: Routes = [
  {
    path: '',
    component: MesExpeditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesExpeditionsPageRoutingModule {}
