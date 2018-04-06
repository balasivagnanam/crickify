import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {MatchService} from '../../providers/matches/matches';

/**
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match-team',
  templateUrl: 'match-team.html',
})
export class MatchTeamPage {

  matchId: any;
  responseData: any;

  batting: any = [];
  
  tabsvalues: any = "summary";

  constructor(public navCtrl: NavController, public navParams: NavParams, public matchService: MatchService, public loadingController: LoadingController) {
    console.log("passed data",navParams.get('matchId') );
    this.matchId = navParams.get('matchId');
    this.getData(this.matchId);
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

}
