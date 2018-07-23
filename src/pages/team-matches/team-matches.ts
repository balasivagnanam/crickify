import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {MatchService} from '../../providers/matches/matches';
import moment from 'moment';
import {PreviousMatchDetailsPage} from '../previous-match-details/previous-match-details';
import {AddMatchTeamPage} from '../add-match-team/add-match-team';
import {CreateMatchPage} from '../create-match/create-match';
import {MatchAvailabilityPage} from '../match-availability/match-availability';
import {PreviousMatchDetailsEditPage} from '../previous-match-details-edit/previous-match-details-edit';
/**
 * Generated class for the PreviousMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-matches',
  templateUrl: 'team-matches.html',
})
export class  TeamMatchesPage {
  responseData: any;
  matches: any = '';
   team:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController:LoadingController,public authService:AuthService, public matchService:MatchService) {
    this.team = JSON.parse(localStorage.getItem('team'));
	this.getData();
	
  }
  ionViewWillEnter() {
   this.getData();
  }

  getData(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getMatches(this.team).then((result) => {
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
    this.navCtrl.push(PreviousMatchDetailsEditPage, {"matchId": event});
  }
  
  
  goToMatchTeam(event){
    console.log("clicked match team", event);
    this.navCtrl.push(AddMatchTeamPage, {"matchId": event});
  }
  goToMatchAvailability(event){
    console.log("clicked match team", event);
    this.navCtrl.push(MatchAvailabilityPage, {"matchId": event});
  }
   addMatch(){
    //Login page link
    this.navCtrl.push(CreateMatchPage);
  }

}
