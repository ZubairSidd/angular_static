import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/models/user/detail';
import { DetailService } from 'src/app/service/detail.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css'],
})
export class EditDetailComponent implements OnInit {
  detail_id: number;
  detail: Detail;
  constructor(
    private detailService: DetailService,
    private aRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get the detail_id from the url
    this.detail_id = this.aRouter.snapshot.params['detail_id'];
    // get the detail from the database using the detail_id
    this.detailService.getDetailById(this.detail_id).subscribe((Data) => {
      this.detail = Data;
    });
  }

  onSubmit() {
    // update the detail in the database using the detail_id and the detail object
    this.detailService
      .updateDetail(this.detail_id, this.detail)
      .subscribe(() => {
        this.router.navigate(['/profile/user']).then(() => {
          window.location.reload();
        });
      });
  }
}
