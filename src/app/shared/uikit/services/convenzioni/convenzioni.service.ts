import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_path } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ConvenzioniService {

    convenzioni: any = [];
  constructor(private http: HttpClient) { }

  getAllConvenzioni(){
    return this.http.get(`${base_path}/convenzione/all`);
  }

  loadConvenzioni() {
      this.getAllConvenzioni().subscribe((conv) => {
          this.convenzioni = conv;
          console.log(this.convenzioni);
      })
  }

  addNewConvenzione( titolo: string, text:string, titoloLink: string, url:string){
    return this.http.post(`${base_path}/convenzione`, {
      titolo:titolo,
      text:text,
      titoloLink:titoloLink,
      url:url,
    })
  }
  
  deleteConvenzioni(id: number | string) {
    return this.http.delete(
      `${base_path}/convenzione/${id}`
    );
  }
}
