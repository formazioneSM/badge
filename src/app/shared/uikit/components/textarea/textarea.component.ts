import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input('textLabel') textLabel: string | undefined;
  @Input('placeholder') placeholder: string | undefined;
  @Input('background') background: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
