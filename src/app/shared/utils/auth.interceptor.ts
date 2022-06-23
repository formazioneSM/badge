import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../uikit/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    public permissions: NgxPermissionsService,
    private router: Router,
    private authService: AuthService
  ) { }

  isAdminOrUser(token: any) {
    this.permissions.loadPermissions(token.admin ? ['ADMIN'] : ['USER']);


  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token: any = localStorage.getItem('token');

    if (token && !(request.url.includes('/checkToken'))) {
      this.authService.checkTokenValidity().subscribe(
        (res) => {
          let decodedToken: any = jwtDecode(token);
          this.isAdminOrUser(decodedToken);
        },
        (err) => {
          localStorage.removeItem('token');

          this.router.navigate(['/login']);
        }
      )

    }
    if(token){
      const clonedRequest = request.clone({
        setHeaders: { Authorization: token ? `Bearer ${token}` : '' },
      });

      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
