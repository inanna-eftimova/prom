import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CatalogPageComponent,
    SearchPageComponent,
    MyProfilePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    CatalogPageComponent,
    SearchPageComponent,
    MyProfilePageComponent
  ]
})
export class LandingModule { }
