import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LoginMessagePageComponent } from './login-message-page/login-message-page.component';

const routes: Routes = [
  {path: 'about', component: AboutUsComponent},
  {path: 'catalog', component: LoginMessagePageComponent},
  {path: 'auth', children: [
    {path: 'search', component: SearchPageComponent},
    {path: 'profile', component: MyProfilePageComponent},
    {path: 'catalog', component: CatalogPageComponent},
    {path: '**', component: MyProfilePageComponent},
  ], canActivate: [AuthGuard]},
  {path: '**', component: MyProfilePageComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }