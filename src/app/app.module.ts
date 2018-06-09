import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AdMobFree } from '@ionic-native/admob-free';
import {HttpModule} from '@angular/http';
import {AuthService} from '../providers/auth/auth';
import {MatchService} from '../providers/matches/matches';
import {StatsService} from '../providers/stats/stats';
import {TeamService} from '../providers/teams/teams';
import {OtherService} from '../providers/other/other';
import {BattingService} from '../providers/batting/batting';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {BowlingService} from '../providers/bowling/bowling';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import {WelcomePage} from '../pages/welcome/welcome';
import {WelcomePageModule} from '../pages/welcome/welcome.module';
import { SignupPage } from '../pages/signup/signup';
import { SignupPageModule } from '../pages/signup/signup.module';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {MyProfilePageModule} from '../pages/my-profile/my-profile.module';
import {MyAccountPage} from '../pages/my-account/my-account';
import {MyAccountPageModule} from '../pages/my-account/my-account.module';
import {PreviousMatchesPage} from '../pages/previous-matches/previous-matches';
import {PreviousMatchesPageModule} from '../pages/previous-matches/previous-matches.module';
import {MyTeamsPage} from '../pages/my-teams/my-teams';
import {MyTeamsPageModule} from '../pages/my-teams/my-teams.module';
import { PlayersProvider } from '../providers/players/players';
import { FinanceProvider } from '../providers/finance/finance';
import {PreviousMatchDetailsPage} from '../pages/previous-match-details/previous-match-details';
import {PreviousMatchDetailsPageModule} from '../pages/previous-match-details/previous-match-details.module';
import {MatchTeamPage} from '../pages/match-team/match-team';
import {MatchTeamPageModule} from '../pages/match-team/match-team.module';
import {FinancePage} from '../pages/finance/finance';
import {ForgotPage} from '../pages/forgot/forgot';
import {ForgotPageModule} from '../pages/forgot/forgot.module';
import {FinancePageModule} from '../pages/finance/finance.module';
import {ResetPage} from '../pages/reset/reset';
import {ResetPageModule} from '../pages/reset/reset.module';
import {LogoutPage} from '../pages/logout/logout';
import {LogoutPageModule} from '../pages/logout/logout.module';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {CreateTeamPage} from '../pages/create-team/create-team';
import {CreateTeamModule} from '../pages/create-team/create-team.module';
import {TeamPlayersPage} from '../pages/team-players/team-players';
import {TeamPlayersPageModule} from '../pages/team-players/team-players.module';
import {FormsModule} from "@angular/forms";
import {CreatePlayerPage} from '../pages/create-player/create-player';
import {CreatePlayerModule} from '../pages/create-player/create-player.module';
import {CreateMatchPage} from '../pages/create-match/create-match';
import {CreateMatchModule} from '../pages/create-match/create-match.module';
import {TeamMatchesPage} from '../pages/team-matches/team-matches';
import {TeamMatchesPageModule} from '../pages/team-matches/team-matches.module';
import {MatchAvailabilityPage} from '../pages/match-availability/match-availability';
import {MatchAvailabilityPageModule} from '../pages/match-availability/match-availability.module';
import {TournamentsPage} from '../pages/tournaments/tournaments';
import {LocationsPage} from '../pages/locations/locations';
import {TournamentsPageModule} from '../pages/tournaments/tournaments.module';
import {LocationsPageModule} from '../pages/locations/locations.module';
import {CreateLocationPage} from '../pages/create-location/create-location';
import {CreateLocationModule} from '../pages/create-location/create-location.module';
import {CreateTournamentPage} from '../pages/create-tournament/create-tournament';
import {CreateTournamentModule} from '../pages/create-tournament/create-tournament.module';
import {ModeChangePage} from '../pages/modeChange/modeChange';
import {ModeChangeModule} from '../pages/modeChange/modeChange.module';
import {AddMatchTeamPage} from '../pages/add-match-team/add-match-team';
import {AddMatchTeamPageModule} from '../pages/add-match-team/add-match-team.module';
import {BattingPage} from '../pages/batting/batting';
import {BattingPageModule} from '../pages/batting/batting.module';
import {BowlingPage} from '../pages/bowling/bowling';
import {BowlingPageModule} from '../pages/bowling/bowling.module';
import {PreviousMatchDetailsEditPage} from '../pages/previous-match-details-edit/previous-match-details-edit';
import {PreviousMatchDetailsEditPageModule} from '../pages/previous-match-details-edit/previous-match-details-edit.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    IonicModule.forRoot(MyApp),
	FinancePageModule,ForgotPageModule,LoginPageModule, SignupPageModule,
    MyProfilePageModule,
    MyAccountPageModule,
    PreviousMatchesPageModule,
    MyTeamsPageModule,
    PreviousMatchDetailsPageModule,
	MatchTeamPageModule,
	ResetPageModule,
	LogoutPageModule,
	WelcomePageModule,
	CreateTeamModule,
	TeamPlayersPageModule,
	CreatePlayerModule,
	TeamMatchesPageModule,
	CreateMatchModule,
	MatchAvailabilityPageModule,
	TournamentsPageModule,BowlingPageModule,
	LocationsPageModule,CreateLocationModule,CreateTournamentModule,ModeChangeModule,AddMatchTeamPageModule,PreviousMatchDetailsEditPageModule,BattingPageModule
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
    MyTeamsPage,
    PreviousMatchDetailsPage,
	MatchTeamPage,
	FinancePage,
	ForgotPage,
	ResetPage,
	LogoutPage,
	CreateTeamPage,TeamPlayersPage,CreatePlayerPage,TeamMatchesPage,CreateMatchPage,MatchAvailabilityPage,TournamentsPage,LocationsPage,
	CreateLocationPage,CreateTournamentPage,ModeChangePage,AddMatchTeamPage,PreviousMatchDetailsEditPage,BattingPage,BowlingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,MatchService,StatsService, TeamService,PlayersProvider,FinanceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayersProvider,AdMobFree,AndroidPermissions,Push,OtherService,BattingService,BowlingService
  ]
})
export class AppModule {}
