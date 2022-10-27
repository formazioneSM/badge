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
import { ColorSelectComponent } from './components/color-select/color-select.component';
import { LottieModule } from 'ngx-lottie';
import { NgxPermissionsModule } from 'ngx-permissions';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { GradientLoaderComponent } from './components/gradient-loader/gradient-loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';
import { SmLoaderComponent } from './components/sm-loader/sm-loader.component';
import { ImgLoaderComponent } from './components/img-loader/img-loader.component';
import { CalendarComponent, MY_FORMATS } from './components/calendar/calendar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateModule,
} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
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
    CheckButtonComponent,
    ToastComponent,
    ColorSelectComponent,
    TooltipComponent,
    CheckboxComponent,
    GradientLoaderComponent,
    ModalComponent,
    ButtonLogoutComponent,
    ImgLoaderComponent,
    CalendarComponent,
  ],
  imports: [
    NgxPermissionsModule,
    CommonModule,
    ReactiveFormsModule,
    LottieModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {MY_FORMATS} },
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ButtonLogoutComponent,
    RoundButtonComponent,
    CardComponent,
    CardAggiungiComponent,
    TextareaComponent,
    CheckButtonComponent,
    SmLoaderComponent,
    CheckButtonComponent,
    ToastComponent,
    ColorSelectComponent,
    TooltipComponent,
    CheckboxComponent,
    GradientLoaderComponent,
    ModalComponent,
    ImgLoaderComponent,
    CalendarComponent,
  ],
})
export class UikitModule {}
