import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { DomSanitizer } from "@angular/platform-browser";
import { ActionSheetController, NavController } from "@ionic/angular";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  data: any;
  err: any;
  img: string;
  imageUri: any;
  base64Image: any;

  constructor(
    private api: ApiService,
    private util: UtilService,
    private camera: Camera,
    private sanitize: DomSanitizer,
    private actionSheetController: ActionSheetController,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.api.profileUpdate.subscribe((e) => {
      this.util.presentLoading();
      this.api.getDataWithToken("profile").subscribe(
        (success: any) => {
          if (success.success) {
            this.data = success.data;
            this.imageUri = success.data.imageUri;
            this.util.dismissLoading();
          }
        },
        (err) => {
          console.log(err);
          this.util.dismissLoading();
        }
      );
    });
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 300,
      targetWidth: 300,
    };
    this.camera.getPicture(options).then((imageData) => {
      this.img = "data:image/jpeg;base64," + imageData;
      this.imageUri = "data:image/jpeg;base64," + imageData;
      let image = imageData;
      this.base64Image = this.sanitize.bypassSecurityTrustResourceUrl(this.img);
      let myImg = {
        image: image,
      };
      this.util.presentLoading();
      this.api.postDataWithToken("profile/picture/update", myImg).subscribe(
        async (data: any) => {
          await this.util.dismissLoading();
          this.util.presentToast("Profile Changed!");
          this.api.profileUpdate.next(true);
        },
        async (err) => {
          await this.util.dismissLoading();
          this.err = err.error.errors;
          this.util.presentToast(this.err);
        }
      );
    });
  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: "Use Camera",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
    });
    await actionSheet.present();
  }
  name: any;
  updatePro() {
    let data = {
      name: this.name,
    };
    this.api.postDataWithToken("profile/update", data).subscribe(
      (success: any) => {
        if (success.success) {
          this.util.presentToast("Profile Updated");
          this.api.profileUpdate.next(true);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
