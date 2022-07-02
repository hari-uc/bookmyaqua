import { NavController, MenuController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { DrawerState } from "ion-bottom-drawer";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { 
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from "@ionic-native/native-geocoder/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  // public Centerlat = 22.298922;
  // public Centerlng = 70.802177;
  origin: any = {};
  destination: any = {};
  public renderOptions = {
    suppressMarkers: true,
    draggable: false,
  };
  public icon: any = "../../../assets/image/gas_truck.png";
  public iconUriicon: "../../../assets/image/sender_ic.png";
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
  truck = [
    {
      lat: 22.291111,
      lng: 70.802177,
      icon: "../../../assets/image/send_im.png",
    },
    {
      lat: 22.299999,
      lng: 70.802177,
      icon: "../../../assets/image/send_im.png",
    },
    {
      lat: 22.298999,
      lng: 70.80211,
      icon: "../../../assets/image/send_im.png",
    },
    {
      lat: 22.298988,
      lng: 70.802111,
      icon: "../../../assets/image/send_im.png",
    },
    {
      lat: 22.298555,
      lng: 70.802166,
      icon: "../../../assets/image/send_im.png",
    },
    {
      lat: 22.298666,
      lng: 70.802144,
      icon: "../../../assets/image/send_im.png",
    },
  ];
  drawerState = DrawerState.Bottom;
  minimumHeight: any = 164;
  dockedHeight: any = 164;
  shouldBounce: any = true;
  distanceTop: any = 50;
  disableDrag: any;
  isshow = true;
  data: any;
  latitude: number;
  longitude: number;
  err: any;
  is_online: any;
  Centerlng: string;
  Centerlat: string;
  constructor(
    private nav: NavController,
    private menu: MenuController,
    private api: ApiService,
    private util: UtilService,
    private nativeGeocoder: NativeGeocoder,
    private geolocation: Geolocation,
    private diagnostic: Diagnostic,
    private locationAccuracy: LocationAccuracy
  ) {
    this.menu.enable(true);
    this.origin = {
      lat: 22.298922,
      lng: 70.802177,
    };
    this.destination = {
      lat: 22.269956,
      lng: 70.78884,
    };
    this.Centerlat = localStorage.getItem("lat");
    this.Centerlng = localStorage.getItem("lang");
    setTimeout(() => { 
      this.diagnostic
      .isLocationEnabled()
      .then((isAvailable) => {
        // console.log("Is available? " + isAvailable);
        // alert("Is available? " + isAvailable); 
        if (isAvailable==false) {
          this.requestToSwitchOnGPS();
        }
      })
      .catch((e) => {
        console.log(e);
        alert(JSON.stringify(e));
      });
    }, 5000);
  }

  change() {
    if (this.is_online == true) {
      this.is_online = 1;
    } else {
      this.is_online = 0;
    }
    let data = {
      is_online: this.is_online,
    };
    this.api.postDataWithToken("profile/update", data).subscribe(
      () => {},
      (err) => {
        this.err = err.error.errors;
      }
    );
  }
  ionViewWillEnter() {
    // this.util.presentLoading();
    setTimeout(() => {
      this.geolocation 
        .getCurrentPosition()
        .then((resp) => {
          this.util.dismissLoading();
          this.latitude = resp.coords.latitude
            ? resp.coords.latitude
            : 22.298922;
          this.longitude = resp.coords.longitude
            ? resp.coords.longitude
            : 70.802177;
          // this.util.dismissLoading();
        })
        .catch((error) => {
          this.util.dismissLoading();
        });
    }, 500);
    this.getLocationCoordinates();
    setTimeout(() => {
      this.setCurrentLocation();
    }, 500);
    return
  }

  requestToSwitchOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      (res) => {
        console.log('ask gps opermission', res);
        this.getLocationCoordinates()
      },
      error => alert(JSON.stringify(error))
    );
  }

  getLocationCoordinates() {
    setTimeout(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.util.dismissLoading();
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        });
      }
    }, 500);
  }
  ngOnInit() {
    this.util.presentLoading();
    this.api.profileUpdate.subscribe((e) => {
      this.api.getDataWithToken("profile").subscribe(
        (success: any) => {
          this.util.dismissLoading();
          if (success.success) {
            this.is_online = success.data.is_online;
          }
        },
        (err) => {
          this.util.dismissLoading();
        }
      );
    });

   
    this.api.getDataWithToken("booking/future").subscribe(
      (success: any) => {
        this.util.dismissLoading();
        if (success.success) {
          this.data = success.data;
        }
      },
      (err) => {
        this.util.dismissLoading();
      }
    );

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.util.dismissLoading();
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        localStorage.setItem("lat", JSON.stringify(this.latitude));
        localStorage.setItem("lang", JSON.stringify(this.longitude));
      });
    }
  }

  private setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.util.dismissLoading();
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        localStorage.setItem("lat", JSON.stringify(this.latitude));
        localStorage.setItem("lang", JSON.stringify(this.longitude));
      });
    }
  }
  viewAll() {
    if (this.drawerState == DrawerState.Bottom) {
      this.drawerState = DrawerState.Top;
    } else {
      this.drawerState = DrawerState.Bottom;
    }
  }
  trackOrder(item) {
    this.nav.navigateForward("/track");
    this.api.pro_id = item.id;
  }
}
