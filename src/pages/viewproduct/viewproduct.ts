import { Component } from '@angular/core';
import { NavController, App, LoadingController,NavParams } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { ProductService } from '../../providers/product/product';

import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { PipesModule } from '../../pipes/pipes.module';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';

import {OtherService} from '../../providers/other/other';
import { CreateProductPage } from '../create-product/create-product';

@Component({
  selector: 'page-viewproduct',
  templateUrl: 'viewproduct.html'
})

export class ViewProductPage {

 
  teams:any;
  product : any;
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App, public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public productService:ProductService, public loadingController: LoadingController,public admob: AdMobFree) {
    const data = JSON.parse(localStorage.getItem('userData'));
    if(data!=null){

      this.user = data.user;
    }
    this.product = navParams.get('product');

  }

  

  ionViewWillEnter(){

    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
   
    
  }
  
  
 
 

  

 
}
