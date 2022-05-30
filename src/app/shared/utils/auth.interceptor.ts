import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public permissions:NgxPermissionsService, private router:Router) { }

  isAdminOrUser(token:any){

    this.permissions.loadPermissions(token.admin?["ADMIN"]:["USER"]);

    this.router.navigate(['../home/bacheca'])


}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token:any = localStorage.getItem('token')

    if (token) {
      let decodedToken:any = jwtDecode(token)
      this.isAdminOrUser(decodedToken)
      request.clone({
        setHeaders: { Authorization: token ?? '' }
      })
    }
    return next.handle(request);
  }
}
