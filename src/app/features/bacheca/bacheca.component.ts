import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BachecaService } from 'src/app/shared/uikit/services/bacheca/bacheca.service';
import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';
import { toastMessages, toastNames } from 'src/app/shared/utils/constants';
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
  postsOld:Post[]=[]
  annulla:any;
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
    this.toastService.annulla.subscribe((res)=>{
      console.log(res)
      if(res){
        this.posts = this.postsOld
        this.toastService.annulla.next(false)
        this.annulla.unsubscribe()
      }
    } )
    
    // this.bachecaService.postUndo.subscribe((res) => {
      //   this.bachecaService.createNewPost(res).subscribe((resDelete) => {
        //     this.getAllPosts();
        //     this.toastService.setDeletedContent({});
        //   });
        // });
        
        // console.log(this.posts)
        this.getAllPosts();
      }
      
      getAllPosts() {
        this.bachecaService.getAllPosts().subscribe((data: any) => {
          this.posts = data;
          this.postsOld = [...this.posts]
          console.log(data);
          console.log(this.postsOld)
    });
  }

  onPostDelete(id: any) {
    
    this.toastService.isVisibleUndo = true;
    // Splice in locale
    let postId = id;
    // let index = this.posts.findIndex((p: any) => p._id == postId);
    // this.bachecaService.index = index;
    // this.bachecaService.postUndo = this.posts[index];
    // this.posts.splice(index, 1);
    // this.toastService.setMessage(toastMessages.contentDeletedSuccessfully);
    
    // let deletedPost = {
    //     color: this.posts[index].color,
    //     from: this.posts[index].from,
    //     text: this.posts[index].text,
    // }
    // this.toastService.setDeletedContent(deletedPost);
    this.posts = this.posts.filter(p => p._id != postId);
    this.toastService.setMessage(toastNames.DELETED_POST_SUCCESS);

    

   this.annulla = this.toastService.annullaTimer.subscribe((res)=>{     
          this.bachecaService.deletePost(postId).subscribe(
      (res: any) => {
      },
      (err) => {
        this.toastService.isVisibleUndo = false;
        this.toastService.setMessage(toastNames.DELETED_POST_ERROR);
      }
    );
      
    })
    // Delete su backend


    
    // this.bachecaService.deletePost(postId).subscribe(
    //   (res: any) => {
    //     this.toastService.setMessage(toastNames.DELETED_POST_SUCCESS);
    //   },
    //   (err) => {
    //     this.toastService.setMessage(toastNames.DELETED_POST_ERROR);
    //   }
    // );


    console.log(this.bachecaService.postUndo);
  }
}
