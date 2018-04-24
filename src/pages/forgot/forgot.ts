import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import {WelcomePage} from '../welcome/welcome';
/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgot');
  }

  responseData : any;
  userData = {"username": "","password": "", "name": "","phone": ""};

  

  forgot(){

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
     this.authService.forgot(this.userData).then((result) => {
      this.responseData = result;
      console.log("response in signup", this.responseData);
      console.log("response code", this.responseData.statusCode);
      loading.dismiss();
      if (this.responseData.statusCode == '200'){
        console.log("test 200");
        console.log("result", this.responseData.results);
       
        let alert = this.alertController.create({
          title: 'Email sent Successful',
          subTitle: 'Email sent is successful',
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
              this.navCtrl.push(LoginPage);
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
    homePage(){
    //Login page link
    this.navCtrl.push(WelcomePage);
  }
}
