import {Component} from '@angular/core';
import {NavController, NavParams, App, LoadingController, AlertController} from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
//import { MatchService } from '../../providers/matches/matches';
import {StatsService} from '../../providers/stats/stats';
import {TeamService} from '../../providers/teams/teams';
import {Events} from 'ionic-angular';
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

  userDetails: any;
  responseData: any;
  tabsvalues: String = "team";
  selectedTeam: any;

  players: any;
  statsArray: any;
  allStats: any;
  userPostData = {"user_id": "", "token": ""};

  constructor(public events: Events, public navCtrl: NavController, public alertController: AlertController, public navParams: NavParams, public authService: AuthService, public teamService: TeamService, public statsService: StatsService, public app: App, public loadingController: LoadingController) {
    if (this.authService.getAuthenticated()) {
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

  ionViewWillEnter() {
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()) {
      console.log("token", this.authService.getToken());
    }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();

    this.teamService.getAllPlayers(this.selectedTeam).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();

        this.players = this.responseData.results.teams;

      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        this.alertDialog('Error', 'Error');
      } else {
        loading.dismiss();
        this.alertDialog('Error', 'Error');
      }

    }, (err) => {
      loading.dismiss();
      this.alertDialog('Error', 'Error');
    });
  }

  delete(player) {

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.deletePlayer(player, this.selectedTeam).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        this.ionViewDidLoad();
      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        this.alertDialog('Error', 'Error');
        //  this.backToWelcome();
      } else {
        loading.dismiss();
        this.alertDialog('Error', 'Error');
      }

    }, (err) => {
      loading.dismiss();
      this.alertDialog('Error', 'Error');
    });
  }


  addPlayer() {
    //Login page link
    this.navCtrl.push(CreatePlayerPage);
  }

  alertDialog(title, message) {

    let alert = this.alertController.create({
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

}
