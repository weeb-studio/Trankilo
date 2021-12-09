import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacterExpediteurPageRoutingModule } from './contacter-expediteur-routing.module';

import { ContacterExpediteurPage } from './contacter-expediteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacterExpediteurPageRoutingModule
  ],
  declarations: [ContacterExpediteurPage]
})
export class ContacterExpediteurPageModule {}
