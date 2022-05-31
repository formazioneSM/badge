import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordrecoveryComponent implements OnInit {

  constructor(private _fb: FormBuilder,public authService:AuthService) { }
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
    this.authService.OnForgottenPassword(this.email?.value).subscribe((res=>console.log(res)))
  }
  
}
