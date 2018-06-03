import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import { Events } from 'ionic-angular';
import {MyTeamsPage} from '../my-teams/my-teams';
/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'modeChange',
  templateUrl: 'modeChange.html',
})
export class ModeChangePage {
userDetails : any;
userPostData = {"user_id":"","token":""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController,public events: Events) {
   if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
  
  
  }
admin(){
this.events.publish("UPDATE_SIDE_MENU", "admin");
 this.navCtrl.push(MyTeamsPage);
  }
  normal(){
this.events.publish("UPDATE_SIDE_MENU", "normal");
 this.navCtrl.push(HomePage);
              this.navCtrl.setRoot(HomePage);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgot');
  }

  responseData : any;
  userData = {"username": "","password": "", "name": "","phone": ""};

  

  
}
