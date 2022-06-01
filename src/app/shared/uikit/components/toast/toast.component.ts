import { NgSwitchCase } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { timer } from 'rxjs';

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
  isVisibleUndo: boolean = false; // per far visualizzare undo

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.newEvent.subscribe((res) => {
      this.isVisible = true;
      timer(4000).subscribe(() => {
        this.isVisible = !this.isVisible;
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
  }

  //   hideToast() {
  //       this.isVisible = !this.isVisible;
  //   }
}
