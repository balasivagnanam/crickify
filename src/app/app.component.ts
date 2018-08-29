import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CreateMatchPage} from '../pages/create-match/create-match';
import {WelcomePage} from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {MyAccountPage} from '../pages/my-account/my-account';
import {PreviousMatchesPage} from '../pages/previous-matches/previous-matches';
import {TeamMatchesPage} from '../pages/team-matches/team-matches';
import {MyTeamsPage} from '../pages/my-teams/my-teams';
import {MatchTeamPage} from '../pages/match-team/match-team';
import {FinancePage} from '../pages/finance/finance';
import {ForgotPage} from '../pages/forgot/forgot';
import {ResetPage} from '../pages/reset/reset';
import {LogoutPage} from '../pages/logout/logout';
import {TeamPlayersPage} from '../pages/team-players/team-players';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { Events } from 'ionic-angular';
import {TournamentsPage} from '../pages/tournaments/tournaments';
import {LocationsPage} from '../pages/locations/locations';
import {ModeChangePage} from '../pages/modeChange/modeChange';
import { TeamExpensePage } from '../pages/team-expense/team-expense';
import { ViewPlayerExpensePage } from '../pages/view-player-expenses/view-player-expenses';
import moment from 'moment';
import { PracticePage } from '../pages/practice/practice';
import {CreatePracticeModule} from '../pages/create-practice/create-practice.module';
import {CreatePracticePage} from '../pages/create-practice/create-practice';
import { TeamPracticePage } from '../pages/team-practice/team-practice';
import { ClassifiedPage } from '../pages/classifieds/classifieds';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;
type:any;
  pages: Array<{title: string, component: any}>;
adminPages: Array<{title: string, component: any}>;
normalPages: Array<{title: string, component: any}>;
  constructor(public events: Events,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,androidPermissions: AndroidPermissions,public push: Push,private alertCtrl: AlertController) {
	  this.type="normal";
	  platform.ready().then(() => {

         androidPermissions.requestPermissions(
           [
             androidPermissions.PERMISSION.INTERNET,
			 androidPermissions.PERMISSION.ACCESS_NETWORK_STATE,
       androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
       androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
           ]
         );

    }
	) 
    this.initializeApp();
this.initPushNotification();

this.adminPages=[{ title: 'Matches', component: TeamMatchesPage},
{ title: 'Practice', component: TeamPracticePage},
      { title: 'Players', component: TeamPlayersPage },
	   
      {title: 'Tournament', component: TournamentsPage},
	  
      {title: 'Profile', component: MyProfilePage},
      {title:'Manage Teams', component: MyTeamsPage},
	  {title:'Change Mode', component: ModeChangePage},
       {title: 'Team Expense', component: TeamExpensePage},
       {title: 'Player Payment Details', component: ViewPlayerExpensePage},
	  {title: 'Update Password', component: ResetPage},
	  {title: 'Logout', component: LogoutPage},
    ];

this.normalPages=[
      { title: 'Upcoming Matches', component: HomePage },
      {title: 'Completed Matches', component: PreviousMatchesPage},
      {title: 'Practice', component: PracticePage},
      
	  { title: 'Team Stats', component: ListPage },
      {title: 'My Profile', component: MyProfilePage},
       {title:'Change Mode', component: ModeChangePage},
      {title: 'Account Details', component: MyAccountPage},
    {title: 'Finance Details', component: FinancePage},
    {title: 'Classifieds', component:ClassifiedPage},
    { title: 'Location', component: LocationsPage},
	  {title: 'Update Password', component: ResetPage},
	 
	  {title: 'Logout', component: LogoutPage},
    ];
    // used for an example of ngFor and navigation
    this.pages = this.normalPages;
this.events.subscribe("UPDATE_SIDE_MENU", (eventData) => {
	if(eventData=="admin"){
   this.pages = this.adminPages;
   
}else{
	 this.pages = this.normalPages;
	this.type="normal";
}
});
  }
initPushNotification(){

  const options: PushOptions = {
    android: {
      senderID: "402670322623"
    }
  };

  const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log("device token:", data.registrationId);

      let alert = this.alertCtrl.create({
                  title: 'device token',
                  subTitle: data.registrationId,
                  buttons: ['OK']
                });
                alert.present();

    });

    pushObject.on('notification').subscribe((data: any) => {
      console.log('message', data.message);
      if (data.additionalData.foreground) {
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
            }
          }]
        });
        confirmAlert.present();
      } else {
      let alert = this.alertCtrl.create({
                  title: 'clicked on',
                  subTitle: "you clicked on the notification!",
                 buttons: ['OK']
                });
                alert.present();
        console.log("Push notification clicked");
      }
   });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
	  

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
