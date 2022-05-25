import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {

  toast:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

 showToast(){
   this.toast = true;
   timer(2000).subscribe(() => console.log('ciao'))

 }
}
