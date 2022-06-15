import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfiloRoutingModule } from './profilo-routing.module';
import { ProfiloComponent } from './profilo.component';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    ProfiloComponent
  ],
  imports: [
    CommonModule,
    ProfiloRoutingModule,
    NgxPermissionsModule
  ]
})
export class ProfiloModule { }
