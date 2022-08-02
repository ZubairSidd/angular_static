import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { Payment } from 'src/app/models/purchase/payment';
import { Purchase } from 'src/app/models/purchase/purchase';
import { Detail } from 'src/app/models/user/detail';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/service/auth.service';
import { DetailService } from 'src/app/service/detail.service';
import { PlanService } from 'src/app/service/plan.service';
import { PaymentService } from 'src/app/service/purchase/payment.service';
import { PurchaseService } from 'src/app/service/purchase/purchase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userDetails: any;
  vehicleDetails: Detail[];
  planDetails: Plan[];
  purchaseDetails: Purchase[];
  paymentDetails: Payment[];
  address: string;
  plan_detail: any = [
    'Gold Plan',
    'Premium Plan',
    'Platinum Plan',
    'Standard Plan',
  ];

  constructor(
    private authService: AuthService,
    private detailSerive: DetailService,
    private planService: PlanService,
    private purchaseService: PurchaseService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    // check if user is logged in and get user details
    if (this.authService.checkLogin()) {
      this.userDetails = localStorage.getItem('token');
      this.userDetails = JSON.parse(this.userDetails);
    }

    // get vehicle details from database and store in vehicleDetails
    this.detailSerive.getDetails().subscribe((data) => {
      this.vehicleDetails = data.filter(
        (d) => Number(d.user_id) == Number(this.userDetails.user_id)
      );
      this.address = this.vehicleDetails[0].address;
    });

    // get purchase details from database and store in purchaseDetails
    this.purchaseService.getPurchases().subscribe((data) => {
      this.purchaseDetails = data;
    });

    // get plan details from database and store in planDetails
    this.planService.getPlans().subscribe((data) => {
      this.planDetails = data;
    });

    // get all payment details from database and store in paymentDetails
    this.paymentService.getPayments().subscribe((data) => {
      this.paymentDetails = data;
    });
  }

  // check if policy is expired
  isExpired(date: Date) {
    return new Date(date).valueOf() < new Date().valueOf();
  }
}
