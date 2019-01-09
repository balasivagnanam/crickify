import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import { Events } from 'ionic-angular';
import {MyTeamsPage} from '../my-teams/my-teams';
import { NewsPage } from '../news/news';
import { ProductPage } from '../product/product';
import { ClassifiedPage } from '../classifieds/classifieds';
import { MyProfilePage } from '../my-profile/my-profile';
import { MyAccountPage } from '../my-account/my-account';
import { FinancePage } from '../finance/finance';
import { BookingPage } from '../booking/booking';
/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController,public events: Events) {
 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgot');
  }
  career(){
    this.navCtrl.push(MyProfilePage);
  }
  
  profile(){
  this.navCtrl.push(MyAccountPage);
  }
  
  finance(){
    this.navCtrl.push(FinancePage);
  }
  

  booking(){
    this.navCtrl.push(BookingPage);
  }
}
