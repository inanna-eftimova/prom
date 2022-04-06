import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/core/service/auth-service/auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private service: AuthServiceService, private fb: FormBuilder) { }
  form: any;
  ngOnInit(): void {
     this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^.{6,}$/)]]
    })
  }

  login(){
    this.service.login(this.form.controls.email.value, this.form.controls.password.value);
  }

  get f(){
    return this.form.controls;
  }
}
