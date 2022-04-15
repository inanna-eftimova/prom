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
  dataFromServer: any;
  hasData: boolean = false;
  ngOnInit(): void {
  }
  searcher(){
    this.offersServise.getAllOffers().subscribe(data => {
      this.dataFromServer = data;
      for (const el in this.dataFromServer) {
        this.dataFromServer[el]['id'] = el;
      }
      this.offers = Object.values(data);
      for (const el of this.offers) {
        if(el['title'].toLowerCase().includes(this.dataInput.toLowerCase())){
          this.hasData = true;
        }
      }
    })
  }
}
