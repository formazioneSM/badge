import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_path } from 'src/app/shared/utils/constants';


@Injectable({
  providedIn: 'root',
})
export class BachecaService {
  constructor(private http: HttpClient) {}

  createNewPost(color: string, text: string, from: string) {
    return this.http.post(`${base_path}/bacheca`, {
      color: color,
      text: text,
      from: from,
    });
  }

  getPost(postId: number | string) {
    return this.http.get(
      `${base_path}/bacheca/${postId}`
    );
  }

  getAllPosts() {
    return this.http.get(`${base_path}/bacheca/all`);
  }

  deletePost(postId: number | string) {
    return this.http.delete(
      `${base_path}/bacheca/${postId}`
    );
  }

  editPost(postId: number | string, color: string, text: string, from: string) {
    return this.http.put(
      `${base_path}/bacheca/${postId}`,
      {
        color: color,
        text: text,
        from: from,
      }
    );
  }
}
