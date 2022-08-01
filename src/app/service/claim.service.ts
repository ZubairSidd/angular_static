import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  url: string = 'https://localhost:44397/api/claim';
  constructor(private http: HttpClient) {}

  // get all claims from the API
  getClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(`${this.url}/getallclaims`);
  }
  // get claim details by id
  getClaimById(claim_id: number): Observable<Claim> {
    return this.http.get<Claim>(`${this.url}/GetClaim/${claim_id}`);
  }
  // update claim details in the API
  updateClaim(claim_id: number, claim: Claim): Observable<Claim> {
    return this.http.put<Claim>(`${this.url}/update/${claim_id}`, claim);
  }
  // add claim details in the API
  addClaim(claim: Claim): Observable<Claim> {
    return this.http.post<Claim>(`${this.url}/Register`, claim);
  }
}
