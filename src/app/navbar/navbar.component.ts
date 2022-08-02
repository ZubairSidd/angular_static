import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userDetails: any;
  constructor(private router: Router, private auth: AuthService) {}
  // check if user logged in is admin
  isAdmin: boolean = this.auth.isAdmin();

  ngOnInit(): void {
    // if the user is logged in, then get the user details
    if (this.checkLogin()) {
      this.userDetails = window.localStorage.getItem('token');
      this.userDetails = JSON.parse(this.userDetails);
    }
    // console.log(this.userDetails);
    console.log(JSON.parse(this.userDetails));
  }

  // check if the user is logged in
  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  // logout the user and clear the localStorage
  logout() {
    window.localStorage.clear();
    this.userDetails = null;
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
  // logout function for admin and clear the localStorage
  logoutAdmin() {
    window.localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
