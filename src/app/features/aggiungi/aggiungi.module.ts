import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggiungiRoutingModule } from './aggiungi-routing.module';
import { AggiungiComponent } from './aggiungi.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
   AggiungiComponent
  ],
  imports: [
    CommonModule,
    AggiungiRoutingModule,
    UikitModule
  ]
})
export class AddContentModule { }
