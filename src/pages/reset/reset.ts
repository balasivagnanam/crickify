import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
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

  

  reset(){

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
     this.authService.reset(this.userData).then((result) => {
      this.responseData = result;
      console.log("response in signup", this.responseData);
      console.log("response code", this.responseData.statusCode);
      loading.dismiss();
      if (this.responseData.statusCode == '200'){
        console.log("test 200");
        console.log("result", this.responseData.results);
       
        let alert = this.alertController.create({
          title: 'Password change Successful',
          subTitle: 'Password change successful',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
              this.navCtrl.push(LoginPage);
              this.navCtrl.setRoot(LoginPage);
            }
          }
        ]
        });
        alert.present();
      } else if(this.responseData.statusCode == '401'){
        
        let alert = this.alertController.create({
          title: 'User account exists!',
          subTitle: 'This user does not exists in the list. Please Register!',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
             
            }
          }
        ]
        });
        alert.present();
      } else {
        
        let alert = this.alertController.create({
          title: 'Server Unavailable!',
          subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
             
            }
          }
        ]
        });
        alert.present();
      }
      //this.navCtrl.push(HomePage);
    }, (err) => {
      // Error log
    });

  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }
}
