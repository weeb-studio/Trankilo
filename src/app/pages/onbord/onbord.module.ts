import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnbordPageRoutingModule } from './onbord-routing.module';

import { OnbordPage } from './onbord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnbordPageRoutingModule
  ],
  declarations: [OnbordPage]
})
export class OnbordPageModule {}
