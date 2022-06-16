import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastService } from '../../services/toast/toast.service';
import { timer } from 'rxjs';
import { BachecaService } from '../../services/bacheca/bacheca.service';
import { Post } from 'src/app/shared/utils/interfaces';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  @Input('icon') icon: string | undefined;
  @Input('text') text: any;
  @Output('emitAnnulla') emitAnnulla = new EventEmitter();

  isVisible: boolean = false;
  post: any;
  constructor(
    public toastService: ToastService,
    public bachecaService: BachecaService
  ) { }


  ngOnInit(): void {
    this.toastService.newPost.subscribe((post: Post) => {
      this.post = post;
      this.isVisible = true;
      timer(4000).subscribe(() => {
        this.isVisible = false;
        this.post = null;
      });
    })


    this.toastService.newEvent.subscribe((res) => {
      this.isVisible = true;
      timer(4000).subscribe(() => {
        this.isVisible = false;
        this.toastService.isVisibleUndo = false;
      });
      
      this.text = res.message;
      this.icon = res.icon;



    });
  }

  onEmitAnnulla() {

    this.toastService.annulla.next(true)
    this.isVisible=false

  }

}
