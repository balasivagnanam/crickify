import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AuthService} from '../../providers/auth/auth';
import {SignupPage} from '../signup/signup';
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
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }

  login(){
    this.authService.postData(this.userData,'login').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(HomePage);
    }, (err) => {
      // Error log
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }


}
