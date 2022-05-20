import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('background') background: string | undefined;
  @Input('title') title: string | undefined;
  @Input('text') text: string | undefined;
  @Input('author') author: string | undefined;
  @Input('link') link: string | undefined;
  @Input('textLink') textLink: string | undefined;

  

  admin:boolean = true;
  copy:boolean=true;
  isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
   this.isClicked = true;
  }

  back(){
    this.isClicked = false;
  }
}
