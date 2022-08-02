import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css'],
})
export class PremiumComponent implements OnInit {
  // random number between 2000 to 4000 for plans
  price: number = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
  constructor() {}

  ngOnInit(): void {}
}
