import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyRecusPage } from './empty-recus.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyRecusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyRecusPageRoutingModule {}
