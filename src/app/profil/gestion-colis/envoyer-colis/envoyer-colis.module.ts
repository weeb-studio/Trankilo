import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvoyerColisPageRoutingModule } from './envoyer-colis-routing.module';

import { EnvoyerColisPage } from './envoyer-colis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvoyerColisPageRoutingModule
  ],
  declarations: [EnvoyerColisPage]
})
export class EnvoyerColisPageModule {}
