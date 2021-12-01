import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbassadeurPageRoutingModule } from './ambassadeur-routing.module';

import { AmbassadeurPage } from './ambassadeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbassadeurPageRoutingModule
  ],
  declarations: [AmbassadeurPage]
})
export class AmbassadeurPageModule {}
