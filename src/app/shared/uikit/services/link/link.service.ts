import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_path } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  isAlinkToDownload!: false
  
  constructor(private http:HttpClient) { }
  
  
  addLink(nomeLink: string, link: string) {
    return this.http.post(base_path+"/link",{text: nomeLink,url: link
      
    })
  }
  deleteLink(_id: string) {
    return this.http.delete(base_path+"/link/"+_id)
    
  }

  loadAllLinks(){
    return this.http.get(base_path+"/link/all")
  }

  getLink(linkId:string){
    return this.http.get(`${base_path}/link/${linkId}`)
  }

  editLink(id: string, text:string, url:string){
    return this.http.put(`${base_path}/link/${id}`,{ text, url});
  }

  


}
