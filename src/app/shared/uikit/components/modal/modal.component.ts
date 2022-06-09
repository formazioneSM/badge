import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output('deleteEvent') deleteEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  modal:boolean = false;

  visible(){
    this.modal= !this.modal
  }

  elimina(e:any){
    // console.log('ciao')
    this.deleteEvent.emit(e)
  }
}
