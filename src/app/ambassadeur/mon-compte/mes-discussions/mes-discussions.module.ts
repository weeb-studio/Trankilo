import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesDiscussionsPageRoutingModule } from './mes-discussions-routing.module';

import { MesDiscussionsPage } from './mes-discussions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesDiscussionsPageRoutingModule
  ],
  declarations: [MesDiscussionsPage]
})
export class MesDiscussionsPageModule {}
