import { Component, Input, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-addcategory",
  templateUrl: "./addcategory.page.html",
  styleUrls: ["./addcategory.page.scss"],
})
export class AddcategoryPage implements OnInit {
  @Input() item: any;
  fuleType: any = [];
  fuleTypeCat: any;
  selectedfuelCat: any = "";
  err: any = {};
  regular: any = {
    name: "Regular",
    price: 1,
  };
  standard: any = {
    name: "Standard",
    price: 1,
  };
  premium: any = {
    name: "Premium",
    price: 1,
  };
  selectedId: any = '';
  constructor(
    private api: ApiService,
    private util: UtilService
  ) {}
  ngOnInit() {
    this.api.getDataWithToken("fuletype").subscribe(
      (data: any) => {
        console.log(data);
        
        if (data.success == true) {
          this.fuleType = data.data;
        }
      },
      (err) => {
        this.err = err.error.errors || err.error.message;
      }
    );
  }
  ionViewWillEnter() {}
  close(){
    this.util.nav.navigateBack('price');
  }
  add() {
    let fuelPrice = [];
    fuelPrice.push(this.regular);
    fuelPrice.push(this.standard);
    fuelPrice.push(this.premium);
    let data = {
      fuel_pricing: JSON.stringify(fuelPrice),
      fuel_type: this.selectedfuelCat,
    };
    if (this.selectedfuelCat == "") {
      this.util.presentToast("Please Select Fuel Type!");
    } else {
      this.util.presentLoading();
      if (
        this.regular.price >= 1 &&
        this.standard.price >= 1 &&
        this.premium.price >= 1
      ) {
        this.api.postDataWithToken("fuel/pricing", data).subscribe(
          (data: any) => {
            if (data.success) {
              this.util.presentToast("Successfully Added!");
              this.util.dismissLoading();
              this.util.nav.navigateForward("price");
              this.api.dataUp.next(true);
            }
          },
          (err) => {
            this.err = err.error.errors || err.error.message;
            this.util.presentToast(this.err);
            this.util.dismissLoading();
          }
        );
      } else {
        this.util.presentToast("Price must be greater than 0!");
      }
    }
  }
  changeFuel(ev) {
    this.selectedId = ev.detail.value;
    this.api.getDataWithToken("fuletype/" + this.selectedId).subscribe(
      (data: any) => {
        console.log(data);
        
        if (data.success) {
          this.fuleTypeCat = data.data;
        }
      },
      (err) => {
        this.err = err.error.errors || err.error.message;
      }
    );
  }
}
