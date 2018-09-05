import { Component } from '@angular/core';
import { NavController, App, LoadingController,NavParams } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { NewsService } from '../../providers/news/news';
import {MatchTeamPage} from '../match-team/match-team';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { PipesModule } from '../../pipes/pipes.module';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';

import {OtherService} from '../../providers/other/other';
import { CreateNewsPage } from '../create-news/create-news';

@Component({
  selector: 'page-viewnews',
  templateUrl: 'viewnews.html'
})

export class ViewNewsPage {

 
  teams:any;
  news : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App, public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public newsService:NewsService, public loadingController: LoadingController,public admob: AdMobFree) {
  
    this.news = navParams.get('news');

  }

  

  ionViewWillEnter(){

    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
   
    
  }
  
  
 
 

  

 
}
