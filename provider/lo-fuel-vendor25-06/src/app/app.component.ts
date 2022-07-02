import { Component, OnInit } from "@angular/core";

import {
  Platform,
  MenuController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { IonRouterOutlet } from "@ionic/angular";
import { QueryList, ViewChildren } from "@angular/core";
import { ApiService } from "./services/api.service";
import { OneSignal } from "@ionic-native/onesignal/ngx";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "../assets/image_icon/home_ic.svg",
    },
    {
      title: "Earning",
      url: "/earning",
      icon: "../assets/image_icon/ear_ic.svg",
    },
    {
      title: "Review",
      url: "/review",
      icon: "../assets/image_icon/star_ic.svg",
    },
    {
      title: "History",
      url: "/history",
      icon: "../assets/image_icon/fuel.svg",
    },
    {
      title: "Price",
      url: "/price",
      icon: "../assets/image_icon/ear_ic.svg",
    },
    {
      title: "Profile",
      url: "/profile",
      icon: "../assets/image_icon/ac_ic.svg",
    },
    {
      title: "Setting",
      url: "/setting",
      icon: "../assets/image_icon/settings.svg",
    },
  ];
  token: string;
  profiles: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private nav: NavController,
    private toastController: ToastController,
    private router: Router,
    private api: ApiService,
    private oneSignal: OneSignal
  ) {
    this.initializeApp();
    this.backButtonEvent();
    this.nav.navigateRoot("/home");
    let token = localStorage.getItem("empToken")
      ? localStorage.getItem("empToken")
      : "";
    if (token == "") {
      this.nav.navigateForward("signin");
    } else {
      this.nav.navigateRoot("home");
    }
    this.api.isNewLogin().subscribe((d) => {
      console.log("event recived!");
      setTimeout(() => {
        this.token = localStorage.getItem("empToken")
          ? localStorage.getItem("empToken")
          : "";
        if (d) {
          this.api.getDataWithToken("profile").subscribe(
            (success: any) => {
              if (success.success) {
                this.profiles = success.data;
              }
            },
            (error) => {}
          );
        }
      }, 500);
    });

    this.api.isNewLogin().subscribe((d) => {
      console.log("event recived!");
      setTimeout(() => {
        this.token = localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "";
        if (d) {
          this.api.getDataWithToken("profile").subscribe(
            (success: any) => {
              if (success.success) {
                this.profiles = success.data;
              }
            },
            (error) => {}
          );
        } 
      }, 500);
    });

    this.api.profileUpdate.subscribe((e) => {
      this.api.getDataWithToken("profile").subscribe(
        (success: any) => {
          if (success.success) {
            this.profiles = success.data;
          }
        },
        (error) => { }
      );
    });    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#21e4c0");
      this.splashScreen.hide();
    });

    setTimeout(() => {
      this.api.getData("noti/setting").subscribe(
        (res: any) => {
          console.log("key", res);
          if (res.success) {
            console.log("res", res);
            if (this.platform.is("cordova")) {
              this.oneSignal.startInit(
                res.data.APP_ID,
                res.data.PROJECT_NUMBER
              );
              this.oneSignal
                .getIds()
                .then((ids) => (this.api.deviceToken = ids.userId));
              console.log(
                "one signal",
                this.oneSignal
                  .getIds()
                  .then((ids) => (this.api.deviceToken = ids.userId))
              );
              this.oneSignal.endInit();
            } else {
              this.api.deviceToken = null;
            }
          }
        },
        (err) => {}
      );
    }, 2000);
  }

  profileGo() {
    this.menu.close();
    this.nav.navigateForward("profile");
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
    this.initializeApp();
  }
  closeMenu() {
    this.menu.close();
  }
  signOut() {
    this.menu.close();
    this.nav.navigateRoot("/signin");
    localStorage.clear();
  }
  profile() {
    this.menu.close();
    this.nav.navigateRoot("/profile");
  }
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === "/home" ||
          this.router.url === "/signin"
        ) {
          if (
            new Date().getTime() - this.lastTimeBackPress <
            this.timePeriodToExit
          ) {
            navigator["app"].exitApp();
          } else {
            this.showToast();
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }
  async showToast() {
    const toast = await this.toastController.create({
      message: "press back again to exit App.",
      duration: 2000,
    });
    toast.present();
  }
}
