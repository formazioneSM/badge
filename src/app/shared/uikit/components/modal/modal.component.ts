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
  }

  elimina(e:any){
    this.deleteEvent.emit(e)
  }

  modifica(e:any){
    this.editEvent.emit(e)
  }
}
