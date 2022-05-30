import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordrecoveryComponent } from './password-recovery.component';

const routes: Routes = [{ path: '', component: PasswordrecoveryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRecoveryRoutingModule { }
