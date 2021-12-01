import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyLivresPageRoutingModule } from './empty-livres-routing.module';

import { EmptyLivresPage } from './empty-livres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyLivresPageRoutingModule
  ],
  declarations: [EmptyLivresPage]
})
export class EmptyLivresPageModule {}
