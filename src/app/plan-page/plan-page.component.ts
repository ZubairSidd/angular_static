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
  detail_id: any;
  allPlans: any = [
    'Comprehensive plan',
    'Standard plan',
    'Premium plan',
    'Third party plan',
  ];
  plansByType: Plan[];
  constructor(
    private detailService: DetailService,
    private planService: PlanService,
    private aRouter: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    // get detail_id from url
    this.detail_id = this.aRouter.snapshot.paramMap.get('detail_id');

    // get detail by id
    await this.detailService.getDetailById(this.detail_id).subscribe((res) => {
      this.detail = res;
    });

    // get all plans by type
    await this.planService.getPlans().subscribe((res) => {
      this.plansByType = res.filter((plan) => plan.type == this.detail.type);
    });
  }
}
