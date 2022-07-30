import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userDetails: any | null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.checkLogin()) {
      this.userDetails = window.localStorage.getItem('token');
      this.userDetails = JSON.parse(this.userDetails);
    }
    // console.log(this.userDetails);
    console.log(JSON.parse(this.userDetails));
  }

  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  logout() {
    window.localStorage.clear();
    this.userDetails = null;
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
