import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastService } from '../../services/toast/toast.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output('deleteEvent') deleteEvent = new EventEmitter();
  @Output('editEvent') editEvent = new EventEmitter();

  constructor(public toastService:ToastService) { }

  ngOnInit(): void {
  }

  modal:boolean = false;
 

  visible(){
    this.modal= !this.modal
    this.toastService.aModalIsOpen =  !this.toastService.aModalIsOpen 
 
  }


  elimina(e:any){
    this.deleteEvent.emit(e)
    this.toastService.aModalIsOpen = false
  }

  modifica(e:any){
    this.editEvent.emit(e)
    this.toastService.aModalIsOpen = false
  }
}
