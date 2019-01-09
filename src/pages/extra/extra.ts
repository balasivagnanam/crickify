import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import { Events } from 'ionic-angular';
import {MyTeamsPage} from '../my-teams/my-teams';
import { NewsPage } from '../news/news';
import { ProductPage } from '../product/product';
import { ClassifiedPage } from '../classifieds/classifieds';
import { LocationsPage } from '../locations/locations';
/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController,public events: Events) {
 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgot');
  }
  news(){
    this.navCtrl.push(NewsPage);
  }
  
market(){
  this.navCtrl.push(ProductPage);
  }
  
  classifieds(){
    this.navCtrl.push(ClassifiedPage);
  }

  facility(){
    this.navCtrl.push(LocationsPage);
  }
  
}
