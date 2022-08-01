import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
import { Payment } from 'src/app/models/purchase/payment';
import { Purchase } from 'src/app/models/purchase/purchase';
import { Renewal } from 'src/app/models/purchase/renewal';
import { Detail } from 'src/app/models/user/detail';
import { DetailService } from 'src/app/service/detail.service';
import { PlanService } from 'src/app/service/plan.service';
import { PaymentService } from 'src/app/service/purchase/payment.service';
import { PurchaseService } from 'src/app/service/purchase/purchase.service';
import { RenewalService } from 'src/app/service/purchase/renewal.service';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css'],
})
export class RenewComponent implements OnInit {
  userDetails: any;
  planDetails: Plan;
  vehicleDetails: Detail;
  detail_id: number;
  plan_id: number;
  purchase_id: number;
  renewal: Renewal = {
    user_id: 0,
    purchase_id: 0,
  };
  allPlans: any = [
    'Comprehensive plan',
    'Standard plan',
    'Premium plan',
    'Third party plan',
  ];
  purchase: Purchase;
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
    private renewalService: RenewalService,
    private aRouter: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    // get detail_id from url
    this.detail_id = this.aRouter.snapshot.params['detail_id'];
    // get plan_id from url
    this.plan_id = this.aRouter.snapshot.params['plan_id'];
    // get purchase_id from url
    this.purchase_id = this.aRouter.snapshot.params['purchase_id'];

    // get user details from localStorage if user is logged in
    this.userDetails = localStorage.getItem('token');

    // the userDetails is a string, so we need to parse it to JSON
    this.userDetails = JSON.parse(this.userDetails);

    // get plan details by id
    await this.planService.getPlanById(this.plan_id).subscribe((data) => {
      this.planDetails = data;
    });

    // get vehicle details by detail_id
    await this.detailService.getDetailById(this.detail_id).subscribe((data) => {
      this.vehicleDetails = data;
    });

    // get purchase details by detail_id
    await this.purchaseService
      .getPurchaseById(this.purchase_id)
      .subscribe((data) => {
        this.purchase = data;
      });
  }
  checkout() {
    this.purchase.dop = new Date();
    this.purchase.end_date = new Date(
      this.purchase.dop.getFullYear() + 1,
      this.purchase.dop.getMonth(),
      this.purchase.dop.getDate()
    );

    // update purchase details
    this.purchaseService
      .updatePurchase(Number(this.purchase.id), this.purchase)
      .subscribe(() => {
        this.renewal.user_id = Number(this.vehicleDetails.user_id);
        this.renewal.purchase_id = Number(this.purchase.id);
        // create new renewal
        this.renewalService.registerRenewal(this.renewal).subscribe(() => {
          this.payment.user_id = Number(this.vehicleDetails.user_id);
          this.payment.purchase_id = Number(this.purchase.id);
          this.payment.date = new Date();
          // create new payment
          this.paymentService.createPayment(this.payment).subscribe(() => {
            this.router.navigate(['/profile/user']);
          });
        });
      });
  }
}
