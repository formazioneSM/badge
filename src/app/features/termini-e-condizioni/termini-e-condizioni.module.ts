import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminiECondizioniRoutingModule } from './termini-e-condizioni-routing.module';
import { TerminiECondizioniComponent } from './termini-e-condizioni.component';


@NgModule({
  declarations: [
    TerminiECondizioniComponent
  ],
  imports: [
    CommonModule,
    TerminiECondizioniRoutingModule
  ]
})
export class TerminiECondizioniModule { }
