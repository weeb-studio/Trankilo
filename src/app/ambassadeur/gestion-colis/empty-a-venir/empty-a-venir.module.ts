import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyAVenirPageRoutingModule } from './empty-a-venir-routing.module';

import { EmptyAVenirPage } from './empty-a-venir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyAVenirPageRoutingModule
  ],
  declarations: [EmptyAVenirPage]
})
export class EmptyAVenirPageModule {}
