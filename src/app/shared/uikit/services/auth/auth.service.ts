import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../../../utils/interfaces';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  apiToken: any = '';
  loginResponse!: LoginResponse;
  isUserRegistered: boolean = false;

    checkTokenValidity() {
        return this.http.get(`https://be-system.herokuapp.com/api/auth/checkToken`)

    }

  onLogin(email: any, password: any) {
    return this.http.post(`https://be-system.herokuapp.com/api/auth/login`, {
      email: email,
      password: password,
    });
  }

  OnForgottenPassword(email: any) {
    return this.http.put(
      `https://be-system.herokuapp.com/api/auth/forgotPassword/${email}`,
      {}
    );
  }

  OnRegister(
    name: string,
    surname: string,
    email: string,
    password: string,
    badge: string
  ) {
    return this.http.post(`https://be-system.herokuapp.com/api/auth/register`, {
      name: name,
      surname: surname,
      email: email,
      password: password,
      badge: badge,
    });
  }
  setLoginResponse(loginResponse: LoginResponse) {
    this.loginResponse = loginResponse;
  }

  onLogOut() {
    localStorage.removeItem('token');
    this.router.navigate(['../login']);
  }

}
