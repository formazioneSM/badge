import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BachecaService } from 'src/app/shared/uikit/services/bacheca/bacheca.service';
import { ToastService } from 'src/app/shared/uikit/services/toast.service';
import { toastMessages } from 'src/app/shared/utils/constants';
@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css'],
})
export class BachecaComponent implements OnInit {
  toast: boolean = false;
  startTimer: Subscription | undefined;
  card: boolean = true;
  constructor(
    public bachecaService: BachecaService,
    public toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.bachecaService.loadPosts();
  }
  onPostDelete(id: any) {
    this.toastService.isVisibleUndo = true;
    // Splice in locale
    let postId = id;
    let index = this.bachecaService.posts.findIndex((p: any) => p._id == postId);
    this.bachecaService.index = index
    this.bachecaService.postUndo = this.bachecaService.posts[index]
    this.bachecaService.posts.splice(index, 1);
    this.toastService.setMessage(toastMessages.contentDeletedSuccessfully);
    // Delete su backend
      this.bachecaService.deletePost(postId).subscribe((res: any) => {
        console.log(res);
      });
      console.log(this.bachecaService.postUndo)
  }
}