import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input('textLabel') textLabel: string | undefined;
  @Input('placeholder') placeholder: string | undefined;
  @Input('backgroundInput') backgroundInput: string | undefined;
  @Output('valueInput') valueInput = new EventEmitter();
  @Input('height') height: string | undefined;
  @Input('for') for: string | undefined;
  @Input('name') name: string | undefined;
  @Input('controlName') controlName: string = '';
  @Input('parentFormGroup') parentFormGroup: FormGroup = {} as FormGroup;
  @Input('type') type: string | undefined;
  @ViewChild('input') input: ElementRef | any;
  @Output('blurForRer') blurForRed = new EventEmitter();
  @Input ('value') value: string | undefined;
  @Input('autocomplete') autocomplete: string | undefined;


  constructor() {}

  ngOnInit(): void {}

 ngAfterViewInit(): void {
   this.input.nativeElement.value= this.value ?? ''
 }

  onShowPasswordClicked() {
    if (this.type == 'password') {
      this.type = 'text';
    } else if (this.type == 'text') {
      this.type = 'password';
    }
  }

  blurInput(){
   this.blurForRed.emit()
  }


}
