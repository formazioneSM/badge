import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/shared/uikit/services/link/link.service';
import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';
import {  Router } from '@angular/router';
import { toastNames, types } from 'src/app/shared/utils/constants';
import { ToastService } from 'src/app/shared/uikit/services/toast/toast.service';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  loading = false;
  links!: any;
  linksOld:any;
  annulla:any

  constructor(
    private linkService: LinkService,
    public loaderService: LoaderService,
    private router: Router,
    private toastService: ToastService,
  ) {
    this.loaderService.isLoading.subscribe((v) => {

      this.loading = v;
    });
  }

  ngOnInit(): void {
    this.toastService.annulla.subscribe((res)=>{
      if(res){
        this.links = this.linksOld
        this.toastService.annulla.next(false)
        if(this.annulla){

          this.annulla.unsubscribe()
        }
      }
    } )


    this.linkService.loadAllLinks().subscribe((res) => {
      this.links = res;
      this.linksOld = [...this.links]
    });
  }


  onLinkDelete(_id: string) {
    this.toastService.isVisibleUndo = true;

    this.links = this.links.filter((l:any) => l._id != _id);
    this.toastService.setMessage(toastNames.DELETED_LINK_SUCCESS)


    this.annulla = this.toastService.annullaTimer.subscribe((res)=>{     
      this.linkService.deleteLink(_id).subscribe(
  (res: any) => {
  },
  (err) => {
    this.toastService.setMessage(toastNames.DELETED_POST_ERROR);
  }
);
  
})

  }

  edit(_id: string) {

    this.router.navigate(['home/aggiungi', _id, types.LINK]);
  }
}
