import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { toast } from 'src/app/shared/utils/constants';
import { timer } from 'rxjs';
import { Post } from '../../../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  newEvent: EventEmitter<any> = new EventEmitter();
  newPost: EventEmitter<any> = new EventEmitter();

  overlayVisible = false;
  isVisibleUndo: boolean = false; // per far visualizzare undo
  annulla: Subject<any> = new Subject();
  aModalIsOpen: boolean = false;

  constructor() {}

  setMessage(toastName: string) {
    const t = toast[toastName];

    const newToast = {
      message: t['message'],
      icon: t['icon'],
    };

    this.newEvent.emit(newToast);
  }

  annullaTimer = timer(4500);
}
