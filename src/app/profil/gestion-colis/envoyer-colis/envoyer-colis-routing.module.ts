import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvoyerColisPage } from './envoyer-colis.page';

const routes: Routes = [
  {
    path: '',
    component: EnvoyerColisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvoyerColisPageRoutingModule {}
