import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollService } from './shared/uikit/services/scroll.service';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { NgxPermissionsModule } from 'ngx-permissions';

export function playerFactory() {
    return player;
  }



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgxPermissionsModule.forRoot()
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
