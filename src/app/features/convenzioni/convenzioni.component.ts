import { Component, OnInit } from '@angular/core';
import { ConvenzioniService } from 'src/app/shared/uikit/services/convenzioni/convenzioni.service';
import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';

@Component({
  selector: 'app-convenzioni',
  templateUrl: './convenzioni.component.html',
  styleUrls: ['./convenzioni.component.css'],
})
export class ConvenzioniComponent implements OnInit {
  convenzioni: any = [];
  loading = false;




  constructor(
    public convenzioniService: ConvenzioniService,
    public loaderService: LoaderService
  ) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

  ngOnInit(): void {
    this.convenzioniService.getAllConvenzioni().subscribe((c: any) => {
      this.convenzioni = c;
      console.log(this.convenzioni);
    });
  }
  deleteConvenzione(_id: string) {
    const index = this.convenzioni.findIndex((x: any) =>
      x._id === _id
    );
    this.convenzioni.splice(index, 1)
    this.convenzioniService.deleteConvenzioni(_id).subscribe((res:any) => (res))
  }



}
