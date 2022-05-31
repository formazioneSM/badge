import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { colorDefault } from '../../shared/utils/constants';
import { BachecaService } from 'src/app/shared/uikit/services/bacheca.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css'],
})
export class AggiungiComponent implements OnInit {
  bgcolor = colorDefault;
  formAddBacheca: FormGroup = {} as FormGroup;
  formAddLink: FormGroup = {} as FormGroup;
  formAddConvenzioni: FormGroup = {} as FormGroup;
  stepOne: boolean = true;
  type: string | undefined;
  configuration = [
    { text: '@Maria Grazia Marra', value: 'maria', selected: false },
    { text: '@hr', value: 'hr', selected: false },
  ];

  postTypes = [
    {
      type: 'Bacheca',
      text: 'Avvisi e informazioni, permanenti e non ,per tutti i colleghi SM.',
      icon: '../../assets/images/bacheca.png',
      selected: false,
    },
    {
      type: 'Link',
      text: 'Inserisci link utili e veloci che possono aiutare i colleghi.',
      icon: '../../assets/images/link.png',
      selected: false,
    },
    {
      type: 'Convenzioni',
      text: 'Inserisci le informazioni sulle convezioni attive!',
      icon: '../../assets/images/convenzioni.png',
      selected: false,
    },
  ];
  disabled: boolean = true;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private bachecaService: BachecaService
  ) {}
  preventDef(e: any) {
    e.stopPropagation();
    // e.preventDefault();
  }
  triggerRadio(e: any, c: any) {
    e.stopPropagation();
    e.preventDefault();
    let element = e.target.firstChild;
    element.click();
    this.getSelectedValue(c);
  }
  ngOnInit(): void {
    this.disabled = this.postTypes.every((p) => !p?.selected);

    this.formAddBacheca = this._fb.group({
      contenutoBacheca: ['', Validators.required],
      radio: ['', Validators.required],
    });

    this.formAddLink = this._fb.group({
      nomeLink: ['', Validators.required],
      link: ['', Validators.required],
    });

    this.formAddConvenzioni = this._fb.group({
      titolo: ['', Validators.required],
      contenuto: ['', Validators.required],
      posizione: ['', Validators.required],
    });
  }
  get contenutoBacheca() {
    return this.formAddBacheca?.get('contenutoBacheca');
  }

  get radio() {
    return this.formAddBacheca?.get('radio');
  }

  get nomeLink() {
    return this.formAddLink?.get('nomeLink');
  }

  get link() {
    return this.formAddLink?.get('link');
  }

  get titolo() {
    return this.formAddConvenzioni?.get('titolo');
  }

  get contenuto() {
    return this.formAddConvenzioni?.get('contenuto');
  }

  get posizione() {
    return this.formAddConvenzioni?.get('posizione');
  }

  addBacheca(formAddBacheca: FormGroup) {
    console.log(formAddBacheca.value);
  }

  addLink(formAddLink: FormGroup) {
    console.log(formAddLink.value);
  }

  addConvenzione(formAddConvenzioni: FormGroup) {
    console.log(formAddConvenzioni.value);
  }

  esc() {
    this._router.navigate(['home/bacheca']);
  }

  goToSecondStep(typeOfPost: any) {
    let foundedType = typeOfPost.find((n: any) => n.selected).type;
    this.stepOne = false;
    console.log(foundedType);
    this.type = foundedType;
  }

  selectCard(card: any) {
    this.postTypes.forEach((c) => {
      c.selected = false;
      if (c === card) {
        c.selected = true;
      }
    });

    this.disabled = this.postTypes.every((p) => !p?.selected);
  }

  getSelectedValue(val: any) {
    this.configuration.forEach((c) => {
      c.selected = false;
      if (c.text === val.text) {
        c.selected = true;
      }
    });
  }

  changeColorTextarea(color: string) {
    this.bgcolor = color;
  }

  onPostSubmit() {
    this.bachecaService
      .createNewPost(
        this.bgcolor,
        this.formAddBacheca.value.contenutoBacheca,
        this.formAddBacheca.value.radio
      )
      .subscribe((err: any) => {
        console.log(err);
      });
    this._router.navigate(['home/bacheca']);
  }
}
