import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'confirmation-email',
    loadChildren: () => import('./pages/confirmation-email/confirmation-email.module').then( m => m.ConfirmationEmailPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./ambassadeur/ambassadeur.module').then( m => m.AmbassadeurPageModule)
  },
  {
    path: 'details-expedition',
    loadChildren: () => import('./shared/details-expedition/details-expedition.module').then( m => m.DetailsExpeditionPageModule)
  },
  




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
