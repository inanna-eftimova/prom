import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/core/auth-service/auth-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private service: AuthServiceService) { }

  ngOnInit(): void {
  }
  
  register(data: any){
    this.service.register(data['email'], data['password']);
  }
}
