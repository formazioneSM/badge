import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggiungiRoutingModule } from './aggiungi-routing.module';
import { AggiungiComponent } from './aggiungi.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   AggiungiComponent
  ],
  imports: [
    CommonModule,
    AggiungiRoutingModule,
    UikitModule,
    ReactiveFormsModule
  ]

})
export class AddContentModule { }
