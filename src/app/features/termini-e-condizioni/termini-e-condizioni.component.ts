import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termini-e-condizioni',
  templateUrl: './termini-e-condizioni.component.html',
  styleUrls: ['./termini-e-condizioni.component.css']
})
export class TerminiECondizioniComponent implements OnInit {

  constructor(    private location: Location) { }

  ngOnInit(): void {
  }
  goBack(){
    this.location.back()
  }
}
