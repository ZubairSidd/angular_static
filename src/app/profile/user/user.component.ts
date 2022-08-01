import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { Purchase } from 'src/app/models/purchase/purchase';
import { Detail } from 'src/app/models/user/detail';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/service/auth.service';
import { DetailService } from 'src/app/service/detail.service';
import { PlanService } from 'src/app/service/plan.service';
import { PurchaseService } from 'src/app/service/purchase/purchase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userDetails: any;
  vehicleDetails: Detail[];
  planDetails: Plan[];
  purchaseDetails: Purchase[];
  address: string;

  constructor(
    private authService: AuthService,
    private detailSerive: DetailService,
    private planService: PlanService,
    private purchaseService: PurchaseService
  ) {}

  ngOnInit(): void {
    if (this.authService.checkLogin()) {
      this.userDetails = localStorage.getItem('token');
      this.userDetails = JSON.parse(this.userDetails);
    }

    this.detailSerive.getDetails().subscribe((data) => {
      this.vehicleDetails = data.filter(
        (d) => Number(d.user_id) == Number(this.userDetails.user_id)
      );
      this.address = this.vehicleDetails[0].address;
    });

    this.purchaseService.getPurchases().subscribe((data) => {
      this.purchaseDetails = data;
    });

    this.planService.getPlans().subscribe((data) => {
      this.planDetails = data;
    });
  }

  isExpired(date: Date) {
    return new Date(date).valueOf() < new Date().valueOf();
  }
}
