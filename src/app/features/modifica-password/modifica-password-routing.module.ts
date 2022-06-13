import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificaPasswordComponent } from './modifica-password.component';

const routes: Routes = [{ path: '', component: ModificaPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaPasswordRoutingModule { }
