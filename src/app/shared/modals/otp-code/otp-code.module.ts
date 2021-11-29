import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpCodePageRoutingModule } from './otp-code-routing.module';

import { OtpCodePage } from './otp-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpCodePageRoutingModule
  ],
  declarations: [OtpCodePage]
})
export class OtpCodePageModule {}
