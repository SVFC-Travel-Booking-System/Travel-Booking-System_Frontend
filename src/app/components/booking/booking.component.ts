import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  bookingDetails = {
    name: '',
    travelOptionId: null,
    date: ''
  };

  constructor(private bookingService: BookingService) {}

  onBook() {
    this.bookingService.bookTravel(this.bookingDetails).subscribe(response => {
      alert('Booking confirmed!');
    });
  }

}
