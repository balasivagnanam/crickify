webpackJsonp([2],{

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMatchPlayerPageModule", function() { return AddMatchPlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_match_player__ = __webpack_require__(967);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddMatchPlayerPageModule = (function () {
    function AddMatchPlayerPageModule() {
    }
    return AddMatchPlayerPageModule;
}());
AddMatchPlayerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_match_player__["a" /* AddMatchPlayerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_match_player__["a" /* AddMatchPlayerPage */]),
        ],
    })
], AddMatchPlayerPageModule);

//# sourceMappingURL=add-match-player.module.js.map

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(6);
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
var AddMatchPlayerPage = (function () {
    function AddMatchPlayerPage(navCtrl, navParams, matchService, alertController, loadingController, teamService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.teamService = teamService;
        this.batting = [];
        this.players = [];
        this.selected = [];
        this.tabsvalues = "summary";
        this.addPlayerForm = formBuilder.group({
            player: ['']
        });
        this.team = JSON.parse(localStorage.getItem('team'));
        console.log("passed data", navParams.get('matchId'));
        this.matchId = navParams.get('matchId');
        this.getPlayers();
    }
    AddMatchPlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    AddMatchPlayerPage.prototype.updatePlayer = function (stat) {
        var index = this.selected.indexOf(stat);
        if (index > -1) {
            this.selected.splice(index, 1);
        }
        else {
            this.selected.push(stat);
        }
    };
    AddMatchPlayerPage.prototype.addPlayers = function () {
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        for (var _i = 0, _a = this.selected; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.addPlayer(entry);
        }
        loading.dismiss();
    };
    AddMatchPlayerPage.prototype.addPlayer = function (value) {
        var _this = this;
        this.addPlayerForm.controls['player'].setValue(value);
        this.matchService.createMatchTeam(this.matchId, this.addPlayerForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
            }
            else if (_this.responseData.statusCode == "404") {
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
            console.log("error", err);
        });
    };
    AddMatchPlayerPage.prototype.getPlayers = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.getOtherMatchPlayers(this.team, this.matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log(_this.responseData.results.players);
                _this.players = _this.responseData.results.players;
                loading.dismiss();
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
            }
            else {
                console.log("error", _this.responseData);
                loading.dismiss();
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    AddMatchPlayerPage.prototype.alertDialog = function (title, message) {
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
    return AddMatchPlayerPage;
}());
AddMatchPlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-match-player',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\add-match-player\add-match-player.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Player Add</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-segment [(ngModel)]="tabsvalues">\n\n        <ion-segment-button value="summary">\n\n          Player List\n\n        </ion-segment-button>\n\n\n\n      </ion-segment>\n\n\n\n      <div [ngSwitch]="tabsvalues">\n\n        <div *ngSwitchCase="\'summary\'">\n\n          <div class="cric-stat-batting-table">\n\n            <h4>Players</h4>\n\n\n\n            <ion-card *ngFor="let stat of players">\n\n              <ion-card-content>\n\n                <ion-checkbox (ionChange)="updatePlayer(stat)"></ion-checkbox>\n\n                {{stat?.name}}\n\n\n\n              </ion-card-content>\n\n\n\n\n\n            </ion-card>\n\n\n\n\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <form [formGroup]="addPlayerForm">\n\n        <button ion-button color="secondary" icon-left clear small [disabled]="!addPlayerForm.valid" (click)="addPlayers()">\n\n          Add Players\n\n\n\n        </button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\add-match-player\add-match-player.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__["a" /* TeamService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object])
], AddMatchPlayerPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-match-player.js.map

/***/ })

});
//# sourceMappingURL=2.js.map