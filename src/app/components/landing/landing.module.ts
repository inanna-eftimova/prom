import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';
import { OffersModule } from '../offers/offers.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SharedRoutingModule } from '../shared/shared-routing..module';



@NgModule({
  declarations: [
    HomePageComponent,
    CatalogPageComponent,
    SearchPageComponent,
    MyProfilePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    OffersModule,
    SharedRoutingModule
  ],
  exports: [
    HomePageComponent,
    CatalogPageComponent,
    SearchPageComponent,
    MyProfilePageComponent,
    NotFoundPageComponent
  ]
})
export class LandingModule { }
