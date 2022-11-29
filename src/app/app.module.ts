import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './online/home/home.component';
import { HeaderComponent } from './online/header/header.component';
import { FooterComponent } from './online/footer/footer.component';
import { ServiceDemandeComponent } from './online/service-demande/service-demande.component';
import { HttpClientModule } from '@angular/common/http';
import { PostServiceOffComponent } from './online/user/post-service-off/post-service-off.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './online/user/profil/profil.component';
import { EditServiceOffComponent } from './online/user/edit-service-off/edit-service-off.component';
import { PostServiceDemComponent } from './online/user/post-service-dem/post-service-dem.component';
import { Error404Component } from './error404/error404.component';
import { MessagerieComponent } from './online/messagerie/messagerie.component';
import { EditProfilComponent } from './online/user/edit-profil/edit-profil.component';
import { EditServiceDemComponent } from './online/user/edit-service-dem/edit-service-dem.component';
import { ServiceOffertComponent } from './online/service-offert/service-offert.component';
import { LogInComponent } from './online/log-in/log-in.component';
import { SignUpComponent } from './online/sign-up/sign-up.component';
import { PricingComponent } from './online/pricing/pricing.component';
import { AboutComponent } from './online/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServiceDemandeComponent,
    PostServiceOffComponent,
    ProfilComponent,
    EditServiceOffComponent,
    PostServiceDemComponent,
    Error404Component,
    MessagerieComponent,
    EditProfilComponent,
    EditServiceDemComponent,
    ServiceOffertComponent,
    LogInComponent,
    SignUpComponent,
    PricingComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
