import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/shared/uikit/services/auth/auth.service';
import { UsersService } from 'src/app/shared/uikit/services/users/users.service';
import { temi } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css'],
})
export class ProfiloComponent implements OnInit {
  selectedTheme: number = parseInt(
    localStorage?.getItem('selectedTheme') ?? '0'
  );
  temiDisponibili = temi;
  fileName: string = '';
  user: any;
  imgUser: string = '';
  decodeToken: any = '';
  defaultUserImg = 'assets/images/profile_without_border.png';
  @ViewChild('fileUpload ') fileUpload: ElementRef | any;
  isUploadingUserImg = false;

  constructor(
    private location: Location,
    private authService: AuthService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    let token: any = localStorage.getItem('token');
    this.decodeToken = jwtDecode(token);
    this.userService.getUser(this.decodeToken.badge).subscribe(
      (res) => {
        this.user = res;
        console.log(res);
        this.imgUser =
          this.user.img !== '' ? this.user.img : this.defaultUserImg;
      },
      (err) => console.log(err)
    );
  }

  goBack() {
    this.location.back();
  }

  cambioTema() {
    if (temi[this.selectedTheme + 1]) {
      this.selectedTheme += 1;
    } else {
      this.selectedTheme = 0;
    }

    localStorage.setItem('selectedTheme', this.selectedTheme.toString());
  }

  onFileSelected(event: any) {
    let file = event.target.files[0];
    if (file) {
        this.isUploadingUserImg = true;
      this.fileName = file.name;
      let formData = new FormData();
      formData.append('file', file);
      this.userService
        .imgFile(this.user._id, formData)
        .subscribe((res: any) => {
          this.imgUser = res.url;
        this.isUploadingUserImg = false;

        });
    }
  }

  trigger() {
    this.fileUpload.nativeElement.click();
  }
}
