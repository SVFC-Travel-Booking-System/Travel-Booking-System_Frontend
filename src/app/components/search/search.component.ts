import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  destination: string = '';
  results: any[] = [];

  constructor(private searchService: SearchService) {}

  onSearch() {

    this.searchService.getTravelOptions(this.destination).subscribe(data => {
      this.results = data;
    }, (error) => {
      console.error('Error fetching travel options:', error);

    });
  }
// Define the 'book' method to handle booking logic
book(result: any) {
  console.log('Booking travel to:', result.name);
  // Add additional booking logic here, such as redirecting to the booking page
  // or making an API call to handle the booking.
}

}
