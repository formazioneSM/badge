import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-gradient-loader',
  templateUrl: './gradient-loader.component.html',
  styleUrls: ['./gradient-loader.component.css'],
})
export class GradientLoaderComponent implements OnInit {
  loading = true;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {}
}
