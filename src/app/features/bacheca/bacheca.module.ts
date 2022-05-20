import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BachecaRoutingModule } from './bacheca-routing.module';
import { BachecaComponent } from './bacheca.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
    BachecaComponent
  ],
  imports: [
    CommonModule,
    BachecaRoutingModule,
    UikitModule
  ]
})
export class BachecaModule { }
