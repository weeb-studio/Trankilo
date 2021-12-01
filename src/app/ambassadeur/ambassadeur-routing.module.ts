import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbassadeurPage } from './ambassadeur.page';

const routes: Routes = [
  {
    path: 'ambassadeur',
    component: AmbassadeurPage,
    children : [
      {
        path : 'acceuil',
        children : [
          {
            path : '',
            loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilPageModule)
          },
        ]
      },
      {
        path:'gestion-colis',
        children : [
          {
            path : '',
            loadChildren: () => import('./gestion-colis/gestion-colis.module').then(m => m.GestionColisPageModule)
          },
        ]
      },
      {
        path : 'mes-disponibilites',
        children : [
          {
            path:'',
            loadChildren: () => import('./mes-disponibilites/mes-disponibilites.module').then(m => m.MesDisponibilitesPageModule)
          },
        ]
      },
      {
        path : 'mon-compte',
        children : [
          {
            path : '',
            loadChildren: () => import('./mon-compte/mon-compte.module').then(m => m.MonComptePageModule)
          }
        ]
      },
      {
        path : '',
        redirectTo: '/ambassadeur/acceuil',
        pathMatch:'full'
      },
    ],
  },
  {
    path : '',
    redirectTo: '/ambassadeur/acceuil',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbassadeurPageRoutingModule {}
