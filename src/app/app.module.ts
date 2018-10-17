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
import { ClassifiedPage } from '../pages/classifieds/classifieds';
import { NewsPage } from '../pages/news/news';
import { ViewNewsPage } from '../pages/viewnews/viewnews';

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

import {ForgotPage} from '../pages/forgot/forgot';
import {ForgotPageModule} from '../pages/forgot/forgot.module';
import {FinancePageModule} from '../pages/finance/finance.module';
import {FinancePage} from '../pages/finance/finance';
import {ResetPage} from '../pages/reset/reset';
import {ResetPageModule} from '../pages/reset/reset.module';
import {LogoutPage} from '../pages/logout/logout';
import {LogoutPageModule} from '../pages/logout/logout.module';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import {CreateTeamPage} from '../pages/create-team/create-team';
import {CreateTeamModule} from '../pages/create-team/create-team.module';
import {TeamPlayersPage} from '../pages/team-players/team-players';
import {TeamPlayersPageModule} from '../pages/team-players/team-players.module';
import {FormsModule} from "@angular/forms";
import {CreatePlayerPage} from '../pages/create-player/create-player';
import {CreatePlayerModule} from '../pages/create-player/create-player.module';
import {CreateMatchPage} from '../pages/create-match/create-match';
import {CreateMatchModule} from '../pages/create-match/create-match.module';
import {CreateAdPage} from '../pages/create-ad/create-ad';
import {CreateAdPageModule} from '../pages/create-ad/create-ad.module';
import {CreateNewsPage} from '../pages/create-news/create-news';
import {CreateNewsPageModule} from '../pages/create-news/create-news.module';
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
import { ImagesProvider } from '../providers/images/images';
import { PracticeService } from '../providers/practice/practice';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import {UploadModalPage} from '../pages/upload-modal/upload-modal';
import {UploadModalPageModule} from '../pages/upload-modal/upload-modal.module';
import { TeamExpensePage } from '../pages/team-expense/team-expense';
import { TeamExpensePageModule } from '../pages/team-expense/team-expense.module';
import { AddPlayerExpensePage } from '../pages/add-player-expense/add-player-expense';
import { AddPlayerExpensePageModule } from '../pages/add-player-expense/add-player-expense.module';
import { AddTeamExpensePage } from '../pages/add-team-expense/add-team-expense';
import { AddTeamExpensePageModule } from '../pages/add-team-expense/add-team-expense.module';
import { PipesModule } from '../pipes/pipes.module';
import { ViewPlayerExpensePage } from '../pages/view-player-expenses/view-player-expenses';
import { ViewPlayerExpensePageModule } from '../pages/view-player-expenses/view-player-expenses.module';
import {CreatePracticePage} from '../pages/create-practice/create-practice';
import { PracticePage } from '../pages/practice/practice';
import {CreatePracticeModule} from '../pages/create-practice/create-practice.module';
import { TeamPracticePage } from '../pages/team-practice/team-practice';
import { TeamPracticePageModule } from '../pages/team-practice/team-practice.module';
import {PracticeAvailabilityPage} from '../pages/practice-availability/practice-availability';
import {PracticeAvailabilityPageModule} from '../pages/practice-availability/practice-availability.module';
import { ClassifiedService } from '../providers/classified/classified';
import { NewsService } from '../providers/news/news';
import {ClassifiedResponsePage} from '../pages/classified-response/classified-response';
import {ClassifiedResponsePageModule} from '../pages/classified-response/classified-response.module';
import {ClassifiedResponseCreatePage} from '../pages/classified-response-create/classified-response-create';
import {ClassifiedResponseCreatePageModule} from '../pages/classified-response-create/classified-response-create.module';
import { MultiImageUpload } from '../components/multi-image-upload/multi-image-upload';
import { MultiImageUploadModule } from '../components/multi-image-upload/multi-image-upload.module';
import { ProductPage } from '../pages/product/product';
import { ViewProductPage } from '../pages/viewproduct/viewproduct';
import {CreateProductPage} from '../pages/create-product/create-product';
import {CreateProductPageModule} from '../pages/create-product/create-product.module';
import { ProductService } from '../providers/product/product';
import { FcmProvider } from '../providers/fcm/fcm';
import { Firebase } from '@ionic-native/firebase';
import { ChatRoomPage } from '../pages/chat-room/chat-room';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {PrivacyPage} from '../pages/privacy/privacy';
import {PrivacyPageModule} from '../pages/privacy/privacy.module';
import {ChatPage} from '../pages/chat/chat';
import {ChatPageModule} from '../pages/chat/chat.module';
import { ChatService } from '../providers/chat/chat';
import { MessageService } from '../providers/message/message';
import {MyAnalysisPage} from '../pages/my-analysis/my-analysis';
import {MyAnalysisPageModule} from '../pages/my-analysis/my-analysis.module';
import { ViewLocationPage } from '../pages/view-location/view-location';
import { ViewLocationModule } from '../pages/view-location/view-location.module';
import { ViewSubLocationPage } from '../pages/view-sublocation/view-sublocation';
import { ViewSubLocationModule } from '../pages/view-sublocation/view-sublocation.module';
import {CreateSubLocationPage} from '../pages/create-sublocation/create-sublocation';
import {CreateSubLocationModule} from '../pages/create-sublocation/create-sublocation.module';
import {CreateSchedulePage} from '../pages/create-schedule/create-schedule';
import {CreateSchedulePageModule} from '../pages/create-schedule/create-schedule.module';
import { SubLocationService } from '../providers/sublocation/sublocation';
import { SlotService } from '../providers/slot/slot';
import { SlotScheduleService } from '../providers/slotSchedule/slotSchedule';
import { BookingService } from '../providers/booking/booking';
import { SlotsPage } from '../pages/slots/slots';
import {CreateBookingPageModule} from '../pages/create-booking/create-booking.module';
import {CreateBookingPage} from '../pages/create-booking/create-booking';
import {BookingPageModule} from '../pages/booking/booking.module';
import {BookingPage} from '../pages/booking/booking';
import { SubLocationSlotsPage } from '../pages/sublocation-slots/sublocation-slots';
import {SubLocationBookingPage} from '../pages/sublocation-booking/sublocation-booking';
import {SubLocationBookingPageModule} from '../pages/sublocation-booking/sublocation-booking.module';
import {CreateSlotPageeModule} from '../pages/create-slot/create-slot.module';
import {CreateSlotPage} from '../pages/create-slot/create-slot';
import {ViewBookingPageModule} from '../pages/view-booking/view-booking.module';
import {ViewBookingPage} from '../pages/view-booking/view-booking';
import {ViewSlotPageModule} from '../pages/view-slot/view-slot.module';
import {ViewSlotPage} from '../pages/view-slot/view-slot';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {AddPracticeTeamPage} from '../pages/add-practice-team/add-practice-team';
import {AddPracticeTeamPageModule} from '../pages/add-practice-team/add-practice-team.module';

