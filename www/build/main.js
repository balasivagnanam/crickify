webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_other_other__ = __webpack_require__(19);
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
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateMatchPage = (function () {
    function CreateMatchPage(navCtrl, navParams, alertController, teamService, loadingController, formBuilder, matchService, otherService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.matchService = matchService;
        this.otherService = otherService;
        this.createMatchForm = formBuilder.group({
            opponent: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            description: ['',],
            remarks: ['',],
            matchTime: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            location: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            tournament: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
        this.getLocations();
        this.getTournament();
        this.opponent = this.createMatchForm.controls['opponent'];
        this.team = JSON.parse(localStorage.getItem('team'));
    }
    CreateMatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateMatchPage.prototype.getLocations = function () {
        var _this = this;
        this.otherService.getAllLocation().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.locations = _this.responseData.results.locations;
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    CreateMatchPage.prototype.getTournament = function () {
        var _this = this;
        this.otherService.getAllTournament().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.tournaments = _this.responseData.results.Tournaments;
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    CreateMatchPage.prototype.addMatch = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.addMatch(this.createMatchForm.value, this.team).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.alertDialog('Success', 'Added');
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'Error');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    CreateMatchPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return CreateMatchPage;
}());
CreateMatchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-match',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-match\create-match.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Add Match</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Add Match\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createMatchForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Opponent</ion-label>\n\n            <ion-input formControlName="opponent" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Remark</ion-label>\n\n            <ion-input formControlName="remarks" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime formControlName="matchTime" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Location</ion-label>\n\n  <ion-select formControlName="location">\n\n    <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Tournament</ion-label>\n\n  <ion-select formControlName="tournament">\n\n    <ion-option *ngFor="let key of tournaments" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createMatchForm.valid" (click)="addMatch()">\n\n            Add Match\n\n            \n\n          </button>\n\n    </form>\n\n\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-match\create-match.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]])
], CreateMatchPage);

//# sourceMappingURL=create-match.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_players_players__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_batting_batting__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chart_js__);
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
    function MyProfilePage(navCtrl, navParams, battingService, playersService, loadingController, authService, teamService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.battingService = battingService;
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
        this.lastbattings = [];
        this.dismissalstats = [];
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
        this.getLastBatting(this.lastbattings);
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
            _this.statsresponseData = result;
            console.log(_this.statsresponseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("stats test 200");
                if (_this.statsresponseData.results.stats.length == 0) {
                }
                else {
                    _this.statsArray = _this.statsresponseData.results.stats;
                    console.log("result", _this.statsresponseData.results.stats);
                    // console.log("arrary", JSON.parse(this.statsArray));
                }
            }
            else if (_this.statsresponseData.statusCode == "404") {
                loading.dismiss();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
            }
        }, function (err) {
            loading.dismiss();
        });
        this.battingService.getLastBattings(this.userDetails.user.id).then(function (result) {
            _this.battingresponseData = result;
            if (_this.responseData.statusCode == '200') {
                _this.lastbattings = _this.battingresponseData.results.battings;
                _this.getLastBatting(_this.battingresponseData.results.battings);
            }
            else if (_this.battingresponseData.statusCode == "404") {
                //  this.backToWelcome();
            }
            else {
                console.log("error", _this.battingresponseData);
            }
        }, function (err) {
        });
        this.battingService.getDismissalstats(this.userDetails.user.id).then(function (result) {
            _this.dismissalresponseData = result;
            if (_this.responseData.statusCode == '200') {
                _this.dismissalstats = _this.dismissalresponseData.results.dismisals;
                _this.getDismissalstats(_this.dismissalresponseData.results.dismisals);
            }
            else if (_this.dismissalresponseData.statusCode == "404") {
                //  this.backToWelcome();
            }
            else {
                console.log("error", _this.dismissalresponseData);
            }
        }, function (err) {
        });
    };
    MyProfilePage.prototype.getDismissalstats = function (dismissals) {
        var label = [];
        var value = [];
        var count = 0;
        if (dismissals.length > 10) {
            count = 10;
        }
        else {
            count = dismissals.length;
        }
        for (var i = 1; i < count; i++) {
            label.push(dismissals[i].name);
            value.push(dismissals[i].count);
        }
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: label,
                datasets: [{
                        label: '# of dismissals',
                        data: value,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
    };
    MyProfilePage.prototype.getLastBatting = function (battings) {
        var label = [];
        var value = [];
        var count = 0;
        if (battings.length > 10) {
            count = 10;
        }
        else {
            count = battings.length;
        }
        for (var i = 1; i < count; i++) {
            label.push(battings[i].match.opponent);
            value.push(battings[i].run);
        }
        this.barChart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                        label: '# of runs',
                        data: value,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    return MyProfilePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('barCanvas'),
    __metadata("design:type", Object)
], MyProfilePage.prototype, "barCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], MyProfilePage.prototype, "doughnutCanvas", void 0);
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/'<!--\n\n  Generated template for the MyProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Profile</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-item>\n\n        <ion-label>Pick a Team</ion-label>\n\n        <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n          <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n\n\n  <h3>{{statsArray[0]?.stats.battingStatistics?.player.name}}</h3>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="batting">\n\n        Batting Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="fielding">\n\n            Fielding Stats\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n    <div *ngSwitchCase="\'batting\'">\n\n    <ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n  </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Tournament</p>\n\n                  <p>M</p>\n\n                  <p>I</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p class="cric-values-decimals">Av</p>\n\n                  <p class="cric-values-decimals">SR</p>\n\n              </li>\n\n              <li *ngFor="let tournament of statsArray">\n\n                  <p class="cric-player-name">{{tournament?.name}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.matches}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.innings}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.run}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.ball}}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.battingStatistics?.average | number : \'1.2-2\' }}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.battingStatistics?.sr | number : \'1.2-2\' }}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n          <div class="cric-stat-batting-chart">\n\n           <canvas #barCanvas></canvas>\n\n            </div>\n\n            \n\n               <ion-card>\n\n      <ion-card-header>\n\n        Doughnut Chart\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #doughnutCanvas></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n            </ion-card-content>\n\n			  </ion-card>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'bowling\'">\n\n     <ion-card>\n\n  <ion-card-header>\n\n  Bowling\n\n  </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-bowling-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Tournament</p>\n\n                  <p>M</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let tournament of statsArray">\n\n                  <p class="cric-player-name">{{tournament?.name}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.overs}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.run}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.wickets}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.bowlingStatistics?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n           </ion-card-content>\n\n			  </ion-card>\n\n    </div>\n\n\n\n      <div *ngSwitchCase="\'fielding\'">\n\n         <ion-card>\n\n  <ion-card-header>\n\n  Fielding\n\n  </ion-card-header>\n\n <ion-card-content>\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Tournament</p>\n\n                    <p>M</p>\n\n                    <p>Ct</p>\n\n                    <p>R/O</p>\n\n                    <p>St</p>\n\n                </li>\n\n                <li *ngFor="let tournament of statsArray">\n\n                    <p class="cric-player-name">{{tournament?.name}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.catches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.runOuts}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.stumpings}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n            </ion-card-content>\n\n			  </ion-card>\n\n      </div>\n\n\n\n    </div> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_batting_batting__["a" /* BattingService */], __WEBPACK_IMPORTED_MODULE_2__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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
var battingapiUrl = 'https://crickify.herokuapp.com/batting';
var bowlingapiUrl = 'https://crickify.herokuapp.com/Bowling';
//let isLoggedIn : boolean;
var isAuthenticated;
var BattingService = (function () {
    function BattingService(http) {
        this.http = http;
    }
    BattingService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    BattingService.prototype.getAllMatches = function () {
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
    BattingService.prototype.getBestBatting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(battingapiUrl + '/top')
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
    BattingService.prototype.getLastBattings = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(battingapiUrl + '/batting/lastbatting/stats/' + userId, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response batting", res.json());
                if (res.json().statusCode == '200') {
                    console.log("batting", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BattingService.prototype.getDismissalstats = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(battingapiUrl + '/batting/dismisals/stats/' + userId, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response batting", res.json());
                if (res.json().statusCode == '200') {
                    console.log("batting", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BattingService.prototype.getBestBowling = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(bowlingapiUrl + '/top')
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
    BattingService.prototype.getPreviousMatches = function () {
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
    BattingService.prototype.getMatches = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/matches/' + team.id, { headers: headers })
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
    BattingService.prototype.getBattingSummary = function (battingId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(battingapiUrl + '/batting/' + battingId, { headers: headers })
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
    BattingService.prototype.getMatchAvailability = function (matchid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/availability/' + matchid, { headers: headers })
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
    BattingService.prototype.getMatchTeam = function (matchid) {
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
    BattingService.prototype.postAvailability = function (data) {
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
    BattingService.prototype.updateAvailability = function (match, player, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(status));
            _this.http.post(apiUrl + '/' + match + '/availability/' + player.id, status, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BattingService.prototype.addBatting = function (data, match) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(battingapiUrl + '/batting/' + match, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BattingService.prototype.createMatchTeam = function (matchId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data.player.id));
            _this.http.post(apiUrl + '/team/' + matchId, data.player.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BattingService.prototype.sendTeamList = function (matchId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/team/send/' + matchId, null, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BattingService.prototype.deleteMatchTeam = function (matchId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/team/' + matchId + '/player/' + data.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return BattingService;
}());
BattingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BattingService);

//# sourceMappingURL=batting.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_images_images__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadModalPage = (function () {
    function UploadModalPage(navCtrl, alertController, loadingController, navParams, viewCtrl, imagesProvider) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagesProvider = imagesProvider;
        this.imageData = this.navParams.get('data');
    }
    UploadModalPage.prototype.saveImage = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.imagesProvider.uploadImage(this.imageData).then(function (res) {
            _this.alertDialog('Success', 'Upload Success');
            loading.dismiss();
            //this.viewCtrl.dismiss({reload: true});
        }, function (err) {
            _this.alertDialog('Error', err);
            loading.dismiss();
            //this.dismiss();
        });
    };
    UploadModalPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    UploadModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return UploadModalPage;
}());
UploadModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-upload-modal',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\upload-modal\upload-modal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>Upload Image</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <img [src]="imageData" style="width: 100%">\n\n  <button ion-button full icon-left (click)="saveImage()">\n          <ion-icon name="checkmark"></ion-icon>\n          Save & Upload Image\n  </button>\n</ion-content>\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\upload-modal\upload-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__providers_images_images__["a" /* ImagesProvider */]])
], UploadModalPage);

//# sourceMappingURL=upload-modal.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagesProvider = (function () {
    function ImagesProvider(http, transfer) {
        this.http = http;
        this.transfer = transfer;
        this.apiURL = 'https://crickify.herokuapp.com/file';
    }
    ImagesProvider.prototype.getImages = function () {
        return this.http.get(this.apiURL + 'images').map(function (res) { return res.json(); });
    };
    ImagesProvider.prototype.deleteImage = function (img) {
        return this.http.delete(this.apiURL + 'images/' + img._id);
    };
    ImagesProvider.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    ImagesProvider.prototype.uploadImage = function (img) {
        // Destination URL
        var url = this.apiURL + '/api/user/upload';
        // File for Upload
        var targetPath = img;
        var headers = new Headers();
        headers.set("token", this.getToken());
        var options = {
            fileKey: 'file',
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            headers: { 'token': this.getToken() }
        };
        var fileTransfer = this.transfer.create();
        // Use the FileTransfer to upload the image
        return fileTransfer.upload(targetPath, url, options);
    };
    return ImagesProvider;
}());
ImagesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]])
], ImagesProvider);

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(23);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-match-details',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n      {{match?.team?.teamname}} Vs\n\n      {{match?.opponent}}\n\n      <p>{{match?.tournament?.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{match?.matchTime | date:\'fullDate\'}}, {{match?.matchTime | date:\'shortTime\'}}</p>\n\n      <p>{{match?.location?.name}}, {{match?.location?.address}}</p>\n\n      <p>Toss won by <span *ngIf="match.tossWon">{{match?.team?.teamname}}</span><span *ngIf="!match.tossWon">{{match?.opponent}}</span>\n\n      <p>Result : {{match?.result}}, {{match?.remarks}}</p>\n\n      <p>{{match?.team?.teamname}}: {{match?.score}}/{{match?.wickets}}</p>\n\n      <p>{{match?.opponent}}:{{match?.oppositionScore}}/{{match?.oppositionWickets}}</p>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Summary\n\n      </ion-segment-button>\n\n      <ion-segment-button value="batting">\n\n          Batting\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n      <ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Batting</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n                <p>R</p>\n\n                <p>B</p>\n\n                <p>4\'s</p>\n\n                <p>6\'s</p>\n\n                <p class="cric-values-decimals">SR</p>\n\n            </li>\n\n            <li *ngFor="let stat of (batting ? batting.slice(0,3) : [])">\n\n                <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                <p>{{stat?.run}}</p>\n\n                <p>{{stat?.ball}}</p>\n\n                <p>{{stat?.four}}</p>\n\n                <p>{{stat?.six}}</p>\n\n                <p class="cric-values-decimals">{{stat?.sr | number : \'1.2-2\'}}</p>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n          \n\n        <div class="cric-stat-bowling-table">\n\n            <h4>Bowling</h4>\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let stat of (bowling ? bowling.slice(0,3) : [])">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.overs}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.wickets}}</p>\n\n                  <p>{{stat?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{stat?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n          </ion-card-content>\n\n			  </ion-card>\n\n			\n\n      </div>\n\n    <div *ngSwitchCase="\'batting\'">\n\n    	<ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p>4\'s</p>\n\n                  <p>6\'s</p>\n\n              </li>\n\n              <li *ngFor="let stat of batting">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.ball}}</p>\n\n                  <p>{{stat?.four}}</p>\n\n                  <p>{{stat?.six}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n          	  </ion-card-content>\n\n			  </ion-card>\n\n      </div>\n\n      <div *ngSwitchCase="\'bowling\'">\n\n        	<ion-card>\n\n  <ion-card-header>\n\n  Bowling\n\n </ion-card-header>\n\n <ion-card-content>\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Name</p>\n\n                    <p>O</p>\n\n                    <p>R</p>\n\n                    <p>W</p>\n\n                    <p>Wd</p>\n\n                    <p>EC</p>\n\n                </li>\n\n                <li *ngFor="let stat of bowling">\n\n                    <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                    <p>{{stat?.overs}}</p>\n\n                    <p>{{stat?.run}}</p>\n\n                    <p>{{stat?.wickets}}</p>\n\n                    <p>{{stat?.wide}}</p>\n\n                    <p>{{stat?.economy | number : \'1.2-2\'}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n              </ion-card-content>\n\n			  </ion-card>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], PreviousMatchDetailsPage);

//# sourceMappingURL=previous-match-details.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_team_match_team__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_other_other__ = __webpack_require__(19);
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
    function PreviousMatchesPage(navCtrl, navParams, formBuilder, teamService, otherService, loadingController, authService, matchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.otherService = otherService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.matchService = matchService;
        this.matches = '';
        this.userPostData = { "user_id": "", "token": "" };
        this.searchMatchesForm = formBuilder.group({
            endDate: [new Date().toISOString()],
            teamId: [0],
            tournamentId: [0]
        });
        this.getData();
        this.getTeams();
        this.getTournaments();
    }
    PreviousMatchesPage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getPreviousMatchesFilter(this.searchMatchesForm.value).then(function (result) {
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
    PreviousMatchesPage.prototype.getTeams = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        this.teamService.getAllTeams().then(function (result) {
            _this.teamresponseData = result;
            console.log(_this.teamresponseData);
            if (_this.teamresponseData.statusCode == '200') {
                console.log("test 200");
                _this.teams = _this.teamresponseData.results.teams;
            }
            else if (_this.teamresponseData.statusCode == "404") {
                console.log("unauthorrised");
                //  this.backToWelcome();
            }
            else {
                console.log("error", _this.teamresponseData);
            }
        }, function (err) {
            // Error log
        });
    };
    PreviousMatchesPage.prototype.getTournaments = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        this.otherService.getAllTournament().then(function (result) {
            _this.tournamentresponseData = result;
            console.log(_this.tournamentresponseData);
            if (_this.tournamentresponseData.statusCode == '200') {
                console.log("test 200");
                _this.tournaments = _this.tournamentresponseData.results.Tournaments;
            }
            else if (_this.tournamentresponseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                console.log("error", _this.tournamentresponseData);
            }
        }, function (err) {
            // Error log
        });
    };
    PreviousMatchesPage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getPreviousMatchesFilter(this.searchMatchesForm.value).then(function (result) {
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
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    return PreviousMatchesPage;
}());
PreviousMatchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Completed Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Search Matches\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n        <form [formGroup]="searchMatchesForm">\n\n     \n\n            <ion-item>\n\n                <ion-label>Team</ion-label>\n\n                <ion-select formControlName="teamId"  >\n\n                  <ion-option *ngFor="let key of teams" [value]="key.id">{{key.teamname}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label>Tournament</ion-label>\n\n                  <ion-select formControlName="tournamentId"  >\n\n                    <ion-option *ngFor="let key of tournaments" [value]="key.id">{{key.name}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n     <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n                Filter\n\n                \n\n              </button>\n\n     \n\n        </form>\n\n      \n\n    \n\n    </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team?.teamname}} Vs\n\n          {{match?.opponent}}\n\n          <p>{{match.tournament?.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{match.matchTime | momentjs}}</p>\n\n          <p>{{match.location?.name}}, {{match.location?.address}}</p>\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n        </ion-card-content>\n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n      </ion-card>\n\n    </ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_8__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]])
], PreviousMatchesPage);

