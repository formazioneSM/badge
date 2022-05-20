import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiComponent } from '../aggiungi/aggiungi.component';
import { HomeComponent } from './home.component';

// const routes: Routes = [{ path: '', component: HomeComponent }];
const routes: Routes = [{
  path: '', component: HomeComponent, children: [{ path: 'bacheca', 
   loadChildren: () => import('../bacheca/bacheca.module').then(m => m.BachecaModule) }
,
{
  path: 'link', 
     loadChildren: () => import('../link/link.module').then(m => m.LinkModule) 
},
{
  path: 'convenzioni', 
     loadChildren: () => import('../convenzioni/convenzioni.module').then(m => m.ConvenzioniModule) 
}
]
},
{
  path: 'aggiungi', component: AggiungiComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
