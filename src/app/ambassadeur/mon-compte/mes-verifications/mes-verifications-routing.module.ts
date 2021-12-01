import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesVerificationsPage } from './mes-verifications.page';

const routes: Routes = [
  {
    path: '',
    component: MesVerificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesVerificationsPageRoutingModule {}
