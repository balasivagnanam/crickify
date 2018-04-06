webpackJsonp([12],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgot');
    };
    ForgotPage.prototype.forgot = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.forgot(this.userData).then(function (result) {
            _this.responseData = result;
            console.log("response in signup", _this.responseData);
            console.log("response code", _this.responseData.statusCode);
            loading.dismiss();
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results);
                var alert_1 = _this.alertController.create({
                    title: 'Email sent Successful',
                    subTitle: 'Email sent is successful',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (_this.responseData.statusCode == '401') {
                var alert_2 = _this.alertController.create({
                    title: 'User account exists!',
                    subTitle: 'This user does not exists in the list. Please Register!',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertController.create({
                    title: 'Server Unavailable!',
                    subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_3.present();
            }
            //this.navCtrl.push(HomePage);
        }, function (err) {
            // Error log
        });
    };
    ForgotPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'forgot',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\forgot\forgot.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Forgot Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Forgot Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="forgot()">Reset Password</button>\n\n        <a href="#" (click)="login()">Login Page</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_forgot__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
        if (this.authService.getAuthenticated()) {
            //console.log("token", this.authService.getToken());
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_forgot__["a" /* ForgotPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>welcome</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h1>Welcome to Your App</h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    \n\n      <ion-grid >\n\n        <ion-row>\n\n          <ion-col center text-center>\n\n            <button ion-button full color="success" (click)="signup()">Sign up</button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col center text-center>\n\n            <button ion-button full color="lightText" (click)="login()">Log in</button>\n\n          </ion-col>\n\n        </ion-row>\n\n		 <ion-row>\n\n          <ion-col center text-center>\n\n            <button ion-button full color="lightText" (click)="forgot()">Forgot Password</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthService */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_players_players__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = (function () {
    function MyProfilePage(navCtrl, navParams, playersService, loadingController, authService, teamService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.playersService = playersService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.teamService = teamService;
        this.tabsvalues = "batting";
        this.userPostData = { "user_id": "", "token": "" };
        this.playerStats = " ";
        this.battingStats = "";
        this.bowlingStats = "";
        this.teams = "";
        this.statsArray = [];
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
            this.getData();
        }
    }
    MyProfilePage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        //   this.playersService.getPlayerStats().then((result) => {
        //     this.responseData = result;
        //     console.log(this.responseData); 
        //     if (this.responseData.statusCode == '200'){
        //       loading.dismiss();
        //       console.log("test 200");
        //       console.log("result", this.responseData.results.Stats);
        //       this.playerStats = this.responseData.results.Stats;
        //       this.battingStats = this.responseData.results.Stats.battingStatistics;
        //       this.bowlingStats = this.responseData.results.Stats.bowlingStatistics;
        //     }  else if(this.responseData.statusCode == "404") {
        //       console.log("unauthorrised");
        //       localStorage.clear();
        //     } else {
        //       loading.dismiss();
        //       console.log("error", this.responseData)
        //     }
        // });
        this.teamService.getAllTeams().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.teams = _this.responseData.results.teams;
                _this.selectedTeam = _this.responseData.results.teams[0];
                _this.teamSelected(_this.responseData.results.teams[0]);
                console.log("result teams", JSON.stringify(_this.responseData.results));
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    MyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    MyProfilePage.prototype.teamSelected = function (team) {
        console.log("selected team", team);
        console.log("team id", team.id);
        this.getStats(team);
    };
    MyProfilePage.prototype.changeMenus = function (index) {
        this.teamSelectedIndex = index;
    };
    MyProfilePage.prototype.getStats = function (team) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.statsArray = [];
        this.playersService.getPlayerTournamentStats(team.id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("stats test 200");
                if (_this.responseData.results.stats.length == 0) {
                }
                else {
                    _this.statsArray = _this.responseData.results.stats;
                    console.log("result", _this.responseData.results.stats);
                    // console.log("arrary", JSON.parse(this.statsArray));
                }
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/'<!--\n\n  Generated template for the MyProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Profile</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="crickify-my-profile">\n\n    <ion-item>\n\n        <ion-label>Pick a Team</ion-label>\n\n        <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n          <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n\n\n  <h3>{{statsArray[0]?.stats.battingStatistics?.player.name}}</h3>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="batting">\n\n        Batting Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="fielding">\n\n            Fielding Stats\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n    <div *ngSwitchCase="\'batting\'">\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Tournament</p>\n\n                  <p>M</p>\n\n                  <p>I</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p class="cric-values-decimals">Av</p>\n\n                  <p class="cric-values-decimals">SR</p>\n\n              </li>\n\n              <li *ngFor="let tournament of statsArray">\n\n                  <p class="cric-player-name">{{tournament?.name}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.matches}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.innings}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.run}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.ball}}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.battingStatistics?.average | number : \'1.2-2\' }}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.battingStatistics?.sr | number : \'1.2-2\' }}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'bowling\'">\n\n        <div class="cric-stat-bowling-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Tournament</p>\n\n                  <p>M</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let tournament of statsArray">\n\n                  <p class="cric-player-name">{{tournament?.name}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.overs}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.run}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.wickets}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.bowlingStatistics?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n    </div>\n\n\n\n      <div *ngSwitchCase="\'fielding\'">\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Tournament</p>\n\n                    <p>M</p>\n\n                    <p>Ct</p>\n\n                    <p>R/O</p>\n\n                    <p>St</p>\n\n                </li>\n\n                <li *ngFor="let tournament of statsArray">\n\n                    <p class="cric-player-name">{{tournament?.name}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.catches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.runOuts}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.stumpings}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n      </div>\n\n\n\n    </div> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAccountPage = (function () {
    function MyAccountPage(navCtrl, navParams, authService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        this.user = " ";
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    MyAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAccountPage');
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("user", this.authService.getUser());
            this.user = JSON.parse(JSON.stringify(this.authService.getUser()));
        }
    };
    return MyAccountPage;
}());
MyAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-account',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-account\my-account.html"*/'<!--\n\n  Generated template for the MyAccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Account</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>Name  : {{user.name}}</p>\n\n  <p>Phone  : {{user.phone}}</p>\n\n  <p>Username  : {{user.username}}</p>\n\n  <p> Roles  : </p><p> <span *ngFor="let role of user.roles">\n\n                {{role}}</span> </p>\n\n      \n\n              \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-account\my-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], MyAccountPage);

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PreviousMatchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviousMatchDetailsPage = (function () {
    function PreviousMatchDetailsPage(navCtrl, navParams, matchService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.batting = [];
        this.bowling = [];
        this.match = "";
        this.tabsvalues = "summary";
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getData(this.matchId);
    }
    PreviousMatchDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    PreviousMatchDetailsPage.prototype.getData = function (matchId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatchSummary(matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.matchSummary);
                _this.matchSummary = _this.responseData.results.matchSummary;
                _this.match = _this.responseData.results.matchSummary.match;
                _this.batting = _this.responseData.results.matchSummary.batting;
                _this.bowling = _this.responseData.results.matchSummary.bowling;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    return PreviousMatchDetailsPage;
}());
PreviousMatchDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-match-details',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n  <ion-card-header>\n\n      {{match?.team?.teamname}} Vs\n\n      {{match?.opponent}}\n\n      <p>{{match?.tournament?.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{match?.matchTime | date:\'fullDate\'}}, {{match?.matchTime | date:\'shortTime\'}}</p>\n\n      <p>{{match?.location?.name}}, {{match?.location?.address}}</p>\n\n      <p>Toss won by <span *ngIf="match.tossWon">{{match?.team?.teamname}}</span><span *ngIf="!match.tossWon">{{match?.opponent}}</span>\n\n      <p>Result : {{match?.result}}, {{match?.remarks}}</p>\n\n      <p>{{match?.team?.teamname}}: {{match?.score}}/{{match?.wickets}}</p>\n\n      <p>{{match?.opponent}}:{{match?.oppositionScore}}/{{match?.oppositionWickets}}</p>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Summary\n\n      </ion-segment-button>\n\n      <ion-segment-button value="batting">\n\n          Batting\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Batting</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n                <p>R</p>\n\n                <p>B</p>\n\n                <p>4\'s</p>\n\n                <p>6\'s</p>\n\n                <p class="cric-values-decimals">SR</p>\n\n            </li>\n\n            <li *ngFor="let stat of (batting ? batting.slice(0,3) : [])">\n\n                <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                <p>{{stat?.run}}</p>\n\n                <p>{{stat?.ball}}</p>\n\n                <p>{{stat?.four}}</p>\n\n                <p>{{stat?.six}}</p>\n\n                <p class="cric-values-decimals">{{stat?.sr | number : \'1.2-2\'}}</p>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n        <div class="cric-stat-bowling-table">\n\n            <h4>Bowling</h4>\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let stat of (bowling ? bowling.slice(0,3) : [])">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.overs}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.wickets}}</p>\n\n                  <p>{{stat?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{stat?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n      </div>\n\n    <div *ngSwitchCase="\'batting\'">\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p>4\'s</p>\n\n                  <p>6\'s</p>\n\n              </li>\n\n              <li *ngFor="let stat of batting">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.ball}}</p>\n\n                  <p>{{stat?.four}}</p>\n\n                  <p>{{stat?.six}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n      </div>\n\n      <div *ngSwitchCase="\'bowling\'">\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Name</p>\n\n                    <p>O</p>\n\n                    <p>R</p>\n\n                    <p>W</p>\n\n                    <p>Wd</p>\n\n                    <p>EC</p>\n\n                </li>\n\n                <li *ngFor="let stat of bowling">\n\n                    <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                    <p>{{stat?.overs}}</p>\n\n                    <p>{{stat?.run}}</p>\n\n                    <p>{{stat?.wickets}}</p>\n\n                    <p>{{stat?.wide}}</p>\n\n                    <p>{{stat?.economy | number : \'1.2-2\'}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], PreviousMatchDetailsPage);

//# sourceMappingURL=previous-match-details.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_team_match_team__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PreviousMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviousMatchesPage = (function () {
    function PreviousMatchesPage(navCtrl, navParams, loadingController, authService, matchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.authService = authService;
        this.matchService = matchService;
        this.matches = '';
        this.getData();
    }
    PreviousMatchesPage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getPreviousMatches().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.matches);
                _this.matches = _this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    PreviousMatchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchesPage');
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
    };
    PreviousMatchesPage.prototype.goToMatchDetails = function (event) {
        console.log("clicked match", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */], { "matchId": event });
    };
    PreviousMatchesPage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__match_team_match_team__["a" /* MatchTeamPage */], { "matchId": event });
    };
    return PreviousMatchesPage;
}());
PreviousMatchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Completed Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team.teamname}} Vs\n\n          {{match.opponent}}\n\n          <p>{{match.tournament.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{match.matchTime | date:\'fullDate\'}}, {{match.matchTime | date:\'shortTime\'}}</p>\n\n          <p>{{match.location.name}}, {{match.location.address}}</p>\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n        </ion-card-content>\n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n      </ion-card>\n\n    </ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]])
], PreviousMatchesPage);

//# sourceMappingURL=previous-matches.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTeamsPage = (function () {
    function MyTeamsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyTeamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTeamsPage');
    };
    return MyTeamsPage;
}());
MyTeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-teams',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-teams\my-teams.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Teams</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  My Teams coming soon\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-teams\my-teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPage = (function () {
    function ResetPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgot');
    };
    ResetPage.prototype.reset = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.reset(this.userData).then(function (result) {
            _this.responseData = result;
            console.log("response in signup", _this.responseData);
            console.log("response code", _this.responseData.statusCode);
            loading.dismiss();
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results);
                var alert_1 = _this.alertController.create({
                    title: 'Password change Successful',
                    subTitle: 'Password change successful',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (_this.responseData.statusCode == '401') {
                var alert_2 = _this.alertController.create({
                    title: 'User account exists!',
                    subTitle: 'This user does not exists in the list. Please Register!',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertController.create({
                    title: 'Server Unavailable!',
                    subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                            }
                        }
                    ]
                });
                alert_3.present();
            }
            //this.navCtrl.push(HomePage);
        }, function (err) {
            // Error log
        });
    };
    ResetPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return ResetPage;
}());
ResetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'reset',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reset Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.password"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="reset()">Reset Password</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ResetPage);

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoutPage = (function () {
    function LogoutPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgot');
    };
    LogoutPage.prototype.logout = function () {
        localStorage.clear();
        this.authService.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return LogoutPage;
}());
LogoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'logout',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Log Out</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Log Out\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n      \n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="logout()">Log Out</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LogoutPage);

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/login';
//let isLoggedIn : boolean;
var isAuthenticated;
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
        var data = JSON.parse(localStorage.getItem('userData'));
        if (data == null) {
            isAuthenticated = false;
        }
        else {
            console.log("user data presnet");
            isAuthenticated = true;
        }
    }
    AuthService.prototype.getToken = function () {
        if (JSON.parse(localStorage.getItem('userData')).user != null) {
            return JSON.parse(localStorage.getItem('userData')).user.token;
        }
        else {
            return null;
        }
    };
    AuthService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('userData')).user;
    };
    AuthService.prototype.signup = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            _this.http.post(apiUrl + '/create', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response signup", res.json());
                if (res.json().statusCode == '200' || res.json().statusCode == '401') {
                    isAuthenticated = true;
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
                isAuthenticated = false;
                localStorage.clear();
            });
        });
    };
    AuthService.prototype.forgot = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            console.log("input", credentials.username);
            _this.http.post(apiUrl + '/forgotpassword', credentials.username, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response signup", res.json());
                if (res.json().statusCode == '200' || res.json().statusCode == '401') {
                    isAuthenticated = false;
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
                isAuthenticated = false;
                localStorage.clear();
            });
        });
    };
    AuthService.prototype.reset = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("token", _this.getToken());
            _this.http.post(apiUrl + '/updatepassword', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response update", res.json());
                if (res.json().statusCode == '200' || res.json().statusCode == '401') {
                    isAuthenticated = false;
                    localStorage.clear();
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
                isAuthenticated = false;
                localStorage.clear();
            });
        });
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            _this.http.post(apiUrl + '/userLogin', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response login", res.json());
                if (res.json().statusCode == '200' || res.json().statusCode == '401') {
                    isAuthenticated = true;
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
                isAuthenticated = false;
                localStorage.clear();
            });
        });
    };
    AuthService.prototype.getAuthenticated = function () {
        if (this.getToken() == null) {
            return false;
        }
        return isAuthenticated;
    };
    AuthService.prototype.logout = function () {
        isAuthenticated = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgot/forgot.module": [
		286,
		11
	],
	"../pages/login/login.module": [
		284,
		10
	],
	"../pages/logout/logout.module": [
		294,
		9
	],
	"../pages/match-team/match-team.module": [
		283,
		8
	],
	"../pages/my-account/my-account.module": [
		289,
		7
	],
	"../pages/my-profile/my-profile.module": [
		288,
		6
	],
	"../pages/my-teams/my-teams.module": [
		292,
		5
	],
	"../pages/previous-match-details/previous-match-details.module": [
		290,
		4
	],
	"../pages/previous-matches/previous-matches.module": [
		291,
		3
	],
	"../pages/reset/reset.module": [
		293,
		2
	],
	"../pages/signup/signup.module": [
		285,
		1
	],
	"../pages/welcome/welcome.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PlayersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = 'https://crickify.herokuapp.com/player';
