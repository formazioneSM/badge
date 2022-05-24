import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit, AfterViewInit {
  formAddLink:FormGroup = {} as FormGroup;
  formAddConvenzioni:FormGroup = {} as FormGroup;
  stepOne:boolean = true;
  type: string | undefined;
  configuration = [{text:'@Maria Grazia Marra', value:'maria', selected:false},{text:'@hr', value:'hr', selected:false}]

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

  constructor(private _router: Router, private _fb: FormBuilder) { 

  }

  ngOnInit(): void {
    this.disabled = this.postTypes.every(p => !p?.selected);
    
    this.formAddLink = this._fb.group({
      nomeLink: ['', Validators.required],
      link: ['', Validators.required]
    });

    this.formAddConvenzioni = this._fb.group({
      titolo: ['', Validators.required],
      contenuto: ['', Validators.required],
      posizione: ['', Validators.required]
    })
  }


  get nomeLink() {
    return this.formAddLink?.get('nomeLink')
  }

  get link() {
    return this.formAddLink?.get('link')
  }

  get titolo() {
    return this.formAddConvenzioni?.get('titolo')
  } 

  get contenuto() {
    return this.formAddConvenzioni?.get('contenuto')
  }

  get posizione() {
    return this.formAddConvenzioni?.get('posizione')
  }

  addLink(formAddLink: FormGroup){
 
     console.log(formAddLink.value)
  }

  addConvenzione(formAddConvenzioni: FormGroup){
    console.log(formAddConvenzioni.value)
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


  getSelectedValue(val:any){  
    if(val.value ==='maria'){
      this.maria?.nativeElement.click()
    }else{
      this.hr?.nativeElement.click()
    }
    this.configuration.forEach((c)=> {
      c.selected = false;
      if(c.text === val.text){
        c.selected = true
      }
    })
    console.log(val)
  }
    
  @ViewChild('maria') set mariaContent(mariaContent: ElementRef) {
    if(mariaContent) { // initially setter gets called with undefined
        this.maria = mariaContent;
    }
 }
  @ViewChild('hr') set hrContent(hrContent: ElementRef) {
    if(hrContent) { // initially setter gets called with undefined
        this.hr = hrContent;
    }
 }
 maria: ElementRef | undefined;
 hr: ElementRef | undefined;


  ngAfterViewInit() {


  }
}
