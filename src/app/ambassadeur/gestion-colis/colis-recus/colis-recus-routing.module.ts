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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColisRecusPageRoutingModule {}
