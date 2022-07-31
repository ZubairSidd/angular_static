import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
