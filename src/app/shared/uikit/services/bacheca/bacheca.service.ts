import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast/toast.service';
import { base_path, toastMessages } from 'src/app/shared/utils/constants';
import { Post } from '../../../utils/interfaces';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BachecaService {
  constructor(private http: HttpClient, public toastService: ToastService) {}
  posts: any = [];
  index!: number;
  postUndo: Subject<any> = new Subject();


  createNewPost(post: Post) {
    return this.http.post(`https://be-system.herokuapp.com/api/bacheca`, post);
  }


  getPost(postId: number | string) {
    return this.http.get(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`
    );
  }

  undoDeletedPost(post: Post) {
    // this.createNewPost(post);
    this.postUndo.next(post);
  }

  getAllPosts() {
    return this.http.get(`https://be-system.herokuapp.com/api/bacheca/all`);
  }

  deletePost(postId: number | string) {
    return this.http.delete(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`
    );
  }


  editPost(post: Post, postId:string){
    return this.http.put(`${base_path}/bacheca/${postId}`, post);
  }


}
