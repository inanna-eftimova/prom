import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { OfferComponent } from './offer/offer.component';
import { RouterModule } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditFormComponent,
    CreateFormComponent,
    OfferComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateFormComponent,
    EditFormComponent,
    OfferComponent,
    DetailsPageComponent
  ]
})
export class OffersModule { }
