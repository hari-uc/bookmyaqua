import { countryCode } from "./../../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { NavController, MenuController } from "@ionic/angular";

@Component({
  selector: "app-verify-number",
  templateUrl: "./verify-number.page.html",
  styleUrls: ["./verify-number.page.scss"],
})
export class VerifyNumberPage implements OnInit {
  code: any = "+91";
  number: any ;
  cCode: any = countryCode;
  data: any = {};
  constructor(private nav: NavController, private menu: MenuController) {
    this.menu.enable(false);
  }

  ngOnInit() {}
  clerInput() {
    this.number = "";
  }
  getotp() {
    this.nav.navigateForward("/otp");
  }
}
