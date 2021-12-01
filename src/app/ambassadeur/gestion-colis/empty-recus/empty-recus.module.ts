import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyRecusPageRoutingModule } from './empty-recus-routing.module';

import { EmptyRecusPage } from './empty-recus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyRecusPageRoutingModule
  ],
  declarations: [EmptyRecusPage]
})
export class EmptyRecusPageModule {}
