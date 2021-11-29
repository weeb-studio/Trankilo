import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationEmailPageRoutingModule } from './confirmation-email-routing.module';

import { ConfirmationEmailPage } from './confirmation-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationEmailPageRoutingModule
  ],
  declarations: [ConfirmationEmailPage]
})
export class ConfirmationEmailPageModule {}
