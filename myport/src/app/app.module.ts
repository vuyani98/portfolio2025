import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import {MatSliderModule} from '@angular/material/slider';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    MatSliderModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
