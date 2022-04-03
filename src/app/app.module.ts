import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { LandingModule } from './components/landing/landing.module';
import { OffersModule } from './components/offers/offers.module';
import { SharedRoutingModule } from './components/shared/shared-routing..module';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedRoutingModule,
    SharedModule,
    AuthenticationModule,
    LandingModule,
    OffersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
