import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordrecoveryComponent } from './password-recovery.component';
import { PasswordRecoveryRoutingModule } from './password-recovery-routing.module';



@NgModule({
  declarations: [
    PasswordrecoveryComponent
  ],
  imports: [
    CommonModule,
    PasswordRecoveryRoutingModule,
    UikitModule,
    ReactiveFormsModule
  ]
})
export class PasswordRecoveryModule { }
