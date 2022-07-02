import { Component, OnInit } from "@angular/core";
import { NavController, MenuController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  email: any = "";
  password: any = "";
  err: any;
  constructor(
    private nav: NavController,
    private menu: MenuController,
    private api: ApiService,
    private util: UtilService
  ) {
    this.menu.enable(false);
  }

  ngOnInit() {}
  forgotPassword() {
    this.nav.navigateForward("/forgot");
    this.util.modal.dismiss();
  }
  signup() {
    this.nav.navigateForward("/signup");
    this.util.modal.dismiss();
  }
  signIn() {
    this.util.presentLoading();
    let data = {
      email: this.email,
      password: this.password,
      device_token: this.api.deviceToken
        ? this.api.deviceToken
        : "i hate device",
    };
    this.api.postData("login", data).subscribe(
      (success: any) => {
        console.log(success.data);
        this.util.presentToast(success.msg);
        let hasPre = localStorage.getItem("previous-request") ? true : false;
        if (hasPre) {
          if ((success.success = true)) {
            let page = localStorage.getItem("previous-request-page");
            this.nav.navigateRoot(page);
            this.util.dismissLoading();
            this.util.modal.dismiss();
            this.api.profileUpdate.next(true);
            this.api.setNewLogin(true);
            localStorage.setItem("empToken", success.data.token);
          } else {
            this.util.modal.dismiss();
            this.util.presentToast("Something Went Wrong");
            
            this.util.dismissLoading();
          }
        } else {
          if (success.success) {
            localStorage.setItem("empToken", success.data.token);
            this.nav.navigateRoot("home");
            this.util.dismissLoading();
            
            this.api.profileUpdate.next(true);
            this.api.setNewLogin(true);
          } else {
            this.util.dismissLoading();
          }
        }
      },
      (err) => {
        this.err = err.error.errors;
        console.log(err.error);

        this.util.dismissLoading();
      }
    );
  }
}
