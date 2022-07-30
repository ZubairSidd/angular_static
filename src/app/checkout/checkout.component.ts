import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../models/plan';
import { Detail } from '../models/user/detail';
import { User } from '../models/user/user';
import { DetailService } from '../service/detail.service';
import { PlanService } from '../service/plan.service';

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
  constructor(
    private detailService: DetailService,
    private planService: PlanService,
    private aRouter: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.detail_id = this.aRouter.snapshot.params['detail_id'];
    this.plan_id = this.aRouter.snapshot.params['plan_id'];
    this.userDetails = localStorage.getItem('token');
    this.userDetails = JSON.parse(this.userDetails);
    await this.planService.getPlanById(this.plan_id).subscribe((data) => {
      this.planDetails = data;
    });
    await this.detailService.getDetailById(this.detail_id).subscribe((data) => {
      this.vehicleDetails = data;
    });
  }
}
