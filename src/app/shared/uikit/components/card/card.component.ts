import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { types } from 'src/app/shared/utils/constants';
import { BachecaService } from '../../services/bacheca/bacheca.service';
import { ToastService } from '../../services/toast/toast.service';

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
  @Input('convenzioniId')  convenzioniId: any
  @Input('isBacheca') isBacheca: any;
  @Output('deletePost') deletePost = new EventEmitter();
  

  


  copy:boolean=true;
  isClicked: boolean = false;

  constructor(private bachecaService: BachecaService, private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
  }

  clicked(){
   this.isClicked = true;

  }

  back(){
    this.isClicked = false;
  }

  delete(e:any){
    this.deletePost.emit(e);
  }
  editPost(){
    this.router.navigate(['home/aggiungi',this.isBacheca ? this.postId: this.convenzioniId, this.isBacheca ? types.BACHECA : types.CONVENZIONI])
  }

}
