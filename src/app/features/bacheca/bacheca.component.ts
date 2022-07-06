import { Component, OnInit } from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutRightOnLeaveAnimation,
} from 'angular-animations';
import { Subscription, timer } from 'rxjs';
import { BachecaService } from 'src/app/shared/uikit/services/bacheca/bacheca.service';
// import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';
import { toastMessages, toastNames } from 'src/app/shared/utils/constants';
import { Post } from '../../shared/utils/interfaces';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css'],
  animations: [fadeInOnEnterAnimation(), fadeOutRightOnLeaveAnimation()],
})
export class BachecaComponent implements OnInit {
  toast: boolean = false;
  startTimer: Subscription | undefined;
  card: boolean = true;
  loading = false;
  posts: Post[] = [];
  postsOld: Post[] = [];
  annulla: any;

  constructor(
    public bachecaService: BachecaService,
    public toastService: ToastService,
    // public loaderService: LoaderService
  ) {
    // this.loaderService.isLoading.subscribe((v) => {
    //   this.loading = v;
    // });
  }

  ngOnInit(): void {
    this.getAllPosts();
    this.toastService.annulla.subscribe((res) => {
      if (res) {
        this.posts = this.postsOld;
        this.toastService.annulla.next(false);
        if (this.annulla) {
          this.annulla.unsubscribe();
        }
      }
    });

  }

  getAllPosts() {
    this.loading = true;
    this.bachecaService.getAllPosts().subscribe((data: any) => {
      this.posts = data;
      this.loading = false;
      this.postsOld = [...this.posts];
    });
  }

  onPostDelete(id: any) {

    this.toastService.isVisibleUndo = true;

    let postId = id;

    this.posts = this.posts.filter((p) => p._id != postId);
    this.toastService.setMessage(toastNames.DELETED_POST_SUCCESS);

    this.annulla = this.toastService.annullaTimer.subscribe((res) => {
      this.bachecaService.deletePost(postId).subscribe(
        (res: any) => {
          this.postsOld = this.postsOld.filter((p:any) => p._id != postId);
        },
        (err) => {
          this.toastService.isVisibleUndo = false;
          this.toastService.setMessage(toastNames.DELETED_POST_ERROR);
        }
      );
    });
  }
}
