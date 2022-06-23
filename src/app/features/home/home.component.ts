import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/shared/uikit/services/scroll/scroll.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';
import jwtDecode from 'jwt-decode';
import { UsersService } from 'src/app/shared/uikit/services/users/users.service';
import { slideInAnimation } from 'src/app/shared/utils/animation';
import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInAnimation],
})
export class HomeComponent implements OnInit{
  actualScroll: number | undefined;
  scroll: boolean = false;
  user: any = {};
  decodeToken: any = '';
  imgUser: string = '';
  defaultUserImg = 'assets/images/profile.png'
  salutando:boolean = false;
  loading:boolean = true;




  constructor(
    private _scrollService: ScrollService,
    public permissions: NgxPermissionsService,
    private router: Router,
    private authService: AuthService,
    public toastService: ToastService,
    private contexts: ChildrenOutletContexts,
    private userService: UsersService,
  ) {
    this._scrollService.getScroll().subscribe((s) => {
      this.actualScroll = s;
    });

  }

  ngOnInit(): void {

    let token: any = localStorage.getItem('token');
    this.decodeToken = jwtDecode(token)
    this.userService.getUser(this.decodeToken.badge).subscribe(res => {
      if(this.decodeToken.hasOwnProperty('name', 'surname', 'badge', 'img', 'activationKey', 'active', 'badgeImg', 'createdAt', 'email', 'password', 'passwordChangeKey', 'role','updatedAt', '__v', '_id')){
        this.user = res;
        this.loading = false;
        this.imgUser = this.user.img !== '' ? this.user.img : this.defaultUserImg;
      }else{
        this.router.navigate([('/login')])
      }
    }
    )


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
  }

  saluta(){
    this.salutando = true 
    setTimeout(() => {
      this.salutando = false
    }, 3000);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  switchImg(event:any){
    event.target.src = this.defaultUserImg
  }
}
