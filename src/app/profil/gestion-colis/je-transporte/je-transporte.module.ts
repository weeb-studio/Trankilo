import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeTransportePageRoutingModule } from './je-transporte-routing.module';

import { JeTransportePage } from './je-transporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeTransportePageRoutingModule
  ],
  declarations: [JeTransportePage]
})
export class JeTransportePageModule {}
