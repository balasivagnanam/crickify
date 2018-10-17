import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { PracticeService } from '../../providers/practice/practice';
import {MatchTeamPage} from '../match-team/match-team';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { PipesModule } from '../../pipes/pipes.module';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';

import {OtherService} from '../../providers/other/other';
import { PracticeTeamPage } from '../practice-team/practice-team';
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html'
})

export class PracticePage {

  userDetails : any;
  responseData: any;
  teamresponseData: any;
  tournamentresponseData: any;
 
  userPostData = {"user_id":"","token":""};
  private searchPracticeForm: FormGroup;
 
  teams:any;
practices : any;

  constructor(public navCtrl: NavController, public app:App, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public practiceService:PracticeService, public loadingController: LoadingController,public admob: AdMobFree) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
    this.getTeams();
  
    this.searchPracticeForm = formBuilder.group({

      startDate: [new Date().toISOString()],
      teamId: [0]
      
    });

  }

  ionViewCanEnter(){
	  

  }
  goToPracticeTeam(event){
    console.log("clicked match team", event);
    this.navCtrl.push(PracticeTeamPage, {"practiceId": event});
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
    this.practiceService.getAllPracticeAvailabilityFilter(this.searchPracticeForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.matches);
        this.practices = this.responseData.results.practices;
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
  
  availabilitySelected(event, practice){
    console.log("selected",event, practice);
    practice.player = this.authService.getUser();
    console.log("after change", practice);
    

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });

    this.practiceService.postAvailability(practice).then((result) => {

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
        
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

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

  

  search(){
    console.log('ionViewDidLoad home page');
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.getAllPracticeAvailabilityFilter(this.searchPracticeForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.practices);
        this.practices = this.responseData.results.practices;
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
