import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { MatchService } from '../../providers/matches/matches';
import {MatchTeamPage} from '../match-team/match-team';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails : any;
  responseData: any;
 
  userPostData = {"user_id":"","token":""};

matches : any;

  constructor(public navCtrl: NavController, public app:App, public authService:AuthService, public matchService:MatchService, public loadingController: LoadingController,public admob: AdMobFree) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
  }
showBanner() {
 
        let bannerConfig: AdMobFreeBannerConfig = {
            isTesting: true, // Remove in production
            autoShow: true
            //id: Your Ad Unit ID goes here
        };
 
        this.admob.banner.config(bannerConfig);
 
        this.admob.banner.prepare().then(() => {
            // success
        }).catch(e => console.log(e));
 
    }
  ionViewCanEnter(){
	  this.showBanner();
    console.log("view did enter", this.authService.getAuthenticated());
      return this.authService.getAuthenticated();
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getAllMatches().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.matches);
        this.matches = this.responseData.results.matches;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
        this.backToWelcome();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
    });

    
  }
  
  availabilitySelected(event, match){
    console.log("selected",event, match);
    match.player = this.authService.getUser();
    console.log("after change", match);
    
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });

    this.matchService.postAvailability(match).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200", this.responseData);
       // console.log("result", this.responseData.results.matches);
        //this.matches = this.responseData.results.matches;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
        this.backToWelcome();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
    });

  }


  backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();
 }
 
 logout(){
      localStorage.clear();
      setTimeout(() => this.backToWelcome(), 1000);
 }
 goToMatchTeam(event){
    console.log("clicked match team", event);
    this.navCtrl.push(MatchTeamPage, {"matchId": event});
  }
}
