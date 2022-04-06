import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/core/service/auth-service/auth-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  form: any;
  constructor(private service: AuthServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.pattern(/^.{6,}$/)]],
      repeatPass: ['']
    })
  }
  
  register(){
    this.service.register(this.form.controls.email.value, this.form.controls.password.value);
  }

  get f(){
    return this.form.controls;
  }
}