//# sourceMappingURL=previous-matches.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
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
var AddMatchTeamPage = (function () {
    function AddMatchTeamPage(navCtrl, navParams, matchService, alertController, loadingController, teamService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.teamService = teamService;
        this.batting = [];
        this.players = [];
        this.tabsvalues = "summary";
        this.addTeamForm = formBuilder.group({
            player: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
        this.team = JSON.parse(localStorage.getItem('team'));
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getData(this.matchId);
        this.getPlayers();
    }
    AddMatchTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    AddMatchTeamPage.prototype.getData = function (matchId) {
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
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    AddMatchTeamPage.prototype.delete = function (player) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.deleteMatchTeam(this.matchId, player).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.getData(_this.matchId);
                _this.alertDialog('Success', 'Player Success');
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                _this.alertDialog('Error', 'UnAuthorized');
            }
            else {
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    AddMatchTeamPage.prototype.addPlayer = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.createMatchTeam(this.matchId, this.addTeamForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                _this.getData(_this.matchId);
                _this.getPlayers();
                _this.alertDialog('Success', 'Player Success');
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                _this.alertDialog('Error', 'UnAuthorized');
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            // Error log
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
        });
    };
    AddMatchTeamPage.prototype.getPlayers = function () {
        var _this = this;
        this.teamService.getOtherMatchPlayers(this.team, this.matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                _this.players = _this.responseData.results.players;
            }
            else if (_this.responseData.statusCode == "404") {
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
        });
    };
    AddMatchTeamPage.prototype.sendTeam = function () {
        var _this = this;
        this.matchService.sendTeamList(this.matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.alertDialog('Success', 'Email Success');
            }
            else if (_this.responseData.statusCode == "404") {
                _this.alertDialog('Error', 'Email Error');
            }
            else {
                _this.alertDialog('Error', 'Email Error');
            }
        }, function (err) {
            _this.alertDialog('Error', 'Email Error');
        });
    };
    AddMatchTeamPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return AddMatchTeamPage;
}());
AddMatchTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-match-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\add-match-team\add-match-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Team Add</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n    <ion-card> \n\n        <ion-card-content>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Team List\n\n      </ion-segment-button>\n\n     \n\n    </ion-segment>\n\n    \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Team</h4>\n\n          <ol >\n\n		  <li *ngFor="let stat of batting">\n\n		  <ion-list>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      {{stat?.name}}\n\n    </ion-item>\n\n<ion-item-options side="right">\n\n  <button ion-button (click)="delete(stat)">\n\n    <ion-icon name="delete"></ion-icon>\n\n    Delete\n\n  </button>\n\n</ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n              \n\n            </li>\n\n          </ol>\n\n\n\n        </div>\n\n       </div>\n\n  </div>\n\n      <form [formGroup]="addTeamForm">\n\n  <ion-item>\n\n  <ion-label>Player</ion-label>\n\n  <ion-select formControlName="player">\n\n    <ion-option *ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n <button ion-button color="secondary" icon-left clear small [disabled]="!addTeamForm.valid" (click)="addPlayer()">\n\n            Add Player\n\n            \n\n          </button>\n\n    </form>\n\n \n\n		  \n\n		    <button ion-button color="secondary" icon-left clear small (click)="sendTeam()">\n\n           Send Team List\n\n            \n\n          </button>\n\n        </ion-card-content>\n\n        </ion-card> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\add-match-team\add-match-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], AddMatchTeamPage);

//# sourceMappingURL=add-match-team.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchAvailabilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(23);
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
var MatchAvailabilityPage = (function () {
    function MatchAvailabilityPage(navCtrl, navParams, matchService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.avaailability = [];
        this.available = [];
        this.unavailable = [];
        this.tentative = [];
        this.unknown = [];
        this.tabsvalues = "available";
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getData(this.matchId);
    }
    MatchAvailabilityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    MatchAvailabilityPage.prototype.getData = function (matchId) {
        var _this = this;
        this.available = [];
        this.unavailable = [];
        this.tentative = [];
        this.unknown = [];
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatchAvailability(matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.Availibilties);
                _this.avaailability = _this.responseData.results.Availibilties;
                for (var _i = 0, _a = _this.avaailability; _i < _a.length; _i++) {
                    var data = _a[_i];
                    if (data.status == 0) {
                        _this.unknown.push(data);
                    }
                    else if (data.status == 1) {
                        _this.available.push(data);
                    }
                    else if (data.status == 2) {
                        _this.unavailable.push(data);
                    }
                    else if (data.status == 3) {
                        _this.tentative.push(data);
                    }
                }
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
    MatchAvailabilityPage.prototype.availabilitySelected = function (event, stat) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.matchService.updateAvailability(this.matchId, stat.player, stat.status).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.responseData);
                _this.getData(_this.matchId);
                // console.log("result", this.responseData.results.matches);
                //this.matches = this.responseData.results.matches;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    return MatchAvailabilityPage;
}());
MatchAvailabilityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match-availability',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-availability\match-availability.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Availability Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="available">\n\n        Availability\n\n      </ion-segment-button>\n\n          <ion-segment-button value="unAvailable">\n\n         UnAvailable\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="tentative">\n\n        Tentative\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="Unknown">\n\n         Unknown\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'available\'">\n\n        <div class="cric-stat-available-table">\n\n         \n\n          <ol type="1">\n\n          \n\n            <li *ngFor="let stat of available">\n\n			 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" >Not Provided</ion-option>\n\n        <ion-option value="1" selected>IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'unAvailable\'">\n\n		<div class="cric-stat-unAvailable-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unavailable">\n\n               <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1" >IN</ion-option>\n\n        <ion-option value="2" selected>OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'tentative\'">\n\n		<div class="cric-stat-tentative-table">\n\n         \n\n          <ol type="1">\n\n           \n\n            <li *ngFor="let stat of tentative">\n\n                 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3" selected>Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'Unknown\'">\n\n			<div class="cric-stat-unknown-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unknown">\n\n                <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" selected>Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card> \n\n            </li>\n\n          </ol>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-availability\match-availability.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], MatchAvailabilityPage);

//# sourceMappingURL=match-availability.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_batting_batting__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(16);
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
var BattingPage = (function () {
    function BattingPage(navCtrl, alertController, navParams, battingService, loadingController, formBuilder, otherService, teamService) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.navParams = navParams;
        this.battingService = battingService;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.teamService = teamService;
        this.batting = "";
        this.tabsvalues = "summary";
        console.log("passed data", navParams.get('battingId'));
        this.team = JSON.parse(localStorage.getItem('team'));
        this.battingId = navParams.get('battingId');
        this.getDismissals();
        this.getPlayers();
        this.match = navParams.get('matchId');
        this.createBattingForm = formBuilder.group({
            run: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            ball: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            six: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            four: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            dismisal: [''],
            team: [''],
            match: [''],
            createDate: [''],
            modifyDate: [''],
            dnb: [''],
            out: [''],
            id: [''],
            player: [''],
            mvp: ['',],
            sr: ['',],
            battingDown: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
        });
        if (this.battingId != null) {
            this.getData(this.battingId);
        }
    }
    BattingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    BattingPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    BattingPage.prototype.getData = function (battingId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.battingService.getBattingSummary(battingId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.batting);
                _this.batting = _this.responseData.results.batting;
                _this.createBattingForm.setValue(_this.batting);
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
    BattingPage.prototype.getDismissals = function () {
        var _this = this;
        this.otherService.getAllDismisals().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.dismissals = _this.responseData.results.dismisals;
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    BattingPage.prototype.getPlayers = function () {
        var _this = this;
        this.teamService.getAllPlayers(this.team).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                _this.players = _this.responseData.results.teams;
            }
            else if (_this.responseData.statusCode == "404") {
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
        });
    };
    BattingPage.prototype.saveBatting = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.battingService.addBatting(this.createBattingForm.value, this.match).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.alertDialog('Success', 'Batting added Success');
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'unauthorrised');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    BattingPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return BattingPage;
}());
BattingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'batting',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\batting\batting.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n </ion-card-header>\n\n \n\n   <ion-card-content>\n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n      <form [formGroup]="createBattingForm">\n\n      <ion-item>\n\n       <ion-label>Player</ion-label>\n\n      	  <ion-select formControlName="player" [compareWith]="compareFn" [disabled]="true">\n\n    <ion-option *ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n     </ion-item>\n\n	   <ion-item>\n\n            <ion-label floating>Run</ion-label>\n\n            <ion-input formControlName="run" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Ball</ion-label>\n\n            <ion-input formControlName="ball" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Four</ion-label>\n\n            <ion-input formControlName="four" type="number" ></ion-input>\n\n          </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Six</ion-label>\n\n            <ion-input formControlName="six" type="number"></ion-input>\n\n			  </ion-item>\n\n\n\n\n\n	  <ion-item>\n\n    <ion-label>Did Not Bat</ion-label>\n\n    <ion-checkbox formControlName="dnb"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Out</ion-label>\n\n    <ion-checkbox formControlName="out"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>Dismissal</ion-label>\n\n      <ion-select formControlName="dismisal"  [compareWith]="compareFn">\n\n        <ion-option *ngFor="let key of dismissals" [value]="key">{{key.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Batting Down</ion-label>\n\n    <ion-input formControlName="battingDown" type="number"></ion-input>\n\n  </ion-item>\n\n    	 <button ion-button color="secondary" icon-left clear small [disabled]="!createBattingForm.valid" (click)="saveBatting()">\n\n            Submit\n\n            \n\n          </button>   \n\n    </form>\n\n\n\n    \n\n \n\n      </div>\n\n  </div>\n\n   </div>\n\n     </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\batting\batting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_batting_batting__["a" /* BattingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */]])
], BattingPage);

//# sourceMappingURL=batting.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BowlingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bowling_bowling__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(16);
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
var BowlingPage = (function () {
    function BowlingPage(navCtrl, navParams, alertController, bowlingService, loadingController, formBuilder, otherService, teamService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.bowlingService = bowlingService;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.teamService = teamService;
        this.bowling = "";
        this.tabsvalues = "summary";
        console.log("passed data", navParams.get('bowlingId'));
        this.team = JSON.parse(localStorage.getItem('team'));
        this.bowlingId = navParams.get('bowlingId');
        this.getDismissals();
        this.getPlayers();
        this.match = navParams.get('matchId');
        this.createBowlingForm = formBuilder.group({
            maiden: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            run: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            ball: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            six: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            overs: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[0-9]+(\.[0-6]{1})?$')])],
            wide: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            noBall: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            wickets: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            four: [''],
            catches: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            stumpings: [''],
            runOuts: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            team: [''],
            match: [''],
            createDate: [''],
            modifyDate: [''],
            dnb: [''],
            fieldingmvp: [''],
            id: [''],
            player: [''],
            mvp: [''],
            economy: [''],
        });
        if (this.bowlingId != null) {
            this.getData(this.bowlingId);
        }
    }
    BowlingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    BowlingPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    BowlingPage.prototype.getData = function (bowlingId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.bowlingService.getBowlingSummary(bowlingId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.bowling);
                _this.bowling = _this.responseData.results.bowling;
                _this.createBowlingForm.setValue(_this.bowling);
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
    BowlingPage.prototype.getDismissals = function () {
        var _this = this;
        this.otherService.getAllDismisals().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.dismissals = _this.responseData.results.dismisals;
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    BowlingPage.prototype.getPlayers = function () {
        var _this = this;
        this.teamService.getAllPlayers(this.team).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                _this.players = _this.responseData.results.teams;
            }
            else if (_this.responseData.statusCode == "404") {
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
        });
    };
    BowlingPage.prototype.saveBowling = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.bowlingService.addBowling(this.createBowlingForm.value, this.match).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.alertDialog('Success', 'Bowling added Success');
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'unauthorrised');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    BowlingPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return BowlingPage;
}());
BowlingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'bowling',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\bowling\bowling.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> <ion-navbar color="primary"> <ion-title>Match\n\nDetails</ion-title> </ion-navbar> </ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground"> <ion-card>\n\n<ion-card-header> </ion-card-header> <ion-card-content>\n\n<div [ngSwitch]="tabsvalues">\n\n	<div *ngSwitchCase="\'summary\'">\n\n		<div class="cric-stat-bowling-table">\n\n			<form [formGroup]="createBowlingForm">\n\n				<ion-item> <ion-label>Player</ion-label> <ion-select\n\n					formControlName="player" [compareWith]="compareFn" [disabled]="true"> <ion-option\n\n					*ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n				</ion-select> </ion-item>\n\n			\n\n				<ion-item> <ion-label floating>Ball</ion-label> <ion-input\n\n					formControlName="ball" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Maiden</ion-label> <ion-input\n\n					formControlName="maiden" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Run</ion-label> <ion-input\n\n					formControlName="run" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Wickets</ion-label> <ion-input\n\n					formControlName="wickets" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Wide</ion-label> <ion-input\n\n					formControlName="wide" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>No Ball</ion-label> <ion-input\n\n					formControlName="noBall" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Catches</ion-label> <ion-input\n\n					formControlName="catches" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Run Out</ion-label> <ion-input\n\n					formControlName="runOuts" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Stumping</ion-label> <ion-input\n\n					formControlName="stumpings" type="number"></ion-input> </ion-item>\n\n			\n\n				<ion-item> <ion-label>Did Not Ball</ion-label> <ion-checkbox\n\n					formControlName="dnb"></ion-checkbox> </ion-item>\n\n				<button ion-button color="secondary" icon-left clear small [disabled]="!createBowlingForm.valid"\n\n				(click)="saveBowling()">Submit</button>\n\n			</form>\n\n		\n\n\n\n\n\n		</div>\n\n	</div>\n\n</div>\n\n</ion-card-content> </ion-card> </ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\bowling\bowling.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_bowling_bowling__["a" /* BowlingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */]])
], BowlingPage);

//# sourceMappingURL=bowling.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchDetailsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__batting_batting__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bowling_bowling__ = __webpack_require__(114);
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
var PreviousMatchDetailsEditPage = (function () {
    function PreviousMatchDetailsEditPage(navCtrl, navParams, alertController, matchService, loadingController, formBuilder, otherService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.batting = [];
        this.bowling = [];
        this.match = "";
        this.tabsvalues = "summary";
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getLocations();
        this.getTournament();
        this.team = JSON.parse(localStorage.getItem('team'));
        this.createMatchForm = formBuilder.group({
            opponent: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            description: [''],
            remarks: [''],
            matchTime: [''],
            location: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            tournament: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            deadline: [''],
            points: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            team: [''],
            createDate: [''],
            modifyDate: [''],
            id: [''],
            oppositionScore: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            oppositionWickets: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            oppositionOvers: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[0-9]+(\.[0-6]{1})?$')])],
            score: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            wickets: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            overs: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[0-9]+(\.[0-6]{1})?$')])],
            result: [''],
            tossWon: [''],
            played: [''],
            battingFirst: [''],
        });
        this.getData(this.matchId);
    }
    PreviousMatchDetailsEditPage.prototype.ionViewWillEnter = function () {
        this.getData(this.matchId);
    };
    PreviousMatchDetailsEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    PreviousMatchDetailsEditPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    PreviousMatchDetailsEditPage.prototype.getData = function (matchId) {
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
                _this.createMatchForm.setValue(_this.match);
                _this.createMatchForm.controls['matchTime'].setValue(new Date(_this.match.matchTime).toISOString());
                _this.createMatchForm.controls['location'].patchValue(_this.match.location);
                _this.batting = _this.responseData.results.matchSummary.batting;
                _this.bowling = _this.responseData.results.matchSummary.bowling;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                _this.alertDialog('Error', 'Error');
            }
            else {
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
        });
    };
    PreviousMatchDetailsEditPage.prototype.getLocations = function () {
        var _this = this;
        this.otherService.getAllLocation().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.locations = _this.responseData.results.locations;
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    PreviousMatchDetailsEditPage.prototype.getTournament = function () {
        var _this = this;
        this.otherService.getAllTournament().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.tournaments = _this.responseData.results.Tournaments;
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    PreviousMatchDetailsEditPage.prototype.editMatch = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.addMatch(this.createMatchForm.value, this.team).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'Error');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    PreviousMatchDetailsEditPage.prototype.addBatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__batting_batting__["a" /* BattingPage */], { matchId: this.matchId });
    };
    PreviousMatchDetailsEditPage.prototype.editBatting = function (battingId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__batting_batting__["a" /* BattingPage */], { matchId: this.matchId,
            battingId: battingId
        });
    };
    PreviousMatchDetailsEditPage.prototype.editBowling = function (bowlingId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__bowling_bowling__["a" /* BowlingPage */], { matchId: this.matchId,
            bowlingId: bowlingId
        });
    };
    PreviousMatchDetailsEditPage.prototype.addBowling = function () {
    };
    PreviousMatchDetailsEditPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return PreviousMatchDetailsEditPage;
}());
PreviousMatchDetailsEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-match-details-edit',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-match-details-edit\previous-match-details-edit.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Summary\n\n      </ion-segment-button>\n\n      <ion-segment-button value="batting">\n\n          Batting\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n      <form [formGroup]="createMatchForm">\n\n	   <ion-item>\n\n            <ion-label floating>Opponent</ion-label>\n\n            <ion-input formControlName="opponent" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Remark</ion-label>\n\n            <ion-input formControlName="remarks" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime formControlName="matchTime" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Location</ion-label>\n\n  <ion-select formControlName="location" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Tournament</ion-label>\n\n  <ion-select formControlName="tournament" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of tournaments" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n	  <ion-item>\n\n    <ion-label>Toss Won</ion-label>\n\n    <ion-checkbox formControlName="tossWon"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Played</ion-label>\n\n    <ion-checkbox formControlName="played"></ion-checkbox>\n\n  </ion-item>\n\n    <ion-item>\n\n    <ion-label>Batting First</ion-label>\n\n    <ion-checkbox formControlName="battingFirst"></ion-checkbox>\n\n  </ion-item>\n\n         <ion-item>\n\n            <ion-label floating>Opponent Score</ion-label>\n\n            <ion-input formControlName="oppositionScore" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Opponent Wickets</ion-label>\n\n            <ion-input formControlName="oppositionWickets" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Opponent Overs</ion-label>\n\n            <ion-input formControlName="oppositionOvers" type="number" step="0.1"></ion-input>\n\n			  </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Score</ion-label>\n\n            <ion-input formControlName="score" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Wickets</ion-label>\n\n            <ion-input formControlName="wickets" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Overs</ion-label>\n\n            <ion-input formControlName="overs" type="number"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n            <ion-label floating>point</ion-label>\n\n            <ion-input formControlName="points" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Result</ion-label>\n\n          <ion-select formControlName="result" >\n\n     <ion-option value="Abandoned">Abandoned</ion-option>\n\n      <ion-option value="Lost">Lost</ion-option>\n\n           <ion-option value="Tie">Tie</ion-option>\n\n      <ion-option value="Won">Won</ion-option>\n\n  </ion-select>\n\n			  </ion-item>\n\n			       <ion-item>\n\n	 <button ion-button color="secondary" icon-left clear small [disabled]="!createMatchForm.valid" (click)="editMatch()">\n\n            Submit\n\n            \n\n          </button></ion-item>\n\n    </form>\n\n\n\n      </div>\n\n	  </div>\n\n    <div *ngSwitchCase="\'batting\'">\n\n	<ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p>4\'s</p>\n\n                  <p>6\'s</p>\n\n                  <p>sr</p>\n\n				  <p>Edit</p>\n\n              </li>\n\n              <li *ngFor="let stat of batting">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.ball}}</p>\n\n                  <p>{{stat?.four}}</p>\n\n                  <p>{{stat?.six}}</p>\n\n                  <p>{{stat?.sr| number : \'1.2-2\'}}</p>\n\n				   <p> <button ion-button icon-left clear small (click)="editBatting(stat.id)"> <ion-icon name="arrow-dropright"></ion-icon></button></p>\n\n              </li>\n\n            </ul>\n\n		\n\n		\n\n          </div>\n\n		  	  </ion-card-content>\n\n			  </ion-card>\n\n			  \n\n      </div>\n\n      <div *ngSwitchCase="\'bowling\'">\n\n      <ion-card>\n\n  <ion-card-header>\n\n  Bowling\n\n </ion-card-header>\n\n <ion-card-content>\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Name</p>\n\n                    <p>O</p>\n\n                    <p>M</p>\n\n                    <p>R</p>\n\n                    <p>W</p>\n\n                    \n\n                    <p>EC</p>\n\n                    <p>Edit</p>\n\n                </li>\n\n                <li *ngFor="let stat of bowling">\n\n                    <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                    <p>{{stat?.overs}}</p>\n\n                       <p>{{stat?.maiden}}</p>\n\n                    <p>{{stat?.run}}</p>\n\n                    <p>{{stat?.wickets}}</p>\n\n                    \n\n                    <p>{{stat?.economy | number : \'1.2-2\'}}</p>\n\n                    <p> <button ion-button icon-left clear small (click)="editBowling(stat.id)"><ion-icon name="arrow-dropright"></ion-icon></button></p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n             </ion-card-content>\n\n			  </ion-card>\n\n			  \n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-match-details-edit\previous-match-details-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */]])
], PreviousMatchDetailsEditPage);

//# sourceMappingURL=previous-match-details-edit.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
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
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTeamPage = (function () {
    function CreateTeamPage(navCtrl, navParams, teamService, loadingController, formBuilder, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.team = navParams.get('team');
        this.createTeamForm = formBuilder.group({
            id: [''],
            teamname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            owner: [],
            createDate: [''],
            modifyDate: ['']
        });
        if (this.team != null) {
            this.getTeam();
        }
        this.teamname = this.createTeamForm.controls['teamname'];
    }
    CreateTeamPage.prototype.getTeam = function () {
        this.createTeamForm.setValue(this.team);
    };
    CreateTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateTeamPage.prototype.addTeam = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.createTeam(this.createTeamForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.alertDialog('Success', 'Team Created Success');
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'UnAuthorized');
            }
            else {
                loading.dismiss();
                _this.alertDialog('Error', 'Could not create team');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Could not create team');
        });
    };
    CreateTeamPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return CreateTeamPage;
}());
CreateTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-team\create-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Create Team</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Team\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createTeamForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Team Name</ion-label>\n\n            <ion-input formControlName="teamname" type="text"></ion-input>\n\n        </ion-item>\n\n <button ion-button color="secondary" icon-left clear small [disabled]="!createTeamForm.valid" (click)="addTeam()">\n\n            Create Team\n\n            \n\n          </button>\n\n \n\n    </form>\n\n  \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-team\create-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CreateTeamPage);

//# sourceMappingURL=create-team.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(44);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'reset',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reset Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.password"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="reset()">Reset Password</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], ResetPage);

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(40);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
    };
    return LogoutPage;
}());
LogoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'logout',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n       <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Log Out</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Log Out\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n      \n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="logout()">Log Out</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], LogoutPage);

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
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
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePlayerPage = (function () {
    function CreatePlayerPage(navCtrl, navParams, teamService, loadingController, formBuilder, alertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.createPlayerForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
        this.username = this.createPlayerForm.controls['username'];
        this.team = JSON.parse(localStorage.getItem('team'));
    }
    CreatePlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreatePlayerPage.prototype.addPlayer = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.addPlayer(this.createPlayerForm.value, this.team).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.alertDialog('Success', 'Player added Success');
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'unauthorrised');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
        });
    };
    CreatePlayerPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return CreatePlayerPage;
}());
CreatePlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-player',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-player\create-player.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Add Player</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Add Player\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createPlayerForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>User Email</ion-label>\n\n            <ion-input formControlName="username" type="text"></ion-input>\n\n        </ion-item>\n\n \n\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createPlayerForm.valid" (click)="addPlayer()">\n\n            Add Player\n\n            \n\n          </button>\n\n    </form>\n\n \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-player\create-player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CreatePlayerPage);

//# sourceMappingURL=create-player.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTournamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
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
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateTournamentPage = (function () {
    function CreateTournamentPage(navCtrl, navParams, alertController, teamService, loadingController, formBuilder, otherService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.createTournamentForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
        this.name = this.createTournamentForm.controls['name'];
    }
    CreateTournamentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateTournamentPage.prototype.createTournament = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.createTournament(this.createTournamentForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'Error');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    CreateTournamentPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return CreateTournamentPage;
}());
CreateTournamentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-tournament',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-tournament\create-tournament.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Create Tournament</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Tournament\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createTournamentForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n         <button ion-button color="secondary" icon-left clear small [disabled]="!createTournamentForm.valid" (click)="createTournament()">\n\n            Create Tournament\n\n            \n\n          </button>\n\n    </form>\n\n \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-tournament\create-tournament.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateTournamentPage);

//# sourceMappingURL=create-tournament.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
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
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateLocationPage = (function () {
    function CreateLocationPage(navCtrl, alertController, navParams, teamService, loadingController, formBuilder, otherService) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.navParams = navParams;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.otherService = otherService;
        this.createLocationForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            lat: [''],
            lng: ['']
        });
        this.name = this.createLocationForm.controls['name'];
    }
    CreateLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateLocationPage.prototype.createLocation = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.createLocation(this.createLocationForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'Error');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    CreateLocationPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return CreateLocationPage;
}());
CreateLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-location',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-location\create-location.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Create Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Location\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createLocationForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n            <ion-label floating>Address</ion-label>\n\n            <ion-input formControlName="address" type="text"></ion-input>\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Latitude</ion-label>\n\n            <ion-input formControlName="lat" type="number" step="0.01"></ion-input>\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Longitude</ion-label>\n\n            <ion-input formControlName="lng" type="number" step="0.01"></ion-input>\n\n        </ion-item>\n\n          <button ion-button color="secondary" icon-left clear small [disabled]="!createLocationForm.valid" (click)="createLocation()">\n\n            Create Location\n\n            \n\n          </button>\n\n    </form>\n\n\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-location\create-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateLocationPage);

//# sourceMappingURL=create-location.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_teams_my_teams__ = __webpack_require__(70);
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
var ModeChangePage = (function () {
    function ModeChangePage(navCtrl, navParams, authService, alertController, loadingController, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.events = events;
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
    ModeChangePage.prototype.admin = function () {
        this.events.publish("UPDATE_SIDE_MENU", "admin");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_teams_my_teams__["a" /* MyTeamsPage */]);
    };
    ModeChangePage.prototype.normal = function () {
        this.events.publish("UPDATE_SIDE_MENU", "normal");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ModeChangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgot');
    };
    return ModeChangePage;
}());
ModeChangePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'modeChange',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\modeChange\modeChange.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Change Mode</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card (click)="admin()">\n\n    <ion-card-header>\n\n     Admin Mode\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n     Change Mode to Admin\n\n    </ion-card-content>\n\n  </ion-card>\n\n    <ion-card (click)="normal()">\n\n    <ion-card-header>\n\n     Normal Mode\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n       Change Mode to Normal\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\modeChange\modeChange.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ModeChangePage);

//# sourceMappingURL=modeChange.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeamExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
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
 * Generated class for the AddTeamExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTeamExpensePage = (function () {
    function AddTeamExpensePage(navCtrl, alertController, navParams, financeService, loadingController, formBuilder) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.navParams = navParams;
        this.financeService = financeService;
        this.loadingController = loadingController;
        this.team = JSON.parse(localStorage.getItem('team'));
        this.expense = navParams.get('expense');
        this.createExpenseForm = formBuilder.group({
            amount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            name: [''],
            team: [''],
            description: [''],
            status: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            createDate: [''],
            id: [''],
            modifyDate: [''],
            expenseDate: ['']
        });
        this.createExpenseForm.controls['team'].setValue(this.team);
        if (this.expense != null) {
            this.createExpenseForm.setValue(this.expense);
        }
    }
    AddTeamExpensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    AddTeamExpensePage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    AddTeamExpensePage.prototype.getData = function (battingId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.financeService.getExpenseSummary(battingId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.expense);
                _this.expense = _this.responseData.results.expense;
                _this.createExpenseForm.setValue(_this.expense);
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
    AddTeamExpensePage.prototype.addExpense = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        if (this.expense == null) {
            this.financeService.addExpense(this.createExpenseForm.value).then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData);
                if (_this.responseData.statusCode == '200') {
                    loading.dismiss();
                    console.log("test 200");
                    _this.alertDialog('Success', 'Batting added Success');
                }
                else if (_this.responseData.statusCode == "404") {
                    loading.dismiss();
                    console.log("unauthorrised");
                    _this.alertDialog('Error', 'unauthorrised');
                }
                else {
                    loading.dismiss();
                    console.log("test others");
                    _this.alertDialog('Error', 'Error');
                }
            }, function (err) {
                console.log("error", err);
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
                // Error log
            });
        }
    };
    AddTeamExpensePage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    return AddTeamExpensePage;
}());
AddTeamExpensePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-team-expense',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\add-team-expense\add-team-expense.html"*/'<!--\n  Generated template for the PreviousMatchDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add Team Expense</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appBackground" >\n <ion-card>\n    <ion-card-header>\n      Add Expense\n    </ion-card-header>\n    <ion-card-content>\n  <ion-list no-lines>\n \n    <form [formGroup]="createExpenseForm">\n \n        <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input formControlName="name" type="text"></ion-input>\n			\n        </ion-item>\n       <ion-item>\n            <ion-label floating>Description</ion-label>\n            <ion-input formControlName="description" type="text"></ion-input>\n			\n        </ion-item>\n		      <ion-item>\n            <ion-label floating>Amount</ion-label>\n            <ion-input formControlName="amount" type="number"></ion-input>\n			  </ion-item>\n        <ion-item>\n          <ion-label>Date</ion-label>\n          <ion-datetime formControlName="expenseDate" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n        </ion-item>\n        <ion-item>\n\n            <ion-item>\n                <ion-select formControlName="status">\n                    <ion-option value=1>PAID</ion-option>\n                  <ion-option value=0>PENDING</ion-option>\n                </ion-select>\n             \n              </ion-item>\n</ion-item>\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createExpenseForm.valid" (click)="addExpense()">\n            Add Expense\n            \n          </button>\n    </form>\n\n</ion-list>\n</ion-card-content>\n </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\add-team-expense\add-team-expense.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], AddTeamExpensePage);

//# sourceMappingURL=add-team-expense.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(9);
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
 * Generated class for the AddPlayerExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPlayerExpensePage = (function () {
    function AddPlayerExpensePage(navCtrl, navParams, financeService, alertController, loadingController, teamService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.financeService = financeService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.teamService = teamService;
        this.players = [];
        this.tabsvalues = "summary";
        this.addExpenseForm = formBuilder.group({
            amount: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            player: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            expense: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            createDate: [''],
            id: [''],
            cmnt: [''],
            remark: [''],
            paid: [''],
            paymentType: [''],
            modifyDate: [''],
            expenseDate: ['']
        });
        this.team = JSON.parse(localStorage.getItem('team'));
        this.getPlayers();
        console.log("passed data", navParams.get('expense'));
        this.expense = navParams.get('expense');
        this.addExpenseForm.controls['expense'].setValue(this.expense);
        this.getData(this.expense);
    }
    AddPlayerExpensePage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    AddPlayerExpensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    AddPlayerExpensePage.prototype.getData = function (expense) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.financeService.getPlayerExpenses(expense).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.playerExpenses = _this.responseData.results.result;
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    AddPlayerExpensePage.prototype.delete = function (playerExpense) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.financeService.deletePlayerExpense(playerExpense).then(function (result) {
            _this.deleteresponseData = result;
            console.log(_this.deleteresponseData);
            if (_this.deleteresponseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.getData(_this.expense);
                _this.alertDialog('Success', 'Player Success');
            }
            else if (_this.deleteresponseData.statusCode == "404") {
                loading.dismiss();
                _this.alertDialog('Error', 'UnAuthorized');
            }
            else {
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    AddPlayerExpensePage.prototype.addPlayerExpense = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.financeService.createPlayerExpense(this.addExpenseForm.value).then(function (result) {
            _this.addresponseData = result;
            console.log(_this.addresponseData);
            if (_this.addresponseData.statusCode == '200') {
                loading.dismiss();
                _this.getData(_this.expense);
                //this.getPlayers();
                _this.alertDialog('Success', 'Player Success');
            }
            else if (_this.addresponseData.statusCode == "404") {
                loading.dismiss();
                _this.alertDialog('Error', 'UnAuthorized');
            }
            else {
                loading.dismiss();
                console.log("error", _this.addresponseData);
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            // Error log
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
        });
    };
    AddPlayerExpensePage.prototype.getPlayers = function () {
        var _this = this;
        this.teamService.getAllPlayers(this.team).then(function (result) {
            _this.playerresponseData = result;
            console.log(_this.playerresponseData);
            if (_this.playerresponseData.statusCode == '200') {
                console.log("test 200");
                _this.players = _this.playerresponseData.results.teams;
            }
            else if (_this.playerresponseData.statusCode == "404") {
            }
            else {
                console.log("error", _this.playerresponseData);
            }
        }, function (err) {
            console.log("error", _this.playerresponseData);
        });
    };
    AddPlayerExpensePage.prototype.sendTeam = function () {
        var _this = this;
        this.financeService.sendTeamReminder(this.expense).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                _this.alertDialog('Success', 'Email Success');
            }
            else if (_this.responseData.statusCode == "404") {
                _this.alertDialog('Error', 'Email Error');
            }
            else {
                _this.alertDialog('Error', 'Email Error');
            }
        }, function (err) {
            _this.alertDialog('Error', 'Email Error');
        });
    };
    AddPlayerExpensePage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    AddPlayerExpensePage.prototype.editPlayerExpense = function (playerExpense) {
        this.addExpenseForm.setValue(playerExpense);
    };
    AddPlayerExpensePage.prototype.addNew = function () {
        this.addExpenseForm.reset();
        this.getPlayers();
        this.addExpenseForm.controls['expense'].setValue(this.expense);
    };
    return AddPlayerExpensePage;
}());
AddPlayerExpensePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-player-expense',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\add-player-expense\add-player-expense.html"*/'<!--\n  Generated template for the PreviousMatchDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Player Expense</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="appBackground" >\n\n    <ion-segment [(ngModel)]="tabsvalues">\n        <ion-segment-button value="summary">\n          Player Payment\n        </ion-segment-button>\n       \n      </ion-segment>\n      \n    <div [ngSwitch]="tabsvalues"> \n        <div *ngSwitchCase="\'summary\'">\n          <div class="cric-stat-expense-table">\n            <h4>Payment</h4>\n            <ol >\n        <li *ngFor="let stat of playerExpenses">\n        <ion-list>\n            <ion-card> \n                <ion-card-content>\n\n        <p>{{stat?.player.name}}</p>\n\n         <p>${{stat?.amount}}</p>\n\n           <p>Comment:{{stat?.cmnt}}</p>\n\n\n           <p>Player Remark:{{stat?.remark}}</p>\n           <p *ngIf= "stat.paid" >PAID</p>\n           <p *ngIf= "!stat.paid" >PENDING</p>\n           <p>Remark:{{stat?.paymentType}}</p>\n           <p>Remark:{{stat?.expenseDate| momentjs}}</p>\n        <button ion-button color="secondary" icon-left clear small (click)="editPlayerExpense(stat)">\n            Edit Player Expense\n            \n          </button>\n\n \n    <button ion-button color="secondary" icon-left clear small (click)="delete(stat)">\n      <ion-icon name="delete"></ion-icon>\n      Delete\n    </button>\n  </ion-card-content>\n</ion-card>  \n   \n  </ion-list>\n                \n              </li>\n            </ol>\n  \n          </div>\n         </div>\n         <ion-card> \n            <ion-card-content>\n         <button ion-button color="secondary" icon-left clear small (click)="sendTeam()">\n            Send Reminder              \n           </button>\n           <button ion-button color="secondary" icon-left clear small (click)="addNew()">\n              Add New         \n             </button>\n          </ion-card-content>\n        </ion-card>  \n    </div>\n\n    <ion-card> \n        <ion-card-content>\n        <form [formGroup]="addExpenseForm">\n    <ion-item>\n    <ion-label>Player</ion-label>\n    <ion-select formControlName="player" [compareWith]="compareFn">\n      <ion-option *ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>amount</ion-label>\n      <ion-input formControlName="amount" type="number"></ion-input>\n\n  </ion-item>\n  <ion-item>\n      <ion-checkbox formControlName="paid"></ion-checkbox>\n    \n  \n   </ion-item>\n   <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime formControlName="expenseDate" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n    </ion-item>\n <ion-item>\n     <ion-select formControlName="paymentType">\n         <ion-option value="CASH">CASH</ion-option>\n       <ion-option value="FREE">FREE</ion-option>\n     <ion-option value="PREPAID">PREPAID</ion-option>\n       <ion-option value="TRANSFER">TRANSFER</ion-option>\n     </ion-select>\n  \n   </ion-item>\n  <ion-item>\n      <ion-label floating>cmt</ion-label>\n      <ion-input formControlName="cmnt" type="text"></ion-input>\n\n  </ion-item>\n   <button ion-button color="secondary" icon-left clear small [disabled]="!addExpenseForm.valid" (click)="addPlayerExpense()">\n              Add Player Expense\n              \n            </button>\n      </form>\n    </ion-card-content>\n  </ion-card>   \n        \n\n\n  </ion-content>\n  '/*ion-inline-end:"D:\ionicapp\crickify\src\pages\add-player-expense\add-player-expense.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], AddPlayerExpensePage);

//# sourceMappingURL=add-player-expense.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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
        if (JSON.parse(localStorage.getItem('userData')) != null && JSON.parse(localStorage.getItem('userData')).user != null) {
            return JSON.parse(localStorage.getItem('userData')).user.token;
        }
        else {
            return null;
        }
    };
    AuthService.prototype.getUser = function () {
        if (JSON.parse(localStorage.getItem('userData')) != null) {
            return JSON.parse(localStorage.getItem('userData')).user;
        }
        else {
            return null;
        }
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
    AuthService.prototype.editUser = function (credentials, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/user/update/' + id, JSON.stringify(credentials), { headers: headers })
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
    AuthService.prototype.getUserDetail = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/getUser', { headers: headers })
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

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_modal_upload_modal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_images_images__ = __webpack_require__(108);
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
    function MyAccountPage(navCtrl, alertController, modalCtrl, navParams, authService, formBuilder, loadingController, imagesProvider, camera, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingController = loadingController;
        this.imagesProvider = imagesProvider;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.userPostData = { "user_id": "", "token": "" };
        this.user = " ";
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.editUserForm = formBuilder.group({
                id: ['',],
                token: ['',],
                name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
                playerType: [''],
                bowlerType: ['',],
                batsmanType: [''],
                createDate: [''],
                modifyDate: [''],
                img: [''],
                imgUrl: [''],
                verified: [''],
                dob: [''],
                isVerified: ['']
            });
            console.log("fetch data", data);
            this.userDetails = data.user;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
    }
    MyAccountPage.prototype.ionViewWillEnter = function () {
        this.getUser();
    };
    MyAccountPage.prototype.saveUser = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.editUser(this.editUserForm.value, this.userDetails.id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                _this.alertDialog('Success', 'Update Success');
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'unauthorrised');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    MyAccountPage.prototype.getUser = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.getUserDetail(this.userDetails.id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                _this.editUserForm.setValue(_this.responseData.results.user);
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
                _this.alertDialog('Error', 'unauthorrised');
            }
            else {
                loading.dismiss();
                console.log("test others");
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
            // Error log
        });
    };
    MyAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAccountPage');
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("user", this.authService.getUser());
            this.user = JSON.parse(JSON.stringify(this.authService.getUser()));
        }
    };
    MyAccountPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    MyAccountPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__upload_modal_upload_modal__["a" /* UploadModalPage */], { data: imagePath });
            modal.present();
            modal.onDidDismiss(function (data) {
                if (data && data.reload) {
                    _this.reloadImages();
                }
            });
        }, function (err) {
            _this.alertDialog('Error', err);
        });
    };
    MyAccountPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    MyAccountPage.prototype.reloadImages = function () {
    };
    return MyAccountPage;
}());
MyAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-account',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-account\my-account.html"*/'<!--\n\n  Generated template for the MyAccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Account</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n  </ion-card-header>\n\n \n\n   <ion-card-content>\n\n  <div> \n\n      <div text-center *ngIf= "userDetails.imgUrl!= null" ><img  style="width:150px;height:150px;"  src="{{userDetails.imgUrl}}"/></div>\n\n    \n\n      <div  text-center *ngIf="userDetails.imgUrl == null" ><img   style="width:150px;height:150px;"  src="assets/img/batsman.png"/></div>\n\n   \n\n      <div>\n\n        <div class="user-table">\n\n      <form [formGroup]="editUserForm">\n\n     	   <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Phone</ion-label>\n\n            <ion-input formControlName="phone" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>email</ion-label>\n\n            <ion-input formControlName="username" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Player Type</ion-label>\n\n  <ion-select formControlName="playerType" >\n\n   <ion-option value="Batsman">Batsman</ion-option>\n\n      <ion-option value="Bowler">Bowler</ion-option>\n\n         <ion-option value="WicketKeeperBatsman">WicketKeeper Batsman</ion-option>\n\n      <ion-option value="All Rounder">All Rounder</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n	   <ion-item>\n\n  <ion-label>Bowler Type</ion-label>\n\n  <ion-select formControlName="bowlerType">\n\n    <ion-option value="Right-arm fast">Right-arm fast</ion-option>\n\n      <ion-option value="Right-arm fast medium">Right-arm fast medium</ion-option>\n\n <ion-option value="Left-arm fast">Left-arm fast</ion-option>\n\n      <ion-option value="Left-arm fast medium">Left-arm fast medium</ion-option>\n\n            <ion-option value="Leg Break">Leg Break</ion-option>\n\n              <ion-option value="Off break">Off break</ion-option>\n\n                <ion-option value="Slow left-arm orthodox">Slow left-arm orthodox</ion-option>\n\n                  <ion-option value="Slow left-arm chinaman">Slow left-arm chinaman</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n <ion-item>\n\n  <ion-label>Batsman Type</ion-label>\n\n  <ion-select formControlName="batsmanType" >\n\n     <ion-option value="Right handed">Right handed</ion-option>\n\n      <ion-option value="Left handed">Left handed</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n       \n\n    </form>\n\n	 <button ion-button color="secondary" icon-left clear small [disabled]="!editUserForm.valid"(click)="saveUser()">\n\n            Submit\n\n            \n\n          </button>\n\n <ion-fab right bottom>\n\n    <button ion-fab (click)="presentActionSheet()"><ion-icon name="camera"></ion-icon></button>\n\n  </ion-fab>    \n\n \n\n      </div>\n\n  </div>\n\n   </div>\n\n     </ion-card-content>\n\n    </ion-card>\n\n  \n\n      \n\n              \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-account\my-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], MyAccountPage);

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(56);
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
        selector: 'page-finance',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Payments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let playerexpense of expenses">\n\n    <ion-card-header>\n\n      {{playerexpense.expense.description}}\n\n      <p>{{playerexpense.expense.team.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{playerexpense.expenseDate| momentjs}}</p>\n\n     \n\n      <p>${{playerexpense.amount}}</p>\n\n	   <p>${{playerexpense.cmnt}}</p>\n\n         <ion-label>\n\n          Select Payment Status\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n		   <ion-checkbox [(ngModel)]="playerexpense.paid"  (ionChange)="availabilitySelected($event, playerexpense)"></ion-checkbox>\n\n     \n\n	 \n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-select [(ngModel)]="playerexpense.paymentType" (ionChange)="availabilitySelected($event, playerexpense)">\n\n          <ion-option value="CASH">CASH</ion-option>\n\n        <ion-option value="FREE">FREE</ion-option>\n\n      <ion-option value="PREPAID">PREPAID</ion-option>\n\n        <ion-option value="TRANSFER">TRANSFER</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	<p><ion-label>Remarks</ion-label></p>\n\n      <ion-item>\n\n	  \n\n	       \n\n    <ion-input [(ngModel)]="playerexpense.remark" (ionChange)="availabilitySelected($event, playerexpense)"></ion-input>\n\n	 </ion-item>\n\n	\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], FinancePage);

//# sourceMappingURL=finance.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_player_create_player__ = __webpack_require__(119);
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




/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamPlayersPage = (function () {
    function TeamPlayersPage(events, navCtrl, alertController, navParams, authService, teamService, statsService, app, loadingController) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.tabsvalues = "team";
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            this.selectedTeam = JSON.parse(localStorage.getItem('team'));
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
    TeamPlayersPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    TeamPlayersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.getAllTeamPlayers(this.selectedTeam).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                _this.teamplayers = _this.responseData.results.teams;
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
            }
            else {
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
        });
    };
    TeamPlayersPage.prototype.delete = function (player) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.deletePlayer(player, this.selectedTeam).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                _this.ionViewDidLoad();
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
        });
    };
    TeamPlayersPage.prototype.addPlayer = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_player_create_player__["a" /* CreatePlayerPage */]);
    };
    TeamPlayersPage.prototype.alertDialog = function (title, message) {
        var alert = this.alertController.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    TeamPlayersPage.prototype.roleSelected = function (event, teamPlayer) {
        var _this = this;
        console.log("selected", event, teamPlayer);
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.teamService.roleUpdate(teamPlayer).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.responseData);
                _this.alertDialog('Success', 'Update successfull');
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
                _this.alertDialog('Error', 'Error');
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
                _this.alertDialog('Error', 'Error');
            }
        }, function (err) {
            loading.dismiss();
            _this.alertDialog('Error', 'Error');
        });
    };
    return TeamPlayersPage;
}());
TeamPlayersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-players',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-players\team-players.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Manage Player</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-grid >\n\n        <ion-row > \n\n		<ion-col col-4 *ngFor="let teamplayer of teamplayers"  >\n\n  <ion-card >\n\n    <ion-card-header>\n\n      {{teamplayer.player.name}}\n\n	   </ion-card-header>\n\n	   <ion-card-content>\n\n        <p *ngIf= "teamplayer.player.imgUrl!= null" ><img  src="{{teamplayer.player.imgUrl}}"/></p>\n\n   \n\n    <p *ngIf="teamplayer.player.imgUrl == null" ><img src="assets/img/bowler.png" /></p>\n\n	   <ion-item> \n\n	   <button ion-button icon-left clear small color="primary" (click)="delete(teamplayer.player)">\n\n            <ion-icon name="delete"></ion-icon>\n\n            <div>Delete</div>\n\n          </button>\n\n          </ion-item>\n\n          <ion-item> \n\n<ion-select [(ngModel)]="teamplayer.status" (ionChange)="roleSelected($event, teamplayer)">\n\n          <ion-option value="0">Normal</ion-option>\n\n\n\n        <ion-option value="2">Admin</ion-option>\n\n\n\n      </ion-select>\n\n      </ion-item>\n\n		    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n</ion-row>\n\n   </ion-grid>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addPlayer()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-players\team-players.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], TeamPlayersPage);

//# sourceMappingURL=team-players.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_tournament_create_tournament__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_other_other__ = __webpack_require__(19);
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





/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TournamentsPage = (function () {
    function TournamentsPage(events, navCtrl, navParams, authService, teamService, statsService, app, loadingController, otherService) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.otherService = otherService;
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
    TournamentsPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    TournamentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.getAllTournament().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.tournaments = _this.responseData.results.Tournaments;
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
    TournamentsPage.prototype.createTournament = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_tournament_create_tournament__["a" /* CreateTournamentPage */]);
    };
    return TournamentsPage;
}());
TournamentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tournaments',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\tournaments\tournaments.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Tournaments</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let tournament of tournaments" color="primary">\n\n    <ion-card-header>\n\n      {{tournament.name}}\n\n	   </ion-card-header>\n\n	 \n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createTournament()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\tournaments\tournaments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */]])
], TournamentsPage);

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_location_create_location__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_other_other__ = __webpack_require__(19);
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





/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationsPage = (function () {
    function LocationsPage(events, navCtrl, navParams, authService, teamService, statsService, app, loadingController, otherService) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.teamService = teamService;
        this.statsService = statsService;
        this.app = app;
        this.loadingController = loadingController;
        this.otherService = otherService;
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
    LocationsPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    LocationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.getAllLocation().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.locations = _this.responseData.results.locations;
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
    LocationsPage.prototype.createLocation = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_location_create_location__["a" /* CreateLocationPage */]);
    };
    return LocationsPage;
}());
LocationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-locations',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\locations\locations.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Locations</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let location of locations" color="primary">\n\n    <ion-card-header>\n\n      {{location.name}}\n\n	   </ion-card-header>\n\n	 \n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createLocation()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\locations\locations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */]])
], LocationsPage);

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_team_expense_add_team_expense__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_player_expense_add_player_expense__ = __webpack_require__(124);
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
 * Generated class for the TeamExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamExpensePage = (function () {
    function TeamExpensePage(navCtrl, app, authService, financeService, loadingController) {
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
        this.team = JSON.parse(localStorage.getItem('team'));
    }
    TeamExpensePage.prototype.ionViewCanEnter = function () {
        console.log("view did enter", this.authService.getAuthenticated());
        return this.authService.getAuthenticated();
    };
    TeamExpensePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.financeService.getTeamExpense(this.team.id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.expense);
                _this.expenses = _this.responseData.results.expense;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    TeamExpensePage.prototype.expenseSelected = function (event, expense) {
        var _this = this;
        console.log("selected", event, expense);
        console.log("after change", expense);
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.financeService.postTeamExpenseUpdate(expense).then(function (result) {
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
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    TeamExpensePage.prototype.addExpense = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_team_expense_add_team_expense__["a" /* AddTeamExpensePage */]);
    };
    TeamExpensePage.prototype.editExpense = function (expense) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_team_expense_add_team_expense__["a" /* AddTeamExpensePage */], { "expense": expense });
    };
    TeamExpensePage.prototype.addPlayerExpense = function (expense) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_player_expense_add_player_expense__["a" /* AddPlayerExpensePage */], { "expense": expense });
    };
    return TeamExpensePage;
}());
TeamExpensePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-expense',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-expense\team-expense.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Expense</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="appBackground">\n  <ion-card *ngFor="let expense of expenses" >\n    <ion-card-header>\n      {{expense.description}}\n      <p>{{expense.team.name}}</p>\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{expense.expenseDate}}</p>\n      <p>${{expense.amount}}</p>\n      <ion-item>\n	         <ion-label>\n          Select Payment Status\n        </ion-label>\n        </ion-item>\n        <ion-item>\n        <ion-select [(ngModel)]="expense.status"  (ionChange)="expenseSelected($event, expense)">\n            <ion-option value=1>PAID</ion-option>\n          <ion-option value=0>PENDING</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n          <button ion-button (click)="addPlayerExpense(expense)">\n              Add Players Expense\n            </button>\n\n       </ion-item>\n       <ion-item>\n          <button ion-button (click)="editExpense(expense)">\n              Edit\n            </button>\n\n       </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-fab bottom right>\n  <button ion-fab mini (click)="addExpense()"><ion-icon name="add"></ion-icon></button>\n</ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-expense\team-expense.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], TeamExpensePage);

//# sourceMappingURL=team-expense.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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



var matchapiUrl = 'https://crickify.herokuapp.com/match';
var apiUrl = 'https://crickify.herokuapp.com/teamplayer';
var teamapiUrl = 'https://crickify.herokuapp.com/team';
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
    TeamService.prototype.getAllPlayers = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/teams/players/' + team.id, { headers: headers })
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
    TeamService.prototype.getOtherMatchPlayers = function (team, matchId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(matchapiUrl + '/players/' + matchId, { headers: headers })
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
    TeamService.prototype.getAllTeamPlayers = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/teamplayers/team//' + team.id, { headers: headers })
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
    TeamService.prototype.createTeam = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(teamapiUrl + '/team', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    TeamService.prototype.roleUpdate = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.put(apiUrl + '/team/player/' + value.team.id + '/status/' + value.status, JSON.stringify(value.player), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    TeamService.prototype.addPlayer = function (credentials, team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(credentials));
            _this.http.post(apiUrl + '/team/player/' + team.id, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    TeamService.prototype.deletePlayer = function (player, team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/team/' + team.id + '/player/' + player.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    TeamService.prototype.getAdminTeams = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/teamadmin', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response teams", res.json());
                if (res.json().statusCode == '200') {
                    console.log("teams", res.json());
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

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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



var apiUrl = 'https://crickify.herokuapp.com';
//let isLoggedIn : boolean;
var isAuthenticated;
var OtherService = (function () {
    function OtherService(http) {
        this.http = http;
    }
    OtherService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    OtherService.prototype.getAllLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/location/locations', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response locations", res.json());
                if (res.json().statusCode == '200') {
                    console.log("locations", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    OtherService.prototype.getAllDismisals = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/batting/batting/dismisals', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response locations", res.json());
                if (res.json().statusCode == '200') {
                    console.log("locations", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    OtherService.prototype.getAllTournament = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/tournament/tournaments', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response tournaments", res.json());
                if (res.json().statusCode == '200') {
                    console.log("tournaments", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    OtherService.prototype.createLocation = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/location/location', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    OtherService.prototype.createTournament = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/tournament/tournament', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("response", res.json());
                if (res.json().statusCode == '200') {
                    console.log("value", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return OtherService;
}());
OtherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], OtherService);

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-match-team/add-match-team.module": [
		346
	],
	"../pages/add-player-expense/add-player-expense.module": [
		361
	],
	"../pages/add-team-expense/add-team-expense.module": [
		360
	],
	"../pages/batting/batting.module": [
		348
	],
	"../pages/bowling/bowling.module": [
		349
	],
	"../pages/create-location/create-location.module": [
		358
	],
	"../pages/create-match/create-match.module": [
		204
	],
	"../pages/create-player/create-player.module": [
		356
	],
	"../pages/create-team/create-team.module": [
		353
	],
	"../pages/create-tournament/create-tournament.module": [
		357
	],
	"../pages/forgot/forgot.module": [
		205
	],
	"../pages/login/login.module": [
		208
	],
	"../pages/logout/logout.module": [
		355
	],
	"../pages/match-availability/match-availability.module": [
		347
	],
	"../pages/match-team/match-team.module": [
		203
	],
	"../pages/modeChange/modeChange.module": [
		359
	],
	"../pages/my-profile/my-profile.module": [
		211
	],
	"../pages/previous-match-details-edit/previous-match-details-edit.module": [
		351
	],
	"../pages/previous-match-details/previous-match-details.module": [
		344
	],
	"../pages/previous-matches/previous-matches.module": [
		345
	],
	"../pages/reset/reset.module": [
		354
	],
	"../pages/signup/signup.module": [
		209
	],
	"../pages/team-matches/team-matches.module": [
		352
	],
	"../pages/upload-modal/upload-modal.module": [
		342
	],
	"../pages/welcome/welcome.module": [
		210
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchTeamPageModule", function() { return MatchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_team__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchTeamPageModule = (function () {
    function MatchTeamPageModule() {
    }
    return MatchTeamPageModule;
}());
MatchTeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__match_team__["a" /* MatchTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_team__["a" /* MatchTeamPage */]),
        ],
    })
], MatchTeamPageModule);

//# sourceMappingURL=match-team.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMatchModule", function() { return CreateMatchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_match__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateMatchModule = (function () {
    function CreateMatchModule() {
    }
    return CreateMatchModule;
}());
CreateMatchModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_match__["a" /* CreateMatchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_match__["a" /* CreateMatchPage */]),
        ],
    })
], CreateMatchModule);

//# sourceMappingURL=create-match.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPageModule = (function () {
    function ForgotPageModule() {
    }
    return ForgotPageModule;
}());
ForgotPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */]),
        ],
    })
], ForgotPageModule);

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    return WelcomePageModule;
}());
WelcomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
        ],
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyProfilePageModule = (function () {
    function MyProfilePageModule() {
    }
    return MyProfilePageModule;
}());
MyProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]),
        ],
    })
], MyProfilePageModule);

//# sourceMappingURL=my-profile.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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
var battingapiUrl = 'https://crickify.herokuapp.com/batting';
var bowlingapiUrl = 'https://crickify.herokuapp.com/Bowling';
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
    MatchService.prototype.getAllMatchesFilter = function (filter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            var urlSearchParams = new URLSearchParams();
            for (var key in filter) {
                urlSearchParams.append(key, filter[key]);
            }
            _this.http.get(apiUrl + '/matches/availabilities?' + urlSearchParams, { headers: headers })
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
    MatchService.prototype.getBestBatting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(battingapiUrl + '/top')
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
    MatchService.prototype.getBestBowling = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(bowlingapiUrl + '/top')
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
    MatchService.prototype.getMatches = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/matches/' + team.id, { headers: headers })
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
    MatchService.prototype.getMatchesFilter = function (team, filter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            var urlSearchParams = new URLSearchParams();
            for (var key in filter) {
                if (filter[key] != null) {
                    urlSearchParams.append(key, filter[key]);
                }
            }
            _this.http.get(apiUrl + '/matches/' + team.id + '?' + urlSearchParams, { headers: headers })
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
    MatchService.prototype.getPreviousMatchesFilter = function (filter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            var urlSearchParams = new URLSearchParams();
            for (var key in filter) {
                urlSearchParams.append(key, filter[key]);
            }
            _this.http.get(apiUrl + '/playedmatches?' + urlSearchParams, { headers: headers })
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
    MatchService.prototype.getMatchAvailability = function (matchid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/availability/' + matchid, { headers: headers })
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
    MatchService.prototype.updateAvailability = function (match, player, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(status));
            _this.http.post(apiUrl + '/' + match + '/availability/' + player.id, status, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.addMatch = function (data, team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiUrl + '/match/' + team.id, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.createMatchTeam = function (matchId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data.player.id));
            _this.http.post(apiUrl + '/team/' + matchId, data.player.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.sendTeamList = function (matchId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/team/send/' + matchId, null, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MatchService.prototype.deleteMatchTeam = function (matchId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/team/' + matchId + '/player/' + data.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
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

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModalPageModule", function() { return UploadModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_modal__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadModalPageModule = (function () {
    function UploadModalPageModule() {
    }
    return UploadModalPageModule;
}());
UploadModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__upload_modal__["a" /* UploadModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload_modal__["a" /* UploadModalPage */]),
        ],
    })
], UploadModalPageModule);

//# sourceMappingURL=upload-modal.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchDetailsPageModule", function() { return PreviousMatchDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_match_details__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviousMatchDetailsPageModule = (function () {
    function PreviousMatchDetailsPageModule() {
    }
    return PreviousMatchDetailsPageModule;
}());
PreviousMatchDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__previous_match_details__["a" /* PreviousMatchDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_match_details__["a" /* PreviousMatchDetailsPage */]),
        ],
    })
], PreviousMatchDetailsPageModule);

//# sourceMappingURL=previous-match-details.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchesPageModule", function() { return PreviousMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_matches__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PreviousMatchesPageModule = (function () {
    function PreviousMatchesPageModule() {
    }
    return PreviousMatchesPageModule;
}());
PreviousMatchesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__previous_matches__["a" /* PreviousMatchesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_matches__["a" /* PreviousMatchesPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], PreviousMatchesPageModule);

//# sourceMappingURL=previous-matches.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMatchTeamPageModule", function() { return AddMatchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_match_team__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddMatchTeamPageModule = (function () {
    function AddMatchTeamPageModule() {
    }
    return AddMatchTeamPageModule;
}());
AddMatchTeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_match_team__["a" /* AddMatchTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_match_team__["a" /* AddMatchTeamPage */]),
        ],
    })
], AddMatchTeamPageModule);

//# sourceMappingURL=add-match-team.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchAvailabilityPageModule", function() { return MatchAvailabilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_availability__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MatchAvailabilityPageModule = (function () {
    function MatchAvailabilityPageModule() {
    }
    return MatchAvailabilityPageModule;
}());
MatchAvailabilityPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__match_availability__["a" /* MatchAvailabilityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_availability__["a" /* MatchAvailabilityPage */]),
        ],
    })
], MatchAvailabilityPageModule);

//# sourceMappingURL=match-availability.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattingPageModule", function() { return BattingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batting__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BattingPageModule = (function () {
    function BattingPageModule() {
    }
    return BattingPageModule;
}());
BattingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__batting__["a" /* BattingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__batting__["a" /* BattingPage */]),
        ],
    })
], BattingPageModule);

//# sourceMappingURL=batting.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BowlingPageModule", function() { return BowlingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bowling__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BowlingPageModule = (function () {
    function BowlingPageModule() {
    }
    return BowlingPageModule;
}());
BowlingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bowling__["a" /* BowlingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bowling__["a" /* BowlingPage */]),
        ],
    })
], BowlingPageModule);

//# sourceMappingURL=bowling.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BowlingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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
var battingapiUrl = 'https://crickify.herokuapp.com/batting';
var bowlingapiUrl = 'https://crickify.herokuapp.com/Bowling';
//let isLoggedIn : boolean;
var isAuthenticated;
var BowlingService = (function () {
    function BowlingService(http) {
        this.http = http;
    }
    BowlingService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    BowlingService.prototype.getAllMatches = function () {
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
    BowlingService.prototype.getBestBatting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(battingapiUrl + '/top')
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
    BowlingService.prototype.getBestBowling = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(bowlingapiUrl + '/top')
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
    BowlingService.prototype.getPreviousMatches = function () {
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
    BowlingService.prototype.getMatches = function (team) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/matches/' + team.id, { headers: headers })
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
    BowlingService.prototype.getBowlingSummary = function (bowlingId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(bowlingapiUrl + '/bowling/' + bowlingId, { headers: headers })
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
    BowlingService.prototype.getMatchAvailability = function (matchid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/availability/' + matchid, { headers: headers })
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
    BowlingService.prototype.getMatchTeam = function (matchid) {
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
    BowlingService.prototype.postAvailability = function (data) {
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
    BowlingService.prototype.updateAvailability = function (match, player, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(status));
            _this.http.post(apiUrl + '/' + match + '/availability/' + player.id, status, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BowlingService.prototype.addBowling = function (data, match) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(bowlingapiUrl + '/bowling/' + match, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BowlingService.prototype.createMatchTeam = function (matchId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data.player.id));
            _this.http.post(apiUrl + '/team/' + matchId, data.player.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BowlingService.prototype.sendTeamList = function (matchId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/team/send/' + matchId, null, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    BowlingService.prototype.deleteMatchTeam = function (matchId, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/team/' + matchId + '/player/' + data.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return BowlingService;
}());
BowlingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BowlingService);

//# sourceMappingURL=bowling.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchDetailsEditPageModule", function() { return PreviousMatchDetailsEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_match_details_edit__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviousMatchDetailsEditPageModule = (function () {
    function PreviousMatchDetailsEditPageModule() {
    }
    return PreviousMatchDetailsEditPageModule;
}());
PreviousMatchDetailsEditPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__previous_match_details_edit__["a" /* PreviousMatchDetailsEditPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_match_details_edit__["a" /* PreviousMatchDetailsEditPage */]),
        ],
    })
], PreviousMatchDetailsEditPageModule);

//# sourceMappingURL=previous-match-details-edit.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMatchesPageModule", function() { return TeamMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_matches__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TeamMatchesPageModule = (function () {
    function TeamMatchesPageModule() {
    }
    return TeamMatchesPageModule;
}());
TeamMatchesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team_matches__["a" /* TeamMatchesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_matches__["a" /* TeamMatchesPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], TeamMatchesPageModule);

//# sourceMappingURL=team-matches.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamModule", function() { return CreateTeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_team__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateTeamModule = (function () {
    function CreateTeamModule() {
    }
    return CreateTeamModule;
}());
CreateTeamModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_team__["a" /* CreateTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_team__["a" /* CreateTeamPage */]),
        ],
    })
], CreateTeamModule);

//# sourceMappingURL=create-team.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPageModule = (function () {
    function ResetPageModule() {
    }
    return ResetPageModule;
}());
ResetPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reset__["a" /* ResetPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset__["a" /* ResetPage */]),
        ],
    })
], ResetPageModule);

//# sourceMappingURL=reset.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logout__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogoutPageModule = (function () {
    function LogoutPageModule() {
    }
    return LogoutPageModule;
}());
LogoutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__logout__["a" /* LogoutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__logout__["a" /* LogoutPage */]),
        ],
    })
], LogoutPageModule);

//# sourceMappingURL=logout.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayerModule", function() { return CreatePlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_player__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreatePlayerModule = (function () {
    function CreatePlayerModule() {
    }
    return CreatePlayerModule;
}());
CreatePlayerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_player__["a" /* CreatePlayerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_player__["a" /* CreatePlayerPage */]),
        ],
    })
], CreatePlayerModule);

//# sourceMappingURL=create-player.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTournamentModule", function() { return CreateTournamentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_tournament__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateTournamentModule = (function () {
    function CreateTournamentModule() {
    }
    return CreateTournamentModule;
}());
CreateTournamentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_tournament__["a" /* CreateTournamentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_tournament__["a" /* CreateTournamentPage */]),
        ],
    })
], CreateTournamentModule);

//# sourceMappingURL=create-tournament.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocationModule", function() { return CreateLocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_location__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateLocationModule = (function () {
    function CreateLocationModule() {
    }
    return CreateLocationModule;
}());
CreateLocationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_location__["a" /* CreateLocationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_location__["a" /* CreateLocationPage */]),
        ],
    })
], CreateLocationModule);

//# sourceMappingURL=create-location.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeChangeModule", function() { return ModeChangeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modeChange__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModeChangeModule = (function () {
    function ModeChangeModule() {
    }
    return ModeChangeModule;
}());
ModeChangeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modeChange__["a" /* ModeChangePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modeChange__["a" /* ModeChangePage */]),
        ],
    })
], ModeChangeModule);

