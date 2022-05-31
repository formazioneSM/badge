import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {colors_palette} from '../../../utils/constants'

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit, AfterViewInit {

  colors = colors_palette.map(c => ({color:c, selected:false}));
  clickPalette:boolean = false;
  @Output('changeColor') changeColor = new EventEmitter();
  @ViewChild('containerColor') containerColor: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    this.containerColor?.nativeElement.click();
  }
  open_palette(){
    this.clickPalette = true;
    this.containerColor?.nativeElement.click();
  }

  individuaColore(c:any){
    this.colors.forEach((co)=> {
      c.selected = false;
      if(co.color == c.color){
        c.selected = true;
        console.log(c.selected)
      }
    })
    this.changeColor.emit(c.color)
    this.clickPalette = false;
  }

  closePalette(){
    this.clickPalette = false;
  }
}
