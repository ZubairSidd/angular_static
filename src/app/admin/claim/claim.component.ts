import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/models/claim';
import { Payment } from 'src/app/models/purchase/payment';
import { Purchase } from 'src/app/models/purchase/purchase';
import { User } from 'src/app/models/user/user';
import { ClaimService } from 'src/app/service/claim.service';
import { PaymentService } from 'src/app/service/purchase/payment.service';
import { PurchaseService } from 'src/app/service/purchase/purchase.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
})
export class ClaimComponent implements OnInit {
  allClaims: Claim[];
  allUsers: User[];
  purchaseDetails: Purchase;
  paymentDetails: Payment;
  claimDetails: Claim;
  constructor(
    private claimService: ClaimService,
    private userService: UserService,
    private purchaseService: PurchaseService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get all claims from the API
    this.claimService.getClaims().subscribe((data) => {
      this.allClaims = data;
    });
    // get all users from the API
    this.userService.getUsers().subscribe((data) => {
      this.allUsers = data;
    });
  }

  onClick(claim_no: any, pay_id: any): void {
    // get claim details from API based on claim_no
    this.claimService.getClaimById(Number(claim_no)).subscribe((data) => {
      this.claimDetails = data;
      this.claimDetails.status = 2;
      // update claim status in claim table
      this.claimService
        .updateClaim(claim_no, this.claimDetails)
        .subscribe((data) => {
          console.log(data);
        });
    });

    // get payment details from API based on pay_id
    this.paymentService.getPaymentById(pay_id).subscribe((data) => {
      this.paymentDetails = data;

      // get purchase details from API based on purchase_id in paymentDetails
      this.purchaseService
        .getPurchaseById(Number(this.paymentDetails.purchase_id))
        .subscribe((data) => {
          this.purchaseDetails = data;
          this.purchaseDetails.status = 2;
          // update claim status in purchase table
          this.purchaseService
            .updatePurchase(
              Number(this.purchaseDetails.id),
              this.purchaseDetails
            )
            .subscribe(() => {
              window.location.reload();
            });
        });
    });
  }
}
