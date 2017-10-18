import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import {MatchService} from '../../providers/matches/matches';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController:LoadingController,public authService:AuthService, public matchService:MatchService) {
    this.getData();
  }

  getData(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getPreviousMatches().then((result) => {
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

}
