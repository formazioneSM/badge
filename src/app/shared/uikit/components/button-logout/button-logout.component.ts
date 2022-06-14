import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-logout',
  templateUrl: './button-logout.component.html',
  styleUrls: ['./button-logout.component.css']
})

export class ButtonLogoutComponent implements OnInit {
    @Input('textButton') textButton:string | undefined;
    @Input('typeButton') typeButton:string | undefined;
    @Input('disabled') disabled:boolean | undefined;
   
     constructor() { }
   
     ngOnInit(): void {
     }
   
   
}
