import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from '../models/plan';
import { Detail } from '../models/user/detail';
import { DetailService } from '../service/detail.service';
import { PlanService } from '../service/plan.service';

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.css'],
})
export class PlanPageComponent implements OnInit {
  detail: Detail;
  id: any;
  allPlans: any = [
    'Comprehensive plan',
    'Standard plan',
    'Premium plan',
    'Third party plan',
  ];
  plansByType: any;
  constructor(
    private detailService: DetailService,
    private planService: PlanService,
    private aRouter: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.id = this.aRouter.snapshot.paramMap.get('id');
    await this.detailService.getDetailById(this.id).subscribe((res) => {
      this.detail = res;
    });
    await this.planService.getPlans().subscribe((res) => {
      this.plansByType = res.filter((plan) => plan.type == this.detail.type);
    });
  }
}
