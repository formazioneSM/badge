import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/shared/uikit/services/scroll/scroll.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';
import jwtDecode from 'jwt-decode';
import { UsersService } from 'src/app/shared/uikit/services/users/users.service';
import { slideInAnimation } from 'src/app/shared/utils/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInAnimation],
})
export class HomeComponent implements OnInit {
  actualScroll: number | undefined;
  scroll: boolean = false;
  // admin:boolean = true;
  // user = true;
  user:any = {};
  decodeToken: any = '';
  imgUser: string = '';
  defaultUserImg = 'assets/images/profile.png'




  constructor(
    private _scrollService: ScrollService,
    public permissions: NgxPermissionsService,
    private router: Router,
    private authService: AuthService,
    public toastService: ToastService,
    private contexts: ChildrenOutletContexts,
    private userService: UsersService
  ) {
    this._scrollService.getScroll().subscribe((s) => {
      this.actualScroll = s;
    });
  }

  ngOnInit(): void {
    // let token = this.authService.apiToken
    // this.isAdminOrUser(token)
   console.log(this.permissions.getPermissions())
   let token: any = localStorage.getItem('token');
   this.decodeToken = jwtDecode(token)
   this.userService.getUser(this.decodeToken.badge).subscribe(res => {
     this.user = res;
     console.log(this.user.name)
     this.imgUser = this.user.img !== '' ? this.user.img : this.defaultUserImg;
   }, err => console.log(err)
   )

    console.log(this.permissions.getPermissions());
  }

  changeScroll(e: any) {
    this._scrollService.setScroll(e.target.scrollTop);
    this.scroll = true;
  }

  @ViewChild('scrollToTop') scrollToTop: ElementRef | any;

  backTop() {
    this.scrollToTop.nativeElement.scrollTo(0, 0);
  }

  isAdminOrUser(token: any) {
    this.permissions.loadPermissions(token.admin ? ['ADMIN'] : ['USER']);
    this.router.navigate(['../home/bacheca']);
  }

  // get username() {
  //   return this.authService.loginResponse?.name ?? '';
  // }
  // OnClickLogOut(){
  //   this.authService.onLogOut()
  //   // this.toastService.inputMethod() // sacro !

  // }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
