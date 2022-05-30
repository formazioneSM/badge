import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BachecaService } from '../../services/bacheca.service';

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
  @Input('postId') postId: any;
  @Output('deletePost') deletePost = new EventEmitter();

  

  // admin:boolean = true;
  copy:boolean=true;
  isClicked: boolean = false;

  constructor(private bachecaService: BachecaService) { }

  ngOnInit(): void {
  }

  clicked(){
   this.isClicked = true;
  }

  back(){
    this.isClicked = false;
  }

  delete(){
    this.deletePost.emit(this.postId);
    console.log(this.postId);
  }
}
