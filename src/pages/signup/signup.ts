import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  signup(){
     this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(HomePage);
    }, (err) => {
      // Error log
    });

  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }
}