//# sourceMappingURL=modeChange.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamExpensePageModule", function() { return AddTeamExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_team_expense__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddTeamExpensePageModule = (function () {
    function AddTeamExpensePageModule() {
    }
    return AddTeamExpensePageModule;
}());
AddTeamExpensePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_team_expense__["a" /* AddTeamExpensePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_team_expense__["a" /* AddTeamExpensePage */]),
        ],
    })
], AddTeamExpensePageModule);

//# sourceMappingURL=add-team-expense.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerExpensePageModule", function() { return AddPlayerExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_player_expense__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddPlayerExpensePageModule = (function () {
    function AddPlayerExpensePageModule() {
    }
    return AddPlayerExpensePageModule;
}());
AddPlayerExpensePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_player_expense__["a" /* AddPlayerExpensePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_player_expense__["a" /* AddPlayerExpensePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], AddPlayerExpensePageModule);

//# sourceMappingURL=add-player-expense.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_forgot__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__ = __webpack_require__(103);
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
    function WelcomePage(navCtrl, navParams, authService, loadingController, matchService, admob) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingController = loadingController;
        this.matchService = matchService;
        this.admob = admob;
    }
    WelcomePage.prototype.showBanner = function () {
        var bannerConfig = {
            autoShow: true,
            id: 'ca-app-pub-7720772047232561/8941352265'
        };
        this.admob.banner.config(bannerConfig);
        console.log('view did before enter ad');
        this.admob.banner.prepare().then(function () {
            // success
            console.log('view did enter ad');
        }).catch(function (e) { return console.log("view did error enter ad", e); });
        console.log('view did after enter ad');
    };
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showBanner();
        console.log('ionViewDidLoad WelcomePage');
        if (this.authService.getAuthenticated()) {
            //console.log("token", this.authService.getToken());
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getBestBatting().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results.Batting);
                _this.battings = _this.responseData.results.Batting;
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
        this.matchService.getBestBowling().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results.Bowling);
                _this.bowlings = _this.responseData.results.Bowling;
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
        loading.dismiss();
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
    Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding class="login-background">\n\n    <ion-grid  >\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <img src="assets/img/icon.png" hieght="50"/>\n\n			 </ion-col >\n\n			 <ion-col col-4 center>\n\n		 <ion-label color="white" stacked class="my-label">\n\n        Crickify\n\n      </ion-label>\n\n          </ion-col>\n\n   \n\n          <ion-col center text-center>\n\n            <button ion-button full color="success" (click)="signup()">Sign up</button>\n\n          </ion-col>\n\n        \n\n        \n\n          <ion-col center text-center>\n\n            <button ion-button full color="lightText" (click)="login()">Log in</button>\n\n          </ion-col>\n\n        \n\n		 \n\n         \n\n        </ion-row>\n\n      </ion-grid>\n\n	   <ion-label color="white" stacked class="my-label">\n\n         Batting Performances\n\n      </ion-label>\n\n	 <ion-grid >\n\n        <ion-row > \n\n		<ion-col *ngFor="let batting of battings| slice:0:4;">\n\n	<ion-card color="primary" height="350">\n\n    <ion-card-header>\n\n      <b>{{batting.player.name}} </b>\n\n      \n\n    </ion-card-header>\n\n    <p *ngIf= "batting.player.imgUrl!= null" ><img width="80" height="80" src="{{batting.player.imgUrl}}"/></p>\n\n    \n\n    <p *ngIf="batting.player.imgUrl == null" ><img src="assets/img/batsman.png" height="250"/></p>\n\n	\n\n    <ion-card-content>\n\n      <p>{{batting.run}}({{batting.ball}})</p>\n\n     <p>{{batting.match.team.teamname}} vs\n\n      {{batting.match.opponent}}</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n   </ion-col>\n\n   </ion-row>\n\n      </ion-grid>\n\n	  \n\n	 <ion-label color="white" stacked class="my-label">\n\n        Bowling Performances\n\n      </ion-label>\n\n	   <ion-grid >\n\n        <ion-row > \n\n		<ion-col *ngFor="let bowling of bowlings| slice:0:4;" width="100%">\n\n  	<ion-card color="primary"  height="350">\n\n    <ion-card-header>\n\n      <b>{{bowling.player.name}} </b>\n\n      \n\n    </ion-card-header>\n\n	  <p *ngIf= "bowling.player.imgUrl!= null" ><img width="80" height="80" src="{{bowling.player.imgUrl}}"/></p>\n\n   \n\n    <p *ngIf="bowling.player.imgUrl == null" ><img src="assets/img/bowler.png" height="250"/></p>\n\n	\n\n    <ion-card-content>\n\n      <p>{{bowling.wickets}}/{{bowling.run}}</p>\n\n     <p>{{bowling.match.team.teamname}} vs\n\n      {{bowling.match.opponent}}</p>\n\n\n\n    </ion-card-content>\n\n </ion-card>\n\n   </ion-col>\n\n   </ion-row>\n\n      </ion-grid>\n\n\n\n<br>\n\n<br><br>\n\n<br>\n\n<ion-card color="primary">\n\n    <ion-card-header>\n\n	\n\n	 </ion-card-header>\n\n	\n\n    <ion-card-content>\n\n    <ion-grid >\n\n        <ion-row color="primary" row-20 center text-center>\n\n         <ion-col>\n\n			<h2>About Crickify</h2>\n\n			</ion-col>\n\n          </ion-row>\n\n		  \n\n		  <ion-row row-60 center text-center>\n\n		  <ion-col>\n\n		  Manage your entire cricket landscape. From league schedules to player registrations, Player availability to result management, all available under one convenient account.Finance Mangement for the players.Take the hassle out of your club or league site. \n\n		  With integrated cricket data it will always be up to date and looking sharp.Announce your team and get your best team through interface.\n\n		 </ion-col>\n\n<br>\n\n<br>		 </ion-row>\n\n		  <ion-row row-20 center text-center>\n\n		  <ion-col>\n\n		  <h2>What are you waiting for?! Join thousands of other clubs, schools and leagues and get started with Crickify today.</h2>\n\n		 </ion-col>\n\n		 </ion-row>\n\n		   </ion-grid>\n\n		    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n<br>\n\n<br><br>\n\n<br>\n\n<ion-card color="primary">\n\n    <ion-card-header>\n\n	\n\n	 </ion-card-header>\n\n	\n\n    <ion-card-content>\n\n    <ion-grid color="primary">\n\n        <ion-row   center text-center>\n\n         <ion-col >\n\n			<h2>Contact Us</h2>\n\n			</ion-col>\n\n          </ion-row>\n\n		  <br>\n\n<br>\n\n		  <ion-row   center text-center>\n\n		  <ion-col>\n\n		  <b>Website Issues or Suggestions? Contact US @ appcrickify@gmail.com</b>\n\n		  </ion-col>\n\n		  <br>\n\n<br>\n\n		\n\n		  </ion-row >\n\n		  <ion-row  center text-center>\n\n		  <ion-col>\n\n		  Copyright © 2018 All rights reserved by Crickify\n\n		  </ion-col>\n\n		  </ion-row>\n\n		   </ion-grid>\n\n		     </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__["a" /* AdMobFree */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(16);
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
        selector: 'page-list',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Team Stats</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-segment [(ngModel)]="tabsvalues">\n\n        <ion-segment-button value="team">\n\n          Team Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="batting">\n\n          Batting Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="bowling">\n\n            Bowling Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="fielding">\n\n              Fielding Stats\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    \n\n    <div [ngSwitch]="tabsvalues">\n\n      <div *ngSwitchCase="\'team\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <ion-card *ngFor="let stat of statsArray">  \n\n                <ion-card-content>\n\n                    <h4>\n\n                        {{stat.name}}\n\n                    </h4>\n\n                  <div class="cric-cards">\n\n                      <p>Played</p>\n\n                      <h4>{{stat.statistics.played}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                    <p>Won</p>\n\n                    <h4>{{stat.statistics.won}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                      <p>Lost</p>\n\n                      <h4>{{stat.statistics.lost}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                    <p>No Result</p>\n\n                    <h4>{{stat.statistics.abandoned}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                      <p>High Total</p>\n\n                      <h4>{{stat.statistics.highestTotal}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                        <p>Low Total</p>\n\n                        <h4>{{stat.statistics.lowestTotal}}</h4>\n\n                  </div>\n\n                </ion-card-content>\n\n              \n\n              </ion-card>\n\n      </div>\n\n    \n\n      <div *ngSwitchCase="\'batting\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <ion-card *ngFor="let stat of statsArray">\n\n                <ion-card-content>\n\n              <div class="cric-stat-batting-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ul>\n\n                    <li class="header">\n\n                        <p class="cric-player-name">Name</p>\n\n                        <p>M</p>\n\n                        <p>I</p>\n\n                        <p>R</p>\n\n                        <p>B</p>\n\n                        <p class="cric-values-decimals">Av</p>\n\n                        <p class="cric-values-decimals">SR</p>\n\n                    </li>\n\n                    <li *ngFor="let player of stat.battingStatistics">\n\n                        <p class="cric-player-name">{{player.player.name}}</p>\n\n                        <p>{{player.matches}}</p>\n\n                        <p>{{player.innings}}</p>\n\n                        <p>{{player.run}}</p>\n\n                        <p>{{player.ball}}</p>\n\n                        <p class="cric-values-decimals">{{player.average | number : \'1.2-2\'}}</p>\n\n                        <p class="cric-values-decimals">{{player.sr | number : \'1.2-2\'}}</p>\n\n                    </li>\n\n                  </ul>\n\n                </div>\n\n               </ion-card-content>\n\n              </ion-card>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'bowling\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <ion-card  *ngFor="let stat of statsArray">\n\n                <ion-card-content>\n\n              <div class="cric-stat-bowling-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ul>\n\n                    <li class="header">\n\n                        <p class="cric-player-name">Name</p>\n\n                        <p>M</p>\n\n                        <p>O</p>\n\n                        <p>R</p>\n\n                        <p>W</p>\n\n                        <p>Wd</p>\n\n                        <p>EC</p>\n\n                    </li>\n\n                    <li *ngFor="let player of stat.bowlingStatistics">\n\n                        <p class="cric-player-name">{{player.player.name}}</p>\n\n                        <p>{{player.matches}}</p>\n\n                        <p>{{player.overs}}</p>\n\n                        <p>{{player.run}}</p>\n\n                        <p>{{player.wickets}}</p>\n\n                        <p>{{player.wide}}</p>\n\n                        <p>{{player.economy}}</p>\n\n                    </li>\n\n                  </ul>\n\n                </div>\n\n            </ion-card-content>\n\n              </ion-card >\n\n      </div>\n\n\n\n        <div *ngSwitchCase="\'fielding\'">\n\n            <ion-item>\n\n                <ion-label>Pick a Team</ion-label>\n\n                <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                  <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            \n\n            <ion-card *ngFor="let stat of statsArray">\n\n                    <ion-card-content>\n\n                <div class="cric-stat-bowling-table">\n\n                    <h4>{{stat.name}}</h4>\n\n                    <ul>\n\n                      <li class="header">\n\n                          <p class="cric-player-name">Name</p>\n\n                          <p>M</p>\n\n                          <p>Ct</p>\n\n                          <p>R/O</p>\n\n                          <p>St</p>\n\n                      </li>\n\n                      <li *ngFor="let player of stat.bowlingStatistics">\n\n                          <p class="cric-player-name">{{player.player.name}}</p>\n\n                          <p>{{player.matches}}</p>\n\n                          <p>{{player.catches}}</p>\n\n                          <p>{{player.runOuts}}</p>\n\n                          <p>{{player.stumpings}}</p>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n                </ion-card-content>\n\n                </ion-card>\n\n        </div>\n\n\n\n      </div> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(426);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stats_stats__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_batting_batting__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_list__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_bowling_bowling__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_android_permissions__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_my_profile_my_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_my_profile_my_profile_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_my_account_my_account__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_my_account_my_account_module__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_previous_matches_previous_matches__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_previous_matches_previous_matches_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_my_teams_my_teams__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_my_teams_my_teams_module__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_players_players__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_finance_finance__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_previous_match_details_previous_match_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_previous_match_details_previous_match_details_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_match_team_match_team__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_match_team_match_team_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_finance_finance__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_forgot_forgot__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_forgot_forgot_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_finance_finance_module__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_reset_reset__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_reset_reset_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_logout_logout__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_logout_logout_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_push__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_create_team_create_team__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_create_team_create_team_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_team_players_team_players__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_team_players_team_players_module__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_create_player_create_player__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_create_player_create_player_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_create_match_create_match__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_create_match_create_match_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_team_matches_team_matches__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_team_matches_team_matches_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_match_availability_match_availability__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_match_availability_match_availability_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_tournaments_tournaments__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_locations_locations__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_tournaments_tournaments_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_locations_locations_module__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_create_location_create_location__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_create_location_create_location_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_create_tournament_create_tournament__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_create_tournament_create_tournament_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_modeChange_modeChange__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_modeChange_modeChange_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_add_match_team_add_match_team__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_add_match_team_add_match_team_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_batting_batting__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_batting_batting_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_bowling_bowling__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_bowling_bowling_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_previous_match_details_edit_previous_match_details_edit__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_previous_match_details_edit_previous_match_details_edit_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__providers_images_images__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__ionic_native_camera__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__ionic_native_file_transfer__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_upload_modal_upload_modal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_upload_modal_upload_modal_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_team_expense_team_expense__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_team_expense_team_expense_module__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_add_player_expense_add_player_expense__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_add_player_expense_add_player_expense_module__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_add_team_expense_add_team_expense__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_add_team_expense_add_team_expense_module__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pipes_pipes_module__ = __webpack_require__(46);
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
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_51__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_89__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/match-team/match-team.module#MatchTeamPageModule', name: 'MatchTeamPage', segment: 'match-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-match/create-match.module#CreateMatchModule', name: 'CreateMatchPage', segment: 'create-match', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/upload-modal/upload-modal.module#UploadModalPageModule', name: 'UploadModalPage', segment: 'upload-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-match-details/previous-match-details.module#PreviousMatchDetailsPageModule', name: 'PreviousMatchDetailsPage', segment: 'previous-match-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-matches/previous-matches.module#PreviousMatchesPageModule', name: 'PreviousMatchesPage', segment: 'previous-matches', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-match-team/add-match-team.module#AddMatchTeamPageModule', name: 'AddMatchTeamPage', segment: 'add-match-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/match-availability/match-availability.module#MatchAvailabilityPageModule', name: 'MatchAvailabilityPage', segment: 'match-availability', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/batting/batting.module#BattingPageModule', name: 'BattingPage', segment: 'batting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bowling/bowling.module#BowlingPageModule', name: 'BowlingPage', segment: 'bowling', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-match-details-edit/previous-match-details-edit.module#PreviousMatchDetailsEditPageModule', name: 'PreviousMatchDetailsEditPage', segment: 'previous-match-details-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team-matches/team-matches.module#TeamMatchesPageModule', name: 'TeamMatchesPage', segment: 'team-matches', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-team/create-team.module#CreateTeamModule', name: 'CreateTeamPage', segment: 'create-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-player/create-player.module#CreatePlayerModule', name: 'CreatePlayerPage', segment: 'create-player', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-tournament/create-tournament.module#CreateTournamentModule', name: 'CreateTournamentPage', segment: 'create-tournament', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-location/create-location.module#CreateLocationModule', name: 'CreateLocationPage', segment: 'create-location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modeChange/modeChange.module#ModeChangeModule', name: 'ModeChangePage', segment: 'modeChange', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-team-expense/add-team-expense.module#AddTeamExpensePageModule', name: 'AddTeamExpensePage', segment: 'add-team-expense', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-player-expense/add-player-expense.module#AddPlayerExpensePageModule', name: 'AddPlayerExpensePage', segment: 'add-player-expense', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_41__pages_finance_finance_module__["a" /* FinancePageModule */], __WEBPACK_IMPORTED_MODULE_40__pages_forgot_forgot_module__["ForgotPageModule"], __WEBPACK_IMPORTED_MODULE_23__pages_login_login_module__["LoginPageModule"], __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup_module__["SignupPageModule"],
            __WEBPACK_IMPORTED_MODULE_25__pages_my_profile_my_profile_module__["MyProfilePageModule"],
            __WEBPACK_IMPORTED_MODULE_27__pages_my_account_my_account_module__["a" /* MyAccountPageModule */],
            __WEBPACK_IMPORTED_MODULE_29__pages_previous_matches_previous_matches_module__["PreviousMatchesPageModule"],
            __WEBPACK_IMPORTED_MODULE_31__pages_my_teams_my_teams_module__["a" /* MyTeamsPageModule */],
            __WEBPACK_IMPORTED_MODULE_35__pages_previous_match_details_previous_match_details_module__["PreviousMatchDetailsPageModule"],
            __WEBPACK_IMPORTED_MODULE_37__pages_match_team_match_team_module__["MatchTeamPageModule"],
            __WEBPACK_IMPORTED_MODULE_43__pages_reset_reset_module__["ResetPageModule"],
            __WEBPACK_IMPORTED_MODULE_45__pages_logout_logout_module__["LogoutPageModule"],
            __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome_module__["WelcomePageModule"], __WEBPACK_IMPORTED_MODULE_86__pages_add_player_expense_add_player_expense_module__["AddPlayerExpensePageModule"],
            __WEBPACK_IMPORTED_MODULE_48__pages_create_team_create_team_module__["CreateTeamModule"],
            __WEBPACK_IMPORTED_MODULE_50__pages_team_players_team_players_module__["a" /* TeamPlayersPageModule */],
            __WEBPACK_IMPORTED_MODULE_53__pages_create_player_create_player_module__["CreatePlayerModule"],
            __WEBPACK_IMPORTED_MODULE_57__pages_team_matches_team_matches_module__["TeamMatchesPageModule"],
            __WEBPACK_IMPORTED_MODULE_55__pages_create_match_create_match_module__["CreateMatchModule"],
            __WEBPACK_IMPORTED_MODULE_59__pages_match_availability_match_availability_module__["MatchAvailabilityPageModule"], __WEBPACK_IMPORTED_MODULE_82__pages_upload_modal_upload_modal_module__["UploadModalPageModule"],
            __WEBPACK_IMPORTED_MODULE_62__pages_tournaments_tournaments_module__["a" /* TournamentsPageModule */], __WEBPACK_IMPORTED_MODULE_75__pages_bowling_bowling_module__["BowlingPageModule"], __WEBPACK_IMPORTED_MODULE_84__pages_team_expense_team_expense_module__["a" /* TeamExpensePageModule */], __WEBPACK_IMPORTED_MODULE_88__pages_add_team_expense_add_team_expense_module__["AddTeamExpensePageModule"],
            __WEBPACK_IMPORTED_MODULE_63__pages_locations_locations_module__["a" /* LocationsPageModule */], __WEBPACK_IMPORTED_MODULE_65__pages_create_location_create_location_module__["CreateLocationModule"], __WEBPACK_IMPORTED_MODULE_67__pages_create_tournament_create_tournament_module__["CreateTournamentModule"], __WEBPACK_IMPORTED_MODULE_69__pages_modeChange_modeChange_module__["ModeChangeModule"], __WEBPACK_IMPORTED_MODULE_71__pages_add_match_team_add_match_team_module__["AddMatchTeamPageModule"], __WEBPACK_IMPORTED_MODULE_77__pages_previous_match_details_edit_previous_match_details_edit_module__["PreviousMatchDetailsEditPageModule"], __WEBPACK_IMPORTED_MODULE_73__pages_batting_batting_module__["BattingPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_my_account_my_account__["a" /* MyAccountPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_my_teams_my_teams__["a" /* MyTeamsPage */], __WEBPACK_IMPORTED_MODULE_85__pages_add_player_expense_add_player_expense__["a" /* AddPlayerExpensePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_match_team_match_team__["a" /* MatchTeamPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_finance_finance__["a" /* FinancePage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_forgot_forgot__["a" /* ForgotPage */], __WEBPACK_IMPORTED_MODULE_87__pages_add_team_expense_add_team_expense__["a" /* AddTeamExpensePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_logout_logout__["a" /* LogoutPage */], __WEBPACK_IMPORTED_MODULE_81__pages_upload_modal_upload_modal__["a" /* UploadModalPage */], __WEBPACK_IMPORTED_MODULE_83__pages_team_expense_team_expense__["a" /* TeamExpensePage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_create_team_create_team__["a" /* CreateTeamPage */], __WEBPACK_IMPORTED_MODULE_49__pages_team_players_team_players__["a" /* TeamPlayersPage */], __WEBPACK_IMPORTED_MODULE_52__pages_create_player_create_player__["a" /* CreatePlayerPage */], __WEBPACK_IMPORTED_MODULE_56__pages_team_matches_team_matches__["a" /* TeamMatchesPage */], __WEBPACK_IMPORTED_MODULE_54__pages_create_match_create_match__["a" /* CreateMatchPage */], __WEBPACK_IMPORTED_MODULE_58__pages_match_availability_match_availability__["a" /* MatchAvailabilityPage */], __WEBPACK_IMPORTED_MODULE_60__pages_tournaments_tournaments__["a" /* TournamentsPage */], __WEBPACK_IMPORTED_MODULE_61__pages_locations_locations__["a" /* LocationsPage */],
            __WEBPACK_IMPORTED_MODULE_64__pages_create_location_create_location__["a" /* CreateLocationPage */], __WEBPACK_IMPORTED_MODULE_66__pages_create_tournament_create_tournament__["a" /* CreateTournamentPage */], __WEBPACK_IMPORTED_MODULE_68__pages_modeChange_modeChange__["a" /* ModeChangePage */], __WEBPACK_IMPORTED_MODULE_70__pages_add_match_team_add_match_team__["a" /* AddMatchTeamPage */], __WEBPACK_IMPORTED_MODULE_76__pages_previous_match_details_edit_previous_match_details_edit__["a" /* PreviousMatchDetailsEditPage */], __WEBPACK_IMPORTED_MODULE_72__pages_batting_batting__["a" /* BattingPage */], __WEBPACK_IMPORTED_MODULE_74__pages_bowling_bowling__["a" /* BowlingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_7__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_8__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_32__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_33__providers_finance_finance__["a" /* FinanceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_32__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_46__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_9__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_10__providers_batting_batting__["a" /* BattingService */], __WEBPACK_IMPORTED_MODULE_14__providers_bowling_bowling__["a" /* BowlingService */],
            __WEBPACK_IMPORTED_MODULE_78__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_79__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_80__ionic_native_file_transfer__["a" /* FileTransfer */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(66);
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
var LoginPage = (function () {
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
                    subTitle: 'your login and password combination doesnt seem to work. Please try again or reset your password',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log('ok clicked');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.homePage = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary"> \n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Login\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        \n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n          </ion-item>\n\n<ion-item>\n\n          <button ion-button full color="success" (click)="login()">Login</button></ion-item>\n\n  <ion-item>         <button ion-button full color="success" (click)="forgot()">Forgot Password</button></ion-item>\n\n   <ion-item>         <button ion-button full color="success" (click)="signup()">Sign Up</button></ion-item>\n\n\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_other_other__ = __webpack_require__(19);
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
    function HomePage(navCtrl, app, formBuilder, teamService, otherService, authService, matchService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.teamService = teamService;
        this.otherService = otherService;
        this.authService = authService;
        this.matchService = matchService;
        this.loadingController = loadingController;
        this.admob = admob;
        this.userPostData = { "user_id": "", "token": "" };
        if (this.authService.getAuthenticated()) {
            var data = JSON.parse(localStorage.getItem('userData'));
            console.log("fetch data", data);
            this.userDetails = data;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
        }
        this.getTeams();
        this.getTournaments();
        this.searchMatchesForm = formBuilder.group({
            startDate: [new Date().toISOString()],
            teamId: [0],
            tournamentId: [0]
        });
    }
    HomePage.prototype.showBanner = function () {
        var bannerConfig = {
            autoShow: true,
            id: 'ca-app-pub-7720772047232561/8941352265'
        };
        this.admob.banner.config(bannerConfig);
        console.log('view did before enter ad');
        this.admob.banner.prepare().then(function () {
            // success
            console.log('view did enter ad');
        }).catch(function (e) { return console.log("view did error enter ad", e); });
        console.log('view did after enter ad');
    };
    HomePage.prototype.ionViewCanEnter = function () {
        this.showBanner();
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
        this.matchService.getAllMatchesFilter(this.searchMatchesForm.value).then(function (result) {
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
                loading.dismiss();
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
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
                loading.dismiss();
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
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
    HomePage.prototype.getTeams = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        this.teamService.getAllTeams().then(function (result) {
            _this.teamresponseData = result;
            console.log(_this.teamresponseData);
            if (_this.teamresponseData.statusCode == '200') {
                console.log("test 200");
                _this.teams = _this.teamresponseData.results.teams;
            }
            else if (_this.teamresponseData.statusCode == "404") {
                console.log("unauthorrised");
                //  this.backToWelcome();
            }
            else {
                console.log("error", _this.teamresponseData);
            }
        }, function (err) {
            // Error log
        });
    };
    HomePage.prototype.getTournaments = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        this.otherService.getAllTournament().then(function (result) {
            _this.tournamentresponseData = result;
            console.log(_this.tournamentresponseData);
            if (_this.tournamentresponseData.statusCode == '200') {
                console.log("test 200");
                _this.tournaments = _this.tournamentresponseData.results.Tournaments;
            }
            else if (_this.tournamentresponseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                console.log("error", _this.tournamentresponseData);
            }
        }, function (err) {
            // Error log
        });
    };
    HomePage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getAllMatchesFilter(this.searchMatchesForm.value).then(function (result) {
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
                loading.dismiss();
                localStorage.clear();
                _this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true" color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Upcoming Matches </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Search Matches\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n        <form [formGroup]="searchMatchesForm">\n\n     \n\n            <ion-item>\n\n                <ion-label>Team</ion-label>\n\n                <ion-select formControlName="teamId"  >\n\n                  <ion-option *ngFor="let key of teams" [value]="key.id">{{key.teamname}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label>Tournament</ion-label>\n\n                  <ion-select formControlName="tournamentId"  >\n\n                    <ion-option *ngFor="let key of tournaments" [value]="key.id">{{key.name}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n     <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n                Filter\n\n                \n\n              </button>\n\n     \n\n        </form>\n\n      \n\n    \n\n    </ion-card-content>\n\n    </ion-card>\n\n  <ion-card *ngFor="let match of matches">\n\n    <ion-card-header>\n\n      {{match.match.team.teamname}} versus\n\n      {{match.match.opponent}}\n\n      <p>{{match.match.tournament?.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <p>{{match.matchTime | momentjs}}</p>\n\n      <p>{{match.match.location?.name}}, {{match.match.location?.address}}</p>\n\n	  \n\n         <ion-label>\n\n          Select Attendance\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="match.status" (ionChange)="availabilitySelected($event, match)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	\n\n      <ion-item>\n\n	  \n\n	      <ion-label floating>Comments</ion-label>\n\n    <ion-input [(ngModel)]="match.comments" (ionChange)="availabilitySelected($event, match)"></ion-input>\n\n	 </ion-item>\n\n	 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_8__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__momentjs_momentjs__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__momentjs_momentjs__["a" /* MomentjsPipe */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__momentjs_momentjs__["a" /* MomentjsPipe */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 219,
	"./af.js": 219,
	"./ar": 220,
	"./ar-dz": 221,
	"./ar-dz.js": 221,
	"./ar-kw": 222,
	"./ar-kw.js": 222,
	"./ar-ly": 223,
	"./ar-ly.js": 223,
	"./ar-ma": 224,
	"./ar-ma.js": 224,
	"./ar-sa": 225,
	"./ar-sa.js": 225,
	"./ar-tn": 226,
	"./ar-tn.js": 226,
	"./ar.js": 220,
	"./az": 227,
	"./az.js": 227,
	"./be": 228,
	"./be.js": 228,
	"./bg": 229,
	"./bg.js": 229,
	"./bm": 230,
	"./bm.js": 230,
	"./bn": 231,
	"./bn.js": 231,
	"./bo": 232,
	"./bo.js": 232,
	"./br": 233,
	"./br.js": 233,
	"./bs": 234,
	"./bs.js": 234,
	"./ca": 235,
	"./ca.js": 235,
	"./cs": 236,
	"./cs.js": 236,
	"./cv": 237,
	"./cv.js": 237,
	"./cy": 238,
	"./cy.js": 238,
	"./da": 239,
	"./da.js": 239,
	"./de": 240,
	"./de-at": 241,
	"./de-at.js": 241,
	"./de-ch": 242,
	"./de-ch.js": 242,
	"./de.js": 240,
	"./dv": 243,
	"./dv.js": 243,
	"./el": 244,
	"./el.js": 244,
	"./en-au": 245,
	"./en-au.js": 245,
	"./en-ca": 246,
	"./en-ca.js": 246,
	"./en-gb": 247,
	"./en-gb.js": 247,
	"./en-ie": 248,
	"./en-ie.js": 248,
	"./en-il": 249,
	"./en-il.js": 249,
	"./en-nz": 250,
	"./en-nz.js": 250,
	"./eo": 251,
	"./eo.js": 251,
	"./es": 252,
	"./es-do": 253,
	"./es-do.js": 253,
	"./es-us": 254,
	"./es-us.js": 254,
	"./es.js": 252,
	"./et": 255,
	"./et.js": 255,
	"./eu": 256,
	"./eu.js": 256,
	"./fa": 257,
	"./fa.js": 257,
	"./fi": 258,
	"./fi.js": 258,
	"./fo": 259,
	"./fo.js": 259,
	"./fr": 260,
	"./fr-ca": 261,
	"./fr-ca.js": 261,
	"./fr-ch": 262,
	"./fr-ch.js": 262,
	"./fr.js": 260,
	"./fy": 263,
	"./fy.js": 263,
	"./gd": 264,
	"./gd.js": 264,
	"./gl": 265,
	"./gl.js": 265,
	"./gom-latn": 266,
	"./gom-latn.js": 266,
	"./gu": 267,
	"./gu.js": 267,
	"./he": 268,
	"./he.js": 268,
	"./hi": 269,
	"./hi.js": 269,
	"./hr": 270,
	"./hr.js": 270,
	"./hu": 271,
	"./hu.js": 271,
	"./hy-am": 272,
	"./hy-am.js": 272,
	"./id": 273,
	"./id.js": 273,
	"./is": 274,
	"./is.js": 274,
	"./it": 275,
	"./it.js": 275,
	"./ja": 276,
	"./ja.js": 276,
	"./jv": 277,
	"./jv.js": 277,
	"./ka": 278,
	"./ka.js": 278,
	"./kk": 279,
	"./kk.js": 279,
	"./km": 280,
	"./km.js": 280,
	"./kn": 281,
	"./kn.js": 281,
	"./ko": 282,
	"./ko.js": 282,
	"./ky": 283,
	"./ky.js": 283,
	"./lb": 284,
	"./lb.js": 284,
	"./lo": 285,
	"./lo.js": 285,
	"./lt": 286,
	"./lt.js": 286,
	"./lv": 287,
	"./lv.js": 287,
	"./me": 288,
	"./me.js": 288,
	"./mi": 289,
	"./mi.js": 289,
	"./mk": 290,
	"./mk.js": 290,
	"./ml": 291,
	"./ml.js": 291,
	"./mn": 292,
	"./mn.js": 292,
	"./mr": 293,
	"./mr.js": 293,
	"./ms": 294,
	"./ms-my": 295,
	"./ms-my.js": 295,
	"./ms.js": 294,
	"./mt": 296,
	"./mt.js": 296,
	"./my": 297,
	"./my.js": 297,
	"./nb": 298,
	"./nb.js": 298,
	"./ne": 299,
	"./ne.js": 299,
	"./nl": 300,
	"./nl-be": 301,
	"./nl-be.js": 301,
	"./nl.js": 300,
	"./nn": 302,
	"./nn.js": 302,
	"./pa-in": 303,
	"./pa-in.js": 303,
	"./pl": 304,
	"./pl.js": 304,
	"./pt": 305,
	"./pt-br": 306,
	"./pt-br.js": 306,
	"./pt.js": 305,
	"./ro": 307,
	"./ro.js": 307,
	"./ru": 308,
	"./ru.js": 308,
	"./sd": 309,
	"./sd.js": 309,
	"./se": 310,
	"./se.js": 310,
	"./si": 311,
	"./si.js": 311,
	"./sk": 312,
	"./sk.js": 312,
	"./sl": 313,
	"./sl.js": 313,
	"./sq": 314,
	"./sq.js": 314,
	"./sr": 315,
	"./sr-cyrl": 316,
	"./sr-cyrl.js": 316,
	"./sr.js": 315,
	"./ss": 317,
	"./ss.js": 317,
	"./sv": 318,
	"./sv.js": 318,
	"./sw": 319,
	"./sw.js": 319,
	"./ta": 320,
	"./ta.js": 320,
	"./te": 321,
	"./te.js": 321,
	"./tet": 322,
	"./tet.js": 322,
	"./tg": 323,
	"./tg.js": 323,
	"./th": 324,
	"./th.js": 324,
	"./tl-ph": 325,
	"./tl-ph.js": 325,
	"./tlh": 326,
	"./tlh.js": 326,
	"./tr": 327,
	"./tr.js": 327,
	"./tzl": 328,
	"./tzl.js": 328,
	"./tzm": 329,
	"./tzm-latn": 330,
	"./tzm-latn.js": 330,
	"./tzm.js": 329,
	"./ug-cn": 331,
	"./ug-cn.js": 331,
	"./uk": 332,
	"./uk.js": 332,
	"./ur": 333,
	"./ur.js": 333,
	"./uz": 334,
	"./uz-latn": 335,
	"./uz-latn.js": 335,
	"./uz.js": 334,
	"./vi": 336,
	"./vi.js": 336,
	"./x-pseudo": 337,
	"./x-pseudo.js": 337,
	"./yo": 338,
	"./yo.js": 338,
	"./zh-cn": 339,
	"./zh-cn.js": 339,
	"./zh-hk": 340,
	"./zh-hk.js": 340,
	"./zh-tw": 341,
	"./zh-tw.js": 341
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 484;

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentjsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the MomentjsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MomentjsPipe = (function () {
    function MomentjsPipe() {
    }
    /**
      * Takes a date value and returns a pretty string from current time,
      * for instance: "four hours ago" or "in eleven minutes".
      */
    MomentjsPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).utc().format("DD-MM-YYYY HH:mm");
        //return value.toLowerCase();
    };
    return MomentjsPipe;
}());
MomentjsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'momentjs',
    })
], MomentjsPipe);

//# sourceMappingURL=momentjs.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_matches_team_matches__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_finance_finance__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_team_players_team_players__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tournaments_tournaments__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_locations_locations__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modeChange_modeChange__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_team_expense_team_expense__ = __webpack_require__(151);
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
    function MyApp(events, platform, statusBar, splashScreen, androidPermissions, push, alertCtrl) {
        var _this = this;
        this.events = events;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.type = "normal";
        platform.ready().then(function () {
            androidPermissions.requestPermissions([
                androidPermissions.PERMISSION.INTERNET,
                androidPermissions.PERMISSION.ACCESS_NETWORK_STATE,
                androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
            ]);
        });
        this.initializeApp();
        this.initPushNotification();
        this.adminPages = [{ title: 'Matches', component: __WEBPACK_IMPORTED_MODULE_10__pages_team_matches_team_matches__["a" /* TeamMatchesPage */] },
            { title: 'Players', component: __WEBPACK_IMPORTED_MODULE_15__pages_team_players_team_players__["a" /* TeamPlayersPage */] },
            { title: 'Tournament', component: __WEBPACK_IMPORTED_MODULE_18__pages_tournaments_tournaments__["a" /* TournamentsPage */] },
            { title: 'Location', component: __WEBPACK_IMPORTED_MODULE_19__pages_locations_locations__["a" /* LocationsPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__["a" /* MyProfilePage */] },
            { title: 'Manage Teams', component: __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__["a" /* MyTeamsPage */] },
            { title: 'Change Mode', component: __WEBPACK_IMPORTED_MODULE_20__pages_modeChange_modeChange__["a" /* ModeChangePage */] },
            { title: 'Expense', component: __WEBPACK_IMPORTED_MODULE_21__pages_team_expense_team_expense__["a" /* TeamExpensePage */] },
            { title: 'Update Password', component: __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset__["a" /* ResetPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__["a" /* LogoutPage */] },
        ];
        this.normalPages = [
            { title: 'Upcoming Matches', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Completed Matches', component: __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */] },
            { title: 'Team Stats', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__["a" /* MyProfilePage */] },
            { title: 'Change Mode', component: __WEBPACK_IMPORTED_MODULE_20__pages_modeChange_modeChange__["a" /* ModeChangePage */] },
            { title: 'Account Details', component: __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__["a" /* MyAccountPage */] },
            { title: 'Finance Details', component: __WEBPACK_IMPORTED_MODULE_12__pages_finance_finance__["a" /* FinancePage */] },
            { title: 'Update Password', component: __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset__["a" /* ResetPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__["a" /* LogoutPage */] },
        ];
        // used for an example of ngFor and navigation
        this.pages = this.normalPages;
        this.events.subscribe("UPDATE_SIDE_MENU", function (eventData) {
            if (eventData == "admin") {
                _this.pages = _this.adminPages;
            }
            else {
                _this.pages = _this.normalPages;
                _this.type = "normal";
            }
        });
    }
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        var options = {
            android: {
                senderID: "402670322623"
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log("device token:", data.registrationId);
            var alert = _this.alertCtrl.create({
                title: 'device token',
                subTitle: data.registrationId,
                buttons: ['OK']
            });
            alert.present();
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message', data.message);
            if (data.additionalData.foreground) {
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        }, {
                            text: 'View',
                            handler: function () {
                                //TODO: Your logic here
                            }
                        }]
                });
                confirmAlert.present();
            }
            else {
                var alert = _this.alertCtrl.create({
                    title: 'clicked on',
                    subTitle: "you clicked on the notification!",
                    buttons: ['OK']
                });
                alert.present();
                console.log("Push notification clicked");
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionicapp\crickify\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\ionicapp\crickify\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__["a" /* Push */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__["a" /* Push */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _h || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_account__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyAccountPageModule = (function () {
    function MyAccountPageModule() {
    }
    return MyAccountPageModule;
}());
MyAccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */]),
        ],
    })
], MyAccountPageModule);

