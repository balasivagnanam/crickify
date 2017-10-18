import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {HttpModule} from '@angular/http';

import {AuthService} from '../providers/auth/auth';
import {MatchService} from '../providers/matches/matches';
import {StatsService} from '../providers/stats/stats';
import {TeamService} from '../providers/teams/teams';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {WelcomePage} from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {MyAccountPage} from '../pages/my-account/my-account';
import {PreviousMatchesPage} from '../pages/previous-matches/previous-matches';
import {MyTeamsPage} from '../pages/my-teams/my-teams';
import { PlayersProvider } from '../providers/players/players';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    MyProfilePage,
    MyAccountPage,
    PreviousMatchesPage,
    MyTeamsPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    MyProfilePage,
    MyAccountPage,
    PreviousMatchesPage,
    MyTeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,MatchService,StatsService, TeamService,PlayersProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayersProvider
  ]
})
export class AppModule {}
