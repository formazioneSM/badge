import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup = {} as FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }
  get email() {
    return this.form?.get('email')
  }

  get password() {
    return this.form?.get('password')
  }


}
