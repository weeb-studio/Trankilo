import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JEspediePageRoutingModule } from './j-espedie-routing.module';

import { JEspediePage } from './j-espedie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JEspediePageRoutingModule
  ],
  declarations: [JEspediePage]
})
export class JEspediePageModule {}
