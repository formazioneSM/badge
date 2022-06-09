import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiComponent } from '../aggiungi/aggiungi.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'bacheca',
        loadChildren: () =>
          import('../bacheca/bacheca.module').then((m) => m.BachecaModule),
          data: { animation: 'bachecaPage'},
      },
      {
        path: 'link',
        loadChildren: () =>
          import('../link/link.module').then((m) => m.LinkModule),
          data: { animation: 'linkPage'},
      },
      {
        path: 'convenzioni',
        loadChildren: () =>
          import('../convenzioni/convenzioni.module').then(
            (m) => m.ConvenzioniModule
          ),
          data: { animation: 'convenzioniPage'},
      },
    ],
  },
  {
    path: 'aggiungi',
    component: AggiungiComponent,
    data: {
        animation: 'aggiungiPage'
    },
  },
  {
    path: 'aggiungi/:id/:type',
    component: AggiungiComponent,
    data: {
        animation: 'aggiungiPage'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
