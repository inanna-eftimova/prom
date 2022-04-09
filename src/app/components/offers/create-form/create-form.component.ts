import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  form: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.form = this.fb.group({

    // })
  }

}
