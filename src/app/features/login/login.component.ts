import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/uikit/services/auth.service';
import jwt_decode from "jwt-decode";
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  form: FormGroup = {} as FormGroup;
  //   errorMessage: string = '';
  errorNumber: string | undefined;
  type: string = 'password';

  constructor(private _fb: FormBuilder, private authService: AuthService,public permissionsService:NgxPermissionsService,public router:Router) {}
  apiResponse!: {} | any;
  role!:any

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
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
    console.log(this.form.value.email);
    this.authService
      .onLogin(this.form.value.email, this.form.value.password)
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.apiResponse = res;
          console.log(res);
          localStorage.setItem('token', this.apiResponse.token)
          this.authService.apiToken = jwt_decode(this.apiResponse.token) ;

          this.isAdminOrUser(this.authService.apiToken.admin)
        },
        (err) => {
          this.isLoading = false;
          console.log(err);
          //   this.errorMessage = "C'è stato un errore: " + err.error.message;
          this.errorNumber = err.status;
        }
      );
  }
  isAdminOrUser(input:any){

      this.permissionsService.loadPermissions(input?["ADMIN"]:["USER"]);

      this.router.navigate(['../home/bacheca'])


  }
  
}
