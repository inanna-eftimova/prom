import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OffersService } from 'src/app/core/service/offers-service/offers.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  form: any;

  constructor(private fb: FormBuilder, 
    private offersSevice: OffersService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['',  [Validators.required, Validators.pattern( /^\$?[0-9]+(\.[0-9][0-9])?$/)]],
      stars: ['', Validators.required],
      img: ['', [Validators.required, Validators.pattern(/\.(jpe?g|png|gif|bmp)$/i)]],
      description: ['', Validators.required],
      userId: [localStorage.getItem('uid')]
    })
  }

  create(){
    this.offersSevice.createOffer(this.form.value).subscribe(data => {
      this.toastr.success('Added offer!', 'Success');
      this.router.navigate(['/auth/catalog']);
    })
  }

}
