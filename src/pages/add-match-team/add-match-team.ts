import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {MatchService} from '../../providers/matches/matches';
import {TeamService} from '../../providers/teams/teams';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
/**
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-match-team',
  templateUrl: 'add-match-team.html',
})
export class AddMatchTeamPage {

  matchId: any;
  responseData: any;
private addTeamForm: FormGroup;
  batting: any = [];
  players:any=[];
  tabsvalues: any = "summary";
team:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public matchService: MatchService, public loadingController: LoadingController,public teamService:TeamService,formBuilder: FormBuilder) {
     this.addTeamForm = formBuilder.group({
     
      player: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    
  });
  
	 this.team = JSON.parse(localStorage.getItem('team'));
	console.log("passed data",navParams.get('matchId') );
    this.matchId = navParams.get('matchId');
    this.getData(this.matchId);
	this.getPlayers();
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchDetailsPage');
  }

  getData(matchId){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getMatchTeam(matchId).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.players);
  
        this.batting = this.responseData.results.players;
     
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
delete(player){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.deleteMatchTeam(this.matchId,player).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.getData(this.matchId);
       
     
      }  else if(this.responseData.statusCode == "404") {
       loading.dismiss();
        
      } else {
        loading.dismiss();
       
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });
  }
  addPlayer(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.createMatchTeam(this.matchId,this.addTeamForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
         this.getData(this.matchId);
      }  else if(this.responseData.statusCode == "404") {
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
	  loading.dismiss();
    });
  }
   getPlayers(){
    this.teamService.getAllPlayers(this.team).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log("test 200");
        this.players = this.responseData.results.teams;
         }  else if(this.responseData.statusCode == "404") {
     
      } else {
        
        console.log("error", this.responseData)
      }
      
    }, (err) => {
     
    });
  }
}
