import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  newEvent:EventEmitter<any> = new EventEmitter()

  isVisibleUndo: boolean = false; // per far visualizzare undo

  constructor() {}
  
  
  setMessage(message:any){
    this.newEvent.emit(message)
  }

}
