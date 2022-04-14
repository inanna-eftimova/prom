import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './components/authentication/login-form/login-form.component';
import { RegisterFormComponent } from './components/authentication/register-form/register-form.component';
import { HomePageComponent } from './components/landing/home-page/home-page.component';
import { LoginMessagePageComponent } from './components/landing/login-message-page/login-message-page.component';
import { NotFoundPageComponent } from './components/landing/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'page', loadChildren: () => import('./components/landing/landing-routing.module')
     .then(m => m.LandingRoutingModule)},
  {path: 'element', loadChildren: () => import('./components/offers/offers-routing.module')
     .then(m => m.OffersRoutingModule)},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'shoudLogin', component: LoginMessagePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }