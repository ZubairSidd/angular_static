import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/user/login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginDetails: Login = {
    email: '',
    password: '',
  };
  errorMessage: string | null;
  constructor(private router: Router, private _service: AuthService) {}

  ngOnInit(): void {}

  async onSubmit() {
    this._service.login(this.loginDetails).subscribe(
      async (data) => {
        await localStorage.setItem('token', JSON.stringify(data));
        await this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      (err) => {
        this.errorMessage = 'Email id or Password is incorrect';
      }
    );

    // window.localStorage.setItem(
    //   'userDetails',
    //   JSON.stringify(this.loginDetails)
    // );
    // this.router.navigate(['']).then(() => {
    //   window.location.reload();
    // });
  }
  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
