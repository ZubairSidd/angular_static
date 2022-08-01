import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../models/user/forgotPassword';
import { Login } from '../models/user/login';
import { User } from '../models/user/user';
import { userViewModel } from '../models/viewModels/userViewModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://localhost:44397/api/user';
  constructor(private http: HttpClient) {}

  // get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/getallusers`);
  }
  // register user
  registerUser(user: userViewModel) {
    return this.http.post(`${this.url}/register`, user);
  }
  // forget password
  forgetPassword(data: ForgotPassword) {
    return this.http.post(`${this.url}/ForgotPassword`, data);
  }
  // update user details
  updateUser(user_id: number, user: userViewModel) {
    return this.http.put(`${this.url}/update/${user_id}`, user);
  }
}