//# sourceMappingURL=my-account.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_teams__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyTeamsPageModule = (function () {
    function MyTeamsPageModule() {
    }
    return MyTeamsPageModule;
}());
MyTeamsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_teams__["a" /* MyTeamsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_teams__["a" /* MyTeamsPage */]),
        ],
    })
], MyTeamsPageModule);

//# sourceMappingURL=my-teams.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finance__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FinancePageModule = (function () {
    function FinancePageModule() {
    }
    return FinancePageModule;
}());
FinancePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__finance__["a" /* FinancePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finance__["a" /* FinancePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], FinancePageModule);

//# sourceMappingURL=finance.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPlayersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_players__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamPlayersPageModule = (function () {
    function TeamPlayersPageModule() {
    }
    return TeamPlayersPageModule;
}());
TeamPlayersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team_players__["a" /* TeamPlayersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_players__["a" /* TeamPlayersPage */]),
        ],
    })
], TeamPlayersPageModule);

//# sourceMappingURL=team-players.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TournamentsPageModule = (function () {
    function TournamentsPageModule() {
    }
    return TournamentsPageModule;
}());
TournamentsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tournaments__["a" /* TournamentsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tournaments__["a" /* TournamentsPage */]),
        ],
    })
], TournamentsPageModule);

//# sourceMappingURL=tournaments.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locations__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationsPageModule = (function () {
    function LocationsPageModule() {
    }
    return LocationsPageModule;
}());
LocationsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__locations__["a" /* LocationsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__locations__["a" /* LocationsPage */]),
        ],
    })
], LocationsPageModule);

