import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/service/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  allPlans: Plan[];
  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    this.planService.getPlans().subscribe((data) => {
      this.allPlans = data;
    });
  }
}
