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
  selector: 'page-match-availability',
  templateUrl: 'match-availability.html',
})
export class MatchAvailabilityPage {

  matchId: any;
  responseData: any;

  avaailability: any = [];
  available: any = [];
  unavailable: any = [];
  tentative: any = [];
  unknown: any = [];
  tabsvalues: any = "available";

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
    this.matchService.getMatchAvailability(matchId).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
		  
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.Availibilties);
  
        this.avaailability = this.responseData.results.Availibilties;
		for(let data of this.avaailability) {
  if(data.status==0){
	  this.unknown.push(data.player)
  }else if(data.status==1){
	  this.available.push(data.player)
  }else if(data.status==2){this.unavailable.push(data.player)
	  
  }else if(data.status==3){this.tentative.push(data.player)
	  
  }
}
     
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
