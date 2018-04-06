import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import {WelcomePage} from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {MyAccountPage} from '../pages/my-account/my-account';
import {PreviousMatchesPage} from '../pages/previous-matches/previous-matches';
import {MyTeamsPage} from '../pages/my-teams/my-teams';
import {MatchTeamPage} from '../pages/match-team/match-team';
import {FinancePage} from '../pages/finance/finance';
import {ForgotPage} from '../pages/forgot/forgot';
import {ResetPage} from '../pages/reset/reset';
import {LogoutPage} from '../pages/logout/logout';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Upcoming Matches', component: HomePage },
      {title: 'Completed Matches', component: PreviousMatchesPage},
	  { title: 'Team Stats', component: ListPage },
      {title: 'My Profile', component: MyProfilePage},
      {title:'My Teams', component: MyTeamsPage},
      {title: 'Account Details', component: MyAccountPage},
	  {title: 'Finance Details', component: FinancePage},
	  {title: 'Update Password', component: ResetPage},
	  {title: 'Logout', component: LogoutPage},
    ];

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
