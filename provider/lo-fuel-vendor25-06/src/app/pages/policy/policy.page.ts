import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.page.html',
  styleUrls: ['./policy.page.scss'],
})
export class PolicyPage implements OnInit {
  data: any;
  policyData: any;
  err: any = {};
  constructor(private api: ApiService,private util:UtilService) {
    this.util.presentLoading();
    this.api.getData('privacy').subscribe((data: any) => {
      if (data.success) {
        this.data = data.data;
        this.util.dismissLoading();
      }
    }, err => {
      this.err = err.error.errors || err.error.message;
      this.util.dismissLoading();
    })
  }
  ngOnInit() {
  }

}
