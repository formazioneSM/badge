import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { CardComponent } from './components/card/card.component';
import { CardAggiungiComponent } from './components/card-aggiungi/card-aggiungi.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { CheckButtonComponent } from './components/check-button/check-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SmLoaderComponent } from './components/sm-loader/sm-loader.component';
import { LottieModule } from 'ngx-lottie';
import { ToastComponent } from './components/toast/toast.component';
import { ColorSelectComponent } from './components/color-select/color-select.component';






@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    RoundButtonComponent,
    CardComponent,
    CardAggiungiComponent,
    TextareaComponent,
    CheckButtonComponent,
    SmLoaderComponent,
],
imports: [
    CheckButtonComponent,
    ToastComponent,
    ColorSelectComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LottieModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    RoundButtonComponent,
    CardComponent,
    CardAggiungiComponent,
    TextareaComponent,
    CheckButtonComponent,
    SmLoaderComponent,
    CheckButtonComponent,
    ToastComponent,
    ColorSelectComponent
  ]
})
export class UikitModule { }
