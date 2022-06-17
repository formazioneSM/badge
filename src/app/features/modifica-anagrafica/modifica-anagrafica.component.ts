import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';
import { UsersService } from 'src/app/shared/uikit/services/users/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modifica-anagrafica',
  templateUrl: './modifica-anagrafica.component.html',
  styleUrls: ['./modifica-anagrafica.component.css'],
})
export class ModificaAnagraficaComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  res!: any;
  decodeToken: any;
  user:any = {};

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      cognome: ['', Validators.required],
      badge: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // il badge puo` contenere solo numeri
    });

    let token: any = localStorage.getItem('token');
    this.decodeToken = jwtDecode(token);

    this.prefillInputs();
  }

  prefillInputs() {
    let badgeId = this.decodeToken.badge;
    this.usersService.getUser(badgeId).subscribe( (u:any) => {
      this.user = u
      this.form.setValue({
      
        name: this.user.name,
        cognome: this.user.surname,
        badge: this.user.badge,
      });
    })

  }

  onSubmitEdit() {
    this.usersService
      .editAnagrafica(this.form.value.name, this.form.value.cognome, this.form.value.badge)
      .subscribe((u: any) => {

        this.router.navigate(['/impostazioni'])
        
      });

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

  goBack(){
    this.location.back()
  }
}
