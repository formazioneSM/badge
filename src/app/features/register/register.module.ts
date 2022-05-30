import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { RegisterComponent } from './register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UikitModule } from '../../shared/uikit/uikit.module';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    UikitModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
