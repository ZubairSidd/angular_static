import { Component, OnInit } from '@angular/core';
import { Plan } from '../models/plan';
import { PlanService } from '../service/plan.service';

@Component({
  selector: 'app-travel-plan',
  templateUrl: './travel-plan.component.html',
  styleUrls: ['./travel-plan.component.css'],
})
export class TravelPlanComponent implements OnInit {
  allPlans: Plan[];
  plan_detail: any = [
    'Gold Plan',
    'Premium Plan',
    'Platinum Plan',
    'Standard Plan',
  ];
  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    // get all the plans from the database of type Travel Plan
    this.planService.getPlans().subscribe((data) => {
      this.allPlans = data.filter((d) => d.type == 'Travel');
      console.log(this.allPlans);
    });
  }
}
