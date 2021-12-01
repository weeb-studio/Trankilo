import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColisLivresPage } from './colis-livres.page';

const routes: Routes = [
  {
    path: '',
    component: ColisLivresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColisLivresPageRoutingModule {}
