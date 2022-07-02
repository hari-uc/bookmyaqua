import { Component, OnInit } from "@angular/core";
import { ModalController, NavController, Platform } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { AddcategoryPage } from "../addcategory/addcategory.page";

@Component({
  selector: "app-price",
  templateUrl: "./price.page.html",
  styleUrls: ["./price.page.scss"],
})
export class PricePage implements OnInit {
  data: any;
  fuel_pricing: any;
  err: any = {};
  constructor(
    private api: ApiService,
    private nav: NavController,
    private modal: ModalController,
    private platform: Platform,
    private util: UtilService
  ) {
    this.backButton();
  }
  backButton() {
    this.platform.backButton.subscribe(() => {
      this.nav.navigateForward("home");
    });
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.api.dataUp.subscribe((d) => {
      this.util.presentLoading();
      this.api.getDataWithToken("fuel/pricing").subscribe(
        (data: any) => {
          if (data.success == true) {
            this.data = data.data;
            this.fuel_pricing = data.fuel_pricing;
            this.util.dismissLoading();
          }
        },
        (err) => {
          this.err = err.error.errors;
          this.util.presentToast(this.err);
          this.util.dismissLoading();
        }
      );
    });
  }

  async presentModal() {
    this.nav.navigateForward("addcategory");
  }
  delete(id) {
    this.util.presentLoading();
    this.api.deleteData("fuel/pricing/" + id).subscribe(
      (data: any) => {
        this.util.dismissLoading();
        this.api.dataUp.next(true);
        this.util.presentToast("Deleted Successfully!");
      },
      (err) => {
        this.err = err.error.errors;
        this.util.presentToast(this.err);
      }
    );
  }
}
