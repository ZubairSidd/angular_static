import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/service/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
})
export class ClaimComponent implements OnInit {
  allClaims: Claim[];
  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.claimService.getClaims().subscribe((data) => {
      this.allClaims = data;
    });
  }
}
