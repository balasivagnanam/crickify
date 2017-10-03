import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  responseData : any;
  userData = {"username": "","password": "", "name": "","phone": ""};

  

  signup(){

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
     this.authService.signup(this.userData).then((result) => {
      this.responseData = result;
      console.log("response in signup", this.responseData);
      console.log("response code", this.responseData.statusCode);
      loading.dismiss();
      if (this.responseData.statusCode == '200'){
        console.log("test 200");
        console.log("result", this.responseData.results);
        localStorage.setItem('userData', JSON.stringify(this.responseData.results.user));
        let alert = this.alertController.create({
          title: 'Registration Successful',
          subTitle: 'Your Registration is successful',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
              this.navCtrl.push(HomePage);
              this.navCtrl.setRoot(HomePage);
            }
          }
        ]
        });
        alert.present();
      } else if(this.responseData.statusCode == '401'){
        loading.dismiss();
        let alert = this.alertController.create({
          title: 'User account exists!',
          subTitle: 'This user account exists in the list. Please login or reset your password!',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
              this.navCtrl.push(LoginPage);
            }
          }
        ]
        });
        alert.present();
      } else {
        loading.dismiss();
        let alert = this.alertController.create({
          title: 'Server Unavailable!',
          subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
              this.navCtrl.push(LoginPage);
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
