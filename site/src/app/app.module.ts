import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SplashComponent } from './splash/splash.component';

import { MapPageComponent } from './map-page/map-page.component';
import { PaymentComponent } from './payment/payment.component';
import { ChatComponent } from './chat/chat.component';
import { FloatComponent } from './float/float.component';
import { AgmCoreModule } from '@agm/core'


@NgModule({
  declarations: [
    AppComponent,

    SplashComponent,

    MapPageComponent,
    PaymentComponent,
    ChatComponent,
    FloatComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbuAlBevvxD1-4ihIDgawx8ReyEgQ1PXQ',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
