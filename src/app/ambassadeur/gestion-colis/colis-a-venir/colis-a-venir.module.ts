import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColisAVenirPageRoutingModule } from './colis-a-venir-routing.module';

import { ColisAVenirPage } from './colis-a-venir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColisAVenirPageRoutingModule
  ],
  declarations: [ColisAVenirPage]
})
export class ColisAVenirPageModule {}
