import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/shared/uikit/services/scroll.service';
import { NgxPermissionsService } from 'ngx-permissions';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/shared/uikit/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actualScroll: number | undefined;
  scroll:boolean = false;
  // admin:boolean = true;


  constructor(private _scrollService: ScrollService,public permissions:NgxPermissionsService, private router:Router, 
    private authService : AuthService) {
    this._scrollService.getScroll().subscribe(s => {
      this.actualScroll = s;
      console.log(s)
    })
  }


  ngOnInit(): void {
    // let token = this.authService.apiToken
    // this.isAdminOrUser(token)
   console.log(this.permissions.getPermissions())


  }

  changeScroll(e: any) {
    this._scrollService.setScroll(e.target.scrollTop)
    this.scroll = true;
  }

  @ViewChild('scrollToTop') scrollToTop: ElementRef | any;

  backTop(){
   this.scrollToTop.nativeElement.scrollTo( 0, 0 );
  }

  isAdminOrUser(token:any){
    this.permissions.loadPermissions(token.admin?["ADMIN"]:["USER"]);
    this.router.navigate(['../home/bacheca'])
}

get username(){
  return this.authService.loginResponse?.name?? ''
}


}
