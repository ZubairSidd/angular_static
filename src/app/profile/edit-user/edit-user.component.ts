import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userDetails: any;
  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router
  ) {}
  isLogin: boolean = this.auth.checkLogin();

  ngOnInit(): void {
    // get user details from local storage
    this.userDetails = localStorage.getItem('token');
    // convert the user details to json
    this.userDetails = JSON.parse(this.userDetails);
  }

  onSubmit() {
    // updating user details in database
    this.userService
      .updateUser(this.userDetails.user_id, this.userDetails)
      .subscribe((data) => {
        // set new user details in local storage
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigate(['/profile/user']).then(() => {
          window.location.reload();
        });
      });
  }
}
