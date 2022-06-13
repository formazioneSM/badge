import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificaPasswordRoutingModule } from './modifica-password-routing.module';
import { ModificaPasswordComponent } from './modifica-password.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModificaPasswordComponent
  ],
  imports: [
    CommonModule,
    ModificaPasswordRoutingModule,
    UikitModule,
    ReactiveFormsModule
  ]
})
export class ModificaPasswordModule { }
