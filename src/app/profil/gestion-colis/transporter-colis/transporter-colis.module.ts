import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransporterColisPageRoutingModule } from './transporter-colis-routing.module';

import { TransporterColisPage } from './transporter-colis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransporterColisPageRoutingModule
  ],
  declarations: [TransporterColisPage]
})
export class TransporterColisPageModule {}
