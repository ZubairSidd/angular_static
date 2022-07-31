import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Renewal } from 'src/app/models/purchase/renewal';

@Injectable({
  providedIn: 'root',
})
export class RenewalService {
  url: string = 'https://localhost:44397/api/renewal';
  constructor(private http: HttpClient) {}

  // get all renewals
  getRenewals(): Observable<Renewal[]> {
    return this.http.get<Renewal[]>(`${this.url}/GetAllRenewals`);
  }

  // register renewal
  registerRenewal(renewal: Renewal): Observable<Renewal> {
    return this.http.post<Renewal>(`${this.url}/Register`, renewal);
  }
}
