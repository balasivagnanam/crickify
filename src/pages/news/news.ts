import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
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
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class NewsPage {

  userDetails : any;
  responseData: any;
  teamresponseData: any;
  tournamentresponseData: any;
 
  userPostData = {"user_id":"","token":""};
  private searchNewsForm: FormGroup;
 
  teams:any;
newss : any;

  constructor(public navCtrl: NavController, public app:App, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public newsService:NewsService, public loadingController: LoadingController,public admob: AdMobFree) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
    
    
    this.searchNewsForm = formBuilder.group({

      startDate: [],
      endDate: [],
      type: []
      
    });

  }

  addNews(){
              
    this.navCtrl.push(CreateNewsPage);
}

editNews(news){
this.navCtrl.push(CreateNewsPage,{news: news});

}

  deleteNews(news) {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    news.active=false;
    this.newsService.addNews(news).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");

      this.ionViewDidLoad();
      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        console.log("unauthorrised");
        
      } else {
        loading.dismiss();
        console.log("test others");
      
      }

    }, (err) => {
      console.log("error", err);
      loading.dismiss();
     
      // Error log
    });
  }

  ionViewWillEnter(){

    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
  
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.newsService.getAllNewsSearch(this.searchNewsForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.newss = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
		loading.dismiss();
   
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

    
  }
  
  
 
 

  

  search(){
    console.log('ionViewDidLoad home page');
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.newsService.getAllNewsSearch(this.searchNewsForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.newss = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "403") {
        console.log("unauthorrised");
		loading.dismiss();
       
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

  }
}
