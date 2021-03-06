import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';
import { OffersModule } from '../offers/offers.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginMessagePageComponent } from './login-message-page/login-message-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CatalogPageComponent,
    SearchPageComponent,
    MyProfilePageComponent,
    NotFoundPageComponent,
    LoginMessagePageComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    OffersModule,
    AppRoutingModule,
    FormsModule, 
    SharedModule
  ],
  exports: [
    HomePageComponent,
    CatalogPageComponent,
    SearchPageComponent,
    MyProfilePageComponent,
    NotFoundPageComponent,
    LoginMessagePageComponent,
    AboutUsComponent
  ]
})
export class LandingModule { }
