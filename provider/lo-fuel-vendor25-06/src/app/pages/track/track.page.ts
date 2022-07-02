import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-track",
  templateUrl: "./track.page.html",
  styleUrls: ["./track.page.scss"],
})
export class TrackPage implements OnInit {
  // public Centerlat = 22.298922;
  // public Centerlng = 70.802177;
  origin: any = {};
  destination: any = {};
  public renderOptions = {
    suppressMarkers: true,
    draggable: false,
  };

  public markerOptions = {
    origin: {
      icon: "../../../assets/image/sender_ic.png",
    },
    destination: {
      icon: "../../../assets/image/gas_truck.png",
    },
    draggable: true,
  };
  public styles = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ];
  single: any;
  Centerlat: string;
  Centerlng: string;

  constructor(
    private nav: NavController,
    private api: ApiService,
    private util: UtilService
  ) {
    /*  this.origin = {
      lat: 22.298922,
      lng: 70.802177,
    }; */
    this.destination = {
      lat: 22.269956,
      lng: 70.78884,
    };

    this.Centerlat = localStorage.getItem("lat");
    this.Centerlng = localStorage.getItem("lang");
  }

  ngOnInit() {
    this.util.presentLoading();
    this.api
      .getDataWithToken("booking/" + this.api.pro_id + "/detail")
      .subscribe(
        (success: any) => {
          if (success.success) {
            this.single = success.data;
            console.log("single", this.single);
            this.origin = {
              lat: JSON.parse(this.single.lat),
              lng: JSON.parse(this.single.lang),
            };
            this.util.dismissLoading();
          }
        },
        (err) => {
          console.log(err);
          this.util.dismissLoading();
        }
      );
  }
  completeOrder(e) {
    this.util.presentLoading();
    if (e == "A") {
      let data = {
        status: "1",
      };
      this.api
        .postDataWithToken("booking/" + this.api.pro_id + "/update", data)
        .subscribe(
          (success: any) => {
            if (success.success) {
              this.util.presentToast("Booking Approved Successfully");
              this.ngOnInit();
              this.util.dismissLoading();
            }
          },
          (err) => {
            console.log(err);
            this.util.dismissLoading();
          }
        );
    } else if (e == "O") {
      let data = {
        status: "2",
      };
      this.api
        .postDataWithToken("booking/" + this.api.pro_id + "/update", data)
        .subscribe(
          (success: any) => {
            if (success.success) {
              this.util.presentToast("Will notice you soon");
              this.ngOnInit();
              this.util.dismissLoading();
            }
          },
          (err) => {
            console.log(err);
            this.util.dismissLoading();
          }
        );
    } else if (e == "CO") {
      let data = {
        status: "3",
      };
      this.api
        .postDataWithToken("booking/" + this.api.pro_id + "/update", data)
        .subscribe(
          (success: any) => {
            if (success.success) {
              this.util.presentToast("Order Completed");
              this.ngOnInit();
              this.util.dismissLoading();
              this.nav.navigateForward("/complete-order");
            }
          },
          (err) => {
            console.log(err);
            this.util.dismissLoading();
          }
        );
    } else if (e == "CA") {
      let data = {
        status: "4",
      };
      this.api
        .postDataWithToken("booking/" + this.api.pro_id + "/update", data)
        .subscribe(
          (success: any) => {
            if (success.success) {
              this.util.presentToast("Order Canceled");
              this.ngOnInit();
              this.nav.navigateForward("/complete-order");
              this.util.dismissLoading();
            }
          },
          (err) => {
            console.log(err);
            this.util.dismissLoading();
          }
        );
    } else if (e == "R") {
      let data = {
        status: "6",
      };
      this.api
        .postDataWithToken("booking/" + this.api.pro_id + "/update", data)
        .subscribe(
          (success: any) => {
            if (success.success) {
              this.util.presentToast("Order Rejected");
              this.ngOnInit();
              this.nav.navigateForward("/complete-order");
              this.util.dismissLoading();
            }
          },
          (err) => {
            console.log(err);
            this.util.dismissLoading();
          }
        );
    }
  }
}
