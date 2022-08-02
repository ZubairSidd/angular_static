import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  url: string = 'https://localhost:44397/api/plan';
  constructor(private http: HttpClient) {}

  // get all plans
  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.url}/GetAllPlans`);
  }
  // get plan by id
  getPlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(`${this.url}/getplan/${id}`);
  }
}
