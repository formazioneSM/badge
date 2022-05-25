import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
 
  @Input('icon') icon: string | undefined;
  @Input('text') text: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
