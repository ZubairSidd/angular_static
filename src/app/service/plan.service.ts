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

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.url}/GetAllPlans`);
  }
}
