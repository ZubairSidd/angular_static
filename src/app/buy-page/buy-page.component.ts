import { Component, OnInit } from '@angular/core';
import { Detail } from '../models/user/detail';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css'],
})
export class BuyPageComponent implements OnInit {
  detail: Detail;
  allDetails: any;
  constructor() {}

  ngOnInit(): void {
    this.allDetails = localStorage.getItem('token');
    this.allDetails = JSON.parse(this.allDetails);
    console.log(`USER ID: ${this.allDetails.user_id}`);
  }
  onSubmit(data: any) {
    console.log(this.detail);
  }
  onSelect(data: any) {
    console.log(data);
  }
}
