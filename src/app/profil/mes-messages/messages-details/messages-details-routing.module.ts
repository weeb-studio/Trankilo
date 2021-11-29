import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesDetailsPage } from './messages-details.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesDetailsPageRoutingModule {}
