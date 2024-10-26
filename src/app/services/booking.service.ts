import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingUrl = 'https://api.example.com/bookings'; // Replace with your API

  constructor(private http: HttpClient) {}

  bookTravel(bookingDetails: any): Observable<any> {
    return this.http.post<any>(this.bookingUrl, bookingDetails);
  }
}