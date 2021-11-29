import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionColisPage } from './gestion-colis.page';

const routes: Routes = [
  {
    path: '',
    component: GestionColisPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionColisPageRoutingModule {}
