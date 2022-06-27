import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../uikit/services/auth/auth.service';
import { ToastService } from '../uikit/services/toast/toast.service';
import { toastNames } from './constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    public permissions: NgxPermissionsService,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService
  ) { }

  isAdminOrUser(token: any) {
    this.permissions.loadPermissions(token.admin ? ['ADMIN'] : ['USER']);


  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token: any = localStorage.getItem('token');
    // let decodedToken:any =  jwtDecode(token);

    if (token && !(request.url.includes('/checkToken'))) {
      this.authService.checkTokenValidity().subscribe(
        (res) => {
          let decodedToken:any =  jwtDecode(token);


          this.isAdminOrUser(decodedToken);
        },
        (err) => {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
      )

    }
    

    if (token) {
      let decodedToken:any =  jwtDecode(token);
     if( !decodedToken.hasOwnProperty('name', 'surname', 'badge', 'img', 'activationKey', 'active', 'badgeImg', 'createdAt', 'email', 'password', 'passwordChangeKey', 'role', 'updatedAt', '__v', '_id')){
      this.toastService.setMessage(toastNames.GENERIC_ERROR)
       throw new HttpErrorResponse({'error': 'malformed token'})
     }
      const clonedRequest = request.clone({
        setHeaders: { Authorization: token ? `Bearer ${token}` : '' },
      });

      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
  // if( decodedToken.hasOwnProperty('name', 'surname', 'badge', 'img', 'activationKey', 'active', 'badgeImg', 'createdAt', 'email', 'password', 'passwordChangeKey', 'role', 'updatedAt', '__v', '_id')){}
  // this.toastService.setMessage(toastNames.GENERIC_ERROR)