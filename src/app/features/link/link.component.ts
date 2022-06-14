import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/shared/uikit/services/link/link.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { LoaderService } from 'src/app/shared/uikit/services/loader/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private linkService: LinkService,
    private permissionsService: NgxPermissionsService,
    public loaderService: LoaderService,
    private router: Router,
    private toastService: ToastService,
  ) {
    this.loaderService.isLoading.subscribe((v) => {
      // console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
    this.linkService.loadAllLinks().subscribe((res) => {
      this.links = res;
      console.log(this.links);
    });
  }


  onLinkDelete(_id: string) {
    this.toastService.isVisibleUndo = true;
    console.log('indice ', typeof _id);
    const index = this.links.findIndex((x: any) => x._id == _id);
    console.log(index);
    this.links.splice(index, 1);
    this.linkService.deleteLink(_id).subscribe((res) => {
        console.log(res);
        this.toastService.setMessage(toastNames.DELETED_LINK_SUCCESS)
    },(err) => {
        console.log(err);
        this.toastService.isVisibleUndo = false;
        this.toastService.setMessage(toastNames.DELETED_LINK_ERROR)

    });
  }

  edit(_id: string) {
    console.log(_id);
    this.router.navigate(['home/aggiungi', _id, types.LINK]);
  }
}
