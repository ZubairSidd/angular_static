import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userViewModel } from '../models/viewModels/userViewModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://localhost:44397/api/user';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.url}/getallusers`);
  }
  registerUser(user: userViewModel) {
    return this.http.post(`${this.url}/register`, user);
  }
}
