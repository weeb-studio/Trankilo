import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColisRecusPageRoutingModule } from './colis-recus-routing.module';

import { ColisRecusPage } from './colis-recus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColisRecusPageRoutingModule
  ],
  declarations: [ColisRecusPage]
})
export class ColisRecusPageModule {}
