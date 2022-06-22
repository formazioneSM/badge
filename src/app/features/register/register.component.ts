import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';
import { toastNames, types } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  errorNumber: any;
  res!: any;
  isEmailSent: boolean = false;
  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      cognome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$'
          ),
        ],
      ], // la password deve essere di almeno 8 caratteri
      badge: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // il badge puo` contenere solo numeri
      checkbox: ['', [Validators.required]],
    });
  }
  onSubmitRegister() {
    this.authService
      .OnRegister(
        this.name?.value,
        this.cognome?.value,
        this.email?.value,
        this.password?.value,
        this.badge?.value
      )
      .subscribe(
        (res) => {
          this.res = res;
          this.isEmailSent = true;
        },
        (err: any) => {
        //   console.log(err);
          this.isEmailSent = false;

          if (err.error.errors.status === 409) {
              this.toastService.setMessage(
                toastNames.REGISTERED_USER_ALREADY_EXISTS_ERROR
              );
            this.form.controls['name'].setErrors({ incorrect: true });
            this.form.controls['cognome'].setErrors({ incorrect: true });
            this.form.controls['email'].setErrors({ incorrect: true });
            this.form.controls['password'].setErrors({ incorrect: true });
            this.form.controls['badge'].setErrors({ incorrect: true });

          } else {
            this.toastService.setMessage(toastNames.GENERIC_ERROR)
            
          }

          this.errorNumber = err.status;
        }
      );
  }

  get name() {
    return this.form?.get('name');
  }

  get cognome() {
    return this.form?.get('cognome');
  }
  get email() {
    return this.form?.get('email');
  }

  get password() {
    return this.form?.get('password');
  }
  get badge() {
    return this.form?.get('badge');
  }
  get checkbox() {
    return this.form?.get('checkbox');
  }
}
