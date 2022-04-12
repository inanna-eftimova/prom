import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { MyProfilePageComponent } from '../landing/my-profile-page/my-profile-page.component';

const routes: Routes = [
  {path: '', children: [
     {path: 'create', component: CreateFormComponent},
     {path: 'details/:id', component: DetailsPageComponent},
     {path: 'details/:id/edit', component: EditFormComponent},
     {path: '**', component: MyProfilePageComponent},
  ], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OffersRoutingModule { }