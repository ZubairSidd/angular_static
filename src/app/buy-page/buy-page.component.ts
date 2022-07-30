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
  userDetail: any;
  constructor(private detailService: DetailService, private router: Router) {}

  ngOnInit(): void {
    this.userDetail = localStorage.getItem('token');
    this.userDetail = JSON.parse(this.userDetail);
  }
  onSubmit() {
    this.detail.user_id = this.userDetail.user_id;
    this.detailService.registerDetail(this.detail).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}
