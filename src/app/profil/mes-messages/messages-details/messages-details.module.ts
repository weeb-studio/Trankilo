import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesDetailsPageRoutingModule } from './messages-details-routing.module';

import { MessagesDetailsPage } from './messages-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesDetailsPageRoutingModule
  ],
  declarations: [MessagesDetailsPage]
})
export class MessagesDetailsPageModule {}
