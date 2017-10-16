import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  userDetails : any;
  responseData: any;
 
  userPostData = {"user_id":"","token":""};
  user : any = " ";

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public loadingController:LoadingController) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("user", this.authService.getUser());
      this.user = JSON.parse(JSON.stringify(this.authService.getUser()));
    }
  }

}
