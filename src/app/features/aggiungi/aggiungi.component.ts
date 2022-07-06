import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { colorDefault, toastNames, types } from '../../shared/utils/constants';
import { BachecaService } from 'src/app/shared/uikit/services/bacheca/bacheca.service';
import { ConvenzioniService } from 'src/app/shared/uikit/services/convenzioni/convenzioni.service';
import { LinkService } from 'src/app/shared/uikit/services/link/link.service';
import { Location } from '@angular/common';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css'],
})
export class AggiungiComponent implements OnInit {
  [x: string]: any;
  modifica: boolean = false;
  newConvenzione: any = [];
  bgcolor = colorDefault;
  formAddBacheca: FormGroup = {} as FormGroup;
  formAddLink: FormGroup = {} as FormGroup;
  formAddConvenzioni: FormGroup = {} as FormGroup;
  stepOne: boolean = true;
  type: string | undefined;
  editParams: { id?: string; type?: string } = {};
  http: string = 'http://';
  // fileName: string = '';

  configuration = [
    {
      text: '@Maria Grazia Marra',
      value: 'Maria Grazia Marra',
      selected: false,
    },
    { text: '@hr', value: 'hr', selected: false },
  ];
  types = types;
  postTypes = [
    {
      type: this.types.BACHECA,
      text: 'Avvisi e informazioni, permanenti e non, per tutti i colleghi SM.',
      icon: 'assets/images/bacheca.png',
      selected: false,
    },
    {
      type: this.types.LINK,
      text: 'Inserisci link utili e veloci che possono aiutare i colleghi.',
      icon: 'assets/images/link.png',
      selected: false,
    },
    {
      type: this.types.CONVENZIONI,
      text: 'Inserisci le informazioni sulle convenzioni attive!',
      icon: 'assets/images/convenzioni.png',
      selected: false,
    },
  ];
  disabled: boolean = true;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private bachecaService: BachecaService,
    private convenzioniService: ConvenzioniService,
    private linkService: LinkService,
    private route: ActivatedRoute,
    private location: Location,
    private toastService: ToastService
  ) {}
  preventDef(e: any) {
    e.stopPropagation();
  }
  triggerRadio(e: any, c: any) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    let element = e
      ? e.target.firstChild
      : document.getElementById('@' + c)?.firstChild;
    element.click();
    this.getSelectedValue(c);
  }
  ngOnInit(): void {
    this.disabled = this.postTypes.every((p) => !p?.selected);

    this.formAddBacheca = this._fb.group({
      contenutoBacheca: [
        '',
        [
          Validators.required,
          Validators.pattern(/[\S]/),
          Validators.minLength(4),
        ],
      ],
      radio: ['', Validators.required],
    });

    this.formAddLink = this._fb.group({
      nomeLink: ['', [Validators.required, Validators.pattern(/[\S]/)]],
      link: ['', [Validators.required, Validators.pattern(/[\S]/)]],
      // checkbox: [false],
    });

    this.formAddConvenzioni = this._fb.group({
      titolo: ['', [Validators.required, Validators.pattern(/[\S]/)]],
      contenuto: [
        '',
        [
          Validators.required,
          Validators.pattern(/[\S]/),
          Validators.minLength(4),
        ],
      ],
      titoloLink: ['', [Validators.required, Validators.pattern(/[\S]/)]],
      url: ['', [Validators.required, Validators.pattern(/[\S]/)]],
    });

    this.route.params.subscribe((val) => {
      this.editParams = val;
      this.modifica = true;
      this.type = val['type'];
      if (this.editParams.id && this.editParams.type === 'Bacheca') {
        this.stepOne = false;
        this.bachecaService
          .getPost(this.editParams.id)
          .subscribe((post: any) => {
            this.formAddBacheca?.setValue({
              contenutoBacheca: post.text,
              radio: '',
            });
            this.bgcolor = post.color;
            this.triggerRadio(undefined, post.from);
            this.configuration.forEach((c) => {
              if (c.text === '@' + post.from) {
                c.selected = true;
              }
            });
          });
      } else if (this.editParams.id && this.editParams.type === 'Link') {
        this.stepOne = false;
        this.linkService.getLink(this.editParams.id).subscribe((link: any) => {
          this.formAddLink?.setValue({ nomeLink: link.text, link: link.url });
        });
      } else if (this.editParams.id && this.editParams.type === 'Convenzioni') {
        this.stepOne = false;
        this.convenzioniService
          .getConvenzione(this.editParams.id)
          .subscribe((c: any) => {
            this.formAddConvenzioni?.setValue({
              titolo: c.titolo,
              contenuto: c.text,
              titoloLink: c.titoloLink,
              url: c.url,
            });
          });
      } else {
        this.stepOne = true;
      }
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

  // get checkbox() {
  //   return this.formAddLink?.get('checkbox');
  // }
    // get file() {
  //   return this.formAddLink?.get('file');
  // }

  get titolo() {
    return this.formAddConvenzioni?.get('titolo');
  }

  get contenuto() {
    return this.formAddConvenzioni?.get('contenuto');
  }

  get titoloLink() {
    return this.formAddConvenzioni?.get('titoloLink');
  }

  get url() {
    return this.formAddConvenzioni?.get('url');
  }

  addBacheca(formAddBacheca: FormGroup) {}

  addLink(formAddLink: FormGroup) {
    if (this.editParams.id && this.editParams.type === 'Link') {
      this.linkService
        .editLink(
          this.editParams.id,
          this.formAddLink.value.nomeLink,
          this.formAddLink.value.link
        )
        .subscribe();
      this._router.navigate(['home/link']);
    } else {
      if (
        this.formAddLink.value.link.includes('http://') ||
        this.formAddLink.value.link.includes('https://')
      ) {
        this.linkService
          .addLink(formAddLink.value.nomeLink, formAddLink.value.link)
          .subscribe(
            (res) => {
              this.toastService.setMessage(toastNames.ADDED_LINK_SUCCESS);
            },
            (err) => {
              this.toastService.setMessage(toastNames.ADDED_LINK_ERROR);
            }
          );
        this._router.navigate(['home/link']);
      } else {
        this.linkService
          .addLink(
            formAddLink.value.nomeLink,
            this.http + formAddLink.value.link
          )
          .subscribe(
            (res) => {
              this.toastService.setMessage(toastNames.ADDED_LINK_SUCCESS);
            },
            (err) => {
              this.toastService.setMessage(toastNames.ADDED_LINK_ERROR);
            }
          );
        this._router.navigate(['home/link']);
      }
    }
  }

  addConvenzione(formAddConvenzioni: FormGroup) {
    if (this.editParams.id && this.editParams.type === 'Convenzioni') {
      this.convenzioniService
        .editConvenzione(
          this.editParams.id,
          this.formAddConvenzioni.value.titolo,
          this.formAddConvenzioni.value.contenuto,
          this.formAddConvenzioni.value.titoloLink,
          this.formAddConvenzioni.value.url
        )
        .subscribe();
      this._router.navigate(['home/convenzioni']);
    } else {
      if (
        this.formAddConvenzioni.value.url.includes('http://') ||
        this.formAddConvenzioni.value.url.includes('https://')
      ) {
        this.convenzioniService
          .addNewConvenzione(
            this.formAddConvenzioni.value.titolo,
            this.formAddConvenzioni.value.contenuto,
            this.formAddConvenzioni.value.titoloLink,
            this.formAddConvenzioni.value.url
          )
          .subscribe(
            (c) => {
              this.newConvenzione.push(c);
              this.toastService.setMessage(toastNames.ADDED_CONV_SUCCESS);
              this._router.navigate(['home/convenzioni']);
            },
            (err) => {
              this.toastService.setMessage(toastNames.ADDED_CONV_ERROR);
            }
          );
      } else {
        this.convenzioniService
          .addNewConvenzione(
            this.formAddConvenzioni.value.titolo,
            this.formAddConvenzioni.value.contenuto,
            this.formAddConvenzioni.value.titoloLink,
            this.http + this.formAddConvenzioni.value.url
          )
          .subscribe(
            (c) => {
              this.newConvenzione.push(c);
              this.toastService.setMessage(toastNames.ADDED_CONV_SUCCESS);
              this._router.navigate(['home/convenzioni']);
            },
            (err) => {
              this.toastService.setMessage(toastNames.ADDED_CONV_ERROR);
            }
          );
      }
    }
  }

  esc() {
    this.location.back();
    this.modifica = false;
  }
  backStepOne() {
    this.stepOne = true;
    this.modifica = false;
  }

  goToSecondStep(typeOfPost: any) {
    let foundedType = typeOfPost.find((n: any) => n.selected).type;
    this.stepOne = false;

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

  changeColorTextarea(c: any) {
    this.bgcolor = c.color;
    c.selected = true;
  }

  onPostSubmit() {
    if (this.editParams.id && this.editParams.type === 'Bacheca') {
      let editPosts = {
        color: this.bgcolor,
        text: this.formAddBacheca.value.contenutoBacheca,
        from: this.formAddBacheca.value.radio,
      };
      this.bachecaService.editPost(editPosts, this.editParams.id).subscribe();
      this._router.navigate(['home/bacheca']);
    } else {
      let post = {
        color: this.bgcolor,
        text: this.formAddBacheca.value.contenutoBacheca,
        from: this.formAddBacheca.value.radio,
      };
      this.bachecaService.createNewPost(post).subscribe(
        (res) => {
          this.toastService.setMessage(toastNames.ADDED_POST_SUCCESS);
        },
        (err) => {
          this.toastService.setMessage(toastNames.ADDED_POST_ERROR);
        }
      );
      this._router.navigate(['home/bacheca']);
    }
  }

}
