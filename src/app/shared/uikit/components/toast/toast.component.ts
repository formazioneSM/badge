import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
 
  @Input('icon') icon: string | undefined;
  @Input('text') text: string | undefined;
  @Output('noDeletePost') noDeletePost = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  
  noDelete(e: any){
    this.noDeletePost.emit(e);
  }

}
