import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { base_path } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  formData: any;
  constructor(private http: HttpClient) {}

  imgFile(id: string, formData: FormData) {
    return this.http.put(`${base_path}/users/image/${id}`, formData);
  }

  getUser(badge: string) {
    return this.http.get(`${base_path}/users/${badge}`).pipe(
      map((val: any) => val[0]),
      catchError((err:any) => {
        throw err;
      })
    );
  }

  editAnagrafica(name: any, surname: any, badgeId: any) {
    return this.http.put(`${base_path}/users/${badgeId}`, {
      name: name,
      surname: surname,
      badge: badgeId,
    });
  }


  // per salvare il form di registrazione
  public setFormData(formData: any): void {
    this.formData = formData;
  }

  public getFormData(): any {
    return this.formData;  
  }
}
