import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordrecoveryComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }
  form: FormGroup = {} as FormGroup;

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      
    });
  }
  get email() {
    return this.form?.get('email');
  }


  onSubmitRecoveryPassword(){
    console.log(this.email?.value)
  }

}
