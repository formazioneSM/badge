import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  variabile!:any
  apiToken: any = '';

  onLogin(email: any, password: any) {
    return this.http.post(`https://be-system.herokuapp.com/api/auth/login`, {
      email: email,
      password: password,
    });
  }
}


