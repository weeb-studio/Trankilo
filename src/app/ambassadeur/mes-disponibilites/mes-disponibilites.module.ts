import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesDisponibilitesPageRoutingModule } from './mes-disponibilites-routing.module';

import { MesDisponibilitesPage } from './mes-disponibilites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesDisponibilitesPageRoutingModule
  ],
  declarations: [MesDisponibilitesPage]
})
export class MesDisponibilitesPageModule {}
