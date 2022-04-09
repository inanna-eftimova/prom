import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OffersService } from 'src/app/core/service/offers-service/offers.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  data: any;
  public uid = localStorage.getItem('uid');
  dataUid: any;
  dataId: any;
  constructor(private route: ActivatedRoute,
     private offersService: OffersService,
      private router: Router,
      private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.offersService.getCurrentOfferd(id).subscribe(data => {
      this.data = data;
     this.dataUid = this.data.userId;
     this.dataId = id;
    })
  }
  delete(){
    this.offersService.deleteOffer(this.dataId).subscribe(data => {
      this.toastr.success('Delete offer!', 'Success');
      this.router.navigate(['/auth/catalog']);
    })
  }

}
