import { Component, OnInit } from '@angular/core';
import {Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {

  toast:boolean = false;
  startTimer: Subscription | undefined;
  card:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

 showToast(){
  this.card = false;
   this.toast = true;
   this.startTimer = timer(3000).subscribe(() => {
     console.log('ciao')
     this.toast = false;
    })

 }

 stopDelete(e:any){
   
   this.startTimer?.unsubscribe();
   this.card = true;
   this.toast = false;

 }
}
