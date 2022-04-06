import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/core/service/auth-service/auth-service.service';
import { OffersService } from 'src/app/core/service/offers-service/offers.service';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css']
})
export class MyProfilePageComponent implements OnInit {
  offers: any;
  uid: any;
  constructor(private offersService: OffersService, 
    private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.offersService.getAllOffers().subscribe(data => {
       this.offers = data;
       this.uid = this.authService.getUId();
       console.log(this.authService.getUId())
    })

  }

}
