import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { Payment } from 'src/app/models/purchase/payment';
import { Purchase } from 'src/app/models/purchase/purchase';
import { PlanService } from 'src/app/service/plan.service';
import { PaymentService } from 'src/app/service/purchase/payment.service';
import { PurchaseService } from 'src/app/service/purchase/purchase.service';

@Component({
  selector: 'app-travel-checkout',
  templateUrl: './travel-checkout.component.html',
  styleUrls: ['./travel-checkout.component.css'],
})
export class TravelCheckoutComponent implements OnInit {
  userDetails: any;
  plan_id: number;
  planDetails: Plan;
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
    private aRouter: ActivatedRoute,
    private planService: PlanService,
    private purchaseService: PurchaseService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // check if user is logged in and get user details
    this.userDetails = localStorage.getItem('token');
    this.userDetails = JSON.parse(this.userDetails);

    // get plan id from url
    this.plan_id = this.aRouter.snapshot.params['plan_id'];

    // get plan details by id
    this.planService.getPlanById(this.plan_id).subscribe((data) => {
      this.planDetails = data;
      this.purchase.plan_id = Number(this.plan_id);
    });
  }

  checkout() {
    // add purchase details to purchase object
    this.purchase.dop = new Date();
    this.purchase.end_date = new Date(
      this.purchase.dop.getFullYear() + 1,
      this.purchase.dop.getMonth(),
      this.purchase.dop.getDate()
    );
    this.purchase.status = 0;
    this.purchase.detail_id = 0;

    // add purchase details to database
    this.purchaseService.createPurchase(this.purchase).subscribe((data) => {
      this.payment.user_id = Number(this.userDetails.user_id);
      this.payment.purchase_id = data.id;
      this.payment.date = new Date();

      // create payment for purchase
      this.paymentService.createPayment(this.payment).subscribe(() => {
        this.router.navigate(['/profile/user']);
      });
    });
  }
}
