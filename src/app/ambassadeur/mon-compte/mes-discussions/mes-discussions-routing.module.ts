import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesDiscussionsPage } from './mes-discussions.page';

const routes: Routes = [
  {
    path: '',
    component: MesDiscussionsPage
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
export class MesDiscussionsPageRoutingModule {}
