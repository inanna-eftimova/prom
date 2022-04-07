import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})


export class OfferComponent implements OnInit {

  @Input('parentData') data: any;

  constructor(){}

  ngOnInit(): void {
  }

  details(){
    console.log('inana');
  }

}
