import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';
import { toastNames, types } from 'src/app/shared/utils/constants';
import { UsersService } from 'src/app/shared/uikit/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  errorNumber: any;
  
  res!: any;
  isEmailSent:boolean = false;
  constructor(private _fb: FormBuilder, private authService: AuthService,public formCache:UsersService, private toastService: ToastService) {}


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
    if(this.formCache.formData){

      this.form.setValue(this.formCache.formData)
    }

    
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
          this.isEmailSent = false;

          if (err.error.errors.status === 409) {
              this.toastService.setMessage(
                toastNames.REGISTERED_USER_ALREADY_EXISTS_ERROR
              );

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

  ngOnDestroy(){
    this.formCache.setFormData(this.form.value)
    //salvare valori form
  }
}
