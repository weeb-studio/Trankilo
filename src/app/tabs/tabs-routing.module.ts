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
              },
              {
                path: 'modifier-mot-de-passe',
                loadChildren: () => import('../profil/mon-profil/modifier-mot-de-passe/modifier-mot-de-passe.module').then( m => m.ModifierMotDePassePageModule)
              },
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
            children : [
              {
                path:'',
                loadChildren: () => import('../profil/mes-messages/mes-messages.module').then( m => m.MesMessagesPageModule)
              },
              {
                path: 'messages-details',
                loadChildren: () => import('../profil/mes-messages/messages-details/messages-details.module').then( m => m.MessagesDetailsPageModule)
              }
            ]
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
          },
          {
            path: 'gestion-colis',
            children : [
              {
                path : '',
                loadChildren: () => import('../profil/gestion-colis/gestion-colis.module').then( m => m.GestionColisPageModule)
              },
              {
                path: 'je-transporte',
                loadChildren: () => import('../profil/gestion-colis/je-transporte/je-transporte.module').then( m => m.JeTransportePageModule)
              },
              {
                path: 'j-espedie',
                loadChildren: () => import('../profil/gestion-colis/j-espedie/j-espedie.module').then( m => m.JEspediePageModule)
              },
              {
                path: 'transporter-colis',
                loadChildren: () => import('../profil/gestion-colis/transporter-colis/transporter-colis.module').then( m => m.TransporterColisPageModule)
              },
              {
                path: 'envoyer-colis',
                loadChildren: () => import('../profil/gestion-colis/envoyer-colis/envoyer-colis.module').then( m => m.EnvoyerColisPageModule)
              },
              {
                path: 'livraison',
                loadChildren: () => import('../profil/gestion-colis/livraison/livraison.module').then( m => m.LivraisonPageModule)
              }
            ]
          },
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
