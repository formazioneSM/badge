import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BachecaService } from 'src/app/shared/uikit/services/bacheca.service';
import { ToastService } from 'src/app/shared/uikit/services/toast.service';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css'],
})
export class BachecaComponent implements OnInit {
  toast: boolean = false;
  startTimer: Subscription | undefined;
  card: boolean = true;
  posts: any = [];
  constructor(
    private bachecaService: BachecaService,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
    // this.onPostDelete();
  }

  //   showToast(id: string) {
  //     // this.card = false;
  //     // this.toast = true;
  //     // this.startTimer = timer(3000).subscribe(() => {
  //     console.log('ciao');
  //     let index = this.posts.findIndex((p: any) => p._id == id);
  //     this.posts.splice(index, 1);
  //     // this.toast = false;
  //     this.bachecaService
  //       .deletePost(id)
  //       .subscribe((res: any) => {
  //           this.toastService.newEvent.emit('ciao');
  //         // this.toastService.setMessage('Contenuto rimosso con successo!')
  //         console.log(res);
  //     });
  //   }

  onPostDelete(id: any) {
    // this.toastService.newEvent.subscribe((res) => {
    //   console.log(res);
    this.toastService.isVisibleUndo = true;

    // Splice in locale
    let postId = id;
    let index = this.posts.findIndex((p: any) => p._id == postId);
    this.posts.splice(index, 1);

    this.toastService.setMessage('Contenuto rimosso con successo!');

    // Delete su backend
    this.startTimer = timer(4000).subscribe(() => {
      this.bachecaService.deletePost(postId).subscribe((res: any) => {
        // this.toastService.newEvent.emit('ciao');
        console.log(res);
      });
    });
    // });
  }

  stopDelete(e: any) {
    this.startTimer?.unsubscribe();
    // this.card = true;
    // this.toast = false;
  }

  loadPosts() {
    this.bachecaService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
}
