import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {PlayersProvider} from '../../providers/players/players';
import {AuthService} from '../../providers/auth/auth';
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
 
  userPostData = {"user_id":"","token":""};
  playerStats : any = " ";
  battingStats : any = "";
  bowlingStats : any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public playersService: PlayersProvider, public loadingController:LoadingController, public authService:AuthService) {
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
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.Stats);
        this.playerStats = this.responseData.results.Stats;
        this.battingStats = this.responseData.results.Stats.battingStatistics;
        this.bowlingStats = this.responseData.results.Stats.bowlingStatistics;

      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage'); 
  }

}
