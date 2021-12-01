import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyAVenirPage } from './empty-a-venir.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyAVenirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyAVenirPageRoutingModule {}
