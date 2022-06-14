import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminiECondizioniComponent } from './termini-e-condizioni.component';

const routes: Routes = [{ path: '', component: TerminiECondizioniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminiECondizioniRoutingModule { }
