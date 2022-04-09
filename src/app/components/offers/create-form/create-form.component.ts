import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OffersService } from 'src/app/core/service/offers-service/offers.service';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  form: any;

  constructor(private fb: FormBuilder, private offersSevice: OffersService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      stars: ['', Validators.required],
      img: ['', [Validators.required, Validators.pattern(/\.(jpe?g|png|gif|bmp)$/i)]],
      description: ['', Validators.required],
      userId: [localStorage.getItem('uid')],
      name: []
    })
  }

  create(){
    this.offersSevice.createOffer(this.form.value).subscribe(data => {
      
    })
  }

}
