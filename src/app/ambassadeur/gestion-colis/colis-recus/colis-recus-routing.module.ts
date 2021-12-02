import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColisRecusPage } from './colis-recus.page';

const routes: Routes = [
  {
    path: '',
    component: ColisRecusPage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'signaler-soucis',
    loadChildren: () => import('./signaler-soucis/signaler-soucis.module').then( m => m.SignalerSoucisPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColisRecusPageRoutingModule {}
