import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignalerSoucisPageRoutingModule } from './signaler-soucis-routing.module';

import { SignalerSoucisPage } from './signaler-soucis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignalerSoucisPageRoutingModule
  ],
  declarations: [SignalerSoucisPage]
})
export class SignalerSoucisPageModule {}
