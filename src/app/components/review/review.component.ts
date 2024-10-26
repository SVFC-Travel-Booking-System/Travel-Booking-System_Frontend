import { Component } from '@angular/core';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'] // Add a style file if necessary
})
export class ReviewComponent {
  review = {
    rating: 0,
    comment: ''
  };
  successMessage: string | null = null; // To hold success message
  errorMessage: string | null = null; // To hold error message

  constructor(private reviewService: ReviewService) {}

  submitReview() {
    // Reset messages
    this.successMessage = null;
    this.errorMessage = null;

    // Basic validation (example)
    if (this.review.rating < 1 || this.review.rating > 5) {
      this.errorMessage = 'Please provide a rating between 1 and 5.';
      return;
    }
    
    if (!this.review.comment.trim()) {
      this.errorMessage = 'Please provide a comment.';
      return;
    }

    // Simulate a successful review submission
    // In a real application, you would send this data to your backend
    this.successMessage = 'Thank you for your review!';

    // Reset the form
    this.review = { rating: 0, comment: '' };
  }
}
