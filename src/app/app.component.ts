import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthService } from './shared/uikit/services/auth/auth.service';
import { BachecaService } from './shared/uikit/services/bacheca/bacheca.service';
import { Post } from './shared/utils/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'badgeverso';

  constructor(
    public permissions: NgxPermissionsService,
    private router: Router,
    private authService: AuthService,
    private bachecaService: BachecaService
  ) {}

  isAdminOrUser(token: any) {
    this.permissions.loadPermissions(token.admin ? ['ADMIN'] : ['USER']);
    this.router.navigate(['../home/bacheca']);
  }

  ngOnInit() {
    let token: any = localStorage.getItem('token');
    if (token) {
      let decodedToken: any = jwtDecode(token);
      this.isAdminOrUser(decodedToken);
      this.authService.setLoginResponse(decodedToken);
    }
  }

  undoAction(post: Post) {
    switch (this.router.url) {
      case '/home/bacheca':
        this.bachecaService.undoDeletedPost(post);
    }
  }
}
