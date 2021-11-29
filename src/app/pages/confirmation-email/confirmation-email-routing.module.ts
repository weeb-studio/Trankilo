import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationEmailPage } from './confirmation-email.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationEmailPageRoutingModule {}
