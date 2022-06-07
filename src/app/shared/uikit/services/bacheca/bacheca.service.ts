import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../toast.service';
import { toastMessages } from 'src/app/shared/utils/constants';
@Injectable({
  providedIn: 'root',
})
export class BachecaService {
  constructor(private http: HttpClient, public toastService: ToastService) {}
  posts: any = [];
  index!: number;
  postUndo: any;

  createNewPost(color: string, text: string, from: string) {
    this.toastService.setMessage(toastMessages.contentCreatedSuccessfully);
    return this.http.post(`https://be-system.herokuapp.com/api/bacheca`, {
      color: color,
      text: text,
      from: from,
    });
  }
  getPost(postId: number | string) {
    return this.http.get(
      `https://be-system.herokuapp.com/api/bacheca/${postId}`
    );
  }
  undoDeletedPost() {
    this.createNewPost(
      this.postUndo.color,
      this.postUndo.text,
      this.postUndo.from
    ).subscribe((res) => {
      if (res) {
        this.posts.splice(this.index, 0, res);
      }
    });
    this.toastService.isVisibleUndo = false;
    this.toastService.setMessage(toastMessages.contentUndoSuccessfully);
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
  
  loadPosts() {
    this.getAllPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
}