import {PracticeTeamPage} from '../pages/practice-team/practice-team';
import {PracticeTeamPageModule} from '../pages/practice-team/practice-team.module';
const firebase = {
  apiKey: "AIzaSyDuAXZK8lTb8lsbjeSIHWl21kpOKQIUal4",
  authDomain: "crickify-200803.firebaseapp.com",
  databaseURL: "https://crickify-200803.firebaseio.com",
  projectId: "crickify-200803",
  storageBucket: "crickify-200803.appspot.com",
  messagingSenderId: "402670322623"
 }
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,ClassifiedPage,SlotsPage,SubLocationSlotsPage,
    PracticePage,NewsPage,ViewNewsPage,ProductPage,ViewProductPage,ChatRoomPage
  ],
  imports: [  AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,SubLocationBookingPageModule,PracticeTeamPageModule,
    BrowserModule, FormsModule, HttpModule,PipesModule,
    IonicModule.forRoot(MyApp),ViewLocationModule,AddPracticeTeamPageModule,
	FinancePageModule,ForgotPageModule,LoginPageModule, SignupPageModule,ViewSlotPageModule,
    MyProfilePageModule,ViewSubLocationModule,ViewBookingPageModule,
    MyAccountPageModule,CreateSchedulePageModule,CreateSlotPageeModule,
    PreviousMatchesPageModule,PrivacyPageModule,ChatPageModule,
    MyTeamsPageModule,MyAnalysisPageModule,CreateSubLocationModule,
    PreviousMatchDetailsPageModule,CreateProductPageModule,
	MatchTeamPageModule,CreateAdPageModule,
	ResetPageModule,TeamPracticePageModule,CreateNewsPageModule,
	LogoutPageModule,ClassifiedResponsePageModule,
	WelcomePageModule,AddPlayerExpensePageModule,BookingPageModule,
	CreateTeamModule,PracticeAvailabilityPageModule,
	TeamPlayersPageModule,CreatePracticeModule,
	CreatePlayerModule,CreateBookingPageModule,
	TeamMatchesPageModule,ViewPlayerExpensePageModule,
	CreateMatchModule,ClassifiedResponseCreatePageModule,
	MatchAvailabilityPageModule,UploadModalPageModule,
	TournamentsPageModule,BowlingPageModule,TeamExpensePageModule,AddTeamExpensePageModule,
	LocationsPageModule,CreateLocationModule,CreateTournamentModule,ModeChangeModule,AddMatchTeamPageModule,PreviousMatchDetailsEditPageModule,BattingPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,ViewSubLocationPage,SubLocationSlotsPage,PracticeTeamPage,
    HomePage,MyAnalysisPage,CreateSchedulePage,ViewBookingPage,
    ListPage,ClassifiedPage,CreateProductPage,SubLocationBookingPage,
    WelcomePage,ViewPlayerExpensePage,CreateSubLocationPage,
    LoginPage,ClassifiedResponsePage,SlotsPage,ViewSlotPage,
    SignupPage,CreateAdPage,ViewLocationPage,CreateSlotPage,
    MyProfilePage,ChatRoomPage,PrivacyPage,ChatPage,AddPracticeTeamPage,
    MyAccountPage,ViewProductPage,ProductPage,
    PreviousMatchesPage,PracticeAvailabilityPage,
    MyTeamsPage,AddPlayerExpensePage,BookingPage,
    PreviousMatchDetailsPage,NewsPage,CreateBookingPage,
	MatchTeamPage,CreatePracticePage,
	FinancePage,TeamPracticePage,ViewNewsPage,
	ForgotPage,AddTeamExpensePage,
	ResetPage,PracticePage,ClassifiedResponseCreatePage,
	LogoutPage,UploadModalPage,TeamExpensePage,CreateNewsPage,
	CreateTeamPage,TeamPlayersPage,CreatePlayerPage,TeamMatchesPage,CreateMatchPage,MatchAvailabilityPage,TournamentsPage,LocationsPage,
	CreateLocationPage,CreateTournamentPage,ModeChangePage,AddMatchTeamPage,PreviousMatchDetailsEditPage,BattingPage,BowlingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,InAppBrowser,
    AuthService,MatchService,StatsService, TeamService,PlayersProvider,FinanceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayersProvider,AdMobFree,AndroidPermissions,Push,OtherService,BattingService,BowlingService,
    ImagesProvider,Camera,FileTransfer,PracticeService,ClassifiedService,NewsService,ProductService,
    Firebase,SlotScheduleService,
    FcmProvider,ChatService,MessageService,SubLocationService,BookingService,SlotService
  ]
})
export class AppModule {}
