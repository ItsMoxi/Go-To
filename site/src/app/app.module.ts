import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapPageComponent } from './map-page/map-page.component';
import { PaymentComponent } from './payment/payment.component';
import { ChatComponent } from './chat/chat.component';
import { FloatComponent } from './float/float.component';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    PaymentComponent,
    ChatComponent,
    FloatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
