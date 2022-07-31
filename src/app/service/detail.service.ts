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

  // get all vehicle details
  getDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this.url}/GetAllDetails`);
  }
  // get detail by id
  getDetailById(id: number): Observable<Detail> {
    return this.http.get<Detail>(`${this.url}/getdetail/${id}`);
  }
  // register vehicle detail
  registerDetail(detail: Detail): Observable<Detail> {
    return this.http.post<Detail>(`${this.url}/register`, detail);
  }
}
