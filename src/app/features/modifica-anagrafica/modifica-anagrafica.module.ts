import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificaAnagraficaRoutingModule } from './modifica-anagrafica-routing.module';
import { ModificaAnagraficaComponent } from './modifica-anagrafica.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModificaAnagraficaComponent
  ],
  imports: [
    CommonModule,
    ModificaAnagraficaRoutingModule,
    UikitModule,
    ReactiveFormsModule,
  ]
})
export class ModificaAnagraficaModule { }
