import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { Purchase } from 'src/app/models/purchase/purchase';
import { PlanService } from 'src/app/service/plan.service';
import { PurchaseService } from 'src/app/service/purchase/purchase.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent implements OnInit {
  allPlans: Plan[];
  allPurchases: Purchase[];
  constructor(
    private planService: PlanService,
    private purchaseService: PurchaseService
  ) {}

  ngOnInit(): void {
    this.planService.getPlans().subscribe((data) => {
      this.allPlans = data;
    });
    this.purchaseService.getPurchases().subscribe((data) => {
      this.allPurchases = data;
    });
  }
}
