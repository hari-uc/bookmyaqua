import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-review",
  templateUrl: "./review.page.html",
  styleUrls: ["./review.page.scss"],
})
export class ReviewPage implements OnInit {
  data: any;
  err: any = {};
  constructor(private api: ApiService,private util:UtilService) {
  }
  ngOnInit() {
    this.api.getDataWithToken('review').subscribe((data: any) => {
      if (data.success == true) {
        setTimeout(() => {
          this.data = data.data;
        }, 500);
      }
    }, err => {
      this.err = err.error.errors || err.error.message;
      this.util.presentToast(this.err);
    })
  }
  doRefresh(event) {
    this.api.getDataWithToken('review').subscribe(
      (res: any) => {
        if (res.success) {
          this.data = res.data;
          event.target.complete();
        }
      },
      err => {
        event.target.complete();
        this.err = err.error.errors || err.error.message;
        this.util.presentToast(this.err);
      }
    );
  }
}
