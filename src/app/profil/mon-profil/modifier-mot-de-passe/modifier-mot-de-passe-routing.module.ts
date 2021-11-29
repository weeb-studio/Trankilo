import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierMotDePassePage } from './modifier-mot-de-passe.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierMotDePassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierMotDePassePageRoutingModule {}
