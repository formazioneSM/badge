import { Component, OnInit } from '@angular/core';
import { ConvenzioniService } from 'src/app/shared/uikit/services/convenzioni/convenzioni.service';
import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';

@Component({
  selector: 'app-convenzioni',
  templateUrl: './convenzioni.component.html',
  styleUrls: ['./convenzioni.component.css'],
})
export class ConvenzioniComponent implements OnInit {
//   convenzioni: any = [];
  loading = false;

//   prove = [
//     {
//       ciao: 'ciao',
//     },
//     {
//       ciao: 'ciao',
//     },
//     {
//       ciao: 'ciao',
//     },
//     {
//       ciao: 'ciao',
//     },
//     {
//       ciao: 'ciao',
//     },
//     {
//       ciao: 'ciao',
//     },
//   ];
  
  constructor(
    public convenzioniService: ConvenzioniService,
    public loaderService: LoaderService
  ) {
    this.loaderService.isLoading.subscribe((v) => {
    //   console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
    this.convenzioniService.loadConvenzioni();
  }

//   getAllConvenzioni() {
//     this.convenzioniService.getAllCovenzioni().subscribe((c: any) => {
//       this.convenzioni = c;
//       console.log(this.convenzioni);
//     });
//   }
}
