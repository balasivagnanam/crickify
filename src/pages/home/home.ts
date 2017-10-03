import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails : any;
  responseData: any;
 
  userPostData = {"user_id":"","token":""};



  constructor(public navCtrl: NavController, public app:App, public authService:AuthService) {
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log("fetch data", data);
    this.userDetails = data;
    console.log("user data from storage", this.userDetails)
    this.userPostData.user_id = this.userDetails.id;
    this.userPostData.token = this.userDetails.token;
  }

  ionViewCanEnter(){
    console.log("view did enter", this.authService.getAuthenticated());
      return this.authService.getAuthenticated();
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }
  }

  backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();
 }
 
 logout(){
      localStorage.clear();
      setTimeout(() => this.backToWelcome(), 1000);
 }

}
