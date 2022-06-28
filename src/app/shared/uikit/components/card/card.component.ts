import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { types } from 'src/app/shared/utils/constants';
import { BachecaService } from '../../services/bacheca/bacheca.service';
import { ToastService } from '../../services/toast/toast.service';
import { ScrollService } from '../../services/scroll/scroll.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input('background') background: string | undefined;
  @Input('title') title: string | undefined;
  @Input('text') text: string | undefined;
  @Input('author') author: string | undefined;
  @Input('link') link: string | undefined;
  @Input('textLink') textLink: string | undefined;
  @Input('postId') postId: any;
  @Input('convenzioniId')  convenzioniId: any
  @Input('isBacheca') isBacheca: any;
  @Output('deletePost') deletePost = new EventEmitter();
  @ViewChild('card') card: ElementRef | any;
  @ViewChild('heightText') heightText: ElementRef | any;
  @ViewChild('heightTitle') heightTitle: ElementRef | any;
  @ViewChild('heightLink') heightLink: ElementRef | any;
  calcHeight: any;
  calcHeightText: any;
  calcHeightTitle: any;
  calcHeightLink: any;
  isScroll:boolean = false;


  

  


  copy:boolean=true;
  isClicked: boolean = false;

  constructor(private bachecaService: BachecaService, private toastService: ToastService, private router: Router, private _scrollService: ScrollService) { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.calcHeight = this.card.nativeElement.offsetHeight
    this.calcHeightText = this.heightText.nativeElement.offsetHeight
    this.calcHeightTitle = this.heightTitle.nativeElement.offsetHeight
    this.calcHeightLink = this.heightLink.nativeElement.offsetHeight

    if(this.calcHeightText > this.calcHeight){
      this.isScroll = true;
    }
  }
  clicked(){
   this.isClicked = true;

  }

  back(){
    this.isClicked = false;
  }

  delete(e:any){
    this.toastService.overlayVisible = true;

    this.deletePost.emit(e);
  }
  editPost(){
    this.router.navigate(['home/aggiungi',this.isBacheca ? this.postId: this.convenzioniId, this.isBacheca ? types.BACHECA : types.CONVENZIONI])
  }


  changeScroll(e:any){
   if(((e.target.clientHeight) + (e.target.scrollTop) ) > this.calcHeightText + this.calcHeightTitle + this.calcHeightLink){
    this.isScroll = false;
    } else{
    this.isScroll = true;
   }
  }
}
