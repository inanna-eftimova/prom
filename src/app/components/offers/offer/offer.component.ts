import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})


export class OfferComponent implements OnInit {

  @Input('parentData') data: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
  }

  details(){
    const id = this.route.snapshot.params['id'];
    console.log(id)
  }

}
