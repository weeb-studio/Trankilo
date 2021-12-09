import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContacterExpediteurPage } from './contacter-expediteur.page';

const routes: Routes = [
  {
    path: '',
    component: ContacterExpediteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContacterExpediteurPageRoutingModule {}
