import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesVerificationsPageRoutingModule } from './mes-verifications-routing.module';

import { MesVerificationsPage } from './mes-verifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesVerificationsPageRoutingModule
  ],
  declarations: [MesVerificationsPage]
})
export class MesVerificationsPageModule {}
