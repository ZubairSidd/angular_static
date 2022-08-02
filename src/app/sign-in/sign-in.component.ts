import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  errorMessage: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    // register the user in database
    this.userService.registerUser(data).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      // if error, then show the error message
      (error: any) => {
        this.errorMessage = error.error;
      }
    );
  }
  // check if the user is logged in
  isLogin: boolean = this.auth.checkLogin();
}
