import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { MatchService } from '../../providers/matches/matches';
import {MatchTeamPage} from '../match-team/match-team';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { PipesModule } from '../../pipes/pipes.module';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';
import { Platform } from 'ionic-angular';
import {OtherService} from '../../providers/other/other';
import { ViewLocationPage } from '../view-location/view-location';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  userDetails : any;
  responseData: any;
  teamresponseData: any;
  tournamentresponseData: any;
 
  userPostData = {"user_id":"","token":""};
  private searchMatchesForm: FormGroup;
  tournaments:any;
  teams:any;
matches : any;

  constructor(public navCtrl: NavController,public plt: Platform, public app:App, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public matchService:MatchService, public loadingController: LoadingController,public admob: AdMobFree) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
    this.getTeams();
    this.getTournaments();
    this.searchMatchesForm = formBuilder.group({

      startDate: [new Date().toISOString()],
      teamId: [0],
      tournamentId: [0]
    });


  }
  showBanner() {
 
    let bannerConfig: AdMobFreeBannerConfig = {
        
        autoShow: true,
       id:'ca-app-pub-7720772047232561/8941352265'
    };


   let iosBannerConfig: AdMobFreeBannerConfig = {
        
      autoShow: true,
     id:'ca-app-pub-7720772047232561/2648166418'
  };
  if (this.plt.is('android')){
    this.admob.banner.config(bannerConfig);}
    if (this.plt.is('ios'))  {
      this.admob.banner.config(iosBannerConfig);
}
    this.admob.banner.prepare().then(() => {
        // success
  console.log('view did enter ad');
    }).catch(e => console.log("view did error enter ad",e));
console.log('view did after enter ad');
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
    this.matchService.getAllMatchesFilter(this.searchMatchesForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.matches);
        this.matches = this.responseData.results.matches;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
		loading.dismiss();
        localStorage.clear();
        this.backToWelcome();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

    
  }
  viewLocation(location){
    
      this.navCtrl.push(ViewLocationPage,{location: location});
      
      

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
		loading.dismiss();
        localStorage.clear();
        this.backToWelcome();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
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

  getTeams(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }


    this.teamService.getAllTeams().then((result) => {
      this.teamresponseData = result;
      console.log(this.teamresponseData); 
      if (this.teamresponseData.statusCode == '200'){
       
        console.log("test 200");
        this.teams = this.teamresponseData.results.teams;
         }  else if(this.teamresponseData.statusCode == "404") {
        console.log("unauthorrised");
   
      //  this.backToWelcome();
      } else {
       
        console.log("error", this.teamresponseData);
      }
      
    }, (err) => {
      

      // Error log
    });
  }

  getTournaments(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }


    this.otherService.getAllTournament().then((result) => {
      this.tournamentresponseData = result;
      console.log(this.tournamentresponseData); 
      if (this.tournamentresponseData.statusCode == '200'){
       
        console.log("test 200");
        this.tournaments = this.tournamentresponseData.results.Tournaments;
         }  else if(this.tournamentresponseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
      //  this.backToWelcome();
      } else {
       
        console.log("error", this.tournamentresponseData)
      }
      
    }, (err) => {
      // Error log
    });
  }

  search(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getAllMatchesFilter(this.searchMatchesForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.matches);
        this.matches = this.responseData.results.matches;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
		loading.dismiss();
        localStorage.clear();
        this.backToWelcome();
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
