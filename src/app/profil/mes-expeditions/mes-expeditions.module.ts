import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesExpeditionsPageRoutingModule } from './mes-expeditions-routing.module';

import { MesExpeditionsPage } from './mes-expeditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesExpeditionsPageRoutingModule
  ],
  declarations: [MesExpeditionsPage]
})
export class MesExpeditionsPageModule {}
