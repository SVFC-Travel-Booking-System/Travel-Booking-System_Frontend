import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewUrl = 'https://api.example.com/reviews'; // Replace with your API

  constructor(private http: HttpClient) {}

  submitReview(review: any): Observable<any> {
    return this.http.post<any>(this.reviewUrl, review);
  }
}

