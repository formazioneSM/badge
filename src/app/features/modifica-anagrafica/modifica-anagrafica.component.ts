import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';
import { UsersService } from 'src/app/shared/uikit/services/users/users.service';

@Component({
  selector: 'app-modifica-anagrafica',
  templateUrl: './modifica-anagrafica.component.html',
  styleUrls: ['./modifica-anagrafica.component.css'],
})
export class ModificaAnagraficaComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  res!: any;
  decodeToken: any;

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      cognome: ['', Validators.required],
      badge: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // il badge puo` contenere solo numeri
    });

    let token: any = localStorage.getItem('token');
    this.decodeToken = jwtDecode(token);
    console.log(this.decodeToken);

    this.prefillInputs();
  }

  prefillInputs() {
    this.form.setValue({
      name: this.decodeToken.name,
      cognome: this.decodeToken.surname,
      badge: this.decodeToken.badge,
    });
  }

  onSubmitEdit() {
    this.usersService
      .editAnagrafica(this.form.value.name, this.form.value.cognome, this.form.value.badge)
      .subscribe((u: any) => {
        console.log(u)
      });
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
}
