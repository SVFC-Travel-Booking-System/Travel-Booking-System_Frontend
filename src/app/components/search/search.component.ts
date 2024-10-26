import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css' ] // Corrected from 'styleUrl' to 'styleUrls'
})
export class SearchComponent {
  destination: string = '';
  results: any[] = [];
  loading: boolean = false; // To manage loading state
  errorMessage: string | null = null; // To store any error messages

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.loading = true; // Start loading state
    this.errorMessage = null; // Reset any previous error messages

    this.searchService.getTravelOptions(this.destination).subscribe({
      next: (data) => {
        this.results = data; // Assign the fetched data to results
        this.loading = false; // End loading state
      },
      error: (error) => {
        console.error('Error fetching travel options:', error);
        this.errorMessage = 'Error fetching travel options. Please try again.'; // Set error message
        this.loading = false; // End loading state
      }
    });
  }

  // Define the 'book' method to handle booking logic
  book(result: any) {
    console.log('Booking travel to:', result.name);
    // Add additional booking logic here, such as redirecting to the booking page
    // or making an API call to handle the booking.
  }
}
