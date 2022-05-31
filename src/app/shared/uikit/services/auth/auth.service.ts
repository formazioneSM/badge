import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiToken: any = '';
  loginResponse!:LoginResponse

  onLogin(email: any, password: any) {
    return this.http.post(`https://be-system.herokuapp.com/api/auth/login`, {
      email: email,
      password: password,
    });
  }

  OnForgottenPassword(email:any){
    return this.http.put(`https://be-system.herokuapp.com/api/auth/forgotPassword/${email}`,{
    } 
    )
  }

  OnRegister(name:string,surname:string,email:string,password:string,badge:string){
    return this.http.post(`https://be-system.herokuapp.com/api/auth/register`, {
      name: name,
      surname: surname,
      email: email,
      password: password,
      badge: badge
    })
  }
  setLoginResponse(loginResponse:LoginResponse){
    this.loginResponse = loginResponse
  }
}