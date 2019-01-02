import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreateMatchPage } from '../pages/create-match/create-match';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyAccountPage } from '../pages/my-account/my-account';
import { PreviousMatchesPage } from '../pages/previous-matches/previous-matches';
import { TeamMatchesPage } from '../pages/team-matches/team-matches';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { MatchTeamPage } from '../pages/match-team/match-team';
import { FinancePage } from '../pages/finance/finance';
import { ForgotPage } from '../pages/forgot/forgot';
import { ResetPage } from '../pages/reset/reset';
import { LogoutPage } from '../pages/logout/logout';
import { TeamPlayersPage } from '../pages/team-players/team-players';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Events } from 'ionic-angular';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { LocationsPage } from '../pages/locations/locations';
import { ModeChangePage } from '../pages/modeChange/modeChange';
import { TeamExpensePage } from '../pages/team-expense/team-expense';
import { ViewPlayerExpensePage } from '../pages/view-player-expenses/view-player-expenses';
import moment from 'moment';
import { PracticePage } from '../pages/practice/practice';
import { CreatePracticeModule } from '../pages/create-practice/create-practice.module';
import { CreatePracticePage } from '../pages/create-practice/create-practice';
import { TeamPracticePage } from '../pages/team-practice/team-practice';
import { ClassifiedPage } from '../pages/classifieds/classifieds';
import { NewsPage } from '../pages/news/news';
import { MultiImageUpload } from '../components/multi-image-upload/multi-image-upload';
import { ProductPage } from '../pages/product/product';
import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
import { tap } from 'rxjs/operators';
import { Firebase } from '@ionic-native/firebase';
import {PrivacyPage} from '../pages/privacy/privacy';
import {PrivacyPageModule} from '../pages/privacy/privacy.module';
import {ChatPage} from '../pages/chat/chat';
import {ChatPageModule} from '../pages/chat/chat.module';
import { ChatRoomPage } from '../pages/chat-room/chat-room';
import { SlotsPage } from '../pages/slots/slots';
import {BookingPage} from '../pages/booking/booking';
import { SubLocationSlotsPage } from '../pages/sublocation-slots/sublocation-slots';
import {SubLocationBookingPage} from '../pages/sublocation-booking/sublocation-booking';
import { ExtraPage } from '../pages/extra/extra';
import { TeamStatsPage } from '../pages/teamstats/teamstats';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(MultiImageUpload) multiImageUpload: MultiImageUpload;
  rootPage: any = WelcomePage;
  type: any;
  pages: Array<{ title: string, component: any }>;
  adminPages: Array<{ title: string, component: any }>;
  normalPages: Array<{ title: string, component: any }>;
  emptyPages:Array<{ title: string, component: any }>;
  constructor(firebase: Firebase,public events: Events, toastCtrl: ToastController,public fcm: FcmProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, androidPermissions: AndroidPermissions, public push: Push, private alertCtrl: AlertController) {
    this.type = "normal";
    
    platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('cordova')) {
      // Get a FCM token
      fcm.getToken()

      // Listen to incoming messages
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            message: msg['body'],
            duration: 3000
          });
          toast.present();
        })
      )
      .subscribe()
    

    
  
    }
      androidPermissions.requestPermissions(
        [ androidPermissions.PERMISSION.INTERNET,
          androidPermissions.PERMISSION.ACCESS_NETWORK_STATE,
          androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
          androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        ]
      );

    }
    )
    this.initializeApp();
    
    this.emptyPages=[];
    this.adminPages = [{ title: 'Matches', component: TeamMatchesPage },
    { title: 'Practice', component: TeamPracticePage },
    { title: 'Players', component: TeamPlayersPage },    
    { title: 'Message', component: ChatPage },
    { title: 'Statistics', component: TeamStatsPage },
    { title: 'Tournament', component: TournamentsPage },
    { title: 'Change Mode', component: ModeChangePage },
    { title: 'Team Expense', component: TeamExpensePage },
    { title: 'Player Payment Details', component: ViewPlayerExpensePage },
    { title: 'Logout', component: LogoutPage },
    ];
    this.normalPages = [
      { title: 'Upcoming Matches', component: HomePage },
      { title: 'Upcoming Practice', component: PracticePage },
      { title: 'Change Mode', component: ModeChangePage },
      { title: 'Book Facilities', component: SlotsPage },
      { title: 'Location', component: LocationsPage }, 
      { title: 'Cricket Extra', component: ExtraPage }, 
      { title: 'Messages', component: ChatRoomPage },   
      { title: 'Completed Matches', component: PreviousMatchesPage },
      { title: 'Team Stats', component: ListPage },
      { title: 'My Finance', component: FinancePage },   
      { title: 'My Booking', component: BookingPage },   
      { title: 'My Career', component: MyProfilePage },
      { title: 'My Profile', component: MyAccountPage },      
      { title: 'Logout', component: LogoutPage },
    ];
    // used for an example of ngFor and navigation
    this.pages = this.normalPages;
    this.events.subscribe("UPDATE_SIDE_MENU", (eventData) => {
      if (eventData == "admin") {
        this.pages = this.adminPages;

      } else {
        this.pages = this.normalPages;
        this.type = "normal";
      }
    });
  }

  
  
  initializeApp() {
    
  }

  openPage(page) {


    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
