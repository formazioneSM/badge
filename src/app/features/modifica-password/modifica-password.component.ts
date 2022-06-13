import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-modifica-password',
  templateUrl: './modifica-password.component.html',
  styleUrls: ['./modifica-password.component.css']
})
export class ModificaPasswordComponent implements OnInit {

  form: FormGroup = {} as FormGroup;
  errorNumber: any;
  res!: any;

  constructor(private _fb: FormBuilder, private authService: AuthService,  private location: Location) {}

  ngOnInit(): void {
    this.form = this._fb.group({

      password: [
        '',
        [
          Validators.required,
        ],
      ],
      newPassword: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$')]] 

    });
  }
  onPasswordUpdate() {

  }


  get password() {
    return this.form?.get('password');
  }
  get newPassword() {
    return this.form?.get('newPassword');
  }

  
  goBack(){
    this.location.back()
  }

}
