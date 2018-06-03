import { Component } from '@angular/core';
import { NavController, NavParams, App,LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
//import { MatchService } from '../../providers/matches/matches';
import { StatsService } from '../../providers/stats/stats';
import {TeamService} from '../../providers/teams/teams';
import { Events } from 'ionic-angular';
import {TeamMatchesPage} from '../team-matches/team-matches';
/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  userDetails : any;
  responseData: any;
  tabsvalues : String = "team";
  selectedTeam: any;

  teams : any;
  statsArray: any;
  allStats: any;

  //selectedTeam : any;


 
  userPostData = {"user_id":"","token":""};

  constructor(public events: Events,public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public teamService:TeamService, public statsService:StatsService, public app: App, public loadingController:LoadingController) {
  
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
    this.teamService.getAdminTeams().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.teams = this.responseData.results.teams;
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

  

  goToTeam(team){

 localStorage.setItem('team', JSON.stringify(team));
  this.navCtrl.push(TeamMatchesPage);
              this.navCtrl.setRoot(TeamMatchesPage);
  }

 
}
