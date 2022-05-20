import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiComponent } from './aggiungi.component';

const routes: Routes = [{ path: '', component: AggiungiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AggiungiRoutingModule { }
