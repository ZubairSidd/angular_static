import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  url: string = 'https://localhost:44397/api/detail';
  constructor(private http: HttpClient) {}

  getDetails() {
    return this.http.get(`${this.url}/GetAllDetails`);
  }
  registerDetail(detail: any) {
    return this.http.post(`${this.url}/register`, detail);
  }
}
