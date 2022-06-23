import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs: any = [
    {
      indice: 0,
      isClicked: false,
      faqTitle: 'Perchè esiste il Badgeverso?',
      text: "Il Badgeverso è stato creato per facilitare la comunicazione all'interno dell'azienda (in realtà è solo un'esercitazione 🙃).",
    },
    {
      indice: 1,
      isClicked: false,
      faqTitle: 'Chi ha sviluppato il Badgeverso?',
      text: "Il Badgeverso è stato sviluppato da un manipolo di eroi che ogni giorno ha creduto in un progetto completamente inutile. EROI!",
    }
  ];


  constructor(    private location: Location) { }

  ngOnInit(): void {
  }
  open(i:any) {
    if(this.faqs[i].indice == i){
      this.faqs[i].isClicked = !this.faqs[i].isClicked;
    }
  }
  goBack(){
    this.location.back()
  }
}
