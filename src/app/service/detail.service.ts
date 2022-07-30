import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from '../models/user/detail';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  url: string = 'https://localhost:44397/api/detail';
  constructor(private http: HttpClient) {}

  getDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this.url}/GetAllDetails`);
  }
  getDetailById(id: number): Observable<Detail> {
    return this.http.get<Detail>(`${this.url}/getdetail/${id}`);
  }
  registerDetail(detail: any) {
    return this.http.post(`${this.url}/register`, detail);
  }
}
