import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { UtilService } from "src/app/services/util.service";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.page.html",
  styleUrls: ["./change-password.page.scss"],
})
export class ChangePasswordPage implements OnInit {
  constructor(private nav: NavController,private util:UtilService,private api:ApiService) {}
  current:any = '';
  new:any = '';
  confirm:any = '';
  ngOnInit() {}
  setting() {
    this.nav.navigateForward("/setting");
  }
  err:any;
  changePass() {
    this.util.presentLoading();
    let data = {
      old_password:this.current,
      password:this.new,
      password_confirmation:this.confirm
    };
    this.api.postDataWithToken("profile/password/update", data).subscribe(
      (success: any) => {
        if (success.success) {
          this.util.dismissLoading();
          this.util.presentToast('Password Change Successfully');
          this.current = '';
          this.new = '';
          this.confirm = '';
          this.nav.navigateForward('setting');
        } else {
          this.util.dismissLoading();
        }
      },
      (err) => {
        this.err = err.error.errors;
        this.util.dismissLoading();
      }
    );
  }
}
