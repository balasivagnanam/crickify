import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import {HomePage} from '../home/home';
import {ForgotPage} from '../forgot/forgot';
import {AuthService} from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    if (this.authService.getAuthenticated()){
      //console.log("token", this.authService.getToken());
      this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage);
    }
  }
  
  login(){
    this.navCtrl.push(LoginPage);
    }
  
    signup(){
    this.navCtrl.push(SignupPage);
    }
 forgot(){
    this.navCtrl.push(ForgotPage);
    }
}
