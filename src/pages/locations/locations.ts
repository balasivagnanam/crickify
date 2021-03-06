import { Component } from '@angular/core';
import { NavController, NavParams, App,LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
//import { MatchService } from '../../providers/matches/matches';
import { StatsService } from '../../providers/stats/stats';
import {TeamService} from '../../providers/teams/teams';
import { Events,Platform  } from 'ionic-angular';
import {CreateLocationPage} from '../create-location/create-location';
import {OtherService} from '../../providers/other/other';
import { ViewLocationPage } from '../view-location/view-location';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  userDetails : any;
  responseData: any;
  tabsvalues : String = "team";
  selectedTeam: any;

  locations : any;
  statsArray: any;
  allStats: any;

  //selectedTeam : any;


 
  userPostData = {"user_id":"","token":""};

  constructor(private iab: InAppBrowser,private platform: Platform,public events: Events,public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, public teamService:TeamService, public statsService:StatsService, public app: App, public loadingController:LoadingController,public otherService:OtherService) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
  }
  ionViewWillEnter() {
   this.ionViewDidLoad();
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
    this.otherService.getAllLocation().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.locations = this.responseData.results.locations;
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

  
  view(location){
    this.navCtrl.push(ViewLocationPage,{location: location});
    
    }
  
    map(location){
      this.platform.ready().then(() => {
        var url='https://maps.google.com/?q='+location.lat+','+location.lng;
        const browser = this.iab.create(url,'_blank',{location:'no', zoom:'no'}); 
browser.show();

});
    
     
      
      }
 createLocation(){
    //Login page link
    this.navCtrl.push(CreateLocationPage);
  }
  editLocation(location){
    this.navCtrl.push(CreateLocationPage,{location: location});
    
    }
}
