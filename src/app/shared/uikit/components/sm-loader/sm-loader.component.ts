import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-sm-loader',
  template: `
    <ng-lottie
      [options]="options"
      (animationCreated)="animationCreated($event)"
    ></ng-lottie>
  `,
  styleUrls: ['./sm-loader.component.css'],
})
export class SmLoaderComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/loaders/loader_blue.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() {}

  ngOnInit(): void {}
}
