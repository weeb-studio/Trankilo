import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () =>
          import('../accueil/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'trajet',
        loadChildren: () =>
          import('../trajet/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'add',
        loadChildren: () =>
          import('../add/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'profil',
        children : [
          {
            path: '',
            loadChildren: () =>
              import('../profil/profil.module').then((m) => m.ProfilPageModule),

          },
          {
            path: 'mon-profil',
            children : [
              {
                path : '',
                loadChildren: () => import('../profil/mon-profil/mon-profil.module').then( m => m.MonProfilPageModule)
              },
              {
                path: 'mes-informations',
                loadChildren: () => import('../profil/mon-profil/mes-informations/mes-informations.module').then( m => m.MesInformationsPageModule)
              }
            ]
          },
          {
            path: 'mes-trajets',
            loadChildren: () => import('../profil/mes-trajets/mes-trajets.module').then( m => m.MesTrajetsPageModule)
          },
          {
            path: 'mes-expeditions',
            loadChildren: () => import('../profil/mes-expeditions/mes-expeditions.module').then( m => m.MesExpeditionsPageModule)
          },
          {
            path: 'mes-messages',
            loadChildren: () => import('../profil/mes-messages/mes-messages.module').then( m => m.MesMessagesPageModule)
          },
          {
            path: 'inviter-amis',
            loadChildren: () => import('../profil/inviter-amis/inviter-amis.module').then( m => m.InviterAmisPageModule)
          },
          {
            path: 'questions-frequentes',
            loadChildren: () => import('../profil/questions-frequentes/questions-frequentes.module').then( m => m.QuestionsFrequentesPageModule)
          },
          {
            path: 'nous-contacter',
            loadChildren: () => import('../profil/nous-contacter/nous-contacter.module').then( m => m.NousContacterPageModule)
          },
          {
            path: 'cgu',
            loadChildren: () => import('../profil/cgu/cgu.module').then( m => m.CguPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
