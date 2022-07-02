import { Component, OnInit } from "@angular/core";
import { NavController, MenuController } from "@ionic/angular";
import { ViewChild } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.page.html",
  styleUrls: ["./forgot.page.scss"],
})
export class ForgotPage implements OnInit {
  phone_no: any;
  err: any = {};
  @ViewChild("input", { static: true }) myInput;
  constructor(private api: ApiService, private nav: NavController, private menu: MenuController,private util:UtilService) {
    this.menu.enable(false);
  }
  ngOnInit() {
    setTimeout(() => {
      this.myInput.setFocus();
    }, 150);
  }
  verify() {
    this.util.presentLoading();
    let data = {
      phone_no: this.phone_no,
      type: 1
    }
    this.api.postData('forgot', data).subscribe((data: any) => {
      this.api.phone_no = this.phone_no;
      if (data.success) {
        this.nav.navigateForward("/password-otp");
        this.util.dismissLoading();
      }
      else {
        this.util.presentToast(data.msg)
        this.util.dismissLoading();
      }
    }, err => {
      this.err = err.error.errors || err.error.message;
      this.util.presentToast(this.err);
      this.util.dismissLoading();
    })
  }
}
