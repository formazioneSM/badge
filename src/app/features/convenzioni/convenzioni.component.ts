import { Component, OnInit } from '@angular/core';
import { ConvenzioniService } from 'src/app/shared/uikit/services/convenzioni/convenzioni.service';

@Component({
  selector: 'app-convenzioni',
  templateUrl: './convenzioni.component.html',
  styleUrls: ['./convenzioni.component.css']
})
export class ConvenzioniComponent implements OnInit {


  convenzioni: any = [];
  constructor(private convenzioniService: ConvenzioniService) { }

  ngOnInit(): void {
    this.convenzioniService.getAllCovenzioni().subscribe((c:any) => {
      this.convenzioni = c;
      console.log(this.convenzioni);
    });

  }

}
