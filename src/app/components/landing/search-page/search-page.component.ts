import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/core/service/offers-service/offers.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  constructor(private offersServise: OffersService) { }
  dataInput: string = '';
  offers: any;
  ngOnInit(): void {
  }
  searcher(){
    this.offersServise.getAllOffers().subscribe(data => {
        this.offers = data;
    })
  }
}
