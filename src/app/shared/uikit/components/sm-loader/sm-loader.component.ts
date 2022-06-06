import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-sm-loader',
  templateUrl: './sm-loader.component.html',
  styleUrls: ['./sm-loader.component.css'],
})
export class SmLoaderComponent implements OnInit {
  options: AnimationOptions = {
    path: 'assets/loaders/loader_blue.json',
  };

  loading = false;

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
        console.log(v);
        this.loading = v;
      });
  }
  ngOnInit(): void {}
}
