import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentMethod: string = 'card'; // Default to card payment
  paymentDetails = {
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    gcashNumber: ''
  };

  constructor(private paymentService: PaymentService) {}

  onPay() {
    if (this.paymentMethod === 'card') {
      if (this.isCardPaymentValid()) {
        this.paymentService.processCardPayment(this.paymentDetails).subscribe(response => {
          if (response.success) {
            console.log('Card payment successful');
          } else {
            console.log('Card payment failed');
          }
        });
      } else {
        console.log('Please fill out all fields for card payment.');
      }
    } else if (this.paymentMethod === 'gcash') {
      if (this.isGCashPaymentValid()) {
        this.paymentService.processGCashPayment(this.paymentDetails.gcashNumber).subscribe(response => {
          if (response.success) {
            console.log('GCash payment successful');
          } else {
            console.log('GCash payment failed');
          }
        });
      } else {
        console.log('Please fill out the GCash number.');
      }
    }
  }

  isCardPaymentValid(): boolean {
    const { name, cardNumber, expirationDate, cvv } = this.paymentDetails;
    return name && cardNumber && expirationDate && cvv ? true : false;
  }

  isGCashPaymentValid(): boolean {
    return this.paymentDetails.gcashNumber ? true : false;
  }
}

