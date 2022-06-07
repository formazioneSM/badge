import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast.service';
import { toastMessages } from 'src/app/shared/utils/constants';
import { Post } from '../../../utils/interfaces';
@Injectable({
  providedIn: 'root',
})
export class BachecaService {
  constructor(private http: HttpClient, public toastService: ToastService) {}
  posts: any = [];
  index!: number;
  postUndo: any;

  createNewPost(post: Post) {
    this.toastService.setMessage(toastMessages.contentCreatedSuccessfully);
    return this.http.post(`https://be-system.herokuapp.com/api/bacheca`, post);
  }


  getPost(postId: number | string) {
    return this.http.get(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`
    );
  }

  undoDeletedPost(post: Post) {
    this.createNewPost(post);
  }

  getAllPosts() {
    return this.http.get(`https://be-system.herokuapp.com/api/bacheca/all`);
  }

  deletePost(postId: number | string) {
    return this.http.delete(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`
    );
  }

  editPost(postId: number | string, color: string, text: string, from: string) {
    return this.http.put(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`,
      {
        color: color,
        text: text,
        from: from,
      }
    );
  }

//   loadPosts() {
//     return this.getAllPosts();
//   }
}
