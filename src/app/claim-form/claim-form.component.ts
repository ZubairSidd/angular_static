import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Claim } from '../models/claim';
import { Payment } from '../models/purchase/payment';
import { Purchase } from '../models/purchase/purchase';
import { ClaimService } from '../service/claim.service';
import { PaymentService } from '../service/purchase/payment.service';
import { PurchaseService } from 'src/app/service/purchase/purchase.service';
import { PlanService } from '../service/plan.service';
import { Plan } from '../models/plan';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.css'],
})
export class ClaimFormComponent implements OnInit {
  userDetails: any;
  claimDetails: Claim = {
    user_id: 0,
    pay_id: 0,
    date: new Date(),
    reason: '',
    amount: 0,
    status: 0,
  };
  purchase_id: number;
  purchaseDetails: Purchase;
  paymentDetails: Payment[];
  lastPayment: Payment;
  planDetails: Plan;
  plan_id: number;
  constructor(
    private claimService: ClaimService,
    private aRouter: ActivatedRoute,
    private paymentService: PaymentService,
    private planService: PlanService,
    private purchaseService: PurchaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get user details from localStorage if user is logged in
    this.userDetails = localStorage.getItem('token');
    // the userDetails is a string, so we need to parse it to JSON
    this.userDetails = JSON.parse(this.userDetails);
    // get purchase_id from url
    this.purchase_id = this.aRouter.snapshot.params['purchase_id'];

    // get payment details from API based on purchase_id
    this.paymentService.getPayments().subscribe(async (data) => {
      // filter payment details based on purchase_id
      this.paymentDetails = await data.filter(
        (p) => p.purchase_id == Number(this.purchase_id)
      );
      // get last payment details
      this.lastPayment = this.paymentDetails[this.paymentDetails.length - 1];
    });

    // get purchase details from API based on purchase_id
    this.purchaseService
      .getPurchaseById(this.purchase_id)
      .subscribe(async (data) => {
        this.purchaseDetails = await data;

        // get plan details from API based on plan_id form purchase details
        this.planService
          .getPlanById(this.purchaseDetails.plan_id)
          .subscribe((data) => {
            this.planDetails = data;
          });
      });
  }
  onSubmit(data: any) {
    // updating purchase details staus to show claim requested
    this.purchaseDetails.status = 1;

    this.claimDetails.user_id = Number(this.userDetails.user_id);
    this.claimDetails.pay_id = Number(this.lastPayment.pay_id);
    this.claimDetails.date = new Date();
    this.claimDetails.reason = data.reason;
    this.claimDetails.amount = this.planDetails.amount;
    this.claimDetails.status = 1;
    console.log(this.claimDetails);

    this.purchaseService
      .updatePurchase(this.purchase_id, this.purchaseDetails)
      .subscribe(() => {
        this.claimService.addClaim(this.claimDetails).subscribe(() => {
          this.router.navigate(['/profile/user']);
        }),
          (err: any) => {
            alert(err.message);
          };
      });
  }
}
