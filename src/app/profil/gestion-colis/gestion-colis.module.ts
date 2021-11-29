import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionColisPageRoutingModule } from './gestion-colis-routing.module';

import { GestionColisPage } from './gestion-colis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionColisPageRoutingModule
  ],
  declarations: [GestionColisPage]
})
export class GestionColisPageModule {}
