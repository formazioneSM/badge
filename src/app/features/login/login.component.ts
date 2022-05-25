import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/uikit/services/auth.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
//   errorMessage: string = '';
  errorNumber: string | undefined;

  constructor(private _fb: FormBuilder, private authService: AuthService) {}
  apiResponse!: {} | any;

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
    console.log(jwt_decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'));
  }
  get email() {
    return this.form?.get('email');
  }

  get password() {
    return this.form?.get('password');
  }

  // chiamata login api e gestione degli errori
  onSubmitLogin() {
    console.log(this.form.value.email);
    this.authService
      .onLogin(this.form.value.email, this.form.value.password)
      .subscribe(
        (res) => {
          this.apiResponse = res;
          console.log(res);
          this.authService.apiToken = this.apiResponse.token;
        },
        (err) => {
          console.log(err);
        //   this.errorMessage = "C'è stato un errore: " + err.error.message;
          this.errorNumber = err.status;
          console.log(this.errorNumber)
        }
      );
  }

  
}
