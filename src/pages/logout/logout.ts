import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import {WelcomePage} from '../welcome/welcome';
/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {
userDetails : any;
userPostData = {"user_id":"","token":""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController) {
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
    console.log('ionViewDidLoad Forgot');
  }

  responseData : any;
  userData = {"username": "","password": "", "name": "","phone": ""};

  

  logout(){
localStorage.clear();
this.authService.logout();
              this.navCtrl.push(WelcomePage);
              this.navCtrl.setRoot(WelcomePage);
         

  }


}
