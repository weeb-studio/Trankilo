import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonComptePage } from './mon-compte.page';

const routes: Routes = [
  {
    path: '',
    component: MonComptePage
  },
  {
    path: 'mes-informations',
    loadChildren: () => import('./mes-informations/mes-informations.module').then( m => m.MesInformationsPageModule)
  },
  {
    path: 'mes-discussions',
    loadChildren: () => import('./mes-discussions/mes-discussions.module').then( m => m.MesDiscussionsPageModule)
  },
  {
    path: 'porte-monnaie',
    loadChildren: () => import('./porte-monnaie/porte-monnaie.module').then( m => m.PorteMonnaiePageModule)
  },
  {
    path: 'mes-verifications',
    loadChildren: () => import('./mes-verifications/mes-verifications.module').then( m => m.MesVerificationsPageModule)
  },
  {
    path: 'questions-frequentes',
    loadChildren: () => import('./questions-frequentes/questions-frequentes.module').then( m => m.QuestionsFrequentesPageModule)
  },
  {
    path: 'nous-contacter',
    loadChildren: () => import('./nous-contacter/nous-contacter.module').then( m => m.NousContacterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonComptePageRoutingModule {}
