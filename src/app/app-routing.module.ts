import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  { path: '', component: HomepageComponent }, // Route for homepage
  { path: 'search', component: SearchComponent },
  {path: 'booking', component: BookingComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'itinerary', component: ItineraryComponent},
  {path: 'reviews', component: ReviewComponent},
  {path: 'login', component: LoginComponent},
  {path:'register',component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
