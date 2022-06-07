import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor(private router: Router, private location:Location) { }

  ngOnInit(): void {
  }

  goBack(){
   this.location.back()
  }
}
