import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {PlayersProvider} from '../../providers/players/players';
import {AuthService} from '../../providers/auth/auth';
import {StatsService} from '../../providers/stats/stats';
import {TeamService} from '../../providers/teams/teams';
import {BattingService} from '../../providers/batting/batting';
import { Chart } from 'chart.js';
import { MyAnalysisPage } from '../my-analysis/my-analysis';
/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  tabsvalues : String = "batting";


  userDetails : any;
  responseData: any;
 statsresponseData: any;
  battingresponseData: any;
  dismissalresponseData: any;
  userPostData = {"user_id":"","token":""};
  playerStats : any = " ";
  battingStats : any = "";
  bowlingStats : any = "";
  teams: any = "";
  teamSelectedIndex: any;
  statsArray: any = [];
  selectedTeam: any;
lastbattings:any= [];
dismissalstats= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public statsService: StatsService,public battingService: BattingService,public playersService: PlayersProvider, public loadingController:LoadingController, public authService:AuthService, public teamService: TeamService) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
      this.getData();
    }
  }

  getData(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    
    loading.present();

    this.playersService.getPlayerStats().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log("test 200");
        console.log("result", this.responseData.results.Stats);
        this.playerStats = this.responseData.results.Stats;
        this.battingStats = this.responseData.results.Stats.battingStatistics;
        this.bowlingStats = this.responseData.results.Stats.bowlingStatistics;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
     
      } else {
        
        console.log("error", this.responseData)
      }
  });

  this.teamService.getAllTeams().then((result) => {
    this.responseData = result;
    console.log(this.responseData); 
    if (this.responseData.statusCode == '200'){
      loading.dismiss();
      console.log("test 200");
      this.teams = this.responseData.results.teams;
      this.selectedTeam = this.responseData.results.teams[0];
      this.teamSelected(this.responseData.results.teams[0]);
      console.log("result teams", JSON.stringify(this.responseData.results));
    }  else if(this.responseData.statusCode == "404") {
      console.log("unauthorrised");
      localStorage.clear();
    //  this.backToWelcome();
    } else {
      loading.dismiss();
      console.log("error", this.responseData)
    }
    
  }, (err) => {
    // Error log
  });
  }

  ionViewDidLoad() {
    
    
  }
  analysis() {
    
    this.navCtrl.push(MyAnalysisPage);
  }

  teamSelected(team){
    console.log("selected team", team);
    console.log("team id", team.id);
    this.getStats(team);
   
  }

  changeMenus(index:number)
  {
      this.teamSelectedIndex =index;
  }
  getStats(team){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    this.statsArray = [];
    this.playersService.getPlayerTournamentStats(team.id).then((result) => {
      this.statsresponseData = result;
      console.log(this.statsresponseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("stats test 200");
        if(this.statsresponseData.results.stats.length == 0){

        } else {
          this.statsArray = this.statsresponseData.results.stats;
          console.log("result", this.statsresponseData.results.stats);
         // console.log("arrary", JSON.parse(this.statsArray));
        }
        
      }  else if(this.statsresponseData.statusCode == "404") {
   loading.dismiss();
      //  this.backToWelcome();
      } else {
        loading.dismiss();
       
      }
      
    }, (err) => {
       loading.dismiss();
    });
  }
  
}
