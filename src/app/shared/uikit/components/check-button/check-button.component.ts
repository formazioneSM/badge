import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Configuration{
  text:string;
  value:string;
  selected: boolean;
}

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.css']
})
export class CheckButtonComponent implements OnInit {


 @Input('configuration') configuration: Configuration | undefined;
 @Output('selectedValue') selectedValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(){
   this.selectedValue.emit( this.configuration)
  }

}
