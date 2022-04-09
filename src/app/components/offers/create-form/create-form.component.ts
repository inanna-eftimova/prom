import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  form: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      hotel: ['', Validators.required],
      town: ['', Validators.required],
      price: ['', Validators.required],
      img: [''],
      description: ['', Validators.required]
    })
  }

  create(){
    console.log(this.form);
  }

}
