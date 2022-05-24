import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Configuration{
  text?:string;
  value?:string;
  selected?: boolean;
}

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.css']
})
export class CheckButtonComponent implements OnInit {


 @Input('configuration') configuration: Configuration = {};
 @Output('selectedValue') selectedValue = new EventEmitter();
 @Input('name') name: string ="";
 @Input('controlName') controlName: string = '';
 @Input('parentFormGroup') parentFormGroup: FormGroup = {} as FormGroup;
 @Input('id') id: string ="";
 
 @ViewChild('check') check: ElementRef | undefined;


  constructor() { }
  log(e:any){
    console.log(e.target.value)
  }
  ngOnInit(): void {
  }

  changeCheckboxState(){
    this.check?.nativeElement.click();
  }

  emitValue(e:any){
    if(!this.configuration.selected){
      this.changeCheckboxState();
    }
    this.selectedValue.emit( this.configuration)
    
  }

}
