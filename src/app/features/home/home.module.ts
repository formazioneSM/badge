import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgScrollbarModule,
    HomeRoutingModule,
    UikitModule,
    NgxPermissionsModule
  ]
})
export class HomeModule { }
