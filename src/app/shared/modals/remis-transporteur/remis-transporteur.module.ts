import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemisTransporteurPageRoutingModule } from './remis-transporteur-routing.module';

import { RemisTransporteurPage } from './remis-transporteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemisTransporteurPageRoutingModule
  ],
  declarations: [RemisTransporteurPage]
})
export class RemisTransporteurPageModule {}