var apiUrlTeam = 'https://crickify.herokuapp.com/teamplayer';
var PlayersProvider = (function () {
    function PlayersProvider(http) {
        this.http = http;
        console.log('Hello PlayersProvider Provider');
    }
    PlayersProvider.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    PlayersProvider.prototype.getPlayerStats = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/stats', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("player stats", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    PlayersProvider.prototype.getPlayerTournamentStats = function (teamid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrlTeam + '/tournament/stats/' + teamid + "/player", { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("player stats", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return PlayersProvider;
}());
PlayersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PlayersProvider);

//# sourceMappingURL=players.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/teamplayer';
//let isLoggedIn : boolean;
var isAuthenticated;
var StatsService = (function () {
    function StatsService(http) {
        this.http = http;
    }
    StatsService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    StatsService.prototype.getTeamStats = function (teamid) {
        var _this = this;
        console.log("passed team id", teamid);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/tournament/stats/' + teamid, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return StatsService;
}());
StatsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], StatsService);

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { MatchService } from '../../providers/matches/matches';


var ListPage = (function () {
    function ListPage(navCtrl, navParams, authService, teamService, statsService, app, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.tabsvalues = "team";
        //selectedTeam : any;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
        else {
            var root = this.app.getRootNav();
            root.popToRoot();
        }
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.getAllTeams().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.teams = _this.responseData.results.teams;
                _this.selectedTeam = _this.responseData.results.teams[0];
                _this.teamSelected(_this.responseData.results.teams[0]);
                console.log("result teams", JSON.stringify(_this.responseData.results));
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    ListPage.prototype.teamSelected = function (team) {
        console.log("selected team", team);
        console.log("team id", team.id);
        this.getStats(team);
    };
    ListPage.prototype.changeMenus = function (index) {
        this.selectedTeam = index;
    };
    ListPage.prototype.getStats = function (team) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.statsArray = [];
        this.statsService.getTeamStats(team.id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("stats test 200");
                if (_this.responseData.results.stats.length == 0) {
                }
                else {
                    _this.statsArray = _this.responseData.results.stats;
                    console.log("result", _this.responseData.results.stats);
                    // console.log("arrary", JSON.parse(this.statsArray));
                }
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Team Stats</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-segment [(ngModel)]="tabsvalues">\n\n        <ion-segment-button value="team">\n\n          Team Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="batting">\n\n          Batting Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="bowling">\n\n            Bowling Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="fielding">\n\n              Fielding Stats\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    \n\n    <div [ngSwitch]="tabsvalues">\n\n      <div *ngSwitchCase="\'team\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <ion-card *ngFor="let stat of statsArray">  \n\n                <ion-card-content>\n\n                    <h4>\n\n                        {{stat.name}}\n\n                    </h4>\n\n                  <div class="cric-cards">\n\n                      <p>Played</p>\n\n                      <h4>{{stat.statistics.played}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                    <p>Won</p>\n\n                    <h4>{{stat.statistics.won}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                      <p>Lost</p>\n\n                      <h4>{{stat.statistics.lost}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                    <p>No Result</p>\n\n                    <h4>{{stat.statistics.abandoned}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                      <p>High Total</p>\n\n                      <h4>{{stat.statistics.highestTotal}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                        <p>Low Total</p>\n\n                        <h4>{{stat.statistics.lowestTotal}}</h4>\n\n                  </div>\n\n                </ion-card-content>\n\n              \n\n              </ion-card>\n\n      </div>\n\n    \n\n      <div *ngSwitchCase="\'batting\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <div *ngFor="let stat of statsArray">\n\n              <div class="cric-stat-batting-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ul>\n\n                    <li class="header">\n\n                        <p class="cric-player-name">Name</p>\n\n                        <p>M</p>\n\n                        <p>I</p>\n\n                        <p>R</p>\n\n                        <p>B</p>\n\n                        <p class="cric-values-decimals">Av</p>\n\n                        <p class="cric-values-decimals">SR</p>\n\n                    </li>\n\n                    <li *ngFor="let player of stat.battingStatistics">\n\n                        <p class="cric-player-name">{{player.player.name}}</p>\n\n                        <p>{{player.matches}}</p>\n\n                        <p>{{player.innings}}</p>\n\n                        <p>{{player.run}}</p>\n\n                        <p>{{player.ball}}</p>\n\n                        <p class="cric-values-decimals">{{player.average | number : \'1.2-2\'}}</p>\n\n                        <p class="cric-values-decimals">{{player.sr | number : \'1.2-2\'}}</p>\n\n                    </li>\n\n                  </ul>\n\n                </div>\n\n              </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'bowling\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <div *ngFor="let stat of statsArray">\n\n              \n\n              <div class="cric-stat-bowling-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ul>\n\n                    <li class="header">\n\n                        <p class="cric-player-name">Name</p>\n\n                        <p>M</p>\n\n                        <p>O</p>\n\n                        <p>R</p>\n\n                        <p>W</p>\n\n                        <p>Wd</p>\n\n                        <p>EC</p>\n\n                    </li>\n\n                    <li *ngFor="let player of stat.bowlingStatistics">\n\n                        <p class="cric-player-name">{{player.player.name}}</p>\n\n                        <p>{{player.matches}}</p>\n\n                        <p>{{player.overs}}</p>\n\n                        <p>{{player.run}}</p>\n\n                        <p>{{player.wickets}}</p>\n\n                        <p>{{player.wide}}</p>\n\n                        <p>{{player.economy}}</p>\n\n                    </li>\n\n                  </ul>\n\n                </div>\n\n              </div>\n\n      </div>\n\n\n\n        <div *ngSwitchCase="\'fielding\'">\n\n            <ion-item>\n\n                <ion-label>Pick a Team</ion-label>\n\n                <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                  <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            \n\n            <div *ngFor="let stat of statsArray">\n\n                <div class="cric-stat-bowling-table">\n\n                    <h4>{{stat.name}}</h4>\n\n                    <ul>\n\n                      <li class="header">\n\n                          <p class="cric-player-name">Name</p>\n\n                          <p>M</p>\n\n                          <p>Ct</p>\n\n                          <p>R/O</p>\n\n                          <p>St</p>\n\n                      </li>\n\n                      <li *ngFor="let player of stat.bowlingStatistics">\n\n                          <p class="cric-player-name">{{player.player.name}}</p>\n\n                          <p>{{player.matches}}</p>\n\n                          <p>{{player.catches}}</p>\n\n                          <p>{{player.runOuts}}</p>\n\n                          <p>{{player.stumpings}}</p>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n                </div>\n\n        </div>\n\n\n\n      </div> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinancePage = (function () {
    function FinancePage(navCtrl, app, authService, financeService, loadingController) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.financeService = financeService;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    FinancePage.prototype.ionViewCanEnter = function () {
        console.log("view did enter", this.authService.getAuthenticated());
        return this.authService.getAuthenticated();
    };
    FinancePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.financeService.getAllExpense().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.expenses = _this.responseData.results.result;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    FinancePage.prototype.availabilitySelected = function (event, expense) {
        var _this = this;
        console.log("selected", event, expense);
        expense.player = this.authService.getUser();
        console.log("after change", expense);
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.financeService.postUpdate(expense).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.responseData);
                // console.log("result", this.responseData.results.matches);
                //this.matches = this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    FinancePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    FinancePage.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    FinancePage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__match_team_match_team__["a" /* MatchTeamPage */], { "matchId": event });
    };
    return FinancePage;
}());
FinancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finance',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Payments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let playerexpense of expenses">\n\n    <ion-card-header>\n\n      {{playerexpense.expense.description}}\n\n      <p>{{playerexpense.expense.team.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{playerexpense.expenseDate}}</p>\n\n      <p>${{playerexpense.amount}}</p>\n\n	   <p>${{playerexpense.cmnt}}</p>\n\n         <ion-label>\n\n          Select Payment Status\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n		   <ion-checkbox [(ngModel)]="playerexpense.paid"  (ionChange)="availabilitySelected($event, playerexpense)"></ion-checkbox>\n\n     \n\n	 \n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-select [(ngModel)]="playerexpense.paymentType" (ionChange)="availabilitySelected($event, playerexpense)">\n\n          <ion-option value="CASH">CASH</ion-option>\n\n        <ion-option value="FREE">FREE</ion-option>\n\n      <ion-option value="PREPAID">PREPAID</ion-option>\n\n        <ion-option value="TRANSFER">TRANSFER</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	<p><ion-label>Remarks</ion-label></p>\n\n      <ion-item>\n\n	  \n\n	       \n\n    <ion-input [(ngModel)]="playerexpense.remark" (ionChange)="availabilitySelected($event, playerexpense)"></ion-input>\n\n	 </ion-item>\n\n	\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], FinancePage);

//# sourceMappingURL=finance.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/finance';
//let isLoggedIn : boolean;
var isAuthenticated;
var FinanceProvider = (function () {
    function FinanceProvider(http) {
        this.http = http;
    }
    FinanceProvider.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    FinanceProvider.prototype.getAllExpense = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/playerExpense', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("expense", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    FinanceProvider.prototype.postUpdate = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/playerExpense/update', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("expense update", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return FinanceProvider;
}());
FinanceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], FinanceProvider);

