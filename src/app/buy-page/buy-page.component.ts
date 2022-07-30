import { Component, OnInit } from '@angular/core';
import { Detail } from '../models/user/detail';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css'],
})
export class BuyPageComponent implements OnInit {
  detail: Detail;

  constructor() {}

  ngOnInit(): void {}
  onSubmit(data: any) {
    console.log(this.detail);
  }
  onSelect(data: any) {
    console.log(data);
  }
}
