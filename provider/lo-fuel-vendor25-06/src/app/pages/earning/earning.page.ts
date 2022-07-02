import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-earning",
  templateUrl: "./earning.page.html",
  styleUrls: ["./earning.page.scss"],
})
export class EarningPage implements OnInit {
  data: any;
  from: any;
  to: any;
  l: any;
  noData: any;
  todayy: any;
  myMonth: any;
  wFirstDt: any;
  wLastDt: any;
  selectt: string = "Week";
  err: any = {};
  select: any;
  btn: any = [
    {
      name: "Today",
    },
    {
      name: "Week",
    },
    {
      name: "Month",
    },
  ];
  constructor(
    private api: ApiService,
    private nav: NavController,
    private util: UtilService
  ) {}
  dateFrom() {
    let d = new Date(this.from);
    let obj = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    this.from = obj;
  }
  dateTo() {
    let d = new Date(this.to);
    let obj = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    this.to = obj;
    let data = {
      from: this.from,
      to: this.to,
    };
    this.getEarning(data);
  }

  btnChange(e) {
    this.selectt = e;
    if (this.selectt == "Today") {
      this.today();
    } else if (this.selectt == "Week") {
      this.week();
    } else if (this.selectt == "Month") {
      this.month();
    }
  }
  today() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    this.todayy = yyyy + "-" + mm + "-" + dd;
    let data = {
      from: this.todayy,
      to: this.todayy,
    };
    this.getEarning(data);
  }
  month() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    this.todayy = yyyy + "-" + mm + "-" + dd;
    const m = (new Date().getMonth() + 1).toString();
    const y = new Date().getFullYear().toString();
    this.myMonth = y + "-" + m + "-" + "01";
    let data = {
      from: this.myMonth,
      to: this.todayy,
    };
    this.getEarning(data);
  }
  week() {
    let curr = new Date();
    let week = [];
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
      week.push(day);
      this.wFirstDt = week[0];
      this.wLastDt = week[6];
    }
    let data = {
      from: this.wFirstDt,
      to: this.wLastDt,
    };
    this.getEarning(data);
  }
  getEarning(data) {
    this.util.presentLoading();
    this.api.postDataWithToken("earning", data).subscribe(
      (data: any) => {
        if (data.success) {
          this.util.dismissLoading();
          this.data = data.data;
          this.l = this.data.length;
        } else {
          this.util.dismissLoading();
        }
      },
      (err) => {
        this.util.dismissLoading();
        this.err = err.error.errors || err.error.message;
        this.util.presentToast(this.err);
       
      }
    );
  }
  ngOnInit() {
    this.week();
  }
  doRefresh(event) {
    let data = {
      from: this.myMonth,
      to: this.todayy,
    };
    this.api.postDataWithToken("earning", data).subscribe(
      (res: any) => {
         this.util.dismissLoading();
        this.data = res.data;
        if (res.success) {
          event.target.complete();
        }
      },
      (err) => {
       this.util.dismissLoading();
        event.target.complete();
      }
    );
  }
}
