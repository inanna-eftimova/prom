import { Component, OnInit } from '@angular/core';
// import { OffersService } from 'src/app/core/service/offers-service/offers.service';
// import { Offer } from 'src/app/models/Offer.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  // allData: any;
  // offers: Offer[] = [];
  // constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    // this.offersService.getAllOffers().subscribe(data => {
    //  this.allData = data;
    //  console.log(this.allData)
    // })
  }

}
