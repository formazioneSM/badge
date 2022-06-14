import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { toast } from 'src/app/shared/utils/constants';
import { Post } from '../../../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  newEvent: EventEmitter<any> = new EventEmitter();
  newPost: EventEmitter<any> = new EventEmitter();

  isVisibleUndo: boolean = false; // per far visualizzare undo
  deletedContent: Subject<any> = new Subject();

  constructor() {}

  setMessage(toastName: string) {
    const t = toast[toastName];


    const newToast = {
        message: t['message'],
        icon: t['icon'],
    }

    this.newEvent.emit(newToast);
  }

  setDeletedContent(content: any) {
    this.deletedContent.next(content);
  }
}
