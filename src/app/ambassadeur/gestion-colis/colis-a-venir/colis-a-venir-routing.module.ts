import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColisAVenirPage } from './colis-a-venir.page';

const routes: Routes = [
  {
    path: '',
    component: ColisAVenirPage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColisAVenirPageRoutingModule {}