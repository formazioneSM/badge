import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/shared/uikit/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actualScroll: number | undefined;
  scroll:boolean = false;
  admin:boolean = true;


  constructor(private _scrollService: ScrollService) {
    this._scrollService.getScroll().subscribe(s => {
      this.actualScroll = s;
      console.log(s)
    })
  }

  ngOnInit(): void {

  }

  changeScroll(e: any) {
    this._scrollService.setScroll(e.target.scrollTop)
    this.scroll = true;
  }

  @ViewChild('scrollToTop') scrollToTop: ElementRef | any;

  backTop(){
   this.scrollToTop.nativeElement.scrollTo( 0, 0 );
  }



}
