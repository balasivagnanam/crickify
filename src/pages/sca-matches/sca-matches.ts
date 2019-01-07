import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {MatchService} from '../../providers/matches/matches';
import moment from 'moment';
import {PreviousMatchDetailsPage} from '../previous-match-details/previous-match-details';
import {AddMatchTeamPage} from '../add-match-team/add-match-team';
import {CreateMatchPage} from '../create-match/create-match';
import {MatchAvailabilityPage} from '../match-availability/match-availability';
import {PreviousMatchDetailsEditPage} from '../previous-match-details-edit/previous-match-details-edit';
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
  selector: 'page-sca-matches',
  templateUrl: 'sca-matches.html',
})
export class  ScaMatchesPage {
  responseData: any;
  matches: any = '';
   team:any;
   deleteResponseData: any;
   teamresponseData: any;
   tournamentresponseData: any;
   sca:any;
   userPostData = {"user_id":"","token":""};
   private searchTeamForm: FormGroup;
   tournaments:any;
   teams:any;
   scateams:any;
  constructor(public alert:AlertController,public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public loadingController:LoadingController,public authService:AuthService, public matchService:MatchService) {
    this.team = JSON.parse(localStorage.getItem('team'));
	
  //this.getTeams();
  this.getTournaments();
  this.searchTeamForm = formBuilder.group({
    division: ['',Validators.required],
    team: ['',Validators.required],
  });
 
  }
  ionViewWillEnter() {
    this.getTournaments();
  }

  onDivisionChange(key)
  {
    this.sca.forEach(element => {
  
      if(element.divison==key){

        this.scateams=element.teams;
      }
});
    
    
  }

  claim(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.claimTeam(this.team,this.searchTeamForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        this.alertDialog("Success","Success");
      }  else if(this.responseData.statusCode == "404") {
        loading.dismiss();
        this.alertDialog("Error","Not Found");
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
        this.alertDialog("Error","Error");
      }
      
    }, (err) => {
      loading.dismiss();
      this.alertDialog("Error","Error");
    });
  }


  alertDialog(title,message){
  
    let alert = this.alert.create({
            title: title,
            subTitle: message,
            buttons: [
            {
              text: 'OK',
              handler: data => {
                console.log('ok clicked');
               
              }
            }
          ]
          });
          alert.present();
    }
  search(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.getScaSchedules(this.searchTeamForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.matches = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "404") {
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchesPage');

    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    
  }

 
 
  getTournaments(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.getSca().then((result) => {
      loading.dismiss();
      this.tournamentresponseData = result;
      console.log(this.tournamentresponseData); 
      if (this.tournamentresponseData.statusCode == '200'){       
       
        this.sca = this.tournamentresponseData.results.result;
         } 
      
    }, (err) => {
      loading.dismiss();
    });
  }

  
}


