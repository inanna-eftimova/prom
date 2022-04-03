import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { OfferComponent } from './offer/offer.component';



@NgModule({
  declarations: [
    EditFormComponent,
    CreateFormComponent,
    OfferComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateFormComponent,
    EditFormComponent,
    OfferComponent
  ]
})
export class OffersModule { }
