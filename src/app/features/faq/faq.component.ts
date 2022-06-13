import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  // isClicked: boolean = false;
  faqs: any = [
    {
      indice: 0,
      isClicked: false,
      faqTitle: 'Perchè esiste il Badgeverso?',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices ligula risus, sit amet pretium dui iaculis hendrerit.",
    },
    {
      indice: 1,
      isClicked: false,
      faqTitle: 'Chi ha sviluppato il Badgeverso?',
      text: "Il badgeverso è stato sviluppato da un manipolo di eroi che ogni giorno ha creduto in un progetto completamente inutile. EROI!",
    }
  ];


  constructor(    private location: Location) { }

  ngOnInit(): void {
  }
  open(i:any) {
    // this.isClicked = !this.isClicked
    if(this.faqs[i].indice == i){
      this.faqs[i].isClicked = !this.faqs[i].isClicked;
    }
    console.log(i)
  }
  goBack(){
    this.location.back()
  }
}
