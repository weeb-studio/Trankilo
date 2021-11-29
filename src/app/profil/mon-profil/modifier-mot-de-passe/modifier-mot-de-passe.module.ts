import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierMotDePassePageRoutingModule } from './modifier-mot-de-passe-routing.module';

import { ModifierMotDePassePage } from './modifier-mot-de-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierMotDePassePageRoutingModule
  ],
  declarations: [ModifierMotDePassePage]
})
export class ModifierMotDePassePageModule {}
