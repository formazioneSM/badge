import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-aggiungi',
  templateUrl: './card-aggiungi.component.html',
  styleUrls: ['./card-aggiungi.component.css']
})
export class CardAggiungiComponent implements OnInit {

  @Input('icon') icon: string | undefined;
  @Input('title') title: string | undefined;
  @Input('text') text: string | undefined;
  @Input('selected') selected: boolean | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