//# sourceMappingURL=locations.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_expense__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TeamExpensePageModule = (function () {
    function TeamExpensePageModule() {
    }
    return TeamExpensePageModule;
}());
TeamExpensePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team_expense__["a" /* TeamExpensePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_expense__["a" /* TeamExpensePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], TeamExpensePageModule);

//# sourceMappingURL=team-expense.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(23);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Team Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Team List\n\n      </ion-segment-button>\n\n     \n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Team</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n              \n\n            </li>\n\n            <li *ngFor="let stat of batting">\n\n                <p class="cric-player-name">{{stat?.name}}</p>\n\n              \n\n            </li>\n\n          </ul>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], MatchTeamPage);

//# sourceMappingURL=match-team.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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
    FinanceProvider.prototype.getExpenseSummary = function (id) {
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
    FinanceProvider.prototype.getTeamExpense = function (teamId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/team/' + teamId, { headers: headers })
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
    FinanceProvider.prototype.getPlayerExpenses = function (expense) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/expense/' + expense.id + '/playerExpenses', { headers: headers })
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
    FinanceProvider.prototype.createPlayerExpense = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/playerExpense', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("expense update", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    FinanceProvider.prototype.deletePlayerExpense = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/playerExpense/' + data.id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("expense update", res.json());
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
    FinanceProvider.prototype.sendTeamReminder = function (expense) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/expense/reminder' + expense, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("expense update", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    FinanceProvider.prototype.postTeamExpenseUpdate = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.put(apiUrl + '/teamExpense/' + data.id, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("expense update", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    FinanceProvider.prototype.addExpense = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/teamExpense/', JSON.stringify(data), { headers: headers })
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(40);
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
    ForgotPage.prototype.homePage = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'forgot',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\forgot\forgot.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Forgot Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="forgot()">Reset Password</button>\n\n        <a href="#" (click)="login()">Login Page</a>\n\n		<a href="#" (click)="homePage()">Home Page</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(40);
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
    function SignupPage(navCtrl, navParams, authService, alertController, loadingController, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.userData = { "username": "", "password": "", "name": "", "phone": "" };
        this.signupForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.username = this.signupForm.controls['username'];
        this.password = this.signupForm.controls['password'];
        this.name = this.signupForm.controls['name'];
        this.phone = this.signupForm.controls['phone'];
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        //  this.submitAttempt = true;
        var _this = this;
        if (!this.signupForm.valid) {
            //this.signupForm.slideTo(0);
            console.log("not valid");
        }
        else {
            console.log("success!");
            console.log(this.signupForm.value);
            //console.log(this.signupForm.value);
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.signup(this.signupForm.value).then(function (result) {
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
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else if (_this.responseData.statusCode == '401') {
                var alert_2 = _this.alertController.create({
                    title: 'User account exists!',
                    subTitle: 'This user account exists in the list. Please login or reset your password!',
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
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                            }
                        }
                    ]
                });
                alert_3.present();
            }
            //this.navCtrl.push(HomePage);
        }, function (err) {
            loading.dismiss();
            console.log("error", err);
        });
    };
    SignupPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.homePage = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary"> \n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registration\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <form [formGroup]="signupForm" (submit)="signup()">\n\n          <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input type="text" formControlName="name"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Phone</ion-label>\n\n            <ion-input type="text" formControlName="phone"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item [class.invalid]="!username.valid">\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input type="text" formControlName="username" autocapitalize="off"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!username.valid" class="invalid">\n\n              <p>* Email is required!</p>\n\n          </ion-item>\n\n\n\n          <ion-item [class.invalid]="!password.valid">\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" formControlName="password"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="!password.valid" class="invalid">\n\n              <p>* Password is required!</p>\n\n          </ion-item>\n\n  \n\n          \n\n<ion-item>\n\n          <button ion-button full color="success" type="submit" [disabled]="!signupForm.valid">Sign up</button></ion-item>\n\n<ion-item>\n\n          <button ion-button full color="success" (click)="login()">Login</button></ion-item>\n\n\n\n\n\n\n\n        </form>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_match_team_add_match_team__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_match_create_match__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__match_availability_match_availability__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__previous_match_details_edit_previous_match_details_edit__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_other_other__ = __webpack_require__(19);
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
var TeamMatchesPage = (function () {
    function TeamMatchesPage(navCtrl, navParams, formBuilder, teamService, otherService, loadingController, authService, matchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.otherService = otherService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.matchService = matchService;
        this.matches = '';
        this.userPostData = { "user_id": "", "token": "" };
        this.team = JSON.parse(localStorage.getItem('team'));
        this.getData();
        this.getTeams();
        this.getTournaments();
        this.searchMatchesForm = formBuilder.group({
            endDate: [''],
            startDate: [''],
            teamId: this.team.id,
            tournamentId: [0]
        });
    }
    TeamMatchesPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    TeamMatchesPage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatches(this.team).then(function (result) {
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
    TeamMatchesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchesPage');
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
    };
    TeamMatchesPage.prototype.goToMatchDetails = function (event) {
        console.log("clicked match", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__previous_match_details_edit_previous_match_details_edit__["a" /* PreviousMatchDetailsEditPage */], { "matchId": event });
    };
    TeamMatchesPage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_match_team_add_match_team__["a" /* AddMatchTeamPage */], { "matchId": event });
    };
    TeamMatchesPage.prototype.goToMatchAvailability = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__match_availability_match_availability__["a" /* MatchAvailabilityPage */], { "matchId": event });
    };
    TeamMatchesPage.prototype.addMatch = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_match_create_match__["a" /* CreateMatchPage */]);
    };
    TeamMatchesPage.prototype.getTeams = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        this.teamService.getAllTeams().then(function (result) {
            _this.teamresponseData = result;
            console.log(_this.teamresponseData);
            if (_this.teamresponseData.statusCode == '200') {
                console.log("test 200");
                _this.teams = _this.teamresponseData.results.teams;
            }
            else if (_this.teamresponseData.statusCode == "404") {
                console.log("unauthorrised");
                //  this.backToWelcome();
            }
            else {
                console.log("error", _this.teamresponseData);
            }
        }, function (err) {
            // Error log
        });
    };
    TeamMatchesPage.prototype.getTournaments = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        this.otherService.getAllTournament().then(function (result) {
            _this.tournamentresponseData = result;
            console.log(_this.tournamentresponseData);
            if (_this.tournamentresponseData.statusCode == '200') {
                console.log("test 200");
                _this.tournaments = _this.tournamentresponseData.results.Tournaments;
            }
            else if (_this.tournamentresponseData.statusCode == "404") {
                console.log("unauthorrised");
                localStorage.clear();
                //  this.backToWelcome();
            }
            else {
                console.log("error", _this.tournamentresponseData);
            }
        }, function (err) {
            // Error log
        });
    };
    TeamMatchesPage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.getMatchesFilter(this.team, this.searchMatchesForm.value).then(function (result) {
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
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    return TeamMatchesPage;
}());
TeamMatchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-matches\team-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Search Matches\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n        <form [formGroup]="searchMatchesForm">\n\n                  <ion-item>\n\n                  <ion-label>Tournament</ion-label>\n\n                  <ion-select formControlName="tournamentId"  >\n\n                    <ion-option *ngFor="let key of tournaments" [value]="key.id">{{key.name}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>Start Date</ion-label>\n\n                    <ion-datetime formControlName="startDate"  displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n                  </ion-item>\n\n                 \n\n                      <ion-item>\n\n                          <ion-label>End Date</ion-label>\n\n                          <ion-datetime formControlName="endDate"  displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n                        </ion-item>\n\n                     \n\n             <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n                Filter\n\n                \n\n              </button>\n\n     \n\n        </form>\n\n      \n\n    \n\n    </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team.teamname}} Vs\n\n          {{match.opponent}}\n\n          <p>{{match.tournament.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <p>{{match.matchTime | momentjs}}</p>\n\n          \n\n          <span *ngIf="match.location!=null">\n\n          <p>{{match.location.name}}, {{match.location.address}}</p>\n\n        </span>\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n     \n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n		    <button ion-button icon-left clear small (click)="goToMatchAvailability(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Availability</div>\n\n          </button>\n\n		     </ion-card-content>\n\n      </ion-card>\n\n    </ion-content>\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addMatch()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-matches\team-matches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_9__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_10__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]])
], TeamMatchesPage);

//# sourceMappingURL=team-matches.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_matches_team_matches__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_team_create_team__ = __webpack_require__(116);
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





/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTeamsPage = (function () {
    function MyTeamsPage(events, navCtrl, navParams, authService, teamService, statsService, app, loadingController) {
        this.events = events;
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
    }
    MyTeamsPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    MyTeamsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.getAdminTeams().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.teams = _this.responseData.results.teams;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    MyTeamsPage.prototype.goToTeam = function (team) {
        localStorage.setItem('team', JSON.stringify(team));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__team_matches_team_matches__["a" /* TeamMatchesPage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__team_matches_team_matches__["a" /* TeamMatchesPage */]);
    };
    MyTeamsPage.prototype.createTeam = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__create_team_create_team__["a" /* CreateTeamPage */]);
    };
    MyTeamsPage.prototype.editTeam = function (team) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__create_team_create_team__["a" /* CreateTeamPage */], { team: team });
    };
    return MyTeamsPage;
}());
MyTeamsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-teams',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-teams\my-teams.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Manage Teams</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let team of teams" >\n\n    <ion-card-header>\n\n      {{team.teamname}}\n\n	   </ion-card-header>\n\n	   <ion-card-content>\n\n     	 <button ion-button color="light" icon-left clear small (click)="goToTeam(team)" color="primary">\n\n            Manage Team\n\n            \n\n          </button>\n\n           <button ion-button color="light" icon-left clear small (click)="editTeam(team)" color="primary">\n\n            Edit Team\n\n            \n\n          </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createTeam()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-teams\my-teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.js.map

/***/ })

},[407]);
//# sourceMappingURL=main.js.map