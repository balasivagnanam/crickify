import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import {HomePage} from '../home/home';
import {ForgotPage} from '../forgot/forgot';
import {AuthService} from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { MatchService } from '../../providers/matches/matches';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
battings : any;
bowlings : any;
  responseData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService,public loadingController: LoadingController,public matchService:MatchService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    if (this.authService.getAuthenticated()){
      //console.log("token", this.authService.getToken());
      this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage);
	  
    }
	const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getBestBatting().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log("test 200");
        console.log("result", this.responseData.results.Batting);
	  this.battings = this.responseData.results.Batting;}
       else {
       
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		
      // Error log
    });
	
	this.matchService.getBestBowling().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log("test 200");
        console.log("result", this.responseData.results.Bowling);
	  this.bowlings = this.responseData.results.Bowling;}
       else {
        
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		
      // Error log
    });
	
	loading.dismiss();
  }
  
  login(){
    this.navCtrl.push(LoginPage);
    }
  
    signup(){
    this.navCtrl.push(SignupPage);
    }
 forgot(){
    this.navCtrl.push(ForgotPage);
    }
}
