import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionColisPage } from './gestion-colis.page';

const routes: Routes = [
  {
    path: '',
    component: GestionColisPage
  },
  {
    path: 'colis-a-venir',
    loadChildren: () => import('./colis-a-venir/colis-a-venir.module').then( m => m.ColisAVenirPageModule)
  },
  {
    path: 'colis-recus',
    loadChildren: () => import('./colis-recus/colis-recus.module').then( m => m.ColisRecusPageModule)
  },
  {
    path: 'colis-livres',
    loadChildren: () => import('./colis-livres/colis-livres.module').then( m => m.ColisLivresPageModule)
  },
  {
    path: 'empty-a-venir',
    loadChildren: () => import('./empty-a-venir/empty-a-venir.module').then( m => m.EmptyAVenirPageModule)
  },
  {
    path: 'empty-recus',
    loadChildren: () => import('./empty-recus/empty-recus.module').then( m => m.EmptyRecusPageModule)
  },
  {
    path: 'empty-livres',
    loadChildren: () => import('./empty-livres/empty-livres.module').then( m => m.EmptyLivresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionColisPageRoutingModule {}
