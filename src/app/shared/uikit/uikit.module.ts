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
import { ToastComponent } from './components/toast/toast.component';




@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    RoundButtonComponent,
    CardComponent,
    CardAggiungiComponent,
    TextareaComponent,
    CheckButtonComponent,
    ToastComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    RoundButtonComponent,
    CardComponent,
    CardAggiungiComponent,
    TextareaComponent,
    CheckButtonComponent,
    ToastComponent
  ]
})
export class UikitModule { }
