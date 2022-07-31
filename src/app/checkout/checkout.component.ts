import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../models/plan';
import { Payment } from '../models/purchase/payment';
import { Purchase } from '../models/purchase/purchase';
import { Detail } from '../models/user/detail';
import { DetailService } from '../service/detail.service';
import { PlanService } from '../service/plan.service';
import { PaymentService } from '../service/purchase/payment.service';
import { PurchaseService } from '../service/purchase/purchase.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  userDetails: any;
  planDetails: Plan;
  vehicleDetails: Detail;
  detail_id: number;
  plan_id: number;
  allPlans: any = [
    'Comprehensive plan',
    'Standard plan',
    'Premium plan',
    'Third party plan',
  ];
  purchase: Purchase = {
    detail_id: 0,
    plan_id: 0,
    dop: new Date(),
    end_date: new Date(),
    status: 0,
  };
  payment: Payment = {
    user_id: 0,
    date: new Date(),
    purchase_id: 0,
  };
  constructor(
    private detailService: DetailService,
    private planService: PlanService,
    private paymentService: PaymentService,
    private purchaseService: PurchaseService,
    private aRouter: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    // get detail_id from url
    this.detail_id = this.aRouter.snapshot.params['detail_id'];
    // get plan_id from url
    this.plan_id = this.aRouter.snapshot.params['plan_id'];

    // get user details from localStorage if user is logged in
    this.userDetails = localStorage.getItem('token');

    // the userDetails is a string, so we need to parse it to JSON
    this.userDetails = JSON.parse(this.userDetails);

    // get plan details by id
    await this.planService.getPlanById(this.plan_id).subscribe((data) => {
      this.planDetails = data;
      this.purchase.plan_id = Number(this.plan_id);
    });

    // get vehicle details by detail_id
    await this.detailService.getDetailById(this.detail_id).subscribe((data) => {
      this.vehicleDetails = data;
      this.purchase.detail_id = Number(this.detail_id);
    });
  }

  // function to checkout the insurance purchase
  checkout() {
    // add purchase details to purchase object
    this.purchase.dop = new Date();
    this.purchase.end_date = new Date(
      this.purchase.dop.getFullYear() + 1,
      this.purchase.dop.getMonth(),
      this.purchase.dop.getDate()
    );
    this.purchase.status = 0;

    // add purchase to database
    this.purchaseService.createPurchase(this.purchase).subscribe((data) => {
      // add payment details to payment object
      this.payment.user_id = Number(this.vehicleDetails.user_id);
      this.payment.purchase_id = data.id;
      this.payment.date = new Date();

      // add payment to database
      this.paymentService.createPayment(this.payment).subscribe((data) => {
        console.log(`Payment created: ${data}`);
        this.router.navigate(['/profile/user']);
      });
    });
  }
}
