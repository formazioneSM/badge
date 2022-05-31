import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollService } from './shared/uikit/services/scroll.service';
import player from 'lottie-web';
import { NgxPermissionsModule } from 'ngx-permissions';
import { LottieModule } from 'ngx-lottie';
import { AuthInterceptor } from './shared/utils/auth.interceptor';
import { BachecaService } from './shared/uikit/services/bacheca.service';
import { UikitModule } from './shared/uikit/uikit.module';

export function playerFactory() {
    return player;
  }




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UikitModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgxPermissionsModule.forRoot()
  ],
  providers: [ScrollService,
    BachecaService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
