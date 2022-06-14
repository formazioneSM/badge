import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificaAnagraficaComponent } from './modifica-anagrafica.component';

const routes: Routes = [{ path: '', component: ModificaAnagraficaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaAnagraficaRoutingModule { }
