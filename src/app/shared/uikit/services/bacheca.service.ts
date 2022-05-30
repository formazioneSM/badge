import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BachecaService {
  constructor(private http: HttpClient) {}

  getPost(postId: number | string) {
    return this.http.get(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`
    );
  }

  getAllPosts() {
    return this.http.get(
      `https://be-system.herokuapp.com/api/bacheca/all`
    );
  }

  deletePost(postId: number | string) {
    return this.http.delete(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`
    );
  }

  editPost(postId: number | string, color: string, text: string, from: string ) {
    return this.http.put(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`, {
        color: color,
        text: text,
        from: from,
      }
    );
  }
}