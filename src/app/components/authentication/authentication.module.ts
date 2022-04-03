import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SharedRoutingModule } from '../shared/shared-routing..module';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    RegisterFormComponent,
    LoginFormComponent
  ]
})
export class AuthenticationModule { }
