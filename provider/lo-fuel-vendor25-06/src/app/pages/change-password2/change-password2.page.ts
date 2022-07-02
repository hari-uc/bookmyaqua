import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-change-password2',
  templateUrl: './change-password2.page.html',
  styleUrls: ['./change-password2.page.scss'],
})
export class ChangePassword2Page implements OnInit {
  old_password: any;
  password: any;
  password_confirmation: any;
  err: any = {};
  constructor(private nav: NavController, private api: ApiService,private util:UtilService) { }

  ngOnInit() {}
  setting() {
    let data = {
      password: this.password
    }
    this.api.postDataWithToken('newpassword', data).subscribe((data: any) => {
      if (data.success) {
        this.util.presentToast("Your Password is Changed!")
        this.nav.navigateForward("/signin");
      }
    }, err => {
      this.err = err.error.errors || err.error.message;
      this.util.presentToast(this.err);
    })
  }

}
