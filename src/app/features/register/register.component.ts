import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/uikit/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  errorNumber: any
  resResponse!: Object;
  constructor(private _fb: FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      cognome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      badge: ['', Validators.required],
    });
    
    
    
  }
  onSubmitRegister(){
    this.authService.OnRegister(this.name?.value,this.cognome?.value,this.email?.value,this.password?.value,this.badge?.value).subscribe(
      (res)=>this.resResponse=res
      ),
      (err:any) => {
        
        this.errorNumber = err.status;
        // gestire gli errori
      }
      console.log(this.resResponse,this.errorNumber)
    
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


}
