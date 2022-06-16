import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {colors_palette} from '../../../utils/constants'

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit{

  colors = colors_palette.map(c => ({color:c, selected:false}));
  clickPalette:boolean = false;
  @Output('changeColor') changeColor = new EventEmitter();
  @ViewChild('containerColor') containerColor: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  open_palette(){
    this.clickPalette = !this.clickPalette;
    this.containerColor?.nativeElement.blur();
  }

  individuaColore(c:any){
    this.colors.forEach((co)=> {
      co.selected = false;
      if(co.color == c.color){
        c.selected = true;
      }
     
    })
    
    this.changeColor.emit(c)
    this.clickPalette = false;


  }

  closePalette(c:any){
    this.clickPalette = false;


  }
}
