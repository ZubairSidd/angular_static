import { Component, OnInit } from '@angular/core';
import { User } from '../models/user/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    console.log(data);
  }
}
