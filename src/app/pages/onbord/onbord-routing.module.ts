import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnbordPage } from './onbord.page';

const routes: Routes = [
  {
    path: '',
    component: OnbordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnbordPageRoutingModule {}