//# sourceMappingURL=finance.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_matches_matches__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_stats_stats__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_previous_matches_previous_matches__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_teams_my_teams__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_players_players__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_finance_finance__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_previous_match_details_previous_match_details__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_match_team_match_team__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_finance_finance__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_forgot_forgot__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_reset_reset__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_logout_logout__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__["a" /* MyAccountPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_my_teams_my_teams__["a" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_match_team_match_team__["a" /* MatchTeamPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_finance_finance__["a" /* FinancePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_logout_logout__["a" /* LogoutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/match-team/match-team.module#MatchTeamPageModule', name: 'MatchTeamPage', segment: 'match-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-account/my-account.module#MyAccountPageModule', name: 'MyAccountPage', segment: 'my-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-match-details/previous-match-details.module#PreviousMatchDetailsPageModule', name: 'PreviousMatchDetailsPage', segment: 'previous-match-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-matches/previous-matches.module#PreviousMatchesPageModule', name: 'PreviousMatchesPage', segment: 'previous-matches', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-teams/my-teams.module#MyTeamsPageModule', name: 'MyTeamsPage', segment: 'my-teams', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#ResetPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__["a" /* MyAccountPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_my_teams_my_teams__["a" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_match_team_match_team__["a" /* MatchTeamPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_finance_finance__["a" /* FinancePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_logout_logout__["a" /* LogoutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_6__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_20__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_21__providers_finance_finance__["a" /* FinanceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_players_players__["a" /* PlayersProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_my_teams_my_teams__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_finance_finance__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Upcoming Matches', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Completed Matches', component: __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */] },
            { title: 'Team Stats', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__["a" /* MyProfilePage */] },
            { title: 'My Teams', component: __WEBPACK_IMPORTED_MODULE_10__pages_my_teams_my_teams__["a" /* MyTeamsPage */] },
            { title: 'Account Details', component: __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__["a" /* MyAccountPage */] },
            { title: 'Finance Details', component: __WEBPACK_IMPORTED_MODULE_11__pages_finance_finance__["a" /* FinancePage */] },
            { title: 'Update Password', component: __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset__["a" /* ResetPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__["a" /* LogoutPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionicapp\crickify\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\ionicapp\crickify\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *  reference http://www.9lessons.info/2017/06/ionic-angular-php-login-restful-api.html tutorial
 */
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userData = { "username": "", "password": "" };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.login(this.userData).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            localStorage.setItem('userData', JSON.stringify(_this.responseData));
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results);
                localStorage.setItem('userData', JSON.stringify(_this.responseData.results));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                loading.dismiss();
                var alert_1 = _this.alertController.create({
                    title: 'Wrong login/password',
                    subTitle: 'your login and password combination doesnt seem to work. Please try again or contact us to reset',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(LoginPage_1);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }, function (err) {
            // Error log
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Login\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n       \n\n        <ion-item>\n\n          <ion-label stacked>Username</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-button full color="success" (click)="login()">Login</button>\n\n        <a href="#" (click)="signup()">Sign Up</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/match';
//let isLoggedIn : boolean;
var isAuthenticated;
var MatchService = (function () {
    function MatchService(http) {
        this.http = http;
    }
    MatchService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    MatchService.prototype.getAllMatches = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/matches/availabilities', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getPreviousMatches = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/playedmatches', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("played matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getMatchSummary = function (matchid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/matchsummary/' + matchid, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("played matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.getMatchTeam = function (matchid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/team/' + matchid, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response players", res.json());
                if (res.json().statusCode == '200') {
                    console.log("players", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.postAvailability = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/availability', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return MatchService;
}());
MatchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MatchService);

//# sourceMappingURL=matches.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, app, authService, matchService, loadingController) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.authService = authService;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    HomePage.prototype.ionViewCanEnter = function () {
        console.log("view did enter", this.authService.getAuthenticated());
        return this.authService.getAuthenticated();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getAllMatches().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.matches);
                _this.matches = _this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    HomePage.prototype.availabilitySelected = function (event, match) {
        var _this = this;
        console.log("selected", event, match);
        match.player = this.authService.getUser();
        console.log("after change", match);
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.matchService.postAvailability(match).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.responseData);
                // console.log("result", this.responseData.results.matches);
                //this.matches = this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    HomePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    HomePage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__match_team_match_team__["a" /* MatchTeamPage */], { "matchId": event });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Upcoming Matches</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let match of matches">\n\n    <ion-card-header>\n\n      {{match.match.team.teamname}} versus\n\n      {{match.match.opponent}}\n\n      <p>{{match.match.tournament.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{match.match.matchTime | date:\'fullDate\'}}, {{match.matchTime | date:\'shortTime\'}}</p>\n\n      <p>{{match.match.location.name}}, {{match.match.location.address}}</p>\n\n	  \n\n         <ion-label>\n\n          Select Attendance\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="match.status" (ionChange)="availabilitySelected($event, match)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	<p><ion-label>Comment</ion-label></p>\n\n      <ion-item>\n\n	  \n\n	       \n\n    <ion-input [(ngModel)]="match.comments" (ionChange)="availabilitySelected($event, match)"></ion-input>\n\n	 </ion-item>\n\n	 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchTeamPage = (function () {
    function MatchTeamPage(navCtrl, navParams, matchService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.batting = [];
        this.tabsvalues = "summary";
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getData(this.matchId);
    }
    MatchTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    MatchTeamPage.prototype.getData = function (matchId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatchTeam(matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.players);
                _this.batting = _this.responseData.results.players;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    return MatchTeamPage;
}());
MatchTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Team Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Team List\n\n      </ion-segment-button>\n\n     \n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Team</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n              \n\n            </li>\n\n            <li *ngFor="let stat of batting">\n\n                <p class="cric-player-name">{{stat?.name}}</p>\n\n              \n\n            </li>\n\n          </ul>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], MatchTeamPage);

//# sourceMappingURL=match-team.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, authService, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.signup(this.userData).then(function (result) {
            _this.responseData = result;
            console.log("response in signup", _this.responseData);
            console.log("response code", _this.responseData.statusCode);
            loading.dismiss();
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results);
                localStorage.setItem('userData', JSON.stringify(_this.responseData.results.user));
                var alert_1 = _this.alertController.create({
                    title: 'Registration Successful',
                    subTitle: 'Your Registration is successful',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (_this.responseData.statusCode == '401') {
                loading.dismiss();
                var alert_2 = _this.alertController.create({
                    title: 'User account exists!',
                    subTitle: 'This user account exists in the list. Please login or reset your password!',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                loading.dismiss();
                var alert_3 = _this.alertController.create({
                    title: 'Server Unavailable!',
                    subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_3.present();
            }
            //this.navCtrl.push(HomePage);
        }, function (err) {
            // Error log
        });
    };
    SignupPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registration\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label stacked>Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.name"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Phone</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-button full color="success" (click)="signup()">Sign up</button>\n\n        <a href="#" (click)="login()">Login Page</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://crickify.herokuapp.com/teamplayer';
//let isLoggedIn : boolean;
var isAuthenticated;
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
    }
    TeamService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    TeamService.prototype.getAllTeams = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/teams', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response matches", res.json());
                if (res.json().statusCode == '200') {
                    console.log("matches", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return TeamService;
}());
TeamService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TeamService);

//# sourceMappingURL=teams.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map