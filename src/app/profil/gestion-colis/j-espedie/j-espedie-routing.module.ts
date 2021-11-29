import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JEspediePage } from './j-espedie.page';

const routes: Routes = [
  {
    path: '',
    component: JEspediePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JEspediePageRoutingModule {}
