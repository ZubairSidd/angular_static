import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/purchase/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  url: string = 'https://localhost:44397/api/payment';
  constructor(private http: HttpClient) {}

  // get all payments
  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.url}/getallpayments`);
  }
  // get payment details by id
  getPaymentById(payment_id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.url}/GetPayment/${payment_id}`);
  }
  // create payment
  createPayment(payment: Payment) {
    return this.http.post(`${this.url}/register`, payment);
  }
}
