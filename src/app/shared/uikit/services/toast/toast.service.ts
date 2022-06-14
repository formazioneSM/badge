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

  isVisibleUndo: boolean = false; // per far visualizzare undo
  annulla: Subject<any> = new Subject();

  constructor() {}

  setMessage(toastName: string) {
    const t = toast[toastName];


    const newToast = {
        message: t['message'],
        icon: t['icon'],
    }

    this.newEvent.emit(newToast);
  }

  

  // annullaTimer(f:any , time:any){
  //   timer(time).subscribe(f)
  // }

  annullaTimer=timer(4500)
  


}
