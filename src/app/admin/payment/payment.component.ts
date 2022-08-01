import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/purchase/payment';
import { Purchase } from 'src/app/models/purchase/purchase';
import { PaymentService } from 'src/app/service/purchase/payment.service';
import { PurchaseService } from 'src/app/service/purchase/purchase.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  allPayments: Payment[];
  allPurchases: Purchase[];
  constructor(
    private paymentService: PaymentService,
    private purchaseService: PurchaseService
  ) {}

  ngOnInit(): void {
    this.paymentService.getPayments().subscribe((data) => {
      this.allPayments = data;
    });
    this.purchaseService.getPurchases().subscribe((data) => {
      this.allPurchases = data;
    });
  }
}
