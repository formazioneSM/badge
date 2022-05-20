import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvenzioniRoutingModule } from './convenzioni-routing.module';
import { ConvenzioniComponent } from './convenzioni.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
    ConvenzioniComponent
  ],
  imports: [
    CommonModule,
    ConvenzioniRoutingModule,
    UikitModule
  ]
})
export class ConvenzioniModule { }
