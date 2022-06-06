import { NgSwitchCase } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { timer } from 'rxjs';
import { BachecaService } from '../../services/bacheca/bacheca.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  @Input('icon') icon: string | undefined;
  @Input('text') text: any;
  @Output('noDeletePost') noDeletePost = new EventEmitter();
  isVisible: boolean = false;
  constructor(
    public toastService: ToastService,
    public bachecaService: BachecaService
  ) {}
  ngOnInit(): void {
    this.toastService.newEvent.subscribe((res) => {
      this.isVisible = true;
      timer(4000).subscribe(() => {
        this.isVisible = false;
        this.toastService.isVisibleUndo = false;
      });
      this.text = res;
      console.log(this.text);
      switch (this.text) {
        case 404:
          this.text = 'Nessun utente associato alla mail inserita.';
          break;
        case 401:
          this.text = 'La password inserita non è corretta.';
          break;
        case 409:
          this.text = 'La mail che hai inserito é gia registrata.';
          break;
        case 500:
          this.text = 'C`é un problema con il server,riprova piú tardi.';
      }
    });
  }
  noDelete(e: any) {
    this.noDeletePost.emit(e);
    this.bachecaService.undoDeletedPost();
    console.log('click undo');
  }
  //   hideToast() {
  //       this.isVisible = !this.isVisible;
  //   }
}
