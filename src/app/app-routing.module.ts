import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard, NgxPermissionsModule } from 'ngx-permissions';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
    canLoad: [NgxPermissionsGuard],
    data: {
      animation: 'homePage',
      permissions: {
        only: ['ADMIN', 'USER'],
        redirectTo: 'login',
      },
    },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
    data: { animation: 'loginPage' },
  },
  {
    path: 'add_Content',
    loadChildren: () =>
      import('./features/aggiungi/aggiungi.module').then(
        (m) => m.AddContentModule
      ),
    data: { animation: 'addContentPage' },
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/register/register.module').then(
        (m) => m.RegisterModule
      ),
    data: { animation: 'registerPage' },
  },
  {
    path: 'passwordrecovery',
    loadChildren: () =>
      import('./features/passwordrecovery/password-recovery.module').then(
        (m) => m.PasswordRecoveryModule
      ),
    data: { animation: 'passwordrecoveryPage' },
  },

  {
    path: 'profilo',
    loadChildren: () =>
      import('./features/profilo/profilo.module').then((m) => m.ProfiloModule),
      canLoad: [NgxPermissionsGuard],
    data: { animation: 'profiloPage',
    permissions: {
      only: ['ADMIN', 'USER'],
      redirectTo: 'login',
    }, },
    
  },
  {
    path: 'impostazioni',
    loadChildren: () =>
      import('./features/impostazioni/impostazioni.module').then(
        (m) => m.ImpostazioniModule
      ),
    canLoad: [NgxPermissionsGuard],
    data: { animation: 'impostazioniPage',

    permissions: {
      only: ['ADMIN', 'USER'],
      redirectTo: 'login',
    }, },
  },
  { path: 'modifica-anagrafica', loadChildren: () => import('./features/modifica-anagrafica/modifica-anagrafica.module').then(m => m.ModificaAnagraficaModule),    
  canLoad: [NgxPermissionsGuard],   
  data: {
  permissions: {
    only: ['ADMIN', 'USER'],
    redirectTo: 'login',
  }, }, },
  { path: 'modifica-password', loadChildren: () => import('./features/modifica-password/modifica-password.module').then(m => m.ModificaPasswordModule),    
  canLoad: [NgxPermissionsGuard],  
  data: {
    permissions: {
      only: ['ADMIN', 'USER'],
      redirectTo: 'login',
    }, } },
  { path: 'termini-e-condizioni', loadChildren: () => import('./features/termini-e-condizioni/termini-e-condizioni.module').then(m => m.TerminiECondizioniModule) },
  { path: 'faq', loadChildren: () => import('./features/faq/faq.module').then(m => m.FaqModule)},
  { path: '**', redirectTo: 'home/bacheca' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
