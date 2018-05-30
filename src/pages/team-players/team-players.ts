import { Component } from '@angular/core';
import { NavController, NavParams, App,LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
//import { MatchService } from '../../providers/matches/matches';
import { StatsService } from '../../providers/stats/stats';
import {TeamService} from '../../providers/teams/teams';
import { Events } from 'ionic-angular';
import {CreatePlayerPage} from '../create-player/create-player';
/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-players',
  templateUrl: 'team-players.html',
})
export class TeamPlayersPage {

  userDetails : any;
  responseData: any;
  tabsvalues : String = "team";
  selectedTeam: any;

  players : any;
  statsArray: any;
  allStats: any;
  userPostData = {"user_id":"","token":""};

  constructor(public events: Events,public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public teamService:TeamService, public statsService:StatsService, public app: App, public loadingController:LoadingController) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
	  this.selectedTeam = JSON.parse(localStorage.getItem('team'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    } else {
      const root = this.app.getRootNav();
      root.popToRoot();
    }
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
	
    this.teamService.getAllPlayers(this.selectedTeam).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.players = this.responseData.results.teams;
         }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
      //  this.backToWelcome();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
       loading.dismiss();
    });
  }

  

  player(id){
this.events.publish("UPDATE_SIDE_MENU", "some event related data")
  }
 addPlayer(){
    //Login page link
    this.navCtrl.push(CreatePlayerPage);
  }
 
}
