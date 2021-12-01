import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyLivresPage } from './empty-livres.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyLivresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyLivresPageRoutingModule {}
