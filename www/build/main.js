webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
            _this.http.delete(apiUrl + '/team/player/' + team.id, { headers: headers })
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_forgot__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_matches_matches__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__ = __webpack_require__(93);
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
        selector: 'page-welcome',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding class="login-background">\n\n    <ion-grid  >\n\n        <ion-row>\n\n          <ion-col col-2>\n\n            <img src="assets/img/icon.png"/>\n\n			 </ion-col >\n\n			 <ion-col col-6 >\n\n			<h1 >Crickify</h1>\n\n          </ion-col>\n\n   \n\n          <ion-col center text-center>\n\n            <button ion-button full color="success" (click)="signup()">Sign up</button>\n\n          </ion-col>\n\n        \n\n        \n\n          <ion-col center text-center>\n\n            <button ion-button full color="lightText" (click)="login()">Log in</button>\n\n          </ion-col>\n\n        \n\n		 \n\n         \n\n        </ion-row>\n\n      </ion-grid>\n\n	  <h1>Batting Performances </h1>\n\n	 <ion-grid >\n\n        <ion-row > \n\n		<ion-col *ngFor="let batting of battings| slice:0:4;">\n\n	<ion-card color="primary">\n\n    <ion-card-header>\n\n      <b>{{batting.player.name}} </b>\n\n      \n\n    </ion-card-header>\n\n    <p *ngIf= "batting.player.img!= null" ><img src="data:image/PNG;base64,{{batting.player.img}}"/></p>\n\n    \n\n    <p *ngIf="batting.player.img == null" ><img src="assets/img/batsman.png"/></p>\n\n	\n\n    <ion-card-content>\n\n      <p>{{batting.run}}({{batting.ball}})</p>\n\n     <p>{{batting.match.team.teamname}} vs\n\n      {{batting.match.opponent}}</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n   </ion-col>\n\n   </ion-row>\n\n      </ion-grid>\n\n	  \n\n	  <h1>Bowling Performances</h1>\n\n	   <ion-grid >\n\n        <ion-row > \n\n		<ion-col *ngFor="let bowling of bowlings| slice:0:4;">\n\n  	<ion-card color="primary">\n\n    <ion-card-header>\n\n      <b>{{bowling.player.name}} </b>\n\n      \n\n    </ion-card-header>\n\n	<img src="assets/img/bowler.png"/>\n\n    <ion-card-content>\n\n      <p>{{bowling.wickets}}/{{bowling.run}}</p>\n\n     <p>{{bowling.match.team.teamname}} vs\n\n      {{bowling.match.opponent}}</p>\n\n\n\n    </ion-card-content>\n\n </ion-card>\n\n   </ion-col>\n\n   </ion-row>\n\n      </ion-grid>\n\n\n\n<br>\n\n<br><br>\n\n<br>\n\n    <ion-grid >\n\n        <ion-row color="primary" row-20 center text-center>\n\n         <ion-col>\n\n			<h2>About Crickify</h2>\n\n			</ion-col>\n\n          </ion-row>\n\n		  \n\n		  <ion-row row-60 center text-center>\n\n		  <ion-col>\n\n		  Manage your entire cricket landscape. From league schedules to player registrations, Player availability to result management, all available under one convenient account.Finance Mangement for the players.Take the hassle out of your club or league site. \n\n		  With integrated cricket data it will always be up to date and looking sharp.Announce your team and get your best team through interface.\n\n		 </ion-col>\n\n<br>\n\n<br>		 </ion-row>\n\n		  <ion-row row-20 center text-center>\n\n		  <ion-col>\n\n		  <h2>What are you waiting for?! Join thousands of other clubs, schools and leagues and get started with Crickify today.</h2>\n\n		 </ion-col>\n\n		 </ion-row>\n\n		   </ion-grid>\n\n\n\n<br>\n\n<br><br>\n\n<br>\n\n<ion-card color="primary">\n\n    <ion-card-header>\n\n	\n\n	 </ion-card-header>\n\n	\n\n    <ion-card-content>\n\n    <ion-grid color="primary">\n\n        <ion-row   center text-center>\n\n         <ion-col >\n\n			<h2>Contact Us</h2>\n\n			</ion-col>\n\n          </ion-row>\n\n		  <br>\n\n<br>\n\n		  <ion-row   center text-center>\n\n		  <ion-col>\n\n		  <b>Website Issues or Suggestions? Contact US @ appcrickify@gmail.com</b>\n\n		  </ion-col>\n\n		  <br>\n\n<br>\n\n		\n\n		  </ion-row >\n\n		  <ion-row  center text-center>\n\n		  <ion-col>\n\n		  Copyright © 2018 All rights reserved by Crickify\n\n		  </ion-col>\n\n		  </ion-row>\n\n		   </ion-grid>\n\n		     </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__["a" /* AdMobFree */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(57);
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
    LoginPage.prototype.homePage = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Login\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        \n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n          </ion-item>\n\n\n\n          <button ion-button full color="success" (click)="login()">Login</button>\n\n		  <a href="#" (click)="forgot()">Forgot Password</a>\n\n		  <a href="#" (click)="signup()">Sign Up</a>\n\n        <a href="#" (click)="homePage()">Home Page</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(93);
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
    function HomePage(navCtrl, app, authService, matchService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.app = app;
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
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Upcoming Matches </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let match of matches" color="primary">\n\n    <ion-card-header>\n\n      {{match.match.team.teamname}} versus\n\n      {{match.match.opponent}}\n\n      <p>{{match.match.tournament.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{match.match.matchTime | date:\'fullDate\'}}, {{match.matchTime | date:\'shortTime\'}}</p>\n\n      <p>{{match.match.location.name}}, {{match.match.location.address}}</p>\n\n	  \n\n         <ion-label>\n\n          Select Attendance\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="match.status" (ionChange)="availabilitySelected($event, match)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	<p><ion-label>Comments</ion-label></p>\n\n      <ion-item>\n\n	  \n\n	       \n\n    <ion-input [(ngModel)]="match.comments" (ionChange)="availabilitySelected($event, match)"></ion-input>\n\n	 </ion-item>\n\n	 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(19);
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
        selector: 'page-match-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Team Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Team List\n\n      </ion-segment-button>\n\n     \n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Team</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n              \n\n            </li>\n\n            <li *ngFor="let stat of batting">\n\n                <p class="cric-player-name">{{stat?.name}}</p>\n\n              \n\n            </li>\n\n          </ul>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], MatchTeamPage);

//# sourceMappingURL=match-team.js.map

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(35);
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(35);
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
        selector: 'page-signup',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registration\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <form [formGroup]="signupForm" (submit)="signup()">\n\n          <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input type="text" formControlName="name"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Phone</ion-label>\n\n            <ion-input type="text" formControlName="phone"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item [class.invalid]="!username.valid">\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input type="text" formControlName="username" autocapitalize="off"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!username.valid" class="invalid">\n\n              <p>* Email is required!</p>\n\n          </ion-item>\n\n\n\n          <ion-item [class.invalid]="!password.valid">\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" formControlName="password"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="!password.valid" class="invalid">\n\n              <p>* Password is required!</p>\n\n          </ion-item>\n\n  \n\n          \n\n\n\n          <button ion-button full color="success" type="submit" [disabled]="!signupForm.valid">Sign up</button>\n\n          <a href="#" (click)="login()">Login Page</a>\n\n<a href="#" (click)="homePage()">Home Page</a>\n\n        </form>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_match_team_add_match_team__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_match_create_match__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__match_availability_match_availability__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__previous_match_details_edit_previous_match_details_edit__ = __webpack_require__(102);
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
    function TeamMatchesPage(navCtrl, navParams, loadingController, authService, matchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.authService = authService;
        this.matchService = matchService;
        this.matches = '';
        this.team = JSON.parse(localStorage.getItem('team'));
        this.getData();
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
    return TeamMatchesPage;
}());
TeamMatchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-matches\team-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team.teamname}} Vs\n\n          {{match.opponent}}\n\n          <p>{{match.tournament.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{match.matchTime | date:\'fullDate\'}}, {{match.matchTime | date:\'shortTime\'}}</p>\n\n          <p>{{match.location.name}}, {{match.location.address}}</p>\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n     \n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n		    <button ion-button icon-left clear small (click)="goToMatchAvailability(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Availability</div>\n\n          </button>\n\n		     </ion-card-content>\n\n      </ion-card>\n\n    </ion-content>\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addMatch()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-matches\team-matches.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]) === "function" && _e || Object])
], TeamMatchesPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=team-matches.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_matches_team_matches__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_team_create_team__ = __webpack_require__(103);
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
        selector: 'page-my-teams',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-teams\my-teams.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Manage Teams</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let team of teams" color="primary">\n\n    <ion-card-header>\n\n      {{team.teamname}}\n\n	   </ion-card-header>\n\n	   <ion-card-content>\n\n     	 <button ion-button color="light" icon-left clear small (click)="goToTeam(team)">\n\n            Manage Team\n\n            \n\n          </button>\n\n           <button ion-button color="light" icon-left clear small (click)="editTeam(team)">\n\n            Edit Team\n\n            \n\n          </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createTeam()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-teams\my-teams.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.js.map

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_other_other__ = __webpack_require__(26);
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
        selector: 'page-create-match',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-match\create-match.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Match</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Add Match\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createMatchForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Opponent</ion-label>\n\n            <ion-input formControlName="opponent" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Remark</ion-label>\n\n            <ion-input formControlName="remarks" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime formControlName="matchTime" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Location</ion-label>\n\n  <ion-select formControlName="location">\n\n    <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Tournament</ion-label>\n\n  <ion-select formControlName="tournament">\n\n    <ion-option *ngFor="let key of tournaments" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createMatchForm.valid" (click)="addMatch()">\n\n            Add Match\n\n            \n\n          </button>\n\n    </form>\n\n\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-match\create-match.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]) === "function" && _h || Object])
], CreateMatchPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=create-match.js.map

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_players_players__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(14);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/'<!--\n\n  Generated template for the MyProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Profile</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-item>\n\n        <ion-label>Pick a Team</ion-label>\n\n        <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n          <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n\n\n  <h3>{{statsArray[0]?.stats.battingStatistics?.player.name}}</h3>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="batting">\n\n        Batting Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="fielding">\n\n            Fielding Stats\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n    <div *ngSwitchCase="\'batting\'">\n\n    <ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n  </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Tournament</p>\n\n                  <p>M</p>\n\n                  <p>I</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p class="cric-values-decimals">Av</p>\n\n                  <p class="cric-values-decimals">SR</p>\n\n              </li>\n\n              <li *ngFor="let tournament of statsArray">\n\n                  <p class="cric-player-name">{{tournament?.name}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.matches}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.innings}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.run}}</p>\n\n                  <p>{{tournament.stats.battingStatistics?.ball}}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.battingStatistics?.average | number : \'1.2-2\' }}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.battingStatistics?.sr | number : \'1.2-2\' }}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n            </ion-card-content>\n\n			  </ion-card>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'bowling\'">\n\n     <ion-card>\n\n  <ion-card-header>\n\n  Bowling\n\n  </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-bowling-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Tournament</p>\n\n                  <p>M</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let tournament of statsArray">\n\n                  <p class="cric-player-name">{{tournament?.name}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.overs}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.run}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.wickets}}</p>\n\n                  <p>{{tournament.stats.bowlingStatistics?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{tournament.stats.bowlingStatistics?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n           </ion-card-content>\n\n			  </ion-card>\n\n    </div>\n\n\n\n      <div *ngSwitchCase="\'fielding\'">\n\n         <ion-card>\n\n  <ion-card-header>\n\n  Fielding\n\n  </ion-card-header>\n\n <ion-card-content>\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Tournament</p>\n\n                    <p>M</p>\n\n                    <p>Ct</p>\n\n                    <p>R/O</p>\n\n                    <p>St</p>\n\n                </li>\n\n                <li *ngFor="let tournament of statsArray">\n\n                    <p class="cric-player-name">{{tournament?.name}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.catches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.runOuts}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.stumpings}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n            </ion-card-content>\n\n			  </ion-card>\n\n      </div>\n\n\n\n    </div> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(19);
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
        selector: 'page-previous-match-details',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n      {{match?.team?.teamname}} Vs\n\n      {{match?.opponent}}\n\n      <p>{{match?.tournament?.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{match?.matchTime | date:\'fullDate\'}}, {{match?.matchTime | date:\'shortTime\'}}</p>\n\n      <p>{{match?.location?.name}}, {{match?.location?.address}}</p>\n\n      <p>Toss won by <span *ngIf="match.tossWon">{{match?.team?.teamname}}</span><span *ngIf="!match.tossWon">{{match?.opponent}}</span>\n\n      <p>Result : {{match?.result}}, {{match?.remarks}}</p>\n\n      <p>{{match?.team?.teamname}}: {{match?.score}}/{{match?.wickets}}</p>\n\n      <p>{{match?.opponent}}:{{match?.oppositionScore}}/{{match?.oppositionWickets}}</p>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Summary\n\n      </ion-segment-button>\n\n      <ion-segment-button value="batting">\n\n          Batting\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Batting</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n                <p>R</p>\n\n                <p>B</p>\n\n                <p>4\'s</p>\n\n                <p>6\'s</p>\n\n                <p class="cric-values-decimals">SR</p>\n\n            </li>\n\n            <li *ngFor="let stat of (batting ? batting.slice(0,3) : [])">\n\n                <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                <p>{{stat?.run}}</p>\n\n                <p>{{stat?.ball}}</p>\n\n                <p>{{stat?.four}}</p>\n\n                <p>{{stat?.six}}</p>\n\n                <p class="cric-values-decimals">{{stat?.sr | number : \'1.2-2\'}}</p>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n        <div class="cric-stat-bowling-table">\n\n            <h4>Bowling</h4>\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let stat of (bowling ? bowling.slice(0,3) : [])">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.overs}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.wickets}}</p>\n\n                  <p>{{stat?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{stat?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n      </div>\n\n    <div *ngSwitchCase="\'batting\'">\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p>4\'s</p>\n\n                  <p>6\'s</p>\n\n              </li>\n\n              <li *ngFor="let stat of batting">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.ball}}</p>\n\n                  <p>{{stat?.four}}</p>\n\n                  <p>{{stat?.six}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n      </div>\n\n      <div *ngSwitchCase="\'bowling\'">\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Name</p>\n\n                    <p>O</p>\n\n                    <p>R</p>\n\n                    <p>W</p>\n\n                    <p>Wd</p>\n\n                    <p>EC</p>\n\n                </li>\n\n                <li *ngFor="let stat of bowling">\n\n                    <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                    <p>{{stat?.overs}}</p>\n\n                    <p>{{stat?.run}}</p>\n\n                    <p>{{stat?.wickets}}</p>\n\n                    <p>{{stat?.wide}}</p>\n\n                    <p>{{stat?.economy | number : \'1.2-2\'}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], PreviousMatchDetailsPage);

//# sourceMappingURL=previous-match-details.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_team_match_team__ = __webpack_require__(50);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Completed Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team.teamname}} Vs\n\n          {{match.opponent}}\n\n          <p>{{match.tournament.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{match.matchTime | date:\'fullDate\'}}, {{match.matchTime | date:\'shortTime\'}}</p>\n\n          <p>{{match.location.name}}, {{match.location.address}}</p>\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n        </ion-card-content>\n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n      </ion-card>\n\n    </ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]])
], PreviousMatchesPage);

//# sourceMappingURL=previous-matches.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
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
    AddMatchTeamPage.prototype.sendTeam = function () {
        var _this = this;
        this.matchService.sendTeamList(this.matchId).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
            }
            else if (_this.responseData.statusCode == "404") {
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
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
        selector: 'page-add-match-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\add-match-team\add-match-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Team Add</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Team List\n\n      </ion-segment-button>\n\n     \n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Team</h4>\n\n          <ol >\n\n		  <li *ngFor="let stat of batting">\n\n		  <ion-list>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      {{stat?.name}}\n\n    </ion-item>\n\n<ion-item-options side="right">\n\n  <button ion-button (click)="delete(stat)">\n\n    <ion-icon name="delete"></ion-icon>\n\n    Delete\n\n  </button>\n\n</ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n       </div>\n\n  </div>\n\n      <form [formGroup]="addTeamForm">\n\n  <ion-item>\n\n  <ion-label>Player</ion-label>\n\n  <ion-select formControlName="player">\n\n    <ion-option *ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n <button ion-button color="secondary" icon-left clear small [disabled]="!addTeamForm.valid" (click)="addPlayer()">\n\n            Add Player\n\n            \n\n          </button>\n\n    </form>\n\n \n\n		  \n\n		    <button ion-button color="secondary" icon-left clear small (click)="sendTeam()">\n\n           Send Team List\n\n            \n\n          </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\add-match-team\add-match-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], AddMatchTeamPage);

//# sourceMappingURL=add-match-team.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchAvailabilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(19);
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
        selector: 'page-match-availability',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-availability\match-availability.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Availability Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="available">\n\n        Availability\n\n      </ion-segment-button>\n\n          <ion-segment-button value="unAvailable">\n\n         UnAvailable\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="tentative">\n\n        Tentative\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="Unknown">\n\n         Unknown\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'available\'">\n\n        <div class="cric-stat-available-table">\n\n         \n\n          <ol type="1">\n\n          \n\n            <li *ngFor="let stat of available">\n\n			 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" >Not Provided</ion-option>\n\n        <ion-option value="1" selected>IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'unAvailable\'">\n\n		<div class="cric-stat-unAvailable-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unavailable">\n\n               <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1" >IN</ion-option>\n\n        <ion-option value="2" selected>OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'tentative\'">\n\n		<div class="cric-stat-tentative-table">\n\n         \n\n          <ol type="1">\n\n           \n\n            <li *ngFor="let stat of tentative">\n\n                 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3" selected>Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'Unknown\'">\n\n			<div class="cric-stat-unknown-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unknown">\n\n                <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" selected>Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card> \n\n            </li>\n\n          </ol>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-availability\match-availability.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], MatchAvailabilityPage);

//# sourceMappingURL=match-availability.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_batting_batting__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(14);
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
            dismisal: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            team: [''],
            match: [''],
            createDate: [''],
            modifyDate: [''],
            dnb: [''],
            out: [''],
            id: [''],
            player: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            mvp: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            sr: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
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
        selector: 'batting',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\batting\batting.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n </ion-card-header>\n\n \n\n   <ion-card-content>\n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n      <form [formGroup]="createBattingForm">\n\n      <ion-item>\n\n       <ion-label>Player</ion-label>\n\n      	  <ion-select formControlName="player" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n     </ion-item>\n\n	   <ion-item>\n\n            <ion-label floating>Run</ion-label>\n\n            <ion-input formControlName="run" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Ball</ion-label>\n\n            <ion-input formControlName="ball" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Six</ion-label>\n\n            <ion-input formControlName="six" type="number"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label floating>Four</ion-label>\n\n  <ion-input formControlName="four" type="number" ></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Dismissal</ion-label>\n\n  <ion-select formControlName="dismisal" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of dismissals" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n	  <ion-item>\n\n    <ion-label>Did Not Bat</ion-label>\n\n    <ion-checkbox formControlName="dnb"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Out</ion-label>\n\n    <ion-checkbox formControlName="out"></ion-checkbox>\n\n  </ion-item>\n\n    <ion-item>\n\n    <ion-label>Batting Down</ion-label>\n\n    <ion-input formControlName="battingDown" type="number"></ion-input>\n\n  </ion-item>\n\n    	 <button ion-button color="secondary" icon-left clear small [disabled]="!createBattingForm.valid" (click)="saveBatting()">\n\n            Submit\n\n            \n\n          </button>   \n\n    </form>\n\n\n\n    \n\n \n\n      </div>\n\n  </div>\n\n   </div>\n\n     </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\batting\batting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_batting_batting__["a" /* BattingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */]])
], BattingPage);

//# sourceMappingURL=batting.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BowlingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bowling_bowling__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(14);
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
            overs: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            wide: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            noBall: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            wickets: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            four: [''],
            dismisal: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([])],
            catches: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            stumpings: [''],
            runOuts: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            team: [''],
            match: [''],
            createDate: [''],
            modifyDate: [''],
            dnb: [''],
            fieldingmvp: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            id: [''],
            player: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            mvp: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            economy: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
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
        selector: 'bowling',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\bowling\bowling.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> <ion-navbar> <ion-title>Match\n\nDetails</ion-title> </ion-navbar> </ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground"> <ion-card>\n\n<ion-card-header> </ion-card-header> <ion-card-content>\n\n<div [ngSwitch]="tabsvalues">\n\n	<div *ngSwitchCase="\'summary\'">\n\n		<div class="cric-stat-bowling-table">\n\n			<form [formGroup]="createBowlingForm">\n\n				<ion-item> <ion-label>Player</ion-label> <ion-select\n\n					formControlName="player" [compareWith]="compareFn"> <ion-option\n\n					*ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n				</ion-select> </ion-item>\n\n			\n\n				<ion-item> <ion-label floating>Ball</ion-label> <ion-input\n\n					formControlName="ball" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Maiden</ion-label> <ion-input\n\n					formControlName="maiden" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Run</ion-label> <ion-input\n\n					formControlName="run" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Wickets</ion-label> <ion-input\n\n					formControlName="wickets" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Wide</ion-label> <ion-input\n\n					formControlName="wide" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>No Ball</ion-label> <ion-input\n\n					formControlName="noBall" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Catches</ion-label> <ion-input\n\n					formControlName="catches" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Run Out</ion-label> <ion-input\n\n					formControlName="runOuts" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Stumping</ion-label> <ion-input\n\n					formControlName="stumpings" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label>Dismissal</ion-label> <ion-select\n\n					formControlName="dismisal" [compareWith]="compareFn">\n\n				<ion-option *ngFor="let key of dismissals" [value]="key">{{key.name}}</ion-option>\n\n				</ion-select> </ion-item>\n\n				<ion-item> <ion-label>Did Not Bat</ion-label> <ion-checkbox\n\n					formControlName="dnb"></ion-checkbox> </ion-item>\n\n				<button ion-button color="secondary" icon-left clear small [disabled]="!createBowlingForm.valid"\n\n				(click)="saveBowling()">Submit</button>\n\n			</form>\n\n		\n\n\n\n\n\n		</div>\n\n	</div>\n\n</div>\n\n</ion-card-content> </ion-card> </ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\bowling\bowling.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_bowling_bowling__["a" /* BowlingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */]])
], BowlingPage);

//# sourceMappingURL=bowling.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchDetailsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__batting_batting__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bowling_bowling__ = __webpack_require__(101);
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
            opponent: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            remarks: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            matchTime: [''],
            location: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            tournament: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            deadline: [''],
            points: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            team: [''],
            createDate: [''],
            modifyDate: [''],
            id: [''],
            oppositionScore: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            oppositionWickets: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            oppositionOvers: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            score: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            wickets: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            overs: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            result: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
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
        selector: 'page-previous-match-details-edit',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-match-details-edit\previous-match-details-edit.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Summary\n\n      </ion-segment-button>\n\n      <ion-segment-button value="batting">\n\n          Batting\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n      <form [formGroup]="createMatchForm">\n\n	   <ion-item>\n\n            <ion-label floating>Opponent</ion-label>\n\n            <ion-input formControlName="opponent" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Remark</ion-label>\n\n            <ion-input formControlName="remarks" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime formControlName="matchTime" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n <ion-item>\n\n  <ion-label>Deadline Date</ion-label>\n\n  <ion-datetime formControlName="deadline" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Location</ion-label>\n\n  <ion-select formControlName="location" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Tournament</ion-label>\n\n  <ion-select formControlName="tournament" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of tournaments" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n	  <ion-item>\n\n    <ion-label>Toss Won</ion-label>\n\n    <ion-checkbox formControlName="tossWon"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Played</ion-label>\n\n    <ion-checkbox formControlName="played"></ion-checkbox>\n\n  </ion-item>\n\n    <ion-item>\n\n    <ion-label>Batting First</ion-label>\n\n    <ion-checkbox formControlName="battingFirst"></ion-checkbox>\n\n  </ion-item>\n\n         <ion-item>\n\n            <ion-label floating>Opponent Score</ion-label>\n\n            <ion-input formControlName="oppositionScore" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Opponent Wickets</ion-label>\n\n            <ion-input formControlName="oppositionWickets" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Opponent Overs</ion-label>\n\n            <ion-input formControlName="oppositionOvers" type="number"></ion-input>\n\n			  </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Score</ion-label>\n\n            <ion-input formControlName="score" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Wickets</ion-label>\n\n            <ion-input formControlName="wickets" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Overs</ion-label>\n\n            <ion-input formControlName="overs" type="number"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n            <ion-label floating>point</ion-label>\n\n            <ion-input formControlName="points" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Result</ion-label>\n\n            <ion-input formControlName="result" type="text"></ion-input>\n\n			  </ion-item>\n\n    </form>\n\n	 <button ion-button color="secondary" icon-left clear small (click)="editMatch()">\n\n            Submit\n\n            \n\n          </button>\n\n      </div>\n\n	  </div>\n\n    <div *ngSwitchCase="\'batting\'">\n\n	<ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p>4\'s</p>\n\n                  <p>6\'s</p>\n\n				  <p>Edit</p>\n\n              </li>\n\n              <li *ngFor="let stat of batting">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.ball}}</p>\n\n                  <p>{{stat?.four}}</p>\n\n                  <p>{{stat?.six}}</p>\n\n				   <p> <button ion-button icon-left clear small (click)="editBatting(stat.id)"></button></p>\n\n              </li>\n\n            </ul>\n\n		\n\n		\n\n          </div>\n\n		  	  </ion-card-content>\n\n			  </ion-card>\n\n			  \n\n      </div>\n\n      <div *ngSwitchCase="\'bowling\'">\n\n      <ion-card>\n\n  <ion-card-header>\n\n  Bowling\n\n </ion-card-header>\n\n <ion-card-content>\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Name</p>\n\n                    <p>O</p>\n\n                    <p>R</p>\n\n                    <p>W</p>\n\n                    <p>Wd</p>\n\n                    <p>EC</p>\n\n                    <p>Edit</p>\n\n                </li>\n\n                <li *ngFor="let stat of bowling">\n\n                    <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                    <p>{{stat?.overs}}</p>\n\n                    <p>{{stat?.run}}</p>\n\n                    <p>{{stat?.wickets}}</p>\n\n                    <p>{{stat?.wide}}</p>\n\n                    <p>{{stat?.economy | number : \'1.2-2\'}}</p>\n\n                    <p> <button ion-button icon-left clear small (click)="editBowling(stat.id)"></button></p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n             </ion-card-content>\n\n			  </ion-card>\n\n			  \n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-match-details-edit\previous-match-details-edit.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */]) === "function" && _g || Object])
], PreviousMatchDetailsEditPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=previous-match-details-edit.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
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
            owner: [''],
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
        selector: 'page-create-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-team\create-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Team</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Team\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createTeamForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Team Name</ion-label>\n\n            <ion-input formControlName="teamname" type="text"></ion-input>\n\n        </ion-item>\n\n <button ion-button color="secondary" icon-left clear small [disabled]="!createTeamForm.valid" (click)="addTeam()">\n\n            Create Team\n\n            \n\n          </button>\n\n \n\n    </form>\n\n  \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-team\create-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CreateTeamPage);

//# sourceMappingURL=create-team.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
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
        selector: 'reset',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reset Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.password"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="reset()">Reset Password</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], ResetPage);

//# sourceMappingURL=reset.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(35);
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
        selector: 'logout',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n       <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Log Out</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Log Out\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n      \n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="logout()">Log Out</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], LogoutPage);

//# sourceMappingURL=logout.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
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
        selector: 'page-create-player',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-player\create-player.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Player</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Add Player\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createPlayerForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>User Email</ion-label>\n\n            <ion-input formControlName="username" type="text"></ion-input>\n\n        </ion-item>\n\n \n\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createPlayerForm.valid" (click)="addPlayer()">\n\n            Add Player\n\n            \n\n          </button>\n\n    </form>\n\n \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-player\create-player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CreatePlayerPage);

//# sourceMappingURL=create-player.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTournamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
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
        selector: 'page-create-tournament',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-tournament\create-tournament.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Tournament</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Tournament\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createTournamentForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n         <button ion-button color="secondary" icon-left clear small [disabled]="!createTournamentForm.valid" (click)="createTournament()">\n\n            Create Tournament\n\n            \n\n          </button>\n\n    </form>\n\n \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-tournament\create-tournament.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateTournamentPage);

//# sourceMappingURL=create-tournament.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
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
            lat: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[/^[0-9]+(\.[0-9]{1,2})?$/]*')])],
            lng: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[/^[0-9]+(\.[0-9]{1,2})?$/]*')])]
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
        selector: 'page-create-location',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-location\create-location.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Location\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createLocationForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n            <ion-label floating>Address</ion-label>\n\n            <ion-input formControlName="address" type="text"></ion-input>\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Latitude</ion-label>\n\n            <ion-input formControlName="lat" type="number" step="0.01"></ion-input>\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Longitude</ion-label>\n\n            <ion-input formControlName="lng" type="number" step="0.01"></ion-input>\n\n        </ion-item>\n\n          <button ion-button color="secondary" icon-left clear small [disabled]="!createLocationForm.valid" (click)="createLocation()">\n\n            Create Location\n\n            \n\n          </button>\n\n    </form>\n\n\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-location\create-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateLocationPage);

//# sourceMappingURL=create-location.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_teams_my_teams__ = __webpack_require__(60);
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
        selector: 'modeChange',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\modeChange\modeChange.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Change Mode</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card (click)="admin()">\n\n    <ion-card-header>\n\n     Admin Mode\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n     Change Mode to Admin\n\n    </ion-card-content>\n\n  </ion-card>\n\n    <ion-card (click)="normal()">\n\n    <ion-card-header>\n\n     Normal Mode\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n       Change Mode to Normal\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\modeChange\modeChange.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ModeChangePage);

//# sourceMappingURL=modeChange.js.map

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_images_images__ = __webpack_require__(257);
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
                verified: [''],
                dob: [''],
                isVerified: ['']
            });
            console.log("fetch data", data);
            this.userDetails = data.user;
            // console.log("user data from storage", this.userDetails)
            this.userPostData.user_id = this.userDetails.id;
            this.userPostData.token = this.userDetails.token;
            this.editUserForm.setValue(data.user);
        }
    }
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
            var modal = _this.modalCtrl.create('UploadModalPage', { data: imagePath });
            modal.present();
            modal.onDidDismiss(function (data) {
                if (data && data.reload) {
                    _this.reloadImages();
                }
            });
        }, function (err) {
            console.log('Error: ', err);
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
        selector: 'page-my-account',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-account\my-account.html"*/'<!--\n\n  Generated template for the MyAccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Account</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n     <p *ngIf= "userDetails.img!= null" ><img width="80" height="80" src="data:image/PNG;base64,{{userDetails.img}}"/></p>\n\n    \n\n    <p *ngIf="userDetails.img == null" ><img width="80" height="80" src="assets/img/batsman.png"/></p>\n\n </ion-card-header>\n\n \n\n   <ion-card-content>\n\n  <div> \n\n      <div>\n\n        <div class="user-table">\n\n      <form [formGroup]="editUserForm">\n\n     	   <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Phone</ion-label>\n\n            <ion-input formControlName="phone" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>email</ion-label>\n\n            <ion-input formControlName="username" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Player Type</ion-label>\n\n  <ion-select formControlName="playerType" >\n\n   <ion-option value="Batsman">Batsman</ion-option>\n\n      <ion-option value="Bowler">Bowler</ion-option>\n\n         <ion-option value="WicketKeeperBatsman">WicketKeeper Batsman</ion-option>\n\n      <ion-option value="All Rounder">All Rounder</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n	   <ion-item>\n\n  <ion-label>Bowler Type</ion-label>\n\n  <ion-select formControlName="bowlerType">\n\n    <ion-option value="Right-arm fast">Right-arm fast</ion-option>\n\n      <ion-option value="Right-arm fast medium">Right-arm fast medium</ion-option>\n\n <ion-option value="Left-arm fast">Left-arm fast</ion-option>\n\n      <ion-option value="Left-arm fast medium">Left-arm fast medium</ion-option>\n\n            <ion-option value="Leg Break">Leg Break</ion-option>\n\n              <ion-option value="Off break">Off break</ion-option>\n\n                <ion-option value="Slow left-arm orthodox">Slow left-arm orthodox</ion-option>\n\n                  <ion-option value="Slow left-arm chinaman">Slow left-arm chinaman</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n <ion-item>\n\n  <ion-label>Batsman Type</ion-label>\n\n  <ion-select formControlName="batsmanType" >\n\n     <ion-option value="Right handed">Right handed</ion-option>\n\n      <ion-option value="Left handed">Left handed</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n       \n\n    </form>\n\n	 <button ion-button color="secondary" icon-left clear small [disabled]="!editUserForm.valid"(click)="saveUser()">\n\n            Submit\n\n            \n\n          </button>\n\n <ion-fab right bottom>\n\n    <button ion-fab (click)="presentActionSheet()"><ion-icon name="camera"></ion-icon></button>\n\n  </ion-fab>    \n\n \n\n      </div>\n\n  </div>\n\n   </div>\n\n     </ion-card-content>\n\n    </ion-card>\n\n  \n\n      \n\n              \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-account\my-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], MyAccountPage);

//# sourceMappingURL=my-account.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(50);
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
        selector: 'page-finance',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Payments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let playerexpense of expenses">\n\n    <ion-card-header>\n\n      {{playerexpense.expense.description}}\n\n      <p>{{playerexpense.expense.team.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{playerexpense.expenseDate}}</p>\n\n      <p>${{playerexpense.amount}}</p>\n\n	   <p>${{playerexpense.cmnt}}</p>\n\n         <ion-label>\n\n          Select Payment Status\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n		   <ion-checkbox [(ngModel)]="playerexpense.paid"  (ionChange)="availabilitySelected($event, playerexpense)"></ion-checkbox>\n\n     \n\n	 \n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-select [(ngModel)]="playerexpense.paymentType" (ionChange)="availabilitySelected($event, playerexpense)">\n\n          <ion-option value="CASH">CASH</ion-option>\n\n        <ion-option value="FREE">FREE</ion-option>\n\n      <ion-option value="PREPAID">PREPAID</ion-option>\n\n        <ion-option value="TRANSFER">TRANSFER</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	<p><ion-label>Remarks</ion-label></p>\n\n      <ion-item>\n\n	  \n\n	       \n\n    <ion-input [(ngModel)]="playerexpense.remark" (ionChange)="availabilitySelected($event, playerexpense)"></ion-input>\n\n	 </ion-item>\n\n	\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], FinancePage);

//# sourceMappingURL=finance.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_player_create_player__ = __webpack_require__(106);
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
        this.teamService.getAllPlayers(this.selectedTeam).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                _this.players = _this.responseData.results.teams;
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
    return TeamPlayersPage;
}());
TeamPlayersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-players',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-players\team-players.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Manage Player</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let player of players" color="primary" >\n\n    <ion-card-header>\n\n      {{player.name}}\n\n	   </ion-card-header>\n\n	   <ion-card-content>\n\n	   <button ion-button icon-left clear small (click)="delete(player)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Delete</div>\n\n          </button>\n\n		    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addPlayer()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-players\team-players.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _j || Object])
], TeamPlayersPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=team-players.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_tournament_create_tournament__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_other_other__ = __webpack_require__(26);
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
        selector: 'page-tournaments',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\tournaments\tournaments.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Tournaments</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let tournament of tournaments" color="primary">\n\n    <ion-card-header>\n\n      {{tournament.name}}\n\n	   </ion-card-header>\n\n	 \n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createTournament()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\tournaments\tournaments.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */]) === "function" && _j || Object])
], TournamentsPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=tournaments.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_location_create_location__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_other_other__ = __webpack_require__(26);
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
        selector: 'page-locations',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\locations\locations.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Locations</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card *ngFor="let location of locations" color="primary">\n\n    <ion-card-header>\n\n      {{location.name}}\n\n	   </ion-card-header>\n\n	 \n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="createLocation()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\locations\locations.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */]) === "function" && _j || Object])
], LocationsPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=locations.js.map

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
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
webpackEmptyAsyncContext.id = 144;

/***/ }),
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-match-team/add-match-team.module": [
		199
	],
	"../pages/batting/batting.module": [
		201
	],
	"../pages/bowling/bowling.module": [
		203
	],
	"../pages/create-location/create-location.module": [
		212
	],
	"../pages/create-match/create-match.module": [
		188
	],
	"../pages/create-player/create-player.module": [
		210
	],
	"../pages/create-team/create-team.module": [
		207
	],
	"../pages/create-tournament/create-tournament.module": [
		211
	],
	"../pages/forgot/forgot.module": [
		189
	],
	"../pages/login/login.module": [
		192
	],
	"../pages/logout/logout.module": [
		209
	],
	"../pages/match-availability/match-availability.module": [
		200
	],
	"../pages/match-team/match-team.module": [
		187
	],
	"../pages/modeChange/modeChange.module": [
		213
	],
	"../pages/my-profile/my-profile.module": [
		195
	],
	"../pages/previous-match-details-edit/previous-match-details-edit.module": [
		205
	],
	"../pages/previous-match-details/previous-match-details.module": [
		197
	],
	"../pages/previous-matches/previous-matches.module": [
		198
	],
	"../pages/reset/reset.module": [
		208
	],
	"../pages/signup/signup.module": [
		193
	],
	"../pages/team-matches/team-matches.module": [
		206
	],
	"../pages/welcome/welcome.module": [
		194
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
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchTeamPageModule", function() { return MatchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_team__ = __webpack_require__(50);
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
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMatchModule", function() { return CreateMatchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_match__ = __webpack_require__(92);
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
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot__ = __webpack_require__(57);
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
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(39);
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
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(58);
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
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(35);
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
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(95);
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
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchDetailsPageModule", function() { return PreviousMatchDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_match_details__ = __webpack_require__(96);
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
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchesPageModule", function() { return PreviousMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_matches__ = __webpack_require__(97);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_matches__["a" /* PreviousMatchesPage */]),
        ],
    })
], PreviousMatchesPageModule);

//# sourceMappingURL=previous-matches.module.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMatchTeamPageModule", function() { return AddMatchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_match_team__ = __webpack_require__(98);
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
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchAvailabilityPageModule", function() { return MatchAvailabilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_availability__ = __webpack_require__(99);
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
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattingPageModule", function() { return BattingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batting__ = __webpack_require__(100);
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
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BowlingPageModule", function() { return BowlingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bowling__ = __webpack_require__(101);
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
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BowlingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchDetailsEditPageModule", function() { return PreviousMatchDetailsEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_match_details_edit__ = __webpack_require__(102);
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
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMatchesPageModule", function() { return TeamMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_matches__ = __webpack_require__(59);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_matches__["a" /* TeamMatchesPage */]),
        ],
    })
], TeamMatchesPageModule);

//# sourceMappingURL=team-matches.module.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamModule", function() { return CreateTeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_team__ = __webpack_require__(103);
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
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset__ = __webpack_require__(104);
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
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logout__ = __webpack_require__(105);
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
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayerModule", function() { return CreatePlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_player__ = __webpack_require__(106);
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
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTournamentModule", function() { return CreateTournamentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_tournament__ = __webpack_require__(107);
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
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocationModule", function() { return CreateLocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_location__ = __webpack_require__(108);
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
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeChangeModule", function() { return ModeChangeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modeChange__ = __webpack_require__(109);
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
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(14);
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
        selector: 'page-list',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Team Stats</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-segment [(ngModel)]="tabsvalues">\n\n        <ion-segment-button value="team">\n\n          Team Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="batting">\n\n          Batting Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="bowling">\n\n            Bowling Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="fielding">\n\n              Fielding Stats\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    \n\n    <div [ngSwitch]="tabsvalues">\n\n      <div *ngSwitchCase="\'team\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <ion-card *ngFor="let stat of statsArray">  \n\n                <ion-card-content>\n\n                    <h4>\n\n                        {{stat.name}}\n\n                    </h4>\n\n                  <div class="cric-cards">\n\n                      <p>Played</p>\n\n                      <h4>{{stat.statistics.played}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                    <p>Won</p>\n\n                    <h4>{{stat.statistics.won}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                      <p>Lost</p>\n\n                      <h4>{{stat.statistics.lost}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                    <p>No Result</p>\n\n                    <h4>{{stat.statistics.abandoned}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                      <p>High Total</p>\n\n                      <h4>{{stat.statistics.highestTotal}}</h4>\n\n                  </div>\n\n                  <div class="cric-cards">\n\n                        <p>Low Total</p>\n\n                        <h4>{{stat.statistics.lowestTotal}}</h4>\n\n                  </div>\n\n                </ion-card-content>\n\n              \n\n              </ion-card>\n\n      </div>\n\n    \n\n      <div *ngSwitchCase="\'batting\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <div *ngFor="let stat of statsArray">\n\n              <div class="cric-stat-batting-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ul>\n\n                    <li class="header">\n\n                        <p class="cric-player-name">Name</p>\n\n                        <p>M</p>\n\n                        <p>I</p>\n\n                        <p>R</p>\n\n                        <p>B</p>\n\n                        <p class="cric-values-decimals">Av</p>\n\n                        <p class="cric-values-decimals">SR</p>\n\n                    </li>\n\n                    <li *ngFor="let player of stat.battingStatistics">\n\n                        <p class="cric-player-name">{{player.player.name}}</p>\n\n                        <p>{{player.matches}}</p>\n\n                        <p>{{player.innings}}</p>\n\n                        <p>{{player.run}}</p>\n\n                        <p>{{player.ball}}</p>\n\n                        <p class="cric-values-decimals">{{player.average | number : \'1.2-2\'}}</p>\n\n                        <p class="cric-values-decimals">{{player.sr | number : \'1.2-2\'}}</p>\n\n                    </li>\n\n                  </ul>\n\n                </div>\n\n              </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'bowling\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <div *ngFor="let stat of statsArray">\n\n              \n\n              <div class="cric-stat-bowling-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ul>\n\n                    <li class="header">\n\n                        <p class="cric-player-name">Name</p>\n\n                        <p>M</p>\n\n                        <p>O</p>\n\n                        <p>R</p>\n\n                        <p>W</p>\n\n                        <p>Wd</p>\n\n                        <p>EC</p>\n\n                    </li>\n\n                    <li *ngFor="let player of stat.bowlingStatistics">\n\n                        <p class="cric-player-name">{{player.player.name}}</p>\n\n                        <p>{{player.matches}}</p>\n\n                        <p>{{player.overs}}</p>\n\n                        <p>{{player.run}}</p>\n\n                        <p>{{player.wickets}}</p>\n\n                        <p>{{player.wide}}</p>\n\n                        <p>{{player.economy}}</p>\n\n                    </li>\n\n                  </ul>\n\n                </div>\n\n              </div>\n\n      </div>\n\n\n\n        <div *ngSwitchCase="\'fielding\'">\n\n            <ion-item>\n\n                <ion-label>Pick a Team</ion-label>\n\n                <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                  <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            \n\n            <div *ngFor="let stat of statsArray">\n\n                <div class="cric-stat-bowling-table">\n\n                    <h4>{{stat.name}}</h4>\n\n                    <ul>\n\n                      <li class="header">\n\n                          <p class="cric-player-name">Name</p>\n\n                          <p>M</p>\n\n                          <p>Ct</p>\n\n                          <p>R/O</p>\n\n                          <p>St</p>\n\n                      </li>\n\n                      <li *ngFor="let player of stat.bowlingStatistics">\n\n                          <p class="cric-player-name">{{player.player.name}}</p>\n\n                          <p>{{player.matches}}</p>\n\n                          <p>{{player.catches}}</p>\n\n                          <p>{{player.runOuts}}</p>\n\n                          <p>{{player.stumpings}}</p>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n                </div>\n\n        </div>\n\n\n\n      </div> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),
