import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiToken: any = '';


  onLogin(email: any, password: any) {
    return this.http.post(`https://be-system.herokuapp.com/api/auth/login`, {
      email: email,
      password: password,
    });
  }



}


