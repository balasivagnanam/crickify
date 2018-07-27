import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {MatchService} from '../../providers/matches/matches';
import {PreviousMatchDetailsPage} from '../previous-match-details/previous-match-details';
import {MatchTeamPage} from '../match-team/match-team';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';

import {OtherService} from '../../providers/other/other';
/**
 * Generated class for the PreviousMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previous-matches',
  templateUrl: 'previous-matches.html',
})
export class PreviousMatchesPage {
  responseData: any;
  matches: any = '';

  teamresponseData: any;
  tournamentresponseData: any;
 
  userPostData = {"user_id":"","token":""};
  private searchMatchesForm: FormGroup;
  tournaments:any;
  teams:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public loadingController:LoadingController,public authService:AuthService, public matchService:MatchService) {
    this.searchMatchesForm = formBuilder.group({

      endDate: [new Date().toISOString()],
      teamId: [0],
      tournamentId: [0]
    });
    
    this.getData();
    this.getTeams();
    this.getTournaments();
   
  }

  getData(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getPreviousMatchesFilter(this.searchMatchesForm.value).then((result) => {
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
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
    });
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchesPage');

    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    
  }

  goToMatchDetails(event){
    console.log("clicked match", event);
    this.navCtrl.push(PreviousMatchDetailsPage, {"matchId": event});
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
    this.matchService.getPreviousMatchesFilter(this.searchMatchesForm.value).then((result) => {
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