/* 256 */,
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(258);
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
    ImagesProvider.prototype.uploadImage = function (img, desc) {
        // Destination URL
        var url = this.apiURL + '/api/user/upload';
        // File for Upload
        var targetPath = img;
        var headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set("token", this.getToken());
        var options = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            headers: headers
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
/* 258 */,
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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
/* 260 */,
/* 261 */,
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(281);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_matches_matches__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stats_stats__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_teams_teams__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_other_other__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_batting_batting__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_list__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_bowling_bowling__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_android_permissions__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_welcome_welcome__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_signup_signup_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_my_profile_my_profile__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_my_profile_my_profile_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_my_account_my_account__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_my_account_my_account_module__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_previous_matches_previous_matches__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_previous_matches_previous_matches_module__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_my_teams_my_teams__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_my_teams_my_teams_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_players_players__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_finance_finance__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_previous_match_details_previous_match_details__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_previous_match_details_previous_match_details_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_match_team_match_team__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_match_team_match_team_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_finance_finance__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_forgot_forgot__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_forgot_forgot_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_finance_finance_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_reset_reset__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_reset_reset_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_logout_logout__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_logout_logout_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_push__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_create_team_create_team__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_create_team_create_team_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_team_players_team_players__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_team_players_team_players_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_create_player_create_player__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_create_player_create_player_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_create_match_create_match__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_create_match_create_match_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_team_matches_team_matches__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_team_matches_team_matches_module__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_match_availability_match_availability__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_match_availability_match_availability_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_tournaments_tournaments__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_locations_locations__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_tournaments_tournaments_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_locations_locations_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_create_location_create_location__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_create_location_create_location_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_create_tournament_create_tournament__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_create_tournament_create_tournament_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_modeChange_modeChange__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_modeChange_modeChange_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_add_match_team_add_match_team__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_add_match_team_add_match_team_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_batting_batting__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_batting_batting_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_bowling_bowling__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_bowling_bowling_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_previous_match_details_edit_previous_match_details_edit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_previous_match_details_edit_previous_match_details_edit_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__providers_images_images__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__ionic_native_camera__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__ionic_native_file_transfer__ = __webpack_require__(258);
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
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_51__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/match-team/match-team.module#MatchTeamPageModule', name: 'MatchTeamPage', segment: 'match-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-match/create-match.module#CreateMatchModule', name: 'CreateMatchPage', segment: 'create-match', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
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
                    { loadChildren: '../pages/modeChange/modeChange.module#ModeChangeModule', name: 'ModeChangePage', segment: 'modeChange', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome_module__["WelcomePageModule"],
            __WEBPACK_IMPORTED_MODULE_48__pages_create_team_create_team_module__["CreateTeamModule"],
            __WEBPACK_IMPORTED_MODULE_50__pages_team_players_team_players_module__["a" /* TeamPlayersPageModule */],
            __WEBPACK_IMPORTED_MODULE_53__pages_create_player_create_player_module__["CreatePlayerModule"],
            __WEBPACK_IMPORTED_MODULE_57__pages_team_matches_team_matches_module__["TeamMatchesPageModule"],
            __WEBPACK_IMPORTED_MODULE_55__pages_create_match_create_match_module__["CreateMatchModule"],
            __WEBPACK_IMPORTED_MODULE_59__pages_match_availability_match_availability_module__["MatchAvailabilityPageModule"],
            __WEBPACK_IMPORTED_MODULE_62__pages_tournaments_tournaments_module__["a" /* TournamentsPageModule */], __WEBPACK_IMPORTED_MODULE_75__pages_bowling_bowling_module__["BowlingPageModule"],
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
            __WEBPACK_IMPORTED_MODULE_30__pages_my_teams_my_teams__["a" /* MyTeamsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_match_team_match_team__["a" /* MatchTeamPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_finance_finance__["a" /* FinancePage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_reset_reset__["a" /* ResetPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_logout_logout__["a" /* LogoutPage */],
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
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_matches_team_matches__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_finance_finance__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_logout_logout__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_team_players_team_players__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tournaments_tournaments__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_locations_locations__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modeChange_modeChange__ = __webpack_require__(109);
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
        this.adminPages = [
            { title: 'Players', component: __WEBPACK_IMPORTED_MODULE_15__pages_team_players_team_players__["a" /* TeamPlayersPage */] },
            { title: 'Matches', component: __WEBPACK_IMPORTED_MODULE_10__pages_team_matches_team_matches__["a" /* TeamMatchesPage */] },
            { title: 'Tournament', component: __WEBPACK_IMPORTED_MODULE_18__pages_tournaments_tournaments__["a" /* TournamentsPage */] },
            { title: 'Location', component: __WEBPACK_IMPORTED_MODULE_19__pages_locations_locations__["a" /* LocationsPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__["a" /* MyProfilePage */] },
            { title: 'Manage Teams', component: __WEBPACK_IMPORTED_MODULE_11__pages_my_teams_my_teams__["a" /* MyTeamsPage */] },
            { title: 'Change Mode', component: __WEBPACK_IMPORTED_MODULE_20__pages_modeChange_modeChange__["a" /* ModeChangePage */] },
            { title: 'Finance', component: __WEBPACK_IMPORTED_MODULE_12__pages_finance_finance__["a" /* FinancePage */] },
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
                var alert_1 = _this.alertCtrl.create({
                    title: 'clicked on',
                    subTitle: "you clicked on the notification!",
                    buttons: ['OK']
                });
                alert_1.present();
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionicapp\crickify\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\ionicapp\crickify\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_account__ = __webpack_require__(131);
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
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_teams__ = __webpack_require__(60);
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
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finance__ = __webpack_require__(132);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finance__["a" /* FinancePage */]),
        ],
    })
], FinancePageModule);

//# sourceMappingURL=finance.module.js.map

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPlayersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_players__ = __webpack_require__(133);
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
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments__ = __webpack_require__(134);
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
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locations__ = __webpack_require__(135);
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

/***/ })
],[262]);
//# sourceMappingURL=main.js.map