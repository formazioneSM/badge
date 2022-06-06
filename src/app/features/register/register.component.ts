import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  errorNumber: any
  res!: any;
  constructor(private _fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      cognome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]], // la password deve essere di almeno 6 caratteri
      badge: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], // il badge puo` contenere solo numeri
      checkbox:[undefined, Validators.requiredTrue],
    });



  }
  onSubmitRegister() {
    this.authService.OnRegister(this.name?.value, this.cognome?.value, this.email?.value, this.password?.value, this.badge?.value).subscribe(
      (res) => { this.res = res; console.log(res) },
      (err: any) => {
        console.log(err)

        this.errorNumber = err.status;
        console.log(this.errorNumber)

      }
    )
    // console.log(this.resResponse,this.errorNumber)

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
