import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard, NgxPermissionsModule } from 'ngx-permissions';




const routes: Routes = [
  {path:'home', loadChildren: ()=> import('./features/home/home.module').then(m => m.HomeModule),canLoad:[NgxPermissionsGuard],data: {
    permissions: {
      only: ['ADMIN', 'USER'],
      redirectTo:'login'
    }
  }},
  {path:'login', loadChildren: ()=> import('./features/login/login.module').then(m => m.LoginModule)},
  {path: 'add_Content', loadChildren: () => import('./features/aggiungi/aggiungi.module').then(m => m.AddContentModule) },
  {path:'register',loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)},
  {path:'passwordrecovery',loadChildren: () => import('./features/passwordrecovery/password-recovery.module').then(m =>m.PasswordRecoveryModule)},
  { path: 'profilo', loadChildren: () => import('./features/profilo/profilo.module').then(m => m.ProfiloModule) },
  { path: 'impostazioni', loadChildren: () => import('./features/impostazioni/impostazioni.module').then(m => m.ImpostazioniModule) },
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }