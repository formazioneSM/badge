import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewHomeRoutingModule } from './new-home-routing.module';
import { NewHomeComponent } from './new-home.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
    NewHomeComponent
  ],
  imports: [
    CommonModule,
    NewHomeRoutingModule,
    UikitModule,
  ]
})
export class NewHomeModule { }
