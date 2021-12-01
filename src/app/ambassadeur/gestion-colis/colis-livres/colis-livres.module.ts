import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColisLivresPageRoutingModule } from './colis-livres-routing.module';

import { ColisLivresPage } from './colis-livres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColisLivresPageRoutingModule
  ],
  declarations: [ColisLivresPage]
})
export class ColisLivresPageModule {}
