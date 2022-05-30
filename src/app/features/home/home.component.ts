import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/uikit/services/scroll.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actualScroll: number = 0;
  scroll:boolean = false;
  admin:boolean = false;

  constructor(private _scrollService: ScrollService,public permissions:NgxPermissionsService) {
    this._scrollService.getScroll().subscribe(s => {
      this.actualScroll = s;
    })
  }

  ngOnInit(): void {
  }

  changeScroll(e: any) {
    this._scrollService.setScroll(e.target.scrollTop)
    this.scroll = true;
  }

}
