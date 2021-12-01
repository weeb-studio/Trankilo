import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsExpeditionPageRoutingModule } from './details-expedition-routing.module';

import { DetailsExpeditionPage } from './details-expedition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsExpeditionPageRoutingModule
  ],
  declarations: [DetailsExpeditionPage]
})
export class DetailsExpeditionPageModule {}
