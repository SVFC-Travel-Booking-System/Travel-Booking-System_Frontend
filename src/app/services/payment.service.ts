import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'https://example-payment-api.com'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  // Process credit/debit card payment
  processCardPayment(paymentDetails: any): Observable<any> {
    const url = `${this.apiUrl}/process-card-payment`;
    return this.http.post(url, paymentDetails)
      .pipe(
        catchError(this.handleError('processCardPayment', { success: false }))
      );
  }

  // Process GCash payment
  processGCashPayment(gcashNumber: string): Observable<any> {
    const url = `${this.apiUrl}/process-gcash-payment`;
    return this.http.post(url, { gcashNumber })
      .pipe(
        catchError(this.handleError('processGCashPayment', { success: false }))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

