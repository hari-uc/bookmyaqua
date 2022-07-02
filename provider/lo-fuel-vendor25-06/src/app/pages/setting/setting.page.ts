import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.page.html",
  styleUrls: ["./setting.page.scss"],
})
export class SettingPage implements OnInit {
  profile: any;
  notify: any;
  noti: any;
  err: any;
  constructor(private nav: NavController,private api:ApiService,private util:UtilService) {}

  ngOnInit() {
    this.api.getDataWithToken('profile').subscribe((success:any) => {
      if(success.success){
        this.profile = success.data;
        this.notify = success.data.noti
      }
    }, err => {
      console.log(err)
    })
  }
  change() {
    if (this.noti == 1) {
      this.noti = 1;
    }
    else {
      this.noti = 0;
    }
    this.api.postDataWithToken('profile/update', {noti:this.noti}).subscribe((success) => {
      this.util.presentToast('Settings Updated')
    }, err => {
      this.err = err.error.errors;
    })
  }
  changePassword() {
    this.nav.navigateForward("/change-password");
  }
  policy() {
    this.nav.navigateForward("/policy");
  }
}
