import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvenzioniComponent } from './convenzioni.component';

const routes: Routes = [{ path: '', component: ConvenzioniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvenzioniRoutingModule { }
