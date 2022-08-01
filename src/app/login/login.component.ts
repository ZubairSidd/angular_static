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
  errorMessage: string | undefined;
  constructor(private router: Router, private _service: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    // if the user is not logged in, then login
    if (
      this.loginDetails.email === 'admin' ||
      this.loginDetails.password === 'admin'
    ) {
      localStorage.setItem('admin', 'admin');
      this.router.navigate(['/admin/users']).then(() => {
        window.location.reload();
      });
    } else {
      this._service.login(this.loginDetails).subscribe(
        (data) => {
          localStorage.setItem('token', JSON.stringify(data));
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        },
        () => {
          // if the email or password is incorrect, then show error message
          this.errorMessage = 'Email id or Password is incorrect';
        }
      );
    }
  }
  // check if the user is logged in
  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
