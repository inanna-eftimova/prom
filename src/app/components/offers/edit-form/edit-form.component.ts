import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OffersService } from 'src/app/core/service/offers-service/offers.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  form: any;
  serverData: any;
  id = this.route.snapshot.params['id'];
  uid: any;
  public localUid = localStorage.getItem('uid');
  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private offersService: OffersService,
    private router: Router,
    private toastr: ToastrService) { }
    

  ngOnInit(): void {
    this.offersService.getCurrentOfferd(this.id).subscribe(data => {
      this.serverData = data;
      this.uid = this.serverData['userId'];
      this.form = this.fb.group({
        title: [this.serverData['title'], Validators.required],
        price: [this.serverData['price'], [Validators.required, Validators.pattern( /^\$?[0-9]+(\.[0-9][0-9])?$/)]],
        stars: [this.serverData['stars'], Validators.required],
        img: [this.serverData['img'], [Validators.required, Validators.pattern(/\.(jpe?g|png|gif|bmp)$/i)]],
        description: [this.serverData['description'], Validators.required],
        userId: [localStorage.getItem('uid')]
      })
    })
  }
  
  save(){
    this.offersService.updateOffer(this.form.value, this.id).subscribe(data => {
      this.toastr.success('Saved offer!', 'Success');
      this.router.navigate([`/auth/details/${this.id}`]);
    })
  }

}
