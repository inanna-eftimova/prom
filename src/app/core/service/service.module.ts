import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from './auth-service/auth-service.service';
import { OffersService } from './offers-service/offers.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthServiceService,
    OffersService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  exports: [
  ]
})
export class ServiceModule { }
