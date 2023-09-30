import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';
import { PaymentComponent } from './payment/payment.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:'find',component:MapPageComponent},
  {path:'payment',component:PaymentComponent},
  {path:'chat',component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
