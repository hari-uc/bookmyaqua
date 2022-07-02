import { PopoverPage } from "./../popover/popover.page";
import { Component, OnInit } from "@angular/core";
import { PopoverController, NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"],
})
export class HistoryPage implements OnInit {
  historyData: any;
  todayy: string;
  myMonth: string;
  wFirstDt: any;
  wLastDt: any;
  err: any;
  from: string | number | Date;
  to: string;
  constructor(
    private popoverController: PopoverController,
    private nav: NavController,
    private api:ApiService,
    private util:UtilService
  ) {}
  
  ngOnInit() {
    if(this.selectt == 'Week'){
      this.week();
    }else if(this.selectt == 'Month'){
      this.month();
    }else if(this.selectt == 'Today'){
      this.today();
    }
  }
  btnChange(e) {
    this.selectt = e;
    if (this.selectt == 'Today') {
      this.today();
    }
    else if (this.selectt == 'Week') {
      this.week();
    }
    else if (this.selectt == 'Month') {
      this.month();
    }

  }
  today() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    this.todayy = yyyy + '-' + mm + '-' + dd;    
    let data = {
      from: this.todayy,
      to: this.todayy
    }
    this.bookingFilter(data);
  }
  month() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.todayy = yyyy + '-' + mm + '-' + dd;
    const m = (new Date().getMonth() + 1).toString();
    const y = new Date().getFullYear().toString();
    this.myMonth = y + '-' + m + '-' + '01';
    let data = {
      from: this.myMonth,
      to: this.todayy
    }
    this.bookingFilter(data);
  }
  week() {
    let curr = new Date()
    let week = []
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      week.push(day)
      this.wFirstDt = week[0];
      this.wLastDt = week[6];
    }
    let data = {
      from: this.wFirstDt,
      to: this.wLastDt
    }
    this.bookingFilter(data);
  }
  selectt: string = 'Week';
  btn: any = [
    {
      name: 'Today'
    },
    {
      name: 'Week'
    },
    {
      name: 'Month'
    }
  ];
  bookingFilter(data) {
    this.historyData = [];
    this.util.presentLoading(); 
    this.api.postDataWithToken('booking', data).subscribe((data: any) => {
      if(data.success){
        this.util.dismissLoading();
        this.historyData = data.data;
        
      }else{
        this.util.dismissLoading();
      }
    },err => {
      this.util.dismissLoading();
        this.err = err.error.errors || err.error.message;
        this.util.presentToast(this.err);
        
      })
  }
  dateFrom() {
    let d = new Date(this.from);
    let obj = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    this.from = obj; 
  }
  dateTo() {
    let d = new Date(this.to);
    let obj = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    this.to = obj;
    let data = {
      from: this.from,
      to: this.to
    }
    this.bookingFilter(data);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true,
      cssClass: "popover",
    });
    return await popover.present();
  }
  orderStatus(id) {
    this.api.pro_id = id;
    this.nav.navigateForward("/complete-order");
  }
}
