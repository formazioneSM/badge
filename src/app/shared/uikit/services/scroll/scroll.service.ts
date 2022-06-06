import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scroll:Subject<number> = new Subject();

  constructor() { }

  getScroll(){
    return this.scroll.asObservable();
  }

  setScroll(scroll: number){
   this.scroll.next(scroll)
  }
}
