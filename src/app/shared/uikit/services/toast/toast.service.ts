import { Injectable, EventEmitter } from '@angular/core';
import { Post } from '../../../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  newEvent: EventEmitter<any> = new EventEmitter();
  newPost: EventEmitter<any> = new EventEmitter();

  isVisibleUndo: boolean = false; // per far visualizzare undo
  post: Post = {};

  constructor() {}

  setMessage(message: any) {
    this.newEvent.emit(message);
  }

  setPost(post: Post) {
    this.newPost.emit(post);
  }
}
