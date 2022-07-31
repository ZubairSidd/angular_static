import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../models/user/detail';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css'],
})
export class BuyPageComponent implements OnInit {
  data: any;
  detail: Detail = {
    user_id: 0,
    manufacturer: '',
    model: '',
    purchase_date: new Date(),
    reg_number: undefined,
    engine_number: undefined,
    driving_license: '',
    chasis_number: '',
    address: '',
    type: '',
  };
  vehicleDetails: Detail[] | null;
  isVehicle: boolean = false;
  userDetail: any;
  constructor(private detailService: DetailService, private router: Router) {}

  ngOnInit(): void {
    this.userDetail = localStorage.getItem('token');
    this.userDetail = JSON.parse(this.userDetail);
    this.detailService.getDetails().subscribe((res) => {
      this.vehicleDetails = res.filter(
        (detail) => detail.user_id === this.userDetail.user_id
      );
      if (this.vehicleDetails.length > 0) {
        this.isVehicle = true;
      }
    });
  }
  onSubmit() {
    this.detail.user_id = this.userDetail.user_id;
    this.detailService.registerDetail(this.detail).subscribe((res) => {
      this.data = res;
      this.router.navigate([`/buy-page/${this.data.id}/plan-page`]).then(() => {
        window.location.reload();
      });
    });
  }
  availableVehicle(id: any) {
    this.router.navigate([`/buy-page/${id}/plan-page`]).then(() => {
      window.location.reload();
    });
  }
}
