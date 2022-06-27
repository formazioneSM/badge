import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/uikit/services/auth/auth.service';
import jwt_decode from 'jwt-decode';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';
import dominioMail from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  form: FormGroup = {} as FormGroup;
  errorMessage: string | undefined;
  type: string = 'password';
  dominio = dominioMail;
  

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    public permissionsService: NgxPermissionsService,
    public router: Router,
    public toastService: ToastService
  ) {}
  apiResponse!: {} | any;
  role!: any;

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['',[Validators.required],
      ],
    });
  }
  get email() {
    return this.form?.get('email');
  }

  get password() {
    return this.form?.get('password');
  }


  // chiamata login api e gestione degli errori
  onSubmitLogin() {
    this.isLoading = true;
    this.form.markAllAsTouched();
      this.authService
      .onLogin(this.form.value.email, this.form.value.password)
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.apiResponse = res;
          localStorage.setItem('token', this.apiResponse.token);
          this.authService.setLoginResponse(jwt_decode(this.apiResponse.token));

          this.isAdminOrUser(this.authService.apiToken.admin);
        },
        (err) => {
          this.isLoading = false;
          this.email?.setErrors({'invalidEmail': err.error.extra.email})
          this.password?.setErrors({'invalidPassword': err.error.extra.password})
          
        }
      );
  }
  isAdminOrUser(input: any) {
    this.permissionsService.loadPermissions(input ? ['ADMIN'] : ['USER']);

    this.router.navigate(['../home/bacheca']);
  }
}
