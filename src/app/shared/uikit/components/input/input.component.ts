import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input('textLabel') textLabel: string | undefined;
  @Input('placeholder') placeholder: string | undefined;
  @Input('backgroundInput') backgroundInput: string | undefined;
  @Output('valueInput') valueInput = new EventEmitter();
  @Input('height') height: string | undefined;



  constructor() { }

  ngOnInit(): void {
  }



}
