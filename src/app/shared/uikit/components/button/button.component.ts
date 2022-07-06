import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

 @Input('textButton') textButton:string | undefined;
 @Input('typeButton') typeButton:string | undefined;
 @Input('disabled') disabled:boolean | undefined;
 @Input('download') download!:boolean

  constructor() { }

  ngOnInit(): void {
  }


}
