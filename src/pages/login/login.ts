import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AuthService} from '../../providers/auth/auth';
import {SignupPage} from '../signup/signup';
import {WelcomePage} from '../welcome/welcome';
import {ForgotPage} from '../forgot/forgot';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *  reference http://www.9lessons.info/2017/06/ionic-angular-php-login-restful-api.html tutorial
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  userData = {"username": "","password": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController) {
  }

  login(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.authService.login(this.userData).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results);
        localStorage.setItem('userData', JSON.stringify(this.responseData.results));
        this.navCtrl.push(HomePage);
        this.navCtrl.setRoot(HomePage);
      }else if (this.responseData.statusCode == '403'){
        loading.dismiss();
        let alert = this.alertController.create({
          title: 'Verification Required',
          subTitle: 'Please verify the account to login',
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
      }  else {
        loading.dismiss();
        let alert = this.alertController.create({
          title: 'Wrong login/password',
          subTitle: 'Login and password combination doesnt seem to work. Please try again or reset your password',
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
      
    }, (err) => {
       loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }
   homePage(){
    //Login page link
    this.navCtrl.push(WelcomePage);
  }
   forgot(){
    this.navCtrl.push(ForgotPage);
    }

}
