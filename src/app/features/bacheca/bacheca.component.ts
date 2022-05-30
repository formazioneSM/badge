import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BachecaService } from 'src/app/shared/uikit/services/bacheca.service';


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
  constructor(private bachecaService: BachecaService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  showToast(id: string) {
    this.card = false;
    this.toast = true;
    this.startTimer = timer(3000).subscribe(() => {
        console.log('ciao');
        let index = this.posts.findIndex((p:any) => p.id === id);
        this.posts.splice(index, 1)
        this.toast = false;
    this.bachecaService.deletePost(id).subscribe((res:any)=> console.log(res));

    });
  }

  stopDelete(e: any) {
    this.startTimer?.unsubscribe();
    this.card = true;
    this.toast = false;
  }

  loadPosts() {
    this.bachecaService.getAllPosts().subscribe((posts) => {
        this.posts = posts;
        console.log(this.posts);
      });
  }
}
