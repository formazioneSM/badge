import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
 
  stepOne:boolean = true;
  type: string | undefined;
  configuration = {text:'@hr', value:'hr'}

  postTypes=[{
    type:'Bacheca',
    text:'Avvisi e informazioni, permanenti e non ,per tutti i colleghi SM.',
    icon:'../../assets/images/bacheca.png',
    selected: false
  },
  {
    type:'Link',
    text:'Inserisci link utili e veloci che possono aiutare i colleghi.',
    icon:'../../assets/images/link.png',
    selected: false
  },
  {
    type:'Convenzioni',
    text:'Inserisci le informazioni sulle convezioni attive!',
    icon:'../../assets/images/convenzioni.png',
    selected: false
  }
  

]
 disabled: boolean = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.disabled = this.postTypes.every(p => !p?.selected)
  }

  esc(){
    this._router.navigate(['home/bacheca']);
  }

  goToSecondStep(typeOfPost:any){
    let foundedType = typeOfPost.find((n:any) => n.selected).type
    this.stepOne = false;
    console.log(foundedType)
    this.type = foundedType;


  }

  selectCard(card:any){
    this.postTypes.forEach((c)=>{
      c.selected = false;
      if(c === card){
        c.selected = true;
      }
    })

    this.disabled = this.postTypes.every(p => !p?.selected)
  }


  getSelectedValue(val:object){
    console.log(val)
  }
}
