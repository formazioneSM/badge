import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BachecaService } from 'src/app/shared/uikit/services/bacheca/bacheca.service';
import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';
import { ToastService } from 'src/app/shared/uikit/services/toast.service';
import { toastMessages } from 'src/app/shared/utils/constants';
import { Post } from '../../shared/utils/interfaces';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css'],
})
export class BachecaComponent implements OnInit {
  toast: boolean = false;
  startTimer: Subscription | undefined;
  card: boolean = true;
  loading = false;
  posts: Post[] = [];
//   placeholderArray = [];
  //   isPostLoading = false;

  constructor(
    public bachecaService: BachecaService,
    public toastService: ToastService,
    public loaderService: LoaderService
  ) {
    this.loaderService.isLoading.subscribe((v) => {
    //   console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
    this.bachecaService.getAllPosts().subscribe((data: any) => {
        this.posts = data;
    });
  }

  onPostDelete(id: any) {
    this.toastService.isVisibleUndo = true;
    // Splice in locale
    let postId = id;
    let index = this.posts.findIndex((p: any) => p._id == postId);
    // this.bachecaService.index = index;
    // this.bachecaService.postUndo = this.posts[index];
    this.posts.splice(index, 1);
    // this.toastService.setMessage(toastMessages.contentDeletedSuccessfully);
    this.toastService.setPost(this.posts[index]);
    // Delete su backend
    this.bachecaService.deletePost(postId).subscribe((res: any) => {
      console.log(res);
    });
    console.log(this.bachecaService.postUndo);
  }
}
