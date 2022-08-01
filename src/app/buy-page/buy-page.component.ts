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
  data: Detail;
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
    // get user details from localStorage if user is logged in
    this.userDetail = localStorage.getItem('token');
    // the userDetails is a string, so we need to parse it to JSON
    this.userDetail = JSON.parse(this.userDetail);
    // get vehicle details by user_id
    this.detailService.getDetails().subscribe((res) => {
      this.vehicleDetails = res.filter(
        (detail) => detail.user_id === this.userDetail.user_id
      );
      // if there is no vehicle, then hide the register vehicle section
      if (this.vehicleDetails.length > 0) {
        this.isVehicle = true;
      }
    });
  }
  // register vehicle details to database and redirect to plan page
  onSubmit() {
    this.detail.user_id = this.userDetail.user_id;
    this.detailService.registerDetail(this.detail).subscribe((res) => {
      this.data = res;
      this.router.navigate([`/buy-page/${this.data.id}/plan-page`]).then(() => {
        window.location.reload();
      });
    });
  }
  // redirect to plan page with detail_id if already registered
  availableVehicle(id: any) {
    this.router.navigate([`/buy-page/${id}/plan-page`]).then(() => {
      window.location.reload();
    });
  }
}
