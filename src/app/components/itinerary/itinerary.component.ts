import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';

// Define the Itinerary interface for better type safety
interface Itinerary {
  destination: string;
  date: string;
  details?: string; // Optional property
}

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css'] // Make sure to add the stylesheet
})
export class ItineraryComponent implements OnInit {
  itineraries: Itinerary[] = []; // Use the Itinerary interface

  constructor(private itineraryService: ItineraryService) {}

  ngOnInit() {
    this.loadUserItineraries();
  }

  // Separate method to load itineraries
  loadUserItineraries() {
    this.itineraryService.getUserItineraries().subscribe(
      (data: Itinerary[]) => {
        this.itineraries = data;
      },
      error => {
        console.error('Error fetching itineraries:', error); // Improved error handling
      }
    );
  }
}

