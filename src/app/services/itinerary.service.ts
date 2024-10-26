import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

// Define the Itinerary interface for better type safety
export interface Itinerary {
  destination: string;
  date: string;
  details?: string; // Optional property for additional information
}

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private itineraryUrl = 'https://api.example.com/itineraries'; // Replace with your API

  constructor(private http: HttpClient) {}

  getUserItineraries(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>(this.itineraryUrl).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // Log the error
    return throwError(() => new Error('Failed to fetch itineraries, please try again later.')); // Return a user-friendly error message
  }
}
