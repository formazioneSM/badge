import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { base_path } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  imgFile(id:string, formData: FormData){
   return this.http.put(`${base_path}/users/image/${id}`, formData);
  }

  getUser(badge:string){
    return this.http.get(`${base_path}/users/${badge}`).pipe(
      map((val:any) => val[0]),
      catchError(err => {throw err})
    )
  }
}
