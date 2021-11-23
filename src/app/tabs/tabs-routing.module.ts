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
        loadChildren: () =>
          import('../profil/profil.module').then((m) => m.ProfilPageModule),
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
