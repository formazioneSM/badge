import { Injectable, EventEmitter, Output } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // @Output() eventEmitter = new EventEmitter

  newEvent:EventEmitter<any> = new EventEmitter()

  

  constructor() {}
  test!:any

  

  emitMethod(){
    // this.eventEmitter.emit(this.text)

  }

  setMessage(message:any){
    this.newEvent.emit(message)    
  }

    // showToast(id: string) {
  //   this.card = false;
  //   this.toast = true;
  //   this.startTimer = timer(3000).subscribe(() => {
  //       console.log('ciao');
  //       let index = this.posts.findIndex((p:any) => p._id == id);
  //       this.posts.splice(index, 1)
  //       this.toast = false;
  //   this.bachecaService.deletePost(id).subscribe((res:any)=> console.log(res));

  //   });
  // }
}
