import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// interface Configuration{
//   text:string;
//   value:string;
// }

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.css']
})
export class CheckButtonComponent implements OnInit {

 @Input('active') active: boolean = false;
 @Input('configuration') configuration: string | undefined;
 @Output('selectedValue') selectedValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(){
   this.active = !this.active; 
   this.selectedValue.emit(this.active? this.configuration : {})
  }

}
