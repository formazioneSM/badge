import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewHomeRoutingModule } from './new-home-routing.module';
import { NewHomeComponent } from './new-home.component';


@NgModule({
  declarations: [
    NewHomeComponent
  ],
  imports: [
    CommonModule,
    NewHomeRoutingModule
  ]
})
export class NewHomeModule { }
