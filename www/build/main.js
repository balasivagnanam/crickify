webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(49);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Team Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Team List\n\n      </ion-segment-button>\n\n     \n\n    </ion-segment>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Team List\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n         \n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n              \n\n            </li>\n\n            <li *ngFor="let stat of batting">\n\n                <p class="cric-player-name">{{stat?.name}}</p>\n\n              \n\n            </li>\n\n          </ul>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-team\match-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], MatchTeamPage);

//# sourceMappingURL=match-team.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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



var apiUrl = 'https://crickify.herokuapp.com/news';
var isAuthenticated;
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    NewsService.prototype.getAllNews = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/news', { headers: headers })
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
    NewsService.prototype.getAllNewsSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var urlSearchParams = new URLSearchParams();
            for (var key in filter) {
                if (filter[key] != null) {
                    urlSearchParams.append(key, filter[key]);
                }
            }
            _this.http.get(apiUrl + '/news/search?' + urlSearchParams)
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
    NewsService.prototype.getPreviousNewss = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/past', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    NewsService.prototype.getNewsId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/news/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    NewsService.prototype.postAvailability = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/news/availability', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    NewsService.prototype.updateResponse = function (news, player, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(status));
            _this.http.post(apiUrl + '/news/' + news + '/availability/' + player.id, status, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    NewsService.prototype.addNews = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiUrl + '/news', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    NewsService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/news/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return NewsService;
}());
NewsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], NewsService);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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



var apiUrl = 'https://crickify.herokuapp.com/product';
var isAuthenticated;
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    ProductService.prototype.getAllProduct = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/products', { headers: headers })
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
    ProductService.prototype.getAllProductSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var urlSearchParams = new URLSearchParams();
            for (var key in filter) {
                if (filter[key] != null) {
                    urlSearchParams.append(key, filter[key]);
                }
            }
            _this.http.get(apiUrl + '/product/search?' + urlSearchParams)
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
    ProductService.prototype.getPreviousProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/past', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ProductService.prototype.getProductId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/product/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ProductService.prototype.postAvailability = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/product/availability', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ProductService.prototype.updateResponse = function (product, player, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(status));
            _this.http.post(apiUrl + '/product/' + product + '/availability/' + player.id, status, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ProductService.prototype.addProduct = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiUrl + '/product', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ProductService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/product/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ProductService);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_images_images__ = __webpack_require__(109);
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
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-upload-modal',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\upload-modal\upload-modal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>Upload Image</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <img [src]="imageData" style="width: 100%">\n\n  <button ion-button full icon-left (click)="saveImage()">\n          <ion-icon name="checkmark"></ion-icon>\n          Save & Upload Image\n  </button>\n</ion-content>\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\upload-modal\upload-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__providers_images_images__["a" /* ImagesProvider */]])
], UploadModalPage);

//# sourceMappingURL=upload-modal.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(358);
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
        this.serverUrl = "https://crickify.herokuapp.com/image/";
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
    ImagesProvider.prototype.uploadCloudinaryImage = function (img, type, id) {
        // Destination URL
        var url = this.serverUrl + type + '/image/' + id;
        // File for Upload
        var targetPath = img;
        var headers = new Headers();
        headers.set("token", this.getToken());
        var options = {
            fileKey: 'upload',
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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



var apiUrl = 'https://crickify.herokuapp.com/practice';
var isAuthenticated;
var PracticeService = (function () {
    function PracticeService(http) {
        this.http = http;
    }
    PracticeService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    PracticeService.prototype.getAllMatches = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/practices/availabilities', { headers: headers })
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
    PracticeService.prototype.getAllPracticeAvailabilityFilter = function (filter) {
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
            _this.http.get(apiUrl + '/practices/availabilities?' + urlSearchParams, { headers: headers })
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
    PracticeService.prototype.getAllPracticeSearch = function (filter) {
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
            _this.http.get(apiUrl + '/practices/search?' + urlSearchParams, { headers: headers })
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
    PracticeService.prototype.getPreviousPractices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/past', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    PracticeService.prototype.getPracticeAvailability = function (practiceId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/practice/' + practiceId + '/availability', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    PracticeService.prototype.postAvailability = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/practice/availability', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    PracticeService.prototype.updateAvailability = function (practice, player, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(status));
            _this.http.post(apiUrl + '/practice/' + practice + '/availability/' + player.id, status, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    PracticeService.prototype.addPractice = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiUrl + '/practice/', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    PracticeService.prototype.delete = function (practice) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/practice/' + practice, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return PracticeService;
}());
PracticeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PracticeService);

//# sourceMappingURL=practice.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(72);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'forgot',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\forgot\forgot.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Forgot Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="forgot()">Reset Password</button>\n\n        <a href="#" (click)="login()">Login Page</a>\n\n		<a href="#" (click)="homePage()">Home Page</a>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(72);
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
            phone: ['']
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary"> \n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Registration\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <form [formGroup]="signupForm" (submit)="signup()">\n\n          <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input type="text" formControlName="name"></ion-input>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item [class.invalid]="!username.valid">\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input type="text" formControlName="username" autocapitalize="off"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!username.valid" class="invalid">\n\n              <p>* Email is required!</p>\n\n          </ion-item>\n\n\n\n          <ion-item [class.invalid]="!password.valid">\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" formControlName="password"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="!password.valid" class="invalid">\n\n              <p>* Password is required!</p>\n\n          </ion-item>\n\n  \n\n          \n\n<ion-item>\n\n          <button ion-button full color="success" type="submit" [disabled]="!signupForm.valid">Sign up</button></ion-item>\n\n<ion-item>\n\n          <button ion-button full color="success" (click)="login()">Login</button></ion-item>\n\n\n\n\n\n\n\n        </form>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrivacyPage = (function () {
    function PrivacyPage() {
    }
    return PrivacyPage;
}());
PrivacyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-privacy',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\privacy\privacy.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Privacy Policy</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1>Privacy Policy</h1>\n\n\n<p>Effective date: September 19, 2018</p>\n\n\n<p>Crickify ("us", "we", or "our") operates the https://crickify-redbacks.herokuapp.com/ website and the Crickify mobile application (the "Service").</p>\n\n<p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy  for Crickify is managed through <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php">Free Privacy Policy</a>.</p>\n\n<p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>\n\n\n<h2>Information Collection And Use</h2>\n\n<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\n\n<h3>Types of Data Collected</h3>\n\n<h4>Personal Data</h4>\n\n<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>\n\n<ul>\n<li>Email address</li><li>First name and last name</li><li>Phone number</li><li>Cookies and Usage Data</li>\n</ul>\n\n<h4>Usage Data</h4>\n\n<p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data").</p>\n<p>This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\n<p>When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>\n\n<h4>Tracking & Cookies Data</h4>\n<p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\n<p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>\n<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>\n<p>Examples of Cookies we use:</p>\n<ul>\n    <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\n    <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\n    <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\n</ul>\n\n<h2>Use of Data</h2>\n    \n<p>Crickify uses the collected data for various purposes:</p>    \n<ul>\n    <li>To provide and maintain the Service</li>\n    <li>To notify you about changes to our Service</li>\n    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\n    <li>To provide customer care and support</li>\n    <li>To provide analysis or valuable information so that we can improve the Service</li>\n    <li>To monitor the usage of the Service</li>\n    <li>To detect, prevent and address technical issues</li>\n</ul>\n\n<h2>Transfer Of Data</h2>\n<p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>\n<p>If you are located outside Singapore and choose to provide information to us, please note that we transfer the data, including Personal Data, to Singapore and process it there.</p>\n<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>\n<p>Crickify will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>\n\n<h2>Disclosure Of Data</h2>\n\n<h3>Legal Requirements</h3>\n<p>Crickify may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\n<ul>\n    <li>To comply with a legal obligation</li>\n    <li>To protect and defend the rights or property of Crickify</li>\n    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n    <li>To protect the personal safety of users of the Service or the public</li>\n    <li>To protect against legal liability</li>\n</ul>\n\n<h2>Security Of Data</h2>\n<p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>\n\n<h2>Service Providers</h2>\n<p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>\n<p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>\n\n<h3>Analytics</h3>\n<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>    \n<ul>\n        <li>\n        <p><strong>Google Analytics</strong></p>\n        <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>\n                        <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>\n    </li>\n                            </ul>\n\n\n<h2>Links To Other Sites</h2>\n<p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\n<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\n\n\n<h2>Children\'s Privacy</h2>\n<p>Our Service does not address anyone under the age of 18 ("Children").</p>\n<p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>\n\n\n<h2>Changes To This Privacy Policy</h2>\n<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>\n<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>\n<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\n\n\n<h2>Contact Us</h2>\n<p>If you have any questions about this Privacy Policy, please contact us:</p>\n<ul>\n        <li>By email: support@crickify.com</li>\n          \n        </ul>                                \n</ion-content>\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\privacy\privacy.html"*/
    })
], PrivacyPage);

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiImageUpload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MultiImageUpload = (function () {
    function MultiImageUpload(sanitization, actionSheetCtrl, camera, file, alertCtrl, toastCtrl) {
        this.sanitization = sanitization;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.serverUrl = "https://crickify.herokuapp.com/image/";
        this.isUploading = false;
        this.uploadingProgress = {};
        this.uploadingHandler = {};
        this.images = [];
        this.util = (function (_this) {
            return {
                removeFromArray: function (array, item) {
                    var index = array.indexOf(item);
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                },
                confirm: function (text, title, yes, no) {
                    if (title === void 0) { title = ''; }
                    if (yes === void 0) { yes = "Yes"; }
                    if (no === void 0) { no = "No"; }
                    return new Promise(function (resolve) {
                        _this.alertCtrl.create({
                            title: title,
                            message: text,
                            buttons: [
                                {
                                    text: no,
                                    role: 'cancel',
                                    handler: function () {
                                        resolve(false);
                                    }
                                },
                                {
                                    text: yes,
                                    handler: function () {
                                        resolve(true);
                                    }
                                }
                            ]
                        }).present();
                    });
                },
                trustImages: function () {
                    _this.imagesValue = _this.images.map(function (val) {
                        return {
                            url: val,
                            sanitized: _this.sanitization.bypassSecurityTrustStyle("url(" + val + ")")
                        };
                    });
                },
                showToast: function (text) {
                    _this.toastCtrl.create({
                        message: text,
                        duration: 5000,
                        position: 'bottom'
                    }).present();
                }
            };
        })(this);
    }
    MultiImageUpload.prototype.uploadImages = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isUploading = true;
            Promise.all(_this.images.map(function (image) {
                return _this.uploadImage(image);
            }))
                .then(resolve)
                .catch(function (reason) {
                _this.isUploading = false;
                _this.uploadingProgress = {};
                _this.uploadingHandler = {};
                reject(reason);
            });
        });
    };
    MultiImageUpload.prototype.abort = function () {
        if (!this.isUploading)
            return;
        this.isUploading = false;
        for (var key in this.uploadingHandler) {
            this.uploadingHandler[key].abort();
        }
    };
    // ======================================================================
    MultiImageUpload.prototype.removeImage = function (image) {
        var _this = this;
        if (this.isUploading)
            return;
        this.util.confirm("Are you sure to remove it?").then(function (value) {
            if (value) {
                _this.util.removeFromArray(_this.imagesValue, image);
                _this.util.removeFromArray(_this.images, image.url);
            }
        });
    };
    MultiImageUpload.prototype.showAddImage = function () {
        var _this = this;
        if (!window['cordova']) {
            var input_1 = document.createElement('input');
            input_1.type = 'file';
            input_1.accept = "image/x-png,image/gif,image/jpeg";
            input_1.click();
            input_1.onchange = function () {
                var blob = window.URL.createObjectURL(input_1.files[0]);
                _this.images.push(blob);
                _this.util.trustImages();
            };
        }
        else {
            new Promise(function (resolve, reject) {
                var actionSheet = _this.actionSheetCtrl.create({
                    title: 'Add a photo',
                    buttons: [
                        {
                            text: 'From photo library',
                            handler: function () {
                                resolve(_this.camera.PictureSourceType.PHOTOLIBRARY);
                            }
                        },
                        {
                            text: 'From camera',
                            handler: function () {
                                resolve(_this.camera.PictureSourceType.CAMERA);
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                reject();
                            }
                        }
                    ]
                });
                actionSheet.present();
            }).then(function (sourceType) {
                if (!window['cordova'])
                    return;
                var options = {
                    quality: 100,
                    sourceType: sourceType,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                };
                _this.camera.getPicture(options).then(function (imagePath) {
                    _this.images.push(imagePath);
                    _this.util.trustImages();
                });
            }).catch(function () {
            });
        }
    };
    MultiImageUpload.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    MultiImageUpload.prototype.uploadImage = function (targetPath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.uploadingProgress[targetPath] = 0;
            var headers = new Headers();
            headers.set("token", _this.getToken());
            if (window['cordova']) {
                var options = {
                    fileKey: "upload",
                    fileName: targetPath,
                    chunkedMode: false,
                    mimeType: "multipart/form-data",
                    headers: { 'token': _this.getToken() }
                };
                var fileTransfer = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* TransferObject */]();
                _this.uploadingHandler[targetPath] = fileTransfer;
                fileTransfer.upload(targetPath, _this.serverUrl + _this.type + '/image/' + _this.id, options).then(function (data) {
                    resolve(JSON.parse(data.response));
                }).catch(function () {
                    askRetry();
                });
                fileTransfer.onProgress(function (event2) {
                    _this.uploadingProgress[targetPath] = event2.loaded * 100 / event2.total;
                });
            }
            else {
                var xhr_1 = new XMLHttpRequest();
                xhr_1.open('GET', targetPath, true);
                xhr_1.responseType = 'blob';
                xhr_1.onload = function (e) {
                    if (xhr_1['status'] != 200) {
                        _this.util.showToast("Your browser doesn't support blob API");
                        console.error(e, xhr_1);
                        askRetry();
                    }
                    else {
                        var blob = xhr_1['response'];
                        var formData = new FormData(), xhr2_1 = new XMLHttpRequest();
                        formData.append('upload', blob);
                        _this.uploadingHandler[targetPath] = xhr2_1;
                        xhr2_1.onreadystatechange = function () {
                            if (xhr2_1.readyState === 4) {
                                if (xhr2_1.status === 200)
                                    resolve(JSON.parse(xhr2_1.response));
                                else
                                    askRetry();
                            }
                        };
                        xhr2_1.upload.onprogress = function (event) {
                            _this.uploadingProgress[targetPath] = event.loaded * 100 / event.total;
                        };
                        xhr2_1.open('POST', _this.serverUrl + _this.type + '/image/' + _this.id, true);
                        xhr2_1.setRequestHeader("token", _this.getToken());
                        xhr2_1.send(formData);
                    }
                };
                xhr_1.send();
            }
            var askRetry = function () {
                // might have been aborted
                if (!_this.isUploading)
                    return reject(null);
                _this.util.confirm('Do you wish to retry?', 'Upload failed').then(function (res) {
                    if (!res) {
                        _this.isUploading = false;
                        for (var key in _this.uploadingHandler) {
                            _this.uploadingHandler[key].abort();
                        }
                        return reject(null);
                    }
                    else {
                        if (!_this.isUploading)
                            return reject(null);
                        _this.uploadImage(targetPath).then(resolve, reject);
                    }
                });
            };
        });
    };
    return MultiImageUpload;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MultiImageUpload.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MultiImageUpload.prototype, "id", void 0);
MultiImageUpload = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'multi-image-upload',template:/*ion-inline-start:"D:\ionicapp\crickify\src\components\multi-image-upload\multi-image-upload.html"*/'<div>\n  <div class="images-wrapper">\n    <div class="image-wrapper" *ngFor="let image of imagesValue">\n      <ion-icon class="remove-image" name="close" *ngIf="!isUploading" (click)="removeImage(image)"></ion-icon>\n      <div class="image" [style.background-image]="image.sanitized">\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="\n             [class.uploading]="isUploading" alt=""/>\n        <ion-spinner *ngIf="isUploading && uploadingProgress[image.url]<100"></ion-spinner>\n\n        <ion-icon name="checkmark" *ngIf="isUploading && uploadingProgress[image.url]==100"></ion-icon>\n        <div *ngIf="isUploading" class="progress-bar">\n          <div class="progress" [style.width]="(uploadingProgress[image.url]||0)+\'%\'"></div>\n        </div>\n      </div>\n    </div>\n    <div class="image-wrapper add-image-btn" *ngIf="!isUploading" (click)="showAddImage()">\n      <div class="image">\n        <ion-icon name="add"></ion-icon>\n        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt=""/>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"D:\ionicapp\crickify\src\components\multi-image-upload\multi-image-upload.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
], MultiImageUpload);

//# sourceMappingURL=multi-image-upload.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_match_team_add_match_team__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_match_create_match__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__match_availability_match_availability__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__previous_match_details_edit_previous_match_details_edit__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_teams_teams__ = __webpack_require__(12);
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
        //this.getTeams();
        this.getTournaments();
        this.searchMatchesForm = formBuilder.group({
            endDate: [''],
            startDate: [''],
            teamId: this.team.id,
            tournamentId: [0]
        });
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
    TeamMatchesPage.prototype.delete = function (matchId) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.delete(matchId).then(function (result) {
            _this.deleteResponseData = result;
            console.log(_this.deleteResponseData);
            if (_this.deleteResponseData.statusCode == '200') {
                loading.dismiss();
                _this.getData();
            }
            else if (_this.deleteResponseData.statusCode == "404") {
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.deleteResponseData);
            }
        }, function (err) {
            loading.dismiss();
        });
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-matches\team-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Search Matches\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n        <form [formGroup]="searchMatchesForm">\n\n                  <ion-item>\n\n                  <ion-label>Tournament</ion-label>\n\n                  <ion-select formControlName="tournamentId"  >\n\n                    <ion-option *ngFor="let key of tournaments" [value]="key.id">{{key.name}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>Start Date</ion-label>\n\n                    <ion-datetime formControlName="startDate"  displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n                  </ion-item>\n\n                 \n\n                      <ion-item>\n\n                          <ion-label>End Date</ion-label>\n\n                          <ion-datetime formControlName="endDate"  displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n                        </ion-item>\n\n                     \n\n             <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n                Filter\n\n                \n\n              </button>\n\n     \n\n        </form>\n\n      \n\n    \n\n    </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team.teamname}} Vs\n\n          {{match.opponent}}\n\n          <p>{{match.tournament.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <p>{{match.matchTime | momentjs}}</p>\n\n          \n\n          <span *ngIf="match.location!=null">\n\n          <p>{{match.location.name}}, {{match.location.address}}</p>\n\n        </span>\n\n        <span *ngIf="match.played">\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n        </span>\n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n		    <button ion-button icon-left clear small (click)="goToMatchAvailability(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Availability</div>\n\n          </button>\n\n          <button ion-button icon-left clear small (click)="delete(match.id)">\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>Delete Match</div>\n\n            </button>\n\n		     </ion-card-content>\n\n      </ion-card>\n\n    </ion-content>\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addMatch()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-matches\team-matches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_9__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_10__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]])
], TeamMatchesPage);

//# sourceMappingURL=team-matches.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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
            });
        });
    };
    AuthService.prototype.postNotification = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("token", _this.getToken());
            _this.http.post(apiUrl + '/notification', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
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

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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
var countryApi = 'https://restcountries.eu/rest/v2/all';
var scoreApi = 'https://cricscore-api.appspot.com';
var imageUrl = 'https://crickify.herokuapp.com/image/';
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
    OtherService.prototype.getImages = function (type, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(imageUrl + type + '/image/' + id)
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
    OtherService.prototype.getAllCountries = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(countryApi)
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
    OtherService.prototype.getAllScores = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Access-Control-Allow-Origin', '*');
            _this.http.get(scoreApi + '/csa', { headers: headers })
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
    OtherService.prototype.getAllScoresDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Access-Control-Allow-Origin', '*');
            _this.http.get(scoreApi + '/csa?id=' + id, { headers: headers })
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
    OtherService.prototype.deleteImage = function (image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(imageUrl + '/image/delete', JSON.stringify(image), { headers: headers })
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-match',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-match\create-match.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Add Match</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Add Match\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createMatchForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Opponent</ion-label>\n\n            <ion-input formControlName="opponent" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Remark</ion-label>\n\n            <ion-input formControlName="remarks" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime formControlName="matchTime" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Location</ion-label>\n\n  <ion-select formControlName="location">\n\n    <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Tournament</ion-label>\n\n  <ion-select formControlName="tournament">\n\n    <ion-option *ngFor="let key of tournaments" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createMatchForm.valid" (click)="addMatch()">\n\n            Add Match\n\n            \n\n          </button>\n\n    </form>\n\n\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-match\create-match.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]])
], CreateMatchPage);

//# sourceMappingURL=create-match.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_news_news__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(12);
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







var ViewNewsPage = (function () {
    function ViewNewsPage(navCtrl, navParams, app, teamService, otherService, authService, newsService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.teamService = teamService;
        this.otherService = otherService;
        this.authService = authService;
        this.newsService = newsService;
        this.loadingController = loadingController;
        this.admob = admob;
        this.news = navParams.get('news');
    }
    ViewNewsPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    ViewNewsPage.prototype.ionViewDidLoad = function () {
    };
    return ViewNewsPage;
}());
ViewNewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewnews',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\viewnews\viewnews.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>News</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-item text-center text-wrap>\n\n\n\n      \n\n           <h2><b>{{news.title}}</b></h2>\n\n       \n\n           <p *ngIf="news.publishedAt!= null">\n\n              <ion-item>{{news?.publishedAt | momentjs}}</ion-item>\n\n              </p>\n\n\n\n\n\n      </ion-item>\n\n    </ion-card-header>\n\n    <div class="header-banner">\n\n    <p *ngIf= "news.imgUrl!= null && news.imgUrl.length>0" >\n\n        <ion-slides autoplay="5000" loop="true" speed="3000">\n\n            <ion-slide *ngFor="let slide of news.imgUrl">\n\n              <img src="{{slide.url}}" />\n\n            </ion-slide>\n\n          </ion-slides>\n\n      \n\n      </p>\n\n      <p *ngIf= "news.imgUrl== null || news.imgUrl.length==0" ><img src="assets/img/noimage.png" /></p>\n\n                \n\n    </div>\n\n    <ion-card-content >\n\n        \n\n              \n\n        <ion-item text-wrap> {{news.article}}</ion-item>\n\n         \n\n         \n\n \n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\viewnews\viewnews.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_news_news__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], ViewNewsPage);

//# sourceMappingURL=viewnews.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_product__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(12);
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







var ViewProductPage = (function () {
    function ViewProductPage(navCtrl, navParams, app, teamService, otherService, authService, productService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.teamService = teamService;
        this.otherService = otherService;
        this.authService = authService;
        this.productService = productService;
        this.loadingController = loadingController;
        this.admob = admob;
        var data = JSON.parse(localStorage.getItem('userData'));
        if (data != null) {
            this.user = data.user;
        }
        this.product = navParams.get('product');
    }
    ViewProductPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    ViewProductPage.prototype.ionViewDidLoad = function () {
    };
    return ViewProductPage;
}());
ViewProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewproduct',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\viewproduct\viewproduct.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Product</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-item text-center text-wrap>\n\n\n\n      \n\n           <h2><b>{{product.title}}</b></h2>\n\n       \n\n\n\n      </ion-item>\n\n    </ion-card-header>\n\n    <div class="header-banner">\n\n    <p *ngIf= "product.imgUrl!= null && product.imgUrl.length>0" >\n\n        <ion-slides autoplay="5000" loop="true" speed="3000">\n\n            <ion-slide *ngFor="let slide of product.imgUrl">\n\n              <img src="{{slide.url}}" />\n\n            </ion-slide>\n\n          </ion-slides>\n\n      \n\n      </p>\n\n      <p *ngIf= "product.imgUrl== null || product.imgUrl.length==0" ><img src="assets/img/noimage.png" /></p>\n\n                \n\n    </div>\n\n    <ion-card-content >\n\n        \n\n        <ion-item text-wrap> ${{product.price}}</ion-item> \n\n\n\n      \n\n        <ion-item text-wrap> {{product.description}}</ion-item>\n\n        <div *ngIf= "user!= null "> \n\n        <ion-item text-wrap>Please contact <b>{{product?.user?.name}}</b>  for more details:</ion-item>\n\n        <ion-item text-wrap> <b>Email :{{product?.user?.username}}</b></ion-item>\n\n        <p *ngIf= "product?.user?.phone!= null ">\n\n          <ion-item text-wrap><b>Phone: {{product?.user?.phone}}</b></ion-item>\n\n        </p> \n\n      </div>\n\n        <div *ngIf= "user== null ">  <ion-item text-wrap>Please login  for more details:</ion-item>\n\n          </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\viewproduct\viewproduct.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_product_product__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], ViewProductPage);

//# sourceMappingURL=viewproduct.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_news_news__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upload_modal_upload_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_images_images__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_multi_image_upload_multi_image_upload__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateNewsPage = (function () {
    function CreateNewsPage(navCtrl, modalCtrl, imagesProvider, camera, actionSheetCtrl, navParams, alertController, teamService, loadingController, formBuilder, newsService, otherService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.imagesProvider = imagesProvider;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.newsService = newsService;
        this.otherService = otherService;
        this.uploadFinished = false;
        this.locationDisabled = false;
        this.newsTimeDisabled = false;
        this.teamDisabled = false;
        this.disabled = true;
        this.news = navParams.get('news');
        this.createNewsForm = formBuilder.group({
            id: [''],
            type: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            description: [''],
            urlToImage: [''],
            active: [true],
            publishedAt: [''],
            location: ['',],
            title: [],
            article: [],
            imgUrl: [],
            user: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            createDate: [],
            modifyDate: []
        });
        this.type = 'news';
        this.getLocations();
        if (this.news != null) {
            this.createNewsForm.setValue(this.news);
            this.disabled = false;
            if (this.news.publishedAt != null) {
                this.createNewsForm.controls['publishedAt'].setValue(new Date(this.news.publishedAt).toISOString());
            }
        }
        var data = JSON.parse(localStorage.getItem('userData'));
        this.user = data.user;
        this.createNewsForm.controls['user'].setValue(this.user);
    }
    CreateNewsPage.prototype.getLocations = function () {
        var _this = this;
        this.otherService.getAllCountries().then(function (result) {
            _this.locationResponseData = result;
            console.log(_this.locationResponseData);
            _this.locations = _this.locationResponseData;
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    CreateNewsPage.prototype.ionViewWillEnter = function () {
        //calling an API
    };
    CreateNewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateNewsPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.name === e2.name : e1 === e2;
    };
    CreateNewsPage.prototype.addNews = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.newsService.addNews(this.createNewsForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.news = _this.responseData.results.result;
                _this.disabled = false;
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
    CreateNewsPage.prototype.getNews = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.newsService.getNewsId(this.news.id).then(function (result) {
            _this.responseNewsData = result;
            console.log(_this.responseNewsData);
            if (_this.responseNewsData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.news = _this.responseNewsData.results.result;
                _this.disabled = false;
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    CreateNewsPage.prototype.delete = function (slide) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.deleteImage(slide).then(function (result) {
            _this.deleteImageResponse = result;
            console.log(_this.deleteImageResponse);
            if (_this.deleteImageResponse.statusCode == '200') {
                console.log("test 200");
                loading.dismiss();
                _this.getNews();
            }
            else if (_this.deleteImageResponse.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
            }
            else {
                console.log("test others");
                loading.dismiss();
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    CreateNewsPage.prototype.presentActionSheet = function () {
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
    CreateNewsPage.prototype.takePicture = function (sourceType) {
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
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__upload_modal_upload_modal__["a" /* UploadModalPage */], { data: imagePath });
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
    CreateNewsPage.prototype.reloadImages = function () {
    };
    CreateNewsPage.prototype.alertDialog = function (title, message) {
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
    CreateNewsPage.prototype.submit = function () {
        var _this = this;
        if (this.multiImageUpload.images.length == 0) {
            this.showToast("Please select at least 1 photo");
            return;
        }
        this.multiImageUpload.id = this.news.id;
        this.multiImageUpload.uploadImages().then(function (images) {
            _this.showToast("Upload successful, view console for details");
            _this.uploadFinished = true;
            console.dir(images);
            _this.getNews();
        }).catch(function () {
        });
    };
    CreateNewsPage.prototype.cancel = function () {
        var _this = this;
        this.confirm('Are you sure to cancel?').then(function (value) {
            if (value) {
                _this.multiImageUpload.abort();
            }
        });
    };
    CreateNewsPage.prototype.showToast = function (text) {
    };
    CreateNewsPage.prototype.confirm = function (text) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.alertController.create({
                message: text,
                buttons: [
                    {
                        text: "No",
                        role: 'cancel',
                        handler: function () {
                            resolve(false);
                        }
                    },
                    {
                        text: "Yes",
                        handler: function () {
                            resolve(true);
                        }
                    }
                ]
            }).present();
        });
    };
    return CreateNewsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */])
], CreateNewsPage.prototype, "multiImageUpload", void 0);
CreateNewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-news',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-news\create-news.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>News</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Add News\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        \n\n                <div>\n\n                  <div class="images-wrapper">\n\n                    <div class="image-wrapper" *ngFor="let img of news.imgUrl">\n\n                      <ion-icon class="remove-image" name="close" (click)="delete(img)"></ion-icon>\n\n                      <div class="image" [style.background-image]="img.url.sanitized">\n\n                        <img src="{{img.url}}"/>\n\n                      </div>\n\n                    </div>\n\n                \n\n                  </div>\n\n              </div>\n\n            \n\n      <ion-list no-lines>\n\n      \n\n          <multi-image-upload [type]="type" [id]="news?.id"></multi-image-upload>\n\n          <button ion-button block (click)="submit()" *ngIf="!multiImageUpload.isUploading && !uploadFinished&&!disabled">\n\n              <ion-icon name="checkmark"></ion-icon>\n\n              Upload\n\n          </button>\n\n          <button ion-button block (click)="cancel()" color="danger" *ngIf="multiImageUpload.isUploading && !uploadFinished&&!disabled">\n\n              <ion-icon name="close"></ion-icon>\n\n              Cancel\n\n          </button>\n\n          \n\n\n\n              \n\n             \n\n            <p *ngIf= "news?.imgUrl!= null && news?.imgUrl.length>0" >\n\n                <ion-slides autoplay="5000" loop="true" speed="3000">\n\n                    <ion-slide *ngFor="let slide of news.imgUrl">\n\n                      \n\n                        <ion-item><img src="{{slide.url}}" /></ion-item>\n\n                        <ion-item> <button ion-button block (click)="delete(slide)" color="danger">\n\n                         \n\n                          Delete\n\n                      </button></ion-item>\n\n                    </ion-slide>\n\n                 \n\n                  </ion-slides>\n\n              \n\n              </p>\n\n                 <form [formGroup]="createNewsForm">\n\n\n\n          <ion-item>\n\n            <ion-label>Type</ion-label>\n\n            <ion-select formControlName="type" >\n\n              <ion-option value="Local">Local</ion-option>\n\n              <ion-option value="International">International</ion-option>\n\n\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Title</ion-label>\n\n              <ion-input formControlName="title" type="text"></ion-input>  </ion-item>\n\n              <ion-item>\n\n          \n\n            <ion-label floating>Description</ion-label>\n\n            <ion-textarea formControlName="article" type="text"></ion-textarea>  </ion-item>\n\n            <ion-item>\n\n\n\n              <ion-label>Date</ion-label>\n\n              <ion-datetime formControlName="publishedAt" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Country</ion-label>\n\n              <ion-select formControlName="location">\n\n                <ion-option *ngFor="let key of locations" [value]="key.name">{{key.name}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n \n\n            <ion-item>\n\n              <button ion-button color="secondary" icon-left clear small [disabled]="!createNewsForm.valid" (click)="addNews()">\n\n                Save News\n\n\n\n              </button>\n\n            </ion-item>\n\n        </form>\n\n\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n \n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-news\create-news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_news_news__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]])
], CreateNewsPage);

//# sourceMappingURL=create-news.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_product__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upload_modal_upload_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_images_images__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_multi_image_upload_multi_image_upload__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateProductPage = (function () {
    function CreateProductPage(navCtrl, modalCtrl, imagesProvider, camera, actionSheetCtrl, navParams, alertController, teamService, loadingController, formBuilder, productService, otherService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.imagesProvider = imagesProvider;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.productService = productService;
        this.otherService = otherService;
        this.uploadFinished = false;
        this.locationDisabled = false;
        this.productTimeDisabled = false;
        this.teamDisabled = false;
        this.disabled = true;
        this.product = navParams.get('product');
        this.createProductForm = formBuilder.group({
            id: [''],
            price: [0, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            description: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            sold: [false],
            active: [true],
            publishedAt: [''],
            location: ['',],
            title: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            imgUrl: [],
            user: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            createDate: [],
            modifyDate: []
        });
        this.type = 'product';
        this.getLocations();
        if (this.product != null) {
            this.createProductForm.setValue(this.product);
            this.disabled = false;
            if (this.product.publishedAt != null) {
                this.createProductForm.controls['publishedAt'].setValue(new Date(this.product.publishedAt).toISOString());
            }
        }
        var data = JSON.parse(localStorage.getItem('userData'));
        this.user = data.user;
        this.createProductForm.controls['user'].setValue(this.user);
    }
    CreateProductPage.prototype.getLocations = function () {
        var _this = this;
        this.otherService.getAllCountries().then(function (result) {
            _this.locationResponseData = result;
            console.log(_this.locationResponseData);
            _this.locations = _this.locationResponseData;
        }, function (err) {
            console.log("error", err);
            // Error log
        });
    };
    CreateProductPage.prototype.ionViewWillEnter = function () {
        //calling an API
    };
    CreateProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateProductPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.name === e2.name : e1 === e2;
    };
    CreateProductPage.prototype.addProduct = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.productService.addProduct(this.createProductForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.product = _this.responseData.results.result;
                _this.disabled = false;
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
    CreateProductPage.prototype.getProduct = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.productService.getProductId(this.product.id).then(function (result) {
            _this.responseProductData = result;
            console.log(_this.responseProductData);
            if (_this.responseProductData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.product = _this.responseProductData.results.result;
                _this.disabled = false;
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    CreateProductPage.prototype.delete = function (slide) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.otherService.deleteImage(slide).then(function (result) {
            _this.deleteImageResponse = result;
            console.log(_this.deleteImageResponse);
            if (_this.deleteImageResponse.statusCode == '200') {
                console.log("test 200");
                loading.dismiss();
                _this.getProduct();
            }
            else if (_this.deleteImageResponse.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
            }
            else {
                console.log("test others");
                loading.dismiss();
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    CreateProductPage.prototype.presentActionSheet = function () {
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
    CreateProductPage.prototype.takePicture = function (sourceType) {
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
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__upload_modal_upload_modal__["a" /* UploadModalPage */], { data: imagePath });
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
    CreateProductPage.prototype.reloadImages = function () {
    };
    CreateProductPage.prototype.alertDialog = function (title, message) {
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
    CreateProductPage.prototype.submit = function () {
        var _this = this;
        if (this.multiImageUpload.images.length == 0) {
            this.showToast("Please select at least 1 photo");
            return;
        }
        this.multiImageUpload.id = this.product.id;
        this.multiImageUpload.uploadImages().then(function (images) {
            _this.showToast("Upload successful, view console for details");
            _this.uploadFinished = true;
            console.dir(images);
            _this.getProduct();
        }).catch(function () {
        });
    };
    CreateProductPage.prototype.cancel = function () {
        var _this = this;
        this.confirm('Are you sure to cancel?').then(function (value) {
            if (value) {
                _this.multiImageUpload.abort();
            }
        });
    };
    CreateProductPage.prototype.showToast = function (text) {
    };
    CreateProductPage.prototype.confirm = function (text) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.alertController.create({
                message: text,
                buttons: [
                    {
                        text: "No",
                        role: 'cancel',
                        handler: function () {
                            resolve(false);
                        }
                    },
                    {
                        text: "Yes",
                        handler: function () {
                            resolve(true);
                        }
                    }
                ]
            }).present();
        });
    };
    return CreateProductPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */])
], CreateProductPage.prototype, "multiImageUpload", void 0);
CreateProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-product',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-product\create-product.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Product</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Add Product\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <div>\n\n            <div class="images-wrapper">\n\n              <div class="image-wrapper" *ngFor="let img of product.imgUrl">\n\n                <ion-icon class="remove-image" name="close" (click)="delete(img)"></ion-icon>\n\n                <div class="image" [style.background-image]="img.url.sanitized">\n\n                  <img src="{{img.url}}"/>\n\n                </div>\n\n              </div>\n\n          \n\n            </div>\n\n        </div>\n\n      <ion-list no-lines>\n\n      \n\n          <multi-image-upload [type]="type" [id]="product?.id"></multi-image-upload>\n\n          <button ion-button block (click)="submit()" *ngIf="!multiImageUpload.isUploading && !uploadFinished&&!disabled">\n\n              <ion-icon name="checkmark"></ion-icon>\n\n              Upload\n\n          </button>\n\n          <button ion-button block (click)="cancel()" color="danger" *ngIf="multiImageUpload.isUploading && !uploadFinished&&!disabled">\n\n              <ion-icon name="close"></ion-icon>\n\n              Cancel\n\n          </button>\n\n\n\n \n\n            \n\n\n\n                 <form [formGroup]="createProductForm">\n\n\n\n\n\n          <ion-item>\n\n              <ion-label floating>Title</ion-label>\n\n              <ion-input formControlName="title" type="text"></ion-input>  </ion-item>\n\n              <ion-item>\n\n          \n\n            <ion-label floating>Description</ion-label>\n\n            <ion-textarea formControlName="description" type="text"></ion-textarea>  </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Price</ion-label>\n\n              <ion-input formControlName="price" type="number" step="0.2"></ion-input>\n\n          </ion-item>\n\n             <ion-item>\n\n              <ion-label>Country</ion-label>\n\n              <ion-select formControlName="location">\n\n                <ion-option *ngFor="let key of locations" [value]="key.name">{{key.name}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n \n\n            <ion-item>\n\n              <button ion-button color="secondary" icon-left clear small [disabled]="!createProductForm.valid" (click)="addProduct()">\n\n                Save Product\n\n\n\n              </button>\n\n            </ion-item>\n\n        </form>\n\n\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n \n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-product\create-product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_product_product__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]])
], CreateProductPage);

//# sourceMappingURL=create-product.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_players_players__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stats_stats__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_batting_batting__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chart_js__);
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
    function MyProfilePage(navCtrl, navParams, statsService, battingService, playersService, loadingController, authService, teamService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statsService = statsService;
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
        this.playersService.getPlayerStats().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results.Stats);
                _this.playerStats = _this.responseData.results.Stats;
                _this.battingStats = _this.responseData.results.Stats.battingStatistics;
                _this.bowlingStats = _this.responseData.results.Stats.bowlingStatistics;
            }
            else if (_this.responseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                console.log("error", _this.responseData);
            }
        });
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
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
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
        this.barChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"](this.barCanvas.nativeElement, {
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/'<!--\n\n  Generated template for the MyProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Profile</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-item>\n\n    <h1><b>{{statsArray[0]?.stats.battingStatistics?.player.name}}</b></h1>\n\n  </ion-item>\n\n       <ion-item>\n\n     Batting stats  \n\n    </ion-item>\n\n    <br>\n\n    <ion-scroll scrollX="true" direction="x">\n\n        <ion-item class="scrollcardheader">\n\n            <ion-row text-center text-wrap>\n\n                <ion-col col-1 >M</ion-col>\n\n                <ion-col col-1>I</ion-col>\n\n                <ion-col col-1 >R</ion-col>\n\n                <ion-col col-1 >B</ion-col>\n\n                <ion-col col-2 >Av</ion-col>\n\n                <ion-col col-2 >Sr</ion-col>\n\n               </ion-row>\n\n          </ion-item>\n\n        <br>\n\n          <ion-item  class="scrollcardheader">\n\n            <ion-row text-center text-wrap >\n\n              <ion-col col-1>{{battingStats.matches}}</ion-col>\n\n              <ion-col col-1>{{battingStats.innings}}</ion-col>\n\n              <ion-col col-1 >{{battingStats.run}}</ion-col>\n\n              <ion-col col-1 >{{battingStats.ball}}</ion-col>\n\n              <ion-col col-2 >{{battingStats.average | number : \'1.2-2\'}}</ion-col>\n\n              <ion-col col-2 >{{battingStats.sr | number : \'1.2-2\'}}</ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n          <br>   \n\n          <ion-item>\n\n              Bowling stats  \n\n             </ion-item>  \n\n              \n\n             <br> \n\n                <ion-item class="scrollcardheader">\n\n              <ion-row text-center text-wrap>\n\n                  <ion-col col-1 >M</ion-col>\n\n                  <ion-col col-2 >O</ion-col>\n\n                  <ion-col col-1 >M</ion-col>\n\n                  <ion-col col-1 >R</ion-col>\n\n                  <ion-col col-1 >W</ion-col>\n\n                  <ion-col col-1 >wd</ion-col>\n\n                  <ion-col col-2 >Ec</ion-col>\n\n                  </ion-row>\n\n            </ion-item>\n\n            <br>\n\n            <ion-item  class="scrollcardheader">\n\n              <ion-row text-center text-wrap >\n\n                <ion-col col-1 >{{bowlingStats.matches}}</ion-col>\n\n                <ion-col col-2>{{bowlingStats.overs}}</ion-col>\n\n                <ion-col col-1 >{{bowlingStats.maiden}}</ion-col>\n\n                <ion-col col-1 >{{bowlingStats.run}}</ion-col>\n\n                <ion-col col-1 >{{bowlingStats.wickets}}</ion-col>\n\n                <ion-col col-1 >{{bowlingStats.wide}}</ion-col>\n\n                <ion-col col-2 >{{bowlingStats.economy | number : \'1.2-2\'}}</ion-col>\n\n              </ion-row>\n\n            </ion-item>\n\n          </ion-scroll>\n\n            <br>\n\n            <br>\n\n              <ion-item>\n\n        <ion-label>Pick a Team</ion-label>\n\n        <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n          <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n\n\n  \n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="batting">\n\n        Batting Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling Stats\n\n      </ion-segment-button>\n\n      <ion-segment-button value="fielding">\n\n            Fielding Stats\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n    <div *ngSwitchCase="\'batting\'">\n\n    <ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n  </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n            <ion-scroll scrollX="true" scrollY="true" direction="x">\n\n                <ion-item class="scrollcard">\n\n                    <ion-row text-center text-wrap>\n\n          \n\n                        <ion-col col-3 >Tournament</ion-col>\n\n                        <ion-col col-1 >M</ion-col>\n\n                        <ion-col col-1>I</ion-col>\n\n                        <ion-col col-1 >R</ion-col>\n\n                        <ion-col col-1 >B</ion-col>\n\n                        <ion-col col-2 >Av</ion-col>\n\n                        <ion-col col-2 >Sr</ion-col>\n\n                       </ion-row>\n\n                  </ion-item>\n\n                 \n\n                  <ion-item  *ngFor="let tournament of statsArray" class="scrollcard">\n\n                    <ion-row text-center text-wrap >\n\n                        <ion-col col-3>{{tournament?.name}}</ion-col>\n\n                      <ion-col col-1>{{tournament.stats.battingStatistics?.matches}}</ion-col>\n\n                      <ion-col col-1>{{tournament.stats.battingStatistics?.innings}}</ion-col>\n\n                      <ion-col col-1 >{{tournament.stats.battingStatistics?.run}}</ion-col>\n\n                      <ion-col col-1 >{{tournament.stats.battingStatistics?.ball}}</ion-col>\n\n                      <ion-col col-2 >{{tournament.stats.battingStatistics?.average | number : \'1.2-2\'}}</ion-col>\n\n                      <ion-col col-2 >{{tournament.stats.battingStatistics?.sr | number : \'1.2-2\'}}</ion-col>\n\n                    </ion-row>\n\n                  </ion-item>\n\n                </ion-scroll>\n\n            \n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n        </div>\n\n\n\n    <div *ngSwitchCase="\'bowling\'">\n\n     <ion-card>\n\n  <ion-card-header>\n\n  Bowling\n\n  </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-bowling-table">\n\n            <ion-scroll scrollX="true" scrollY="true" direction="x">\n\n                <ion-item class="scrollcard">\n\n                    <ion-row text-center text-wrap>\n\n                        <ion-col col-3 >Tournament</ion-col>\n\n                        <ion-col col-1 >M</ion-col>\n\n                        <ion-col col-1 >O</ion-col>\n\n                        <ion-col col-1 >M</ion-col>\n\n                        <ion-col col-1 >R</ion-col>\n\n                        <ion-col col-1 >W</ion-col>\n\n                        <ion-col col-1 >wd</ion-col>\n\n                        <ion-col col-2 >Ec</ion-col>\n\n                        </ion-row>\n\n                  </ion-item>\n\n                 \n\n                  <ion-item  *ngFor="let tournament of statsArray" class="scrollcard">\n\n                    <ion-row text-center text-wrap >\n\n                        <ion-col col-3>{{tournament?.name}}</ion-col>\n\n                     \n\n                      <ion-col col-1 >{{tournament.stats.bowlingStatistics?.matches}}</ion-col>\n\n                      <ion-col col-1>{{tournament.stats.bowlingStatistics?.overs}}</ion-col>\n\n                      <ion-col col-1 >{{tournament.stats.bowlingStatistics?.maiden}}</ion-col>\n\n                      <ion-col col-1 >{{tournament.stats.bowlingStatistics?.run}}</ion-col>\n\n                      <ion-col col-1 >{{tournament.stats.bowlingStatistics?.wickets}}</ion-col>\n\n                      <ion-col col-1 >{{tournament.stats.bowlingStatistics?.wide}}</ion-col>\n\n                      <ion-col col-2 >{{tournament.stats.bowlingStatistics?.economy | number : \'1.2-2\'}}</ion-col>\n\n                    </ion-row>\n\n                  </ion-item>\n\n                </ion-scroll>\n\n          </div>\n\n           </ion-card-content>\n\n			  </ion-card>\n\n    </div>\n\n\n\n      <div *ngSwitchCase="\'fielding\'">\n\n         <ion-card>\n\n  <ion-card-header>\n\n  Fielding\n\n  </ion-card-header>\n\n <ion-card-content>\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Tournament</p>\n\n                    <p>M</p>\n\n                    <p>Ct</p>\n\n                    <p>R/O</p>\n\n                    <p>St</p>\n\n                </li>\n\n                <li *ngFor="let tournament of statsArray">\n\n                    <p class="cric-player-name">{{tournament?.name}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.matches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.catches}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.runOuts}}</p>\n\n                    <p>{{tournament.stats.bowlingStatistics?.stumpings}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n            </ion-card-content>\n\n			  </ion-card>\n\n      </div>\n\n\n\n    </div>\n\n<ion-card>\n\n   <ion-card-header>\n\n     Runs Scored\n\n   </ion-card-header>\n\n   <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n   </ion-card-content>\n\n </ion-card>\n\n         \n\n            <ion-card>\n\n   <ion-card-header>\n\n     Dismissal Types\n\n   </ion-card-header>\n\n   <ion-card-content>\n\n     <canvas #doughnutCanvas></canvas>\n\n   </ion-card-content>\n\n </ion-card>\n\n    \n\n     \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\my-profile\my-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_6__providers_batting_batting__["a" /* BattingService */], __WEBPACK_IMPORTED_MODULE_2__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(49);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-match-details',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n      {{match?.team?.teamname}} Vs\n\n      {{match?.opponent}}\n\n      <p>{{match?.tournament?.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{match?.matchTime | date:\'fullDate\'}}, {{match?.matchTime | date:\'shortTime\'}}</p>\n\n      <p>{{match?.location?.name}}, {{match?.location?.address}}</p>\n\n      <p>Toss won by <span *ngIf="match.tossWon">{{match?.team?.teamname}}</span><span *ngIf="!match.tossWon">{{match?.opponent}}</span>\n\n      <p>Result : {{match?.result}}, {{match?.remarks}}</p>\n\n      <p>{{match?.team?.teamname}}: {{match?.score}}/{{match?.wickets}}</p>\n\n      <p>{{match?.opponent}}:{{match?.oppositionScore}}/{{match?.oppositionWickets}}</p>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Summary\n\n      </ion-segment-button>\n\n      <ion-segment-button value="batting">\n\n          Batting\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n      <ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Batting</h4>\n\n          <ul>\n\n            <li class="header">\n\n                <p class="cric-player-name">Name</p>\n\n                <p>R</p>\n\n                <p>B</p>\n\n                <p>4\'s</p>\n\n                <p>6\'s</p>\n\n                <p class="cric-values-decimals">SR</p>\n\n            </li>\n\n            <li *ngFor="let stat of (batting ? batting.slice(0,3) : [])">\n\n                <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                <p>{{stat?.run}}</p>\n\n                <p>{{stat?.ball}}</p>\n\n                <p>{{stat?.four}}</p>\n\n                <p>{{stat?.six}}</p>\n\n                <p class="cric-values-decimals">{{stat?.sr | number : \'1.2-2\'}}</p>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n          \n\n        <div class="cric-stat-bowling-table">\n\n            <h4>Bowling</h4>\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>O</p>\n\n                  <p>R</p>\n\n                  <p>W</p>\n\n                  <p>Wd</p>\n\n                  <p class="cric-values-decimals">EC</p>\n\n              </li>\n\n              <li *ngFor="let stat of (bowling ? bowling.slice(0,3) : [])">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.overs}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.wickets}}</p>\n\n                  <p>{{stat?.wide}}</p>\n\n                  <p class="cric-values-decimals">{{stat?.economy | number : \'1.2-2\'}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n          </ion-card-content>\n\n			  </ion-card>\n\n			\n\n      </div>\n\n    <div *ngSwitchCase="\'batting\'">\n\n    	<ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p>4\'s</p>\n\n                  <p>6\'s</p>\n\n              </li>\n\n              <li *ngFor="let stat of batting">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.ball}}</p>\n\n                  <p>{{stat?.four}}</p>\n\n                  <p>{{stat?.six}}</p>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n          	  </ion-card-content>\n\n			  </ion-card>\n\n      </div>\n\n      <div *ngSwitchCase="\'bowling\'">\n\n        	<ion-card>\n\n  <ion-card-header>\n\n  Bowling\n\n </ion-card-header>\n\n <ion-card-content>\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Name</p>\n\n                    <p>O</p>\n\n                    <p>R</p>\n\n                    <p>W</p>\n\n                    <p>Wd</p>\n\n                    <p>EC</p>\n\n                </li>\n\n                <li *ngFor="let stat of bowling">\n\n                    <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                    <p>{{stat?.overs}}</p>\n\n                    <p>{{stat?.run}}</p>\n\n                    <p>{{stat?.wickets}}</p>\n\n                    <p>{{stat?.wide}}</p>\n\n                    <p>{{stat?.economy | number : \'1.2-2\'}}</p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n              </ion-card-content>\n\n			  </ion-card>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-match-details\previous-match-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], PreviousMatchDetailsPage);

//# sourceMappingURL=previous-match-details.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__previous_match_details_previous_match_details__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_team_match_team__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__ = __webpack_require__(12);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-matches',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Completed Matches</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Search Matches\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n        <form [formGroup]="searchMatchesForm">\n\n     \n\n            <ion-item>\n\n                <ion-label>Team</ion-label>\n\n                <ion-select formControlName="teamId"  >\n\n                  <ion-option *ngFor="let key of teams" [value]="key.id">{{key.teamname}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label>Tournament</ion-label>\n\n                  <ion-select formControlName="tournamentId"  >\n\n                    <ion-option *ngFor="let key of tournaments" [value]="key.id">{{key.name}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n     <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n                Filter\n\n                \n\n              </button>\n\n     \n\n        </form>\n\n      \n\n    \n\n    </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngFor="let match of matches">\n\n        <ion-card-header>\n\n          {{match.team?.teamname}} Vs\n\n          {{match?.opponent}}\n\n          <p>{{match.tournament?.name}}</p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <p>{{match.matchTime | momentjs}}</p>\n\n          <p>{{match.location?.name}}, {{match.location?.address}}</p>\n\n          <p>Toss won by <span *ngIf="match.tossWon">{{match.team.teamname}}</span><span *ngIf="!match.tossWon">{{match.opponent}}</span>\n\n          <p>Result : {{match.result}}, {{match.remarks}}</p>\n\n          <p>{{match.team.teamname}}: {{match.score}}/{{match.wickets}}</p>\n\n          <p>{{match.opponent}}:{{match.oppositionScore}}/{{match.oppositionWickets}}</p>\n\n        </ion-card-content>\n\n		 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n        <button ion-button icon-left clear small (click)="goToMatchDetails(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Details</div>\n\n          </button>\n\n      </ion-card>\n\n    </ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-matches\previous-matches.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_8__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */]])
], PreviousMatchesPage);

//# sourceMappingURL=previous-matches.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatchTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__ = __webpack_require__(12);
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
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.matchService.sendTeamList(this.matchId).then(function (result) {
            loading.dismiss();
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
            loading.dismiss();
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-match-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\add-match-team\add-match-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Team Add</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n    <ion-card> \n\n        <ion-card-content>\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Team List\n\n      </ion-segment-button>\n\n     \n\n    </ion-segment>\n\n    \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n          <h4>Team</h4>\n\n          <ol >\n\n		  <li *ngFor="let stat of batting">\n\n		  <ion-list>\n\n  <ion-item-sliding>\n\n    <ion-item>\n\n      {{stat?.name}}\n\n    </ion-item>\n\n<ion-item-options side="right">\n\n  <button ion-button (click)="delete(stat)">\n\n    <ion-icon name="delete"></ion-icon>\n\n    Delete\n\n  </button>\n\n</ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n\n              \n\n            </li>\n\n          </ol>\n\n\n\n        </div>\n\n       </div>\n\n  </div>\n\n      <form [formGroup]="addTeamForm">\n\n  <ion-item>\n\n  <ion-label>Player</ion-label>\n\n  <ion-select formControlName="player">\n\n    <ion-option *ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n <button ion-button color="secondary" icon-left clear small [disabled]="!addTeamForm.valid" (click)="addPlayer()">\n\n            Add Player\n\n            \n\n          </button>\n\n    </form>\n\n \n\n		  \n\n		    <button ion-button color="secondary" icon-left clear small (click)="sendTeam()">\n\n           Send Team List\n\n            \n\n          </button>\n\n        </ion-card-content>\n\n        </ion-card> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\add-match-team\add-match-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], AddMatchTeamPage);

//# sourceMappingURL=add-match-team.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchAvailabilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(49);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match-availability',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\match-availability\match-availability.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Availability Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="available">\n\n        Availability\n\n      </ion-segment-button>\n\n          <ion-segment-button value="unAvailable">\n\n         UnAvailable\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="tentative">\n\n        Tentative\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="Unknown">\n\n         Unknown\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'available\'">\n\n        <div class="cric-stat-available-table">\n\n         \n\n          <ol type="1">\n\n          \n\n            <li *ngFor="let stat of available">\n\n			 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" >Not Provided</ion-option>\n\n        <ion-option value="1" selected>IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'unAvailable\'">\n\n		<div class="cric-stat-unAvailable-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unavailable">\n\n               <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1" >IN</ion-option>\n\n        <ion-option value="2" selected>OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'tentative\'">\n\n		<div class="cric-stat-tentative-table">\n\n         \n\n          <ol type="1">\n\n           \n\n            <li *ngFor="let stat of tentative">\n\n                 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3" selected>Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'Unknown\'">\n\n			<div class="cric-stat-unknown-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unknown">\n\n                <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" selected>Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card> \n\n            </li>\n\n          </ol>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\match-availability\match-availability.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], MatchAvailabilityPage);

//# sourceMappingURL=match-availability.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_batting_batting__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(12);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'batting',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\batting\batting.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n<ion-card>\n\n  <ion-card-header>\n\n </ion-card-header>\n\n \n\n   <ion-card-content>\n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n      <form [formGroup]="createBattingForm">\n\n      <ion-item>\n\n       <ion-label>Player</ion-label>\n\n      	  <ion-select formControlName="player" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n     </ion-item>\n\n	   <ion-item>\n\n            <ion-label floating>Run</ion-label>\n\n            <ion-input formControlName="run" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Ball</ion-label>\n\n            <ion-input formControlName="ball" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>Four</ion-label>\n\n            <ion-input formControlName="four" type="number" ></ion-input>\n\n          </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Six</ion-label>\n\n            <ion-input formControlName="six" type="number"></ion-input>\n\n			  </ion-item>\n\n\n\n\n\n	  <ion-item>\n\n    <ion-label>Did Not Bat</ion-label>\n\n    <ion-checkbox formControlName="dnb"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Out</ion-label>\n\n    <ion-checkbox formControlName="out"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>Dismissal</ion-label>\n\n      <ion-select formControlName="dismisal"  [compareWith]="compareFn">\n\n        <ion-option *ngFor="let key of dismissals" [value]="key">{{key.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Batting Down</ion-label>\n\n    <ion-input formControlName="battingDown" type="number"></ion-input>\n\n  </ion-item>\n\n    	 <button ion-button color="secondary" icon-left clear small [disabled]="!createBattingForm.valid" (click)="saveBatting()">\n\n            Submit\n\n            \n\n          </button>   \n\n    </form>\n\n\n\n    \n\n \n\n      </div>\n\n  </div>\n\n   </div>\n\n     </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\batting\batting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_batting_batting__["a" /* BattingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */]])
], BattingPage);

//# sourceMappingURL=batting.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BowlingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bowling_bowling__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__ = __webpack_require__(12);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'bowling',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\bowling\bowling.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> <ion-navbar color="primary"> <ion-title>Match\n\nDetails</ion-title> </ion-navbar> </ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground"> <ion-card>\n\n<ion-card-header> </ion-card-header> <ion-card-content>\n\n<div [ngSwitch]="tabsvalues">\n\n	<div *ngSwitchCase="\'summary\'">\n\n		<div class="cric-stat-bowling-table">\n\n			<form [formGroup]="createBowlingForm">\n\n				<ion-item> <ion-label>Player</ion-label> <ion-select\n\n					formControlName="player" [compareWith]="compareFn" [disabled]="true"> <ion-option\n\n					*ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n\n				</ion-select> </ion-item>\n\n			\n\n				<ion-item> <ion-label floating>Ball</ion-label> <ion-input\n\n					formControlName="ball" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Maiden</ion-label> <ion-input\n\n					formControlName="maiden" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Run</ion-label> <ion-input\n\n					formControlName="run" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Wickets</ion-label> <ion-input\n\n					formControlName="wickets" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Wide</ion-label> <ion-input\n\n					formControlName="wide" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>No Ball</ion-label> <ion-input\n\n					formControlName="noBall" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Catches</ion-label> <ion-input\n\n					formControlName="catches" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Run Out</ion-label> <ion-input\n\n					formControlName="runOuts" type="number"></ion-input> </ion-item>\n\n				<ion-item> <ion-label floating>Stumping</ion-label> <ion-input\n\n					formControlName="stumpings" type="number"></ion-input> </ion-item>\n\n			\n\n				<ion-item> <ion-label>Did Not Ball</ion-label> <ion-checkbox\n\n					formControlName="dnb"></ion-checkbox> </ion-item>\n\n				<button ion-button color="secondary" icon-left clear small [disabled]="!createBowlingForm.valid"\n\n				(click)="saveBowling()">Submit</button>\n\n			</form>\n\n		\n\n\n\n\n\n		</div>\n\n	</div>\n\n</div>\n\n</ion-card-content> </ion-card> </ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\bowling\bowling.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_bowling_bowling__["a" /* BowlingService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_5__providers_teams_teams__["a" /* TeamService */]])
], BowlingPage);

//# sourceMappingURL=bowling.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousMatchDetailsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__batting_batting__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bowling_bowling__ = __webpack_require__(205);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-match-details-edit',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\previous-match-details-edit\previous-match-details-edit.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Match Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="summary">\n\n        Summary\n\n      </ion-segment-button>\n\n      <ion-segment-button value="batting">\n\n          Batting\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bowling">\n\n          Bowling\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'summary\'">\n\n        <div class="cric-stat-batting-table">\n\n      <form [formGroup]="createMatchForm">\n\n	   <ion-item>\n\n            <ion-label floating>Opponent</ion-label>\n\n            <ion-input formControlName="opponent" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Remark</ion-label>\n\n            <ion-input formControlName="remarks" type="text"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime formControlName="matchTime" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label>Location</ion-label>\n\n  <ion-select formControlName="location" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Tournament</ion-label>\n\n  <ion-select formControlName="tournament" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of tournaments" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n	  <ion-item>\n\n    <ion-label>Toss Won</ion-label>\n\n    <ion-checkbox formControlName="tossWon"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Played</ion-label>\n\n    <ion-checkbox formControlName="played"></ion-checkbox>\n\n  </ion-item>\n\n    <ion-item>\n\n    <ion-label>Batting First</ion-label>\n\n    <ion-checkbox formControlName="battingFirst"></ion-checkbox>\n\n  </ion-item>\n\n         <ion-item>\n\n            <ion-label floating>Opponent Score</ion-label>\n\n            <ion-input formControlName="oppositionScore" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Opponent Wickets</ion-label>\n\n            <ion-input formControlName="oppositionWickets" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Opponent Overs</ion-label>\n\n            <ion-input formControlName="oppositionOvers" type="number" step="0.1"></ion-input>\n\n			  </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Score</ion-label>\n\n            <ion-input formControlName="score" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Wickets</ion-label>\n\n            <ion-input formControlName="wickets" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Overs</ion-label>\n\n            <ion-input formControlName="overs" type="number"></ion-input>\n\n			  </ion-item>\n\n <ion-item>\n\n            <ion-label floating>point</ion-label>\n\n            <ion-input formControlName="points" type="number"></ion-input>\n\n			\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Result</ion-label>\n\n          <ion-select formControlName="result" >\n\n     <ion-option value="Abandoned">Abandoned</ion-option>\n\n      <ion-option value="Lost">Lost</ion-option>\n\n           <ion-option value="Tie">Tie</ion-option>\n\n      <ion-option value="Won">Won</ion-option>\n\n  </ion-select>\n\n			  </ion-item>\n\n			       <ion-item>\n\n	 <button ion-button color="secondary" icon-left clear small [disabled]="!createMatchForm.valid" (click)="editMatch()">\n\n            Submit\n\n            \n\n          </button></ion-item>\n\n    </form>\n\n\n\n      </div>\n\n	  </div>\n\n    <div *ngSwitchCase="\'batting\'">\n\n	<ion-card>\n\n  <ion-card-header>\n\n  Batting\n\n </ion-card-header>\n\n <ion-card-content>\n\n        <div class="cric-stat-batting-table">\n\n            <ul>\n\n              <li class="header">\n\n                  <p class="cric-player-name">Name</p>\n\n                  <p>R</p>\n\n                  <p>B</p>\n\n                  <p>4\'s</p>\n\n                  <p>6\'s</p>\n\n                  <p>sr</p>\n\n				  <p>Edit</p>\n\n              </li>\n\n              <li *ngFor="let stat of batting">\n\n                  <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                  <p>{{stat?.run}}</p>\n\n                  <p>{{stat?.ball}}</p>\n\n                  <p>{{stat?.four}}</p>\n\n                  <p>{{stat?.six}}</p>\n\n                  <p>{{stat?.sr| number : \'1.2-2\'}}</p>\n\n				   <p> <button ion-button icon-left clear small (click)="editBatting(stat.id)"> <ion-icon name="arrow-dropright"></ion-icon></button></p>\n\n              </li>\n\n            </ul>\n\n		\n\n		\n\n          </div>\n\n		  	  </ion-card-content>\n\n			  </ion-card>\n\n			  \n\n      </div>\n\n      <div *ngSwitchCase="\'bowling\'">\n\n      <ion-card>\n\n  <ion-card-header>\n\n  Bowling\n\n </ion-card-header>\n\n <ion-card-content>\n\n          <div class="cric-stat-bowling-table">\n\n              <ul>\n\n                <li class="header">\n\n                    <p class="cric-player-name">Name</p>\n\n                    <p>O</p>\n\n                    <p>M</p>\n\n                    <p>R</p>\n\n                    <p>W</p>\n\n                    \n\n                    <p>EC</p>\n\n                    <p>Edit</p>\n\n                </li>\n\n                <li *ngFor="let stat of bowling">\n\n                    <p class="cric-player-name">{{stat?.player?.name}}</p>\n\n                    <p>{{stat?.overs}}</p>\n\n                       <p>{{stat?.maiden}}</p>\n\n                    <p>{{stat?.run}}</p>\n\n                    <p>{{stat?.wickets}}</p>\n\n                    \n\n                    <p>{{stat?.economy | number : \'1.2-2\'}}</p>\n\n                    <p> <button ion-button icon-left clear small (click)="editBowling(stat.id)"><ion-icon name="arrow-dropright"></ion-icon></button></p>\n\n                </li>\n\n              </ul>\n\n            </div>\n\n             </ion-card-content>\n\n			  </ion-card>\n\n			  \n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\previous-match-details-edit\previous-match-details-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_other_other__["a" /* OtherService */]])
], PreviousMatchDetailsEditPage);

//# sourceMappingURL=previous-match-details-edit.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-team',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-team\create-team.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Create Team</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Team\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createTeamForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Team Name</ion-label>\n\n            <ion-input formControlName="teamname" type="text"></ion-input>\n\n        </ion-item>\n\n <button ion-button color="secondary" icon-left clear small [disabled]="!createTeamForm.valid" (click)="addTeam()">\n\n            Create Team\n\n            \n\n          </button>\n\n \n\n    </form>\n\n  \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-team\create-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CreateTeamPage);

//# sourceMappingURL=create-team.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'reset',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Reset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reset Password\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="text" [(ngModel)]="userData.password"></ion-input>\n\n        </ion-item>\n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="reset()">Reset Password</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\reset\reset.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], ResetPage);

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(72);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'logout',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n       <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Log Out</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Log Out\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n      \n\n      \n\n\n\n      \n\n\n\n        <button ion-button full color="success" (click)="logout()">Log Out</button>\n\n        \n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\logout\logout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], LogoutPage);

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-player',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-player\create-player.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Add Player</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Add Player\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createPlayerForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>User Email</ion-label>\n\n            <ion-input formControlName="username" type="text"></ion-input>\n\n        </ion-item>\n\n \n\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createPlayerForm.valid" (click)="addPlayer()">\n\n            Add Player\n\n            \n\n          </button>\n\n    </form>\n\n \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-player\create-player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CreatePlayerPage);

//# sourceMappingURL=create-player.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTournamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(19);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-tournament',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-tournament\create-tournament.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Create Tournament</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Tournament\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createTournamentForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n         <button ion-button color="secondary" icon-left clear small [disabled]="!createTournamentForm.valid" (click)="createTournament()">\n\n            Create Tournament\n\n            \n\n          </button>\n\n    </form>\n\n \n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-tournament\create-tournament.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateTournamentPage);

//# sourceMappingURL=create-tournament.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_other_other__ = __webpack_require__(19);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-location',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-location\create-location.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Create Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Create Location\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createLocationForm">\n\n \n\n        <ion-item>\n\n            <ion-label floating>Name</ion-label>\n\n            <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n      <ion-item>\n\n            <ion-label floating>Address</ion-label>\n\n            <ion-input formControlName="address" type="text"></ion-input>\n\n        </ion-item>\n\n       <ion-item>\n\n            <ion-label floating>Latitude</ion-label>\n\n            <ion-input formControlName="lat" type="number" step="0.01"></ion-input>\n\n        </ion-item>\n\n		      <ion-item>\n\n            <ion-label floating>Longitude</ion-label>\n\n            <ion-input formControlName="lng" type="number" step="0.01"></ion-input>\n\n        </ion-item>\n\n          <button ion-button color="secondary" icon-left clear small [disabled]="!createLocationForm.valid" (click)="createLocation()">\n\n            Create Location\n\n            \n\n          </button>\n\n    </form>\n\n\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-location\create-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_other_other__["a" /* OtherService */]])
], CreateLocationPage);

//# sourceMappingURL=create-location.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_teams_my_teams__ = __webpack_require__(214);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'modeChange',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\modeChange\modeChange.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Change Mode</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card (click)="admin()">\n\n    <ion-card-header>\n\n     Admin Mode\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n     Change Mode to Admin\n\n    </ion-card-content>\n\n  </ion-card>\n\n    <ion-card (click)="normal()">\n\n    <ion-card-header>\n\n     Normal Mode\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n       Change Mode to Normal\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\modeChange\modeChange.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
], ModeChangePage);

//# sourceMappingURL=modeChange.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_matches_team_matches__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_team_create_team__ = __webpack_require__(207);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], MyTeamsPage);

//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeamExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__ = __webpack_require__(83);
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
            expenseDate: [''],
            invoice: [''],
            paymentDate: [''],
            paymentMode: ['']
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
        else {
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-team-expense',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\add-team-expense\add-team-expense.html"*/'<!--\n  Generated template for the PreviousMatchDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add Team Expense</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appBackground" >\n <ion-card>\n    <ion-card-header>\n      Add Expense\n    </ion-card-header>\n    <ion-card-content>\n  <ion-list no-lines>\n \n    <form [formGroup]="createExpenseForm">\n \n        <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input formControlName="name" type="text"></ion-input>\n			\n        </ion-item>\n       <ion-item>\n            <ion-label floating>Description</ion-label>\n            <ion-input formControlName="description" type="text"></ion-input>\n			\n        </ion-item>\n		      <ion-item>\n            <ion-label floating>Amount</ion-label>\n            <ion-input formControlName="amount" type="number"></ion-input>\n			  </ion-item>\n        <ion-item>\n          <ion-label>Expense Date</ion-label>\n          <ion-datetime formControlName="expenseDate" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label>Payment Date</ion-label>\n            <ion-datetime formControlName="paymentDate" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n          </ion-item>\n        <ion-item>\n\n            <ion-item>\n                <ion-select formControlName="status">\n                    <ion-option value=1>PAID</ion-option>\n                  <ion-option value=0>PENDING</ion-option>\n                </ion-select>\n             \n              </ion-item>\n</ion-item>\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createExpenseForm.valid" (click)="addExpense()">\n            Save\n            \n          </button>\n    </form>\n\n</ion-list>\n</ion-card-content>\n </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\add-team-expense\add-team-expense.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], AddTeamExpensePage);

//# sourceMappingURL=add-team-expense.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__ = __webpack_require__(12);
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
            expenseDate: [''],
            paymentDate: ['']
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-player-expense',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\add-player-expense\add-player-expense.html"*/'<!--\n  Generated template for the PreviousMatchDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Player Expense</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="appBackground" >\n\n    <ion-segment [(ngModel)]="tabsvalues">\n        <ion-segment-button value="summary">\n          Player Payment\n        </ion-segment-button>\n       \n      </ion-segment>\n      \n    <div [ngSwitch]="tabsvalues"> \n        <div *ngSwitchCase="\'summary\'">\n          <div class="cric-stat-expense-table">\n            <h4>Payment</h4>\n            <ol >\n        <li *ngFor="let stat of playerExpenses">\n        <ion-list>\n            <ion-card> \n                <ion-card-content>\n\n        <p>{{stat?.player.name}}</p>\n\n         <p>${{stat?.amount}}</p>\n         <p>Expense Date:{{stat?.expenseDate| momentjs}}</p>\n         \n           <p>Comment:{{stat?.cmnt}}</p>\n\n\n           <p>Player Remark:{{stat?.remark}}</p>\n           PaymentStatus:\n           <p *ngIf= "stat.paid" >PAID</p>\n           <p *ngIf= "!stat.paid" >PENDING</p>\n           <p *ngIf= "stat.paid">Payment Type:{{stat?.paymentType}}</p>\n           <p *ngIf= "stat.paid">PaymentDate:{{stat?.paymentDate| momentjs}}</p>\n        <button ion-button color="secondary" icon-left clear small (click)="editPlayerExpense(stat)">\n            Edit Player Expense\n            \n          </button>\n\n \n    <button ion-button color="secondary" icon-left clear small (click)="delete(stat)">\n      <ion-icon name="delete"></ion-icon>\n      Delete\n    </button>\n  </ion-card-content>\n</ion-card>  \n   \n  </ion-list>\n                \n              </li>\n            </ol>\n  \n          </div>\n         </div>\n         <ion-card> \n            <ion-card-content>\n                 <button ion-button color="secondary" icon-left clear small (click)="addNew()">\n              Save        \n             </button>\n          </ion-card-content>\n        </ion-card>  \n    </div>\n\n    <ion-card> \n        <ion-card-content>\n        <form [formGroup]="addExpenseForm">\n    <ion-item>\n    <ion-label>Player</ion-label>\n    <ion-select formControlName="player" [compareWith]="compareFn">\n      <ion-option *ngFor="let key of players" [value]="key">{{key.name}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>amount</ion-label>\n      <ion-input formControlName="amount" type="number"></ion-input>\n\n  </ion-item>\n  <ion-item>\n      <ion-checkbox formControlName="paid"></ion-checkbox>\n    \n  \n   </ion-item>\n   <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime formControlName="expenseDate" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-label>Payment Date</ion-label>\n        <ion-datetime formControlName="paymentDate" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n      </ion-item>\n <ion-item>\n     <ion-select formControlName="paymentType">\n         <ion-option value="CASH">CASH</ion-option>\n       <ion-option value="FREE">FREE</ion-option>\n     <ion-option value="PREPAID">PREPAID</ion-option>\n       <ion-option value="TRANSFER">TRANSFER</ion-option>\n     </ion-select>\n  \n   </ion-item>\n  <ion-item>\n      <ion-label floating>cmt</ion-label>\n      <ion-input formControlName="cmnt" type="text"></ion-input>\n\n  </ion-item>\n   <button ion-button color="secondary" icon-left clear small [disabled]="!addExpenseForm.valid" (click)="addPlayerExpense()">\n              Add Player Expense\n              \n            </button>\n      </form>\n    </ion-card-content>\n  </ion-card>   \n        \n\n\n  </ion-content>\n  '/*ion-inline-end:"D:\ionicapp\crickify\src\pages\add-player-expense\add-player-expense.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], AddPlayerExpensePage);

//# sourceMappingURL=add-player-expense.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPlayerExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__ = __webpack_require__(12);
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
 * Generated class for the AddPlayerExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPlayerExpensePage = (function () {
    function ViewPlayerExpensePage(navCtrl, navParams, financeService, alertController, loadingController, teamService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.financeService = financeService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.teamService = teamService;
        this.players = [];
        this.tabsvalues = "summary";
        this.searchExpenseForm = formBuilder.group({
            playerid: [],
            paid: [],
            teamId: [],
            startDate: [],
            endDate: []
        });
        this.team = JSON.parse(localStorage.getItem('team'));
        this.getPlayers();
        console.log("passed data", navParams.get('expense'));
        this.searchExpenseForm.controls['teamId'].setValue(this.team.id);
        this.getData();
    }
    ViewPlayerExpensePage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    ViewPlayerExpensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    ViewPlayerExpensePage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.financeService.getTeamPlayerExpenses(this.searchExpenseForm.value).then(function (result) {
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
    ViewPlayerExpensePage.prototype.delete = function (playerExpense) {
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
                _this.getData();
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
    ViewPlayerExpensePage.prototype.getPlayers = function () {
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
    ViewPlayerExpensePage.prototype.alertDialog = function (title, message) {
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
    ViewPlayerExpensePage.prototype.editPlayerExpense = function (playerExpense) {
    };
    return ViewPlayerExpensePage;
}());
ViewPlayerExpensePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-player-expenses',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\view-player-expenses\view-player-expenses.html"*/'<!--\n  Generated template for the PreviousMatchDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Player payments</ion-title>\n      </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="appBackground" >\n      <ion-card> \n          <ion-card-content>\n          <form [formGroup]="searchExpenseForm">\n      <ion-item>\n      <ion-label>Player</ion-label>\n      <ion-select formControlName="playerid">\n        <ion-option *ngFor="let key of players" [value]="key.id">{{key.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label>Paid:</ion-label>\n        <ion-checkbox formControlName="paid"></ion-checkbox>     \n    \n     </ion-item>\n     <ion-item>\n        <ion-label>startDate</ion-label>\n        <ion-datetime formControlName="startDate" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n      </ion-item>\n      <ion-item>\n          <ion-label>endDate</ion-label>\n          <ion-datetime formControlName="endDate" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n        </ion-item>\n    \n     <button ion-button color="secondary" icon-left clear small [disabled]="!searchExpenseForm.valid" (click)="getData()">\n                search\n                \n              </button>\n        </form>\n      </ion-card-content>\n    </ion-card>   \n    <ion-segment [(ngModel)]="tabsvalues">\n        <ion-segment-button value="summary">\n          Player Payment\n        </ion-segment-button>\n       \n      </ion-segment>\n      \n    <div [ngSwitch]="tabsvalues"> \n        <div *ngSwitchCase="\'summary\'">\n          <div class="cric-stat-expense-table">\n            <h4>Payment</h4>\n            <ol >\n        <li *ngFor="let stat of playerExpenses">\n        <ion-list>\n            <ion-card> \n                <ion-card-content>\n\n        <p>{{stat?.player.name}}</p>\n\n         <p>${{stat?.amount}}</p>\n         <p>Expense Date:{{stat?.expenseDate| momentjs}}</p>\n           <p>Comment:{{stat?.cmnt}}</p>\n\n\n           <p>Player Remark:{{stat?.remark}}</p>\n           PaymentStatus:\n           <p *ngIf= "stat.paid" >PAID</p>\n           <p *ngIf= "!stat.paid" >PENDING</p>\n           <p *ngIf= "stat.paid">Payment Type:{{stat?.paymentType}}</p>\n           <p *ngIf= "stat.paid">PaymentDate:{{stat?.paymentDate| momentjs}}</p>\n        <button ion-button color="secondary" icon-left clear small (click)="editPlayerExpense(stat)">\n            Edit Player Expense\n            \n          </button>\n\n \n    <button ion-button color="secondary" icon-left clear small (click)="delete(stat)">\n      <ion-icon name="delete"></ion-icon>\n      Delete\n    </button>\n  </ion-card-content>\n</ion-card>  \n   \n  </ion-list>\n                \n              </li>\n            </ol>\n  \n          </div>\n         </div>\n         <ion-card> \n            <ion-card-content>\n                 <button ion-button color="secondary" icon-left clear small (click)="addNew()">\n              Add New        \n             </button>\n          </ion-card-content>\n        </ion-card>  \n    </div>\n\n   \n        \n\n\n  </ion-content>\n  '/*ion-inline-end:"D:\ionicapp\crickify\src\pages\view-player-expenses\view-player-expenses.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], ViewPlayerExpensePage);

//# sourceMappingURL=view-player-expenses.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePracticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_practice_practice__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
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
var CreatePracticePage = (function () {
    function CreatePracticePage(navCtrl, navParams, alertController, teamService, loadingController, formBuilder, practiceService, otherService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.practiceService = practiceService;
        this.otherService = otherService;
        this.createPracticeForm = formBuilder.group({
            id: [],
            description: [],
            practiceTime: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            location: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            team: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            createDate: [],
            modifyDate: []
        });
        this.getLocations();
        this.team = JSON.parse(localStorage.getItem('team'));
        this.practice = navParams.get('practice');
        if (this.practice != null) {
            this.createPracticeForm.setValue(this.practice);
            this.createPracticeForm.controls['practiceTime'].setValue(new Date(this.practice.practiceTime).toISOString());
        }
        this.createPracticeForm.controls['team'].setValue(this.team);
    }
    CreatePracticePage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    CreatePracticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreatePracticePage.prototype.getLocations = function () {
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
    CreatePracticePage.prototype.addPractice = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.practiceService.addPractice(this.createPracticeForm.value).then(function (result) {
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
    CreatePracticePage.prototype.alertDialog = function (title, message) {
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
    return CreatePracticePage;
}());
CreatePracticePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-practice',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-practice\create-practice.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Add Practice</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n <ion-card>\n\n    <ion-card-header>\n\n      Practice\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n  <ion-list no-lines>\n\n \n\n    <form [formGroup]="createPracticeForm">\n\n \n\n       \n\n       <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>\n\n			\n\n        </ion-item>\n\n		\n\n <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime formControlName="practiceTime" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Location</ion-label>\n\n  <ion-select formControlName="location" [compareWith]="compareFn">\n\n    <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n\n\n  <button ion-button color="secondary" icon-left clear small [disabled]="!createPracticeForm.valid" (click)="addPractice()">\n\n            Save\n\n            \n\n          </button>\n\n    </form>\n\n\n\n</ion-list>\n\n</ion-card-content>\n\n </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-practice\create-practice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_practice_practice__["a" /* PracticeService */], __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]])
], CreatePracticePage);

//# sourceMappingURL=create-practice.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeAvailabilityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_practice_practice__ = __webpack_require__(113);
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
var PracticeAvailabilityPage = (function () {
    function PracticeAvailabilityPage(navCtrl, navParams, practiceService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.practiceService = practiceService;
        this.loadingController = loadingController;
        this.avaailability = [];
        this.available = [];
        this.unavailable = [];
        this.tentative = [];
        this.unknown = [];
        this.tabsvalues = "available";
        console.log("passed data", navParams.get('practiceId'));
        this.practiceId = navParams.get('practiceId');
        this.getData(this.practiceId);
    }
    PracticeAvailabilityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchDetailsPage');
    };
    PracticeAvailabilityPage.prototype.getData = function (practiceId) {
        var _this = this;
        this.available = [];
        this.unavailable = [];
        this.tentative = [];
        this.unknown = [];
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.practiceService.getPracticeAvailability(practiceId).then(function (result) {
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
    PracticeAvailabilityPage.prototype.availabilitySelected = function (event, stat) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.practiceService.updateAvailability(this.practiceId, stat.player, stat.status).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.responseData);
                _this.getData(_this.practiceId);
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
    return PracticeAvailabilityPage;
}());
PracticeAvailabilityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-practice-availability',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\practice-availability\practice-availability.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Practice Availability Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="available">\n\n        Availability\n\n      </ion-segment-button>\n\n          <ion-segment-button value="unAvailable">\n\n         UnAvailable\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="tentative">\n\n        Tentative\n\n      </ion-segment-button>\n\n	         <ion-segment-button value="Unknown">\n\n         Unknown\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'available\'">\n\n        <div class="cric-stat-available-table">\n\n         \n\n          <ol type="1">\n\n          \n\n            <li *ngFor="let stat of available">\n\n			 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" >Not Provided</ion-option>\n\n        <ion-option value="1" selected>IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'unAvailable\'">\n\n		<div class="cric-stat-unAvailable-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unavailable">\n\n               <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1" >IN</ion-option>\n\n        <ion-option value="2" selected>OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'tentative\'">\n\n		<div class="cric-stat-tentative-table">\n\n         \n\n          <ol type="1">\n\n           \n\n            <li *ngFor="let stat of tentative">\n\n                 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3" selected>Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card>\n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n		<div *ngSwitchCase="\'Unknown\'">\n\n			<div class="cric-stat-unknown-table">\n\n         \n\n          <ol type="1">\n\n         \n\n            <li *ngFor="let stat of unknown">\n\n                <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="stat.status" (ionChange)="availabilitySelected($event, stat)">\n\n          <ion-option value="0" selected>Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n </ion-card-content>\n\n  </ion-card> \n\n            </li>\n\n          </ol>\n\n        </div>\n\n       </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\practice-availability\practice-availability.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_practice_practice__["a" /* PracticeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], PracticeAvailabilityPage);

//# sourceMappingURL=practice-availability.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPracticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_practice_create_practice__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__practice_availability_practice_availability__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_practice_practice__ = __webpack_require__(113);
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
var TeamPracticePage = (function () {
    function TeamPracticePage(navCtrl, navParams, formBuilder, teamService, otherService, loadingController, authService, practiceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamService = teamService;
        this.otherService = otherService;
        this.loadingController = loadingController;
        this.authService = authService;
        this.practiceService = practiceService;
        this.practices = '';
        this.userPostData = { "user_id": "", "token": "" };
        this.team = JSON.parse(localStorage.getItem('team'));
        //this.getTeams();
        this.searchPracticesForm = formBuilder.group({
            endDate: [''],
            startDate: [''],
            teamId: this.team.id
        });
        this.getData();
    }
    TeamPracticePage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    TeamPracticePage.prototype.getData = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.practiceService.getAllPracticeSearch(this.searchPracticesForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.practices = _this.responseData.results.result;
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
    TeamPracticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousMatchesPage');
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
    };
    TeamPracticePage.prototype.goToPracticeAvailability = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__practice_availability_practice_availability__["a" /* PracticeAvailabilityPage */], { "practiceId": event });
    };
    TeamPracticePage.prototype.edit = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_practice_create_practice__["a" /* CreatePracticePage */], { "practice": event });
    };
    TeamPracticePage.prototype.delete = function (practice) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.practiceService.delete(practice).then(function (result) {
            _this.deleteResponseData = result;
            console.log(_this.deleteResponseData);
            if (_this.deleteResponseData.statusCode == '200') {
                loading.dismiss();
                _this.getData();
            }
            else if (_this.deleteResponseData.statusCode == "404") {
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.deleteResponseData);
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    TeamPracticePage.prototype.addPractice = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_practice_create_practice__["a" /* CreatePracticePage */]);
    };
    TeamPracticePage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.practiceService.getAllPracticeSearch(this.searchPracticesForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.practices = _this.responseData.results.result;
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
    return TeamPracticePage;
}());
TeamPracticePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team-practice',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-practice\team-practice.html"*/'<!--\n\n  Generated template for the PreviousMatchesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Practices</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Search Practices\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n        <form [formGroup]="searchPracticesForm">\n\n                     <ion-item>\n\n                    <ion-label>Start Date</ion-label>\n\n                    <ion-datetime formControlName="startDate"  displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n                  </ion-item>\n\n                 \n\n                      <ion-item>\n\n                          <ion-label>End Date</ion-label>\n\n                          <ion-datetime formControlName="endDate"  displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n                        </ion-item>\n\n                     \n\n             <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n                Filter\n\n                \n\n              </button>\n\n     \n\n        </form>\n\n      \n\n    \n\n    </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngFor="let practice of practices">\n\n        <ion-card-header>\n\n          {{practice?.team?.teamname}}\n\n        \n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <p>{{practice?.practiceTime | momentjs}}</p>\n\n          \n\n          <span *ngIf="practice?.location!=null">\n\n          <p>{{practice?.location?.name}}, {{practice?.location?.address}}</p>\n\n        </span>\n\n        <button ion-button icon-left clear small (click)="edit(practice)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Edit Practice</div>\n\n          </button>\n\n		    <button ion-button icon-left clear small (click)="goToPracticeAvailability(practice.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Practice Availability</div>\n\n          </button>\n\n          <button ion-button icon-left clear small (click)="delete(practice.id)">\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>Delete Practice</div>\n\n            </button>\n\n		     </ion-card-content>\n\n      </ion-card>\n\n    </ion-content>\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addPractice()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-practice\team-practice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_7__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__providers_practice_practice__["a" /* PracticeService */]])
], TeamPracticePage);

//# sourceMappingURL=team-practice.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var apiUrl = 'https://crickify.herokuapp.com/message';
var isAuthenticated;
var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.pageResponse = [];
    }
    MessageService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    MessageService.prototype.getAllMessage = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        headers.set("token", this.getToken());
        return this.http.get(apiUrl + '/room/' + id + '/messages/', { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["map"])(function (res) {
            return res.json().results.result;
        }));
    };
    MessageService.prototype.getMessageId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/message/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MessageService.prototype.addMessage = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiUrl + '/message', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    MessageService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/message/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MessageService);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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



var apiUrl = 'https://crickify.herokuapp.com/room';
var isAuthenticated;
var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    ChatService.prototype.getAllChat = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/rooms', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("auth response chat", res.json());
                if (res.json().statusCode == '200') {
                    console.log("chat", res.json());
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ChatService.prototype.getChatId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/room/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ChatService.prototype.getTeamChat = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/team/' + id + '/room/', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ChatService.prototype.getPrivateChat = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/user/' + id + '/room/', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ChatService.prototype.addChat = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiUrl + '/room', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ChatService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/room/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ChatService);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_classified_classified__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
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






var CreateAdPage = (function () {
    function CreateAdPage(navCtrl, navParams, alertController, teamService, loadingController, formBuilder, classifiedService, otherService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.teamService = teamService;
        this.loadingController = loadingController;
        this.classifiedService = classifiedService;
        this.otherService = otherService;
        this.locationDisabled = false;
        this.classifiedTimeDisabled = false;
        this.teamDisabled = false;
        this.createClassifiedForm = formBuilder.group({
            id: [''],
            type: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            description: ['',],
            active: [true],
            classifiedTime: [''],
            location: ['',],
            team: [],
            user: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            createDate: [],
            modifyDate: []
        });
        this.getLocations();
        this.getTeams();
        this.classified = navParams.get('classified');
        if (this.classified != null) {
            this.createClassifiedForm.setValue(this.classified);
            this.onChange(this.classified.type);
            if (this.classified.classifiedTime != null) {
                this.createClassifiedForm.controls['classifiedTime'].setValue(new Date(this.classified.classifiedTime).toISOString());
            }
        }
        var data = JSON.parse(localStorage.getItem('userData'));
        this.user = data.user;
        this.createClassifiedForm.controls['user'].setValue(this.user);
    }
    CreateAdPage.prototype.onChange = function (value) {
        if (value == 'findopponent' || value == 'groundavailablity') {
            this.locationDisabled = false;
            this.classifiedTimeDisabled = false;
        }
        else {
            this.locationDisabled = true;
            this.classifiedTimeDisabled = true;
        }
        if (value == 'findopponent' || value == 'findplayer') {
            this.teamDisabled = false;
        }
        else {
            this.teamDisabled = true;
        }
    };
    CreateAdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad create team');
    };
    CreateAdPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    CreateAdPage.prototype.getLocations = function () {
        var _this = this;
        this.otherService.getAllLocation().then(function (result) {
            _this.teamResponseData = result;
            console.log(_this.teamResponseData);
            if (_this.teamResponseData.statusCode == '200') {
                _this.locations = _this.teamResponseData.results.locations;
                console.log("test 200");
            }
            else if (_this.teamResponseData.statusCode == "404") {
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
    CreateAdPage.prototype.getTeams = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.teamService.getAdminTeams().then(function (result) {
            _this.teamResponseData = result;
            console.log(_this.responseData);
            if (_this.teamResponseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.teams = _this.teamResponseData.results.teams;
            }
            else if (_this.teamResponseData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
                //  this.backToWelcome();
            }
            else {
                loading.dismiss();
                console.log("error", _this.teamResponseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    CreateAdPage.prototype.addClassified = function () {
        var _this = this;
        var value = this.createClassifiedForm.controls['type'].value;
        if (!(value == 'findopponent' || value == 'groundavailablity')) {
            this.createClassifiedForm.controls['classifiedTime'].setValue(null);
            this.createClassifiedForm.controls['location'].setValue(null);
        }
        if (!(value == 'findopponent' || value == 'findplayer')) {
            this.createClassifiedForm.controls['team'].setValue(null);
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.classifiedService.addClassified(this.createClassifiedForm.value).then(function (result) {
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
    CreateAdPage.prototype.alertDialog = function (title, message) {
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
    return CreateAdPage;
}());
CreateAdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-ad',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-ad\create-ad.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Classified</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Add Classified\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list no-lines>\n\n\n\n        <form [formGroup]="createClassifiedForm">\n\n\n\n          <ion-item>\n\n            <ion-label>Type</ion-label>\n\n            <ion-select formControlName="type" (ionChange)="onChange($event)">\n\n              <ion-option value="findplayer">Find a Player</ion-option>\n\n              <ion-option value="findteam">Find a Team</ion-option>\n\n              <ion-option value="findopponent">Find a Opposition</ion-option>\n\n              <ion-option value="groundavailablity">Ground Available</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Description</ion-label>\n\n            <ion-input formControlName="description" type="text"></ion-input>  </ion-item>\n\n            <ion-item>\n\n\n\n              <ion-label>Date</ion-label>\n\n              <ion-datetime formControlName="classifiedTime" displayFormat="MMM DD, YYYY HH:mm" [disabled]="classifiedTimeDisabled"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Location</ion-label>\n\n              <ion-select formControlName="location" [disabled]="locationDisabled" [compareWith]="compareFn">\n\n                <ion-option *ngFor="let key of locations" [value]="key">{{key.name}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Team</ion-label>\n\n              <ion-select formControlName="team" [disabled]="teamDisabled" [compareWith]="compareFn">\n\n                <ion-option *ngFor="let key of teams" [value]="key">{{key.teamname}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n              <button ion-button color="secondary" icon-left clear small [disabled]="!createClassifiedForm.valid" (click)="addClassified()">\n\n                Save Classified\n\n\n\n              </button>\n\n            </ion-item>\n\n        </form>\n\n\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-ad\create-ad.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_classified_classified__["a" /* ClassifiedService */], __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]])
], CreateAdPage);

//# sourceMappingURL=create-ad.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedResponsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_classified_classified__ = __webpack_require__(82);
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
var ClassifiedResponsePage = (function () {
    function ClassifiedResponsePage(navCtrl, navParams, classifiedService, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.classifiedService = classifiedService;
        this.loadingController = loadingController;
        this.avaailability = [];
        this.available = [];
        this.tabsvalues = "available";
        this.classified = navParams.get('classified');
        this.getData(this.classified.id);
    }
    ClassifiedResponsePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassifiedResponsePage');
    };
    ClassifiedResponsePage.prototype.getData = function (id) {
        var _this = this;
        this.available = [];
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.classifiedService.getClassifiedAvailability(id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.classifieds);
                _this.avaailability = _this.responseData.results.classifieds;
                for (var _i = 0, _a = _this.avaailability; _i < _a.length; _i++) {
                    var data = _a[_i];
                    if (data.interested) {
                        _this.available.push(data);
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
    ClassifiedResponsePage.prototype.acceptedSelected = function (event, value) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.classifiedService.addClassifiedResponse(value).then(function (result) {
            _this.responseCreateData = result;
            console.log(_this.responseCreateData);
            if (_this.responseCreateData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
            }
            else if (_this.responseCreateData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
        });
    };
    return ClassifiedResponsePage;
}());
ClassifiedResponsePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-classified-response',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\classified-response\classified-response.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Classified Response</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground" >\n\n\n\n  <ion-segment [(ngModel)]="tabsvalues">\n\n      <ion-segment-button value="available">\n\n        Response\n\n      </ion-segment-button>\n\n        \n\n    </ion-segment>\n\n  \n\n  <div [ngSwitch]="tabsvalues"> \n\n      <div *ngSwitchCase="\'available\'">\n\n        <div class="cric-stat-available-table">\n\n         \n\n          <ol type="1">\n\n          \n\n            <li *ngFor="let stat of available">\n\n			 <ion-card  color="primary">\n\n    <ion-card-header>\n\n      {{stat?.player.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n    	\n\n		   <ion-item>\n\n          {{stat?.comments}}\n\n      \n\n	 \n\n    </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-select [(ngModel)]="stat.accepted" (ionChange)="acceptedSelected($event, stat)">\n\n          <ion-option value=true>Accept</ion-option>\n\n        <ion-option value=false>No Response</ion-option>\n\n\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	\n\n      \n\n </ion-card-content>\n\n  </ion-card>\n\n              \n\n            </li>\n\n          </ol>\n\n        </div>\n\n		</div>\n\n	\n\n       \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\classified-response\classified-response.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_classified_classified__["a" /* ClassifiedService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], ClassifiedResponsePage);

//# sourceMappingURL=classified-response.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedResponseCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_classified_classified__ = __webpack_require__(82);
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
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassifiedResponseCreatePage = (function () {
    function ClassifiedResponseCreatePage(navCtrl, navParams, alertController, classifiedService, formBuilder, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.classifiedService = classifiedService;
        this.loadingController = loadingController;
        this.avaailability = [];
        this.available = [];
        this.tabsvalues = "available";
        this.classified = navParams.get('classified');
        this.createClassifiedResponseForm = formBuilder.group({
            id: [''],
            interested: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            accepted: ['',],
            comments: ['',],
            player: [],
            classified: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            createDate: [],
            modifyDate: []
        });
        var data = JSON.parse(localStorage.getItem('userData'));
        this.user = data.user;
        this.createClassifiedResponseForm.controls['player'].setValue(this.user);
        this.createClassifiedResponseForm.controls['classified'].setValue(this.classified);
        this.getData(this.classified.id);
    }
    ClassifiedResponseCreatePage.prototype.getData = function (id) {
        var _this = this;
        this.available = [];
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.classifiedService.getClassifiedResponseForUser(id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                if (_this.responseData != null && _this.responseData.results != null && _this.responseData.results.classifieds != null) {
                    _this.createClassifiedResponseForm.setValue(_this.responseData.results.classifieds);
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
            loading.dismiss();
        });
    };
    ClassifiedResponseCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassifiedResponsePage');
    };
    ClassifiedResponseCreatePage.prototype.addClassifiedResponse = function () {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.classifiedService.addClassifiedResponse(this.createClassifiedResponseForm.value).then(function (result) {
            _this.responseCreateData = result;
            console.log(_this.responseCreateData);
            if (_this.responseCreateData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.alertDialog('Success', 'Added');
            }
            else if (_this.responseCreateData.statusCode == "404") {
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
    ClassifiedResponseCreatePage.prototype.alertDialog = function (title, message) {
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
    return ClassifiedResponseCreatePage;
}());
ClassifiedResponseCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-classified-response-create',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\classified-response-create\classified-response-create.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Classified Response</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding class="appBackground">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Submit Classified Response\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-list no-lines>\n\n  \n\n          <form [formGroup]="createClassifiedResponseForm">\n\n  \n\n            <ion-item>\n\n              <ion-label>Interest</ion-label>\n\n              <ion-select formControlName="interested">\n\n                <ion-option value=true>Interested</ion-option>\n\n                <ion-option value=false>Not Interested</ion-option>\n\n              \n\n              </ion-select>\n\n            </ion-item>\n\n  \n\n            <ion-item>\n\n              <ion-label floating>Comment</ion-label>\n\n              <ion-input formControlName="comments" type="text"></ion-input>  </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label>Status:</ion-label>\n\n                  <p *ngIf="classified.interested==true">\n\n                      <ion-label>Accepted</ion-label>\n\n                      <p *ngIf="classified.interested==false">\n\n                          <ion-label>Rejected</ion-label>\n\n                </ion-item>\n\n              <ion-item>\n\n                <button ion-button color="secondary" icon-left clear small [disabled]="!createClassifiedResponseForm.valid" (click)="addClassifiedResponse()">\n\n                  Save Response\n\n  \n\n                </button>\n\n              </ion-item>\n\n          </form>\n\n  \n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\classified-response-create\classified-response-create.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_classified_classified__["a" /* ClassifiedService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], ClassifiedResponseCreatePage);

//# sourceMappingURL=classified-response-create.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_modal_upload_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_images_images__ = __webpack_require__(109);
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
                phone: [''],
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], MyAccountPage);

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(105);
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
        this.paid = [];
        this.pending = [];
        this.userPostData = { "user_id": "", "token": "" };
        this.tabsvalues = "pending";
        this.total = 0;
        this.pendingAmount = 0;
        this.paidAmount = 0;
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
                _this.paid = [];
                _this.pending = [];
                _this.total = 0;
                _this.pendingAmount = 0;
                _this.paidAmount = 0;
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.expenses = _this.responseData.results.result;
                for (var _i = 0, _a = _this.expenses; _i < _a.length; _i++) {
                    var data = _a[_i];
                    if (data.paid) {
                        _this.paidAmount += data.amount;
                        _this.total += data.amount;
                        _this.paid.push(data);
                    }
                    else if (!data.paid) {
                        _this.pendingAmount += data.amount;
                        _this.total += data.amount;
                        _this.pending.push(data);
                    }
                }
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
    FinancePage.prototype.availabilitySelected = function (event, expense) {
        var _this = this;
        console.log("selected", event, expense);
        expense.player = this.authService.getUser();
        console.log("after change", expense);
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.financeService.postUpdate(expense).then(function (result) {
            _this.updateresponseData = result;
            console.log(_this.updateresponseData);
            if (_this.updateresponseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.updateresponseData);
                _this.ionViewDidLoad();
                // console.log("result", this.responseData.results.matches);
                //this.matches = this.responseData.results.matches;
            }
            else if (_this.updateresponseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("error", _this.updateresponseData);
            }
        }, function (err) {
            // Error log
        });
    };
    FinancePage.prototype.goToMatchTeam = function (event) {
        console.log("clicked match team", event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__match_team_match_team__["a" /* MatchTeamPage */], { "matchId": event });
    };
    return FinancePage;
}());
FinancePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finance',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Payments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Payments\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n    <ion-label>\n\n        Total Amount:${{total}}\n\n      </ion-label>\n\n\n\n\n\n      <ion-label>\n\n          Paid:${{paidAmount}}\n\n        </ion-label>\n\n\n\n\n\n        <ion-label>\n\n          Pending:${{pendingAmount}}\n\n          </ion-label>\n\n          </ion-card-content>\n\n        </ion-card>\n\n    <ion-segment [(ngModel)]="tabsvalues">\n\n        <ion-segment-button value="pending">\n\n         Pending\n\n        </ion-segment-button>\n\n        <ion-segment-button value="paid">\n\n          Paid\n\n        </ion-segment-button>\n\n           </ion-segment>\n\n    \n\n    <div [ngSwitch]="tabsvalues">\n\n      <div *ngSwitchCase="\'pending\'">\n\n  <ion-card *ngFor="let playerexpense of pending">\n\n    <ion-card-header>\n\n      {{playerexpense.expense.description}}\n\n      <p>{{playerexpense.expense.team.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>{{playerexpense.expenseDate| momentjs}}</p>\n\n     \n\n      <p>${{playerexpense.amount}}</p>\n\n	   <p>${{playerexpense.cmnt}}</p>\n\n         <ion-label>\n\n          Select Payment Status\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n		   <ion-checkbox [(ngModel)]="playerexpense.paid"  (ionChange)="availabilitySelected($event, playerexpense)"></ion-checkbox>\n\n     \n\n	 \n\n    </ion-item>\n\n	\n\n	<ion-item>\n\n      <ion-select [(ngModel)]="playerexpense.paymentType" (ionChange)="availabilitySelected($event, playerexpense)">\n\n          <ion-option value="CASH">CASH</ion-option>\n\n        <ion-option value="FREE">FREE</ion-option>\n\n      <ion-option value="PREPAID">PREPAID</ion-option>\n\n        <ion-option value="TRANSFER">TRANSFER</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	<p><ion-label>Remarks</ion-label></p>\n\n      <ion-item>\n\n	  \n\n	       \n\n    <ion-input [(ngModel)]="playerexpense.remark" (ionChange)="availabilitySelected($event, playerexpense)"></ion-input>\n\n	 </ion-item>\n\n	\n\n    </ion-card-content>\n\n  </ion-card>\n\n</div>\n\n<div *ngSwitchCase="\'paid\'">\n\n    <ion-card *ngFor="let playerexpense of paid">\n\n      <ion-card-header>\n\n        {{playerexpense.expense.description}}\n\n        <p>{{playerexpense.expense.team.name}}</p>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <p>{{playerexpense.expenseDate| momentjs}}</p>\n\n       \n\n        <p>${{playerexpense.amount}}</p>\n\n       <p>${{playerexpense.cmnt}}</p>\n\n           <ion-label>\n\n            Select Payment Status\n\n          </ion-label>\n\n      \n\n         <ion-item>\n\n         <ion-checkbox [(ngModel)]="playerexpense.paid"  (ionChange)="availabilitySelected($event, playerexpense)"></ion-checkbox>\n\n       \n\n     \n\n      </ion-item>\n\n    \n\n    <ion-item>\n\n        <ion-select [(ngModel)]="playerexpense.paymentType" (ionChange)="availabilitySelected($event, playerexpense)">\n\n            <ion-option value="CASH">CASH</ion-option>\n\n          <ion-option value="FREE">FREE</ion-option>\n\n        <ion-option value="PREPAID">PREPAID</ion-option>\n\n          <ion-option value="TRANSFER">TRANSFER</ion-option>\n\n        </ion-select>\n\n     \n\n      </ion-item>\n\n    <p><ion-label>Remarks</ion-label></p>\n\n        <ion-item>\n\n      \n\n           \n\n      <ion-input [(ngModel)]="playerexpense.remark" (ionChange)="availabilitySelected($event, playerexpense)"></ion-input>\n\n     </ion-item>\n\n    \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\finance\finance.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], FinancePage);

//# sourceMappingURL=finance.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_player_create_player__ = __webpack_require__(210);
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
        selector: 'page-team-players',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-players\team-players.html"*/'<!--\n\n  Generated template for the MyTeamsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Manage Player</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-grid >\n\n        <ion-row  *ngFor="let teamplayer of teamplayers"> \n\n		<ion-col >\n\n  <ion-card >\n\n    <ion-card-header>\n\n      {{teamplayer.player.name}}\n\n	   </ion-card-header>\n\n	   <ion-card-content>\n\n        <p *ngIf= "teamplayer.player.imgUrl!= null" ><img  src="{{teamplayer.player.imgUrl}}"/></p>\n\n   \n\n    <p *ngIf="teamplayer.player.imgUrl == null" ><img src="assets/img/bowler.png" /></p>\n\n	   <ion-item> \n\n	   <button ion-button icon-left clear small color="primary" (click)="delete(teamplayer.player)">\n\n            <ion-icon name="delete"></ion-icon>\n\n            <div>Delete</div>\n\n          </button>\n\n          </ion-item>\n\n          <ion-item> \n\n<ion-select [(ngModel)]="teamplayer.status" (ionChange)="roleSelected($event, teamplayer)">\n\n          <ion-option value="0">Normal</ion-option>\n\n\n\n        <ion-option value="2">Admin</ion-option>\n\n\n\n      </ion-select>\n\n      </ion-item>\n\n		    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n</ion-row>\n\n   </ion-grid>\n\n</ion-content>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab mini (click)="addPlayer()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-players\team-players.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], TeamPlayersPage);

//# sourceMappingURL=team-players.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_tournament_create_tournament__ = __webpack_require__(211);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */]])
], TournamentsPage);

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_location_create_location__ = __webpack_require__(212);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_other_other__["a" /* OtherService */]])
], LocationsPage);

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_team_expense_add_team_expense__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_player_expense_add_player_expense__ = __webpack_require__(216);
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
        this.paid = [];
        this.pending = [];
        this.total = 0;
        this.pendingAmount = 0;
        this.paidAmount = 0;
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
        this.ionViewDidLoad();
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
            _this.paid = [];
            _this.pending = [];
            _this.total = 0;
            _this.pendingAmount = 0;
            _this.paidAmount = 0;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.expense);
                _this.expenses = _this.responseData.results.expense;
                for (var _i = 0, _a = _this.expenses; _i < _a.length; _i++) {
                    var data = _a[_i];
                    if (data.status == 1) {
                        _this.paidAmount += data.amount;
                        _this.total += data.amount;
                        _this.paid.push(data);
                    }
                    else if (data.status == 0) {
                        _this.pendingAmount += data.amount;
                        _this.total += data.amount;
                        _this.pending.push(data);
                    }
                }
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
            _this.updateresponseData = result;
            console.log(_this.updateresponseData);
            if (_this.updateresponseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200", _this.updateresponseData);
                _this.ionViewDidLoad();
                // console.log("result", this.responseData.results.matches);
                //this.matches = this.responseData.results.matches;
            }
            else if (_this.updateresponseData.statusCode == "404") {
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("error", _this.updateresponseData);
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
        selector: 'page-team-expense',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\team-expense\team-expense.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Expense</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="appBackground">\n    <ion-card>\n        <ion-card-header>\n            Payments\n          </ion-card-header>\n          <ion-card-content>\n    <ion-label>\n        Total Amount:${{total}}\n      </ion-label>\n\n\n      <ion-label>\n          Paid:${{paidAmount}}\n        </ion-label>\n\n\n        <ion-label>\n          Pending:${{pendingAmount}}\n          </ion-label>\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                Payments\n              </ion-card-header>\n              <ion-card-content>\n          <ion-segment [(ngModel)]="tabsvalues">\n              <ion-segment-button value="pending">\n               Pending\n              </ion-segment-button>\n              <ion-segment-button value="paid">\n                Paid\n              </ion-segment-button>\n                 </ion-segment>\n                </ion-card-content>\n              </ion-card>\n      \n          <div [ngSwitch]="tabsvalues">\n            <div *ngSwitchCase="\'pending\'">\n  <ion-card *ngFor="let expense of pending" >\n    <ion-card-header>\n      {{expense.description}}\n      <p>{{expense.team.name}}</p>\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{expense.expenseDate| momentjs}}</p>\n      <p>${{expense.amount}}</p>\n      <ion-item>\n	         <ion-label>\n          Select Payment Status\n        </ion-label>\n        </ion-item>\n        <ion-item>\n        <ion-select [(ngModel)]="expense.status"  (ionChange)="expenseSelected($event, expense)">\n            <ion-option value=1>PAID</ion-option>\n          <ion-option value=0>PENDING</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n          <button ion-button (click)="addPlayerExpense(expense)">\n              Add Players Expense\n            </button>\n\n       </ion-item>\n       <ion-item>\n          <button ion-button (click)="editExpense(expense)">\n              Edit\n            </button>\n\n       </ion-item>\n    </ion-card-content>\n  </ion-card>\n</div>\n<div *ngSwitchCase="\'paid\'">\n    <ion-card *ngFor="let expense of paid" >\n        <ion-card-header>\n          {{expense.description}}\n          <p>{{expense.team.name}}</p>\n        </ion-card-header>\n        <ion-card-content>\n          <p>{{expense.expenseDate| momentjs}}</p>\n          <p>${{expense.amount}}</p>\n          <ion-item>\n               <ion-label>\n              Select Payment Status\n            </ion-label>\n            </ion-item>\n            <ion-item>\n            <ion-select [(ngModel)]="expense.status"  (ionChange)="expenseSelected($event, expense)">\n                <ion-option value=1>PAID</ion-option>\n              <ion-option value=0>PENDING</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n              <button ion-button (click)="addPlayerExpense(expense)">\n                  Add Players Expense\n                </button>\n    \n           </ion-item>\n           <ion-item>\n              <button ion-button (click)="editExpense(expense)">\n                  Edit\n                </button>\n    \n           </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n<ion-fab bottom right>\n  <button ion-fab mini (click)="addExpense()"><ion-icon name="add"></ion-icon></button>\n</ion-fab>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\team-expense\team-expense.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], TeamExpensePage);

//# sourceMappingURL=team-expense.js.map

/***/ }),

/***/ 307:
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
webpackEmptyAsyncContext.id = 307;

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-match-team/add-match-team.module": [
		496
	],
	"../pages/add-player-expense/add-player-expense.module": [
		511
	],
	"../pages/add-team-expense/add-team-expense.module": [
		510
	],
	"../pages/batting/batting.module": [
		498
	],
	"../pages/bowling/bowling.module": [
		499
	],
	"../pages/chat/chat.module": [
		516
	],
	"../pages/classified-response-create/classified-response-create.module": [
		520
	],
	"../pages/classified-response/classified-response.module": [
		519
	],
	"../pages/create-ad/create-ad.module": [
		518
	],
	"../pages/create-location/create-location.module": [
		508
	],
	"../pages/create-match/create-match.module": [
		351
	],
	"../pages/create-news/create-news.module": [
		359
	],
	"../pages/create-player/create-player.module": [
		506
	],
	"../pages/create-practice/create-practice.module": [
		513
	],
	"../pages/create-product/create-product.module": [
		361
	],
	"../pages/create-team/create-team.module": [
		503
	],
	"../pages/create-tournament/create-tournament.module": [
		507
	],
	"../pages/forgot/forgot.module": [
		352
	],
	"../pages/login/login.module": [
		355
	],
	"../pages/logout/logout.module": [
		505
	],
	"../pages/match-availability/match-availability.module": [
		497
	],
	"../pages/match-team/match-team.module": [
		350
	],
	"../pages/modeChange/modeChange.module": [
		509
	],
	"../pages/my-profile/my-profile.module": [
		486
	],
	"../pages/practice-availability/practice-availability.module": [
		514
	],
	"../pages/previous-match-details-edit/previous-match-details-edit.module": [
		501
	],
	"../pages/previous-match-details/previous-match-details.module": [
		494
	],
	"../pages/previous-matches/previous-matches.module": [
		495
	],
	"../pages/reset/reset.module": [
		504
	],
	"../pages/signup/signup.module": [
		356
	],
	"../pages/team-matches/team-matches.module": [
		502
	],
	"../pages/team-practice/team-practice.module": [
		515
	],
	"../pages/upload-modal/upload-modal.module": [
		357
	],
	"../pages/view-player-expenses/view-player-expenses.module": [
		512
	],
	"../pages/welcome/welcome.module": [
		362
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
webpackAsyncContext.id = 349;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchTeamPageModule", function() { return MatchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_team__ = __webpack_require__(105);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_team__["a" /* MatchTeamPage */]),
        ],
    })
], MatchTeamPageModule);

//# sourceMappingURL=match-team.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMatchModule", function() { return CreateMatchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_match__ = __webpack_require__(192);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_match__["a" /* CreateMatchPage */]),
        ],
    })
], CreateMatchModule);

//# sourceMappingURL=create-match.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot__ = __webpack_require__(134);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */]),
        ],
    })
], ForgotPageModule);

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(80);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(135);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModalPageModule", function() { return UploadModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_modal__ = __webpack_require__(108);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upload_modal__["a" /* UploadModalPage */]),
        ],
    })
], UploadModalPageModule);

//# sourceMappingURL=upload-modal.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewsPageModule", function() { return CreateNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_news__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_multi_image_upload_multi_image_upload_module__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateNewsPageModule = (function () {
    function CreateNewsPageModule() {
    }
    return CreateNewsPageModule;
}());
CreateNewsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_news__["a" /* CreateNewsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_news__["a" /* CreateNewsPage */]), __WEBPACK_IMPORTED_MODULE_3__components_multi_image_upload_multi_image_upload_module__["a" /* MultiImageUploadModule */]
        ],
    })
], CreateNewsPageModule);

//# sourceMappingURL=create-news.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiImageUploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multi_image_upload__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MultiImageUploadModule = (function () {
    function MultiImageUploadModule() {
    }
    return MultiImageUploadModule;
}());
MultiImageUploadModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__multi_image_upload__["a" /* MultiImageUpload */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__multi_image_upload__["a" /* MultiImageUpload */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__multi_image_upload__["a" /* MultiImageUpload */]
        ]
    })
], MultiImageUploadModule);

//# sourceMappingURL=multi-image-upload.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductPageModule", function() { return CreateProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_product__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_multi_image_upload_multi_image_upload_module__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateProductPageModule = (function () {
    function CreateProductPageModule() {
    }
    return CreateProductPageModule;
}());
CreateProductPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_product__["a" /* CreateProductPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_product__["a" /* CreateProductPage */]), __WEBPACK_IMPORTED_MODULE_3__components_multi_image_upload_multi_image_upload_module__["a" /* MultiImageUploadModule */]
        ],
    })
], CreateProductPageModule);

//# sourceMappingURL=create-product.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(59);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(198);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]),
        ],
    })
], MyProfilePageModule);

//# sourceMappingURL=my-profile.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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
                if (filter[key] != null) {
                    urlSearchParams.append(key, filter[key]);
                }
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
    MatchService.prototype.delete = function (matchId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/match/' + matchId, { headers: headers })
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

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchDetailsPageModule", function() { return PreviousMatchDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_match_details__ = __webpack_require__(200);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_match_details__["a" /* PreviousMatchDetailsPage */]),
        ],
    })
], PreviousMatchDetailsPageModule);

//# sourceMappingURL=previous-match-details.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchesPageModule", function() { return PreviousMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_matches__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(59);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_matches__["a" /* PreviousMatchesPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], PreviousMatchesPageModule);

//# sourceMappingURL=previous-matches.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMatchTeamPageModule", function() { return AddMatchTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_match_team__ = __webpack_require__(202);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_match_team__["a" /* AddMatchTeamPage */]),
        ],
    })
], AddMatchTeamPageModule);

//# sourceMappingURL=add-match-team.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchAvailabilityPageModule", function() { return MatchAvailabilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_availability__ = __webpack_require__(203);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match_availability__["a" /* MatchAvailabilityPage */]),
        ],
    })
], MatchAvailabilityPageModule);

//# sourceMappingURL=match-availability.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattingPageModule", function() { return BattingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batting__ = __webpack_require__(204);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__batting__["a" /* BattingPage */]),
        ],
    })
], BattingPageModule);

//# sourceMappingURL=batting.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BowlingPageModule", function() { return BowlingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bowling__ = __webpack_require__(205);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bowling__["a" /* BowlingPage */]),
        ],
    })
], BowlingPageModule);

//# sourceMappingURL=bowling.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BowlingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousMatchDetailsEditPageModule", function() { return PreviousMatchDetailsEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_match_details_edit__ = __webpack_require__(206);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_match_details_edit__["a" /* PreviousMatchDetailsEditPage */]),
        ],
    })
], PreviousMatchDetailsEditPageModule);

//# sourceMappingURL=previous-match-details-edit.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMatchesPageModule", function() { return TeamMatchesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_matches__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(59);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_matches__["a" /* TeamMatchesPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], TeamMatchesPageModule);

//# sourceMappingURL=team-matches.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamModule", function() { return CreateTeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_team__ = __webpack_require__(207);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_team__["a" /* CreateTeamPage */]),
        ],
    })
], CreateTeamModule);

//# sourceMappingURL=create-team.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset__ = __webpack_require__(208);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset__["a" /* ResetPage */]),
        ],
    })
], ResetPageModule);

//# sourceMappingURL=reset.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logout__ = __webpack_require__(209);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__logout__["a" /* LogoutPage */]),
        ],
    })
], LogoutPageModule);

//# sourceMappingURL=logout.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayerModule", function() { return CreatePlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_player__ = __webpack_require__(210);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_player__["a" /* CreatePlayerPage */]),
        ],
    })
], CreatePlayerModule);

//# sourceMappingURL=create-player.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTournamentModule", function() { return CreateTournamentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_tournament__ = __webpack_require__(211);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_tournament__["a" /* CreateTournamentPage */]),
        ],
    })
], CreateTournamentModule);

//# sourceMappingURL=create-tournament.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocationModule", function() { return CreateLocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_location__ = __webpack_require__(212);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_location__["a" /* CreateLocationPage */]),
        ],
    })
], CreateLocationModule);

//# sourceMappingURL=create-location.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeChangeModule", function() { return ModeChangeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modeChange__ = __webpack_require__(213);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modeChange__["a" /* ModeChangePage */]),
        ],
    })
], ModeChangeModule);

//# sourceMappingURL=modeChange.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamExpensePageModule", function() { return AddTeamExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_team_expense__ = __webpack_require__(215);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_team_expense__["a" /* AddTeamExpensePage */]),
        ],
    })
], AddTeamExpensePageModule);

//# sourceMappingURL=add-team-expense.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerExpensePageModule", function() { return AddPlayerExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_player_expense__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(59);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_player_expense__["a" /* AddPlayerExpensePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], AddPlayerExpensePageModule);

//# sourceMappingURL=add-player-expense.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlayerExpensePageModule", function() { return ViewPlayerExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_player_expenses__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewPlayerExpensePageModule = (function () {
    function ViewPlayerExpensePageModule() {
    }
    return ViewPlayerExpensePageModule;
}());
ViewPlayerExpensePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_player_expenses__["a" /* ViewPlayerExpensePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_player_expenses__["a" /* ViewPlayerExpensePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], ViewPlayerExpensePageModule);

//# sourceMappingURL=view-player-expenses.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePracticeModule", function() { return CreatePracticeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_practice__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreatePracticeModule = (function () {
    function CreatePracticeModule() {
    }
    return CreatePracticeModule;
}());
CreatePracticeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_practice__["a" /* CreatePracticePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_practice__["a" /* CreatePracticePage */]),
        ],
    })
], CreatePracticeModule);

//# sourceMappingURL=create-practice.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeAvailabilityPageModule", function() { return PracticeAvailabilityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__practice_availability__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PracticeAvailabilityPageModule = (function () {
    function PracticeAvailabilityPageModule() {
    }
    return PracticeAvailabilityPageModule;
}());
PracticeAvailabilityPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__practice_availability__["a" /* PracticeAvailabilityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__practice_availability__["a" /* PracticeAvailabilityPage */]),
        ],
    })
], PracticeAvailabilityPageModule);

//# sourceMappingURL=practice-availability.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPracticePageModule", function() { return TeamPracticePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_practice__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TeamPracticePageModule = (function () {
    function TeamPracticePageModule() {
    }
    return TeamPracticePageModule;
}());
TeamPracticePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team_practice__["a" /* TeamPracticePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_practice__["a" /* TeamPracticePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], TeamPracticePageModule);

//# sourceMappingURL=team-practice.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_message_message__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_relative_time__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_emoji_picker_emoji_picker_module__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_emoji__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChatPageModule = (function () {
    function ChatPageModule() {
    }
    return ChatPageModule;
}());
ChatPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_relative_time__["a" /* RelativeTime */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__components_emoji_picker_emoji_picker_module__["a" /* EmojiPickerComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__providers_message_message__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_emoji__["a" /* EmojiProvider */]
        ]
    })
], ChatPageModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdPageModule", function() { return CreateAdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_ad__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateAdPageModule = (function () {
    function CreateAdPageModule() {
    }
    return CreateAdPageModule;
}());
CreateAdPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_ad__["a" /* CreateAdPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_ad__["a" /* CreateAdPage */]),
        ],
    })
], CreateAdPageModule);

//# sourceMappingURL=create-ad.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedResponsePageModule", function() { return ClassifiedResponsePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classified_response__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifiedResponsePageModule = (function () {
    function ClassifiedResponsePageModule() {
    }
    return ClassifiedResponsePageModule;
}());
ClassifiedResponsePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__classified_response__["a" /* ClassifiedResponsePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classified_response__["a" /* ClassifiedResponsePage */]),
        ],
    })
], ClassifiedResponsePageModule);

//# sourceMappingURL=classified-response.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedResponseCreatePageModule", function() { return ClassifiedResponseCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classified_response_create__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifiedResponseCreatePageModule = (function () {
    function ClassifiedResponseCreatePageModule() {
    }
    return ClassifiedResponseCreatePageModule;
}());
ClassifiedResponseCreatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__classified_response_create__["a" /* ClassifiedResponseCreatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classified_response_create__["a" /* ClassifiedResponseCreatePage */]),
        ],
    })
], ClassifiedResponseCreatePageModule);

//# sourceMappingURL=classified-response-create.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__ = __webpack_require__(12);
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
        loading.present();
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
        selector: 'page-list',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Team Stats</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-segment [(ngModel)]="tabsvalues">\n\n        <ion-segment-button value="team">\n\n          Team Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="batting">\n\n          Batting Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="bowling">\n\n            Bowling Stats\n\n        </ion-segment-button>\n\n        <ion-segment-button value="fielding">\n\n              Fielding Stats\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    \n\n    <div [ngSwitch]="tabsvalues">\n\n      <div *ngSwitchCase="\'team\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          <ion-scroll scrollX="true" scrollY="true" direction="x" >\n\n          \n\n              <ion-item class="scrollcard" >\n\n                  <ion-row text-center text-wrap >\n\n                      <ion-col col-3 >Name</ion-col>\n\n                      <ion-col col-1 >Played</ion-col>\n\n                      <ion-col col-1>Won</ion-col>\n\n                      <ion-col col-1 >Lost</ion-col>\n\n                      <ion-col col-2 >No Result</ion-col>\n\n                      <ion-col col-2 >Highest Total</ion-col>                  \n\n                     </ion-row>\n\n                </ion-item>\n\n              <br>\n\n            \n\n\n\n                <ion-item  class="scrollcard" *ngFor="let stat of statsArray">\n\n                  <ion-row text-center text-wrap >\n\n                      <ion-col col-3>{{stat.name}}</ion-col>\n\n                    <ion-col col-1>{{stat.statistics.played}}</ion-col>\n\n                    <ion-col col-1>{{stat.statistics.won}}</ion-col>\n\n                    <ion-col col-1 >{{stat.statistics.lost}}</ion-col>\n\n                    <ion-col col-2 >{{stat.statistics.abandoned}}</ion-col>\n\n                    <ion-col col-2>{{stat.statistics.highestTotal}}</ion-col>\n\n                    \n\n                  </ion-row>\n\n                </ion-item>\n\n                </ion-scroll>\n\n          \n\n      </div>\n\n    \n\n      <div *ngSwitchCase="\'batting\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n         \n\n          <ion-card *ngFor="let stat of statsArray">\n\n                <ion-card-content> \n\n                    <h4>{{stat.name}}</h4>\n\n                  <ion-scroll scrollX="true" scrollY="true" direction="x" >\n\n                      \n\n                    <ion-item class="scrollcard" >\n\n                        <ion-row text-center text-wrap >\n\n                            <ion-col col-3 >Name</ion-col>\n\n                            <ion-col col-1 >M</ion-col>\n\n                            <ion-col col-1>R</ion-col>\n\n                            <ion-col col-1 >B</ion-col>\n\n                            <ion-col col-2 >Av</ion-col>\n\n                            <ion-col col-2 >Sr</ion-col>                  \n\n                           </ion-row>\n\n                      </ion-item>\n\n                    <br>\n\n                  \n\n      \n\n                      <ion-item  class="scrollcard" *ngFor="let player of stat.battingStatistics">\n\n                        <ion-row text-center text-wrap >\n\n                            <ion-col col-3>{{player.player.name}}</ion-col>\n\n                          <ion-col col-1>{{player.matches}}</ion-col>\n\n                          <ion-col col-1>{{player.run}}</ion-col>\n\n                          <ion-col col-1 >{{player.ball}}</ion-col>\n\n                          <ion-col col-2 >{{player.average | number : \'1.2-2\'}}</ion-col>\n\n                          <ion-col col-2>{{player.sr | number : \'1.2-2\'}}</ion-col>\n\n                          \n\n                        </ion-row>\n\n                      </ion-item>\n\n                      </ion-scroll>\n\n              \n\n               </ion-card-content>\n\n              </ion-card>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'bowling\'">\n\n          <ion-item>\n\n              <ion-label>Pick a Team</ion-label>\n\n              <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n          \n\n          <ion-card  *ngFor="let stat of statsArray">\n\n                <ion-card-content>\n\n              <div class="cric-stat-bowling-table">\n\n                  <h4>{{stat.name}}</h4>\n\n                  <ion-scroll scrollX="true" scrollY="true" direction="x" >\n\n                    \n\n                      <ion-item class="scrollcard" >\n\n                          <ion-row text-center text-wrap >\n\n                              <ion-col col-3 >Name</ion-col>\n\n                              <ion-col col-1 >M</ion-col>\n\n                              <ion-col col-1>O</ion-col>\n\n                              <ion-col col-1 >R</ion-col>\n\n                              <ion-col col-1 >W</ion-col>\n\n                              <ion-col col-1 >wd</ion-col>\n\n                              <ion-col col-2 >Ec</ion-col>                  \n\n                             </ion-row>\n\n                        </ion-item>\n\n                      <br>\n\n                    \n\n        \n\n                        <ion-item  class="scrollcard" *ngFor="let player of stat.bowlingStatistics">\n\n                          <ion-row text-center text-wrap >\n\n                              <ion-col col-3>{{player.player.name}}</ion-col>\n\n                            <ion-col col-1>{{player.matches}}</ion-col>\n\n                            <ion-col col-1>{{player.overs}}</ion-col>\n\n                            <ion-col col-1 >{{player.run}}</ion-col>\n\n                            <ion-col col-1 >{{player.wickets}}</ion-col>\n\n                              <ion-col col-1 >{{player.wide}}</ion-col>\n\n                            <ion-col col-2>{{player.economy | number : \'1.2-2\'}}</ion-col>\n\n                            \n\n                          </ion-row>\n\n                        </ion-item>\n\n                        </ion-scroll>\n\n                  \n\n               \n\n                </div>\n\n            </ion-card-content>\n\n              </ion-card >\n\n      </div>\n\n\n\n        <div *ngSwitchCase="\'fielding\'">\n\n            <ion-item>\n\n                <ion-label>Pick a Team</ion-label>\n\n                <ion-select [(ngModel)]="selectedTeam" (ionChange)="teamSelected($event)">\n\n                  <ion-option *ngFor="let team of teams" [value]="team">{{team.teamname}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            \n\n            <ion-card *ngFor="let stat of statsArray">\n\n                    <ion-card-content>\n\n                        <h4>{{stat.name}}</h4>\n\n                        <ion-scroll scrollX="true" scrollY="true" direction="x" >\n\n                          \n\n                            <ion-item class="scrollcard" >\n\n                                <ion-row text-center text-wrap >\n\n                                    <ion-col col-3 >Name</ion-col>\n\n                                    <ion-col col-1 >Matches</ion-col>\n\n                                    <ion-col col-1>Catches</ion-col>\n\n                                    <ion-col col-1 >Run Out</ion-col>\n\n                                    <ion-col col-1 >Stumpings</ion-col>\n\n                                          \n\n                                   </ion-row>\n\n                              </ion-item>\n\n                            <br>\n\n                          \n\n              \n\n                              <ion-item  class="scrollcard" *ngFor="let player of stat.bowlingStatistics">\n\n                                <ion-row text-center text-wrap >\n\n                                    <ion-col col-3>{{player.player.name}}</ion-col>\n\n                                  <ion-col col-1>{{player.matches}}</ion-col>\n\n                                  <ion-col col-1>{{player.catches}}</ion-col>\n\n                                  <ion-col col-1 >{{player.runOuts}}</ion-col>\n\n                                  <ion-col col-1 >{{player.stumpings}}</ion-col>\n\n                               \n\n                                  \n\n                                </ion-row>\n\n                              </ion-item>\n\n                              </ion-scroll>\n\n                \n\n                </ion-card-content>\n\n                </ion-card>\n\n        </div>\n\n\n\n      </div> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_practice_practice__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_other_other__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PracticePage = (function () {
    function PracticePage(navCtrl, app, formBuilder, teamService, otherService, authService, practiceService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.teamService = teamService;
        this.otherService = otherService;
        this.authService = authService;
        this.practiceService = practiceService;
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
        this.searchPracticeForm = formBuilder.group({
            startDate: [new Date().toISOString()],
            teamId: [0]
        });
    }
    PracticePage.prototype.ionViewCanEnter = function () {
    };
    PracticePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        if (this.authService.getAuthenticated()) {
            console.log("token", this.authService.getToken());
        }
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.practiceService.getAllPracticeAvailabilityFilter(this.searchPracticeForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.matches);
                _this.practices = _this.responseData.results.practices;
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
    PracticePage.prototype.availabilitySelected = function (event, practice) {
        var _this = this;
        console.log("selected", event, practice);
        practice.player = this.authService.getUser();
        console.log("after change", practice);
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        this.practiceService.postAvailability(practice).then(function (result) {
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
    PracticePage.prototype.getTeams = function () {
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
    PracticePage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.practiceService.getAllPracticeAvailabilityFilter(this.searchPracticeForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.practices);
                _this.practices = _this.responseData.results.practices;
            }
            else if (_this.responseData.statusCode == "403") {
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
    return PracticePage;
}());
PracticePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-practice',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\practice\practice.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true" color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Upcoming Practices </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Search Practice\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n        <form [formGroup]="searchPracticeForm">\n\n     \n\n            <ion-item>\n\n                <ion-label>Team</ion-label>\n\n                <ion-select formControlName="teamId"  >\n\n                  <ion-option *ngFor="let key of teams" [value]="key.id">{{key.teamname}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n          <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n                Filter\n\n                \n\n              </button>\n\n     \n\n        </form>\n\n      \n\n    \n\n    </ion-card-content>\n\n    </ion-card>\n\n  <ion-card *ngFor="let practice of practices">\n\n    <ion-card-header>\n\n        <b><h1> {{practice.practice.team.teamname}}</h1></b>\n\n      \n\n    </ion-card-header>\n\n    <ion-card-content>\n\n       <b> <p>{{practice.practice.practiceTime | momentjs}}</p></b>\n\n      <p>{{practice.practice.location?.name}}, {{practice.practice.location?.address}}</p>\n\n	  \n\n         <ion-label>\n\n          Select Attendance\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="practice.status" (ionChange)="availabilitySelected($event, practice)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	\n\n      <ion-item>\n\n	  \n\n	      <ion-label floating>Comments</ion-label>\n\n    <ion-input [(ngModel)]="practice.comments" (ionChange)="availabilitySelected($event, match)"></ion-input>\n\n	 </ion-item>\n\n	\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\practice\practice.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_7__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_practice_practice__["a" /* PracticeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], PracticePage);

//# sourceMappingURL=practice.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_classified_classified__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_ad_create_ad__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classified_response_classified_response__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classified_response_create_classified_response_create__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ClassifiedPage = (function () {
    function ClassifiedPage(navCtrl, app, formBuilder, teamService, otherService, authService, classifiedService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.teamService = teamService;
        this.otherService = otherService;
        this.authService = authService;
        this.classifiedService = classifiedService;
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
        this.searchClassifiedForm = formBuilder.group({
            startDate: [],
            endDate: [],
            type: []
        });
    }
    ClassifiedPage.prototype.addClassified = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__create_ad_create_ad__["a" /* CreateAdPage */]);
    };
    ClassifiedPage.prototype.editClassified = function (classified) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__create_ad_create_ad__["a" /* CreateAdPage */], { classified: classified });
    };
    ClassifiedPage.prototype.deleteClassified = function (classified) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        classified.active = false;
        this.classifiedService.addClassified(classified).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.ionViewDidLoad();
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    ClassifiedPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    ClassifiedPage.prototype.checkResponse = function (classified) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__classified_response_classified_response__["a" /* ClassifiedResponsePage */], { classified: classified });
    };
    ClassifiedPage.prototype.respondClassified = function (classified) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__classified_response_create_classified_response_create__["a" /* ClassifiedResponseCreatePage */], { classified: classified });
    };
    ClassifiedPage.prototype.chatClassified = function (classified) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */], { toUser: classified.user });
    };
    ClassifiedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.classifiedService.getAllClassifiedSearch(this.searchClassifiedForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.classifieds = _this.responseData.results.result;
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
    ClassifiedPage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.classifiedService.getAllClassifiedSearch(this.searchClassifiedForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.classifieds = _this.responseData.results.result;
            }
            else if (_this.responseData.statusCode == "403") {
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
    return ClassifiedPage;
}());
ClassifiedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-classified',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\classifieds\classifieds.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true" color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Upcoming Classifieds </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Search Classified\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n\n\n      <form [formGroup]="searchClassifiedForm">\n\n\n\n        <ion-item>\n\n          <ion-label>Type</ion-label>\n\n          <ion-select formControlName="type">\n\n            <ion-option value="findplayer">Find a Player</ion-option>\n\n            <ion-option value="findteam">Find a Team</ion-option>\n\n            <ion-option value="findopponent">Find a Opposition</ion-option>\n\n            <ion-option value="groundavailablity">Ground Available</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Start Date</ion-label>\n\n          <ion-datetime formControlName="startDate" displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>End Date</ion-label>\n\n          <ion-datetime formControlName="endDate" displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n        </ion-item>\n\n        <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n          Filter\n\n\n\n        </button>\n\n\n\n      </form>\n\n\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card *ngFor="let classified of classifieds">\n\n    <ion-card-header>\n\n      <ion-item>\n\n\n\n        <p *ngIf="classified.type==\'findplayer\'">\n\n            <ion-item>Find a Player</ion-item></p>\n\n        <p *ngIf="classified.type==\'findteam\'">\n\n            <ion-item>Find a Team</ion-item></p>\n\n        <p *ngIf="classified.type==\'findopponent\'">\n\n            <ion-item> Find a Opposition</ion-item></p>\n\n        <p *ngIf="classified.type==\'groundavailablity\'">\n\n            <ion-item> Ground Available</ion-item></p>\n\n\n\n\n\n\n\n      </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <ion-item> {{classified.description}}</ion-item>\n\n          <ion-item> {{classified.team?.teamname}}</ion-item>\n\n          <p *ngIf="classified.classifiedTime!= null">\n\n            <ion-item>{{classified?.classifiedTime | momentjs}}</ion-item>\n\n            </p>\n\n              <ion-item>{{classified.location?.name}}, {{classified.location?.address}}</ion-item>\n\n      <p *ngIf="classified.user?.id== userDetails.user.id">\n\n        \n\n          <button ion-button color="secondary" icon-left clear small (click)="editClassified(classified)">\n\n            Edit\n\n\n\n          </button>\n\n        \n\n        \n\n          <button ion-button color="secondary" icon-left clear small (click)="deleteClassified(classified)">\n\n              delete\n\n  \n\n            </button>\n\n       \n\n      \n\n          <button ion-button color="secondary" icon-left clear small (click)="checkResponse(classified)">\n\n            Check Responses\n\n\n\n          </button>\n\n\n\n       \n\n      </p>\n\n      <p *ngIf="classified.user?.id!= userDetails.user.id">\n\n        \n\n          <button ion-button color="secondary" icon-left clear small (click)="respondClassified(classified)">\n\n            Respond\n\n\n\n          </button>\n\n\n\n          <button ion-button color="secondary" icon-left clear small (click)="chatClassified(classified)">\n\n             Message\n\n  \n\n            </button>\n\n\n\n\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="addClassified()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\classifieds\classifieds.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_8__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_classified_classified__["a" /* ClassifiedService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], ClassifiedPage);

//# sourceMappingURL=classifieds.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_news_news__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_news_create_news__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewnews_viewnews__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NewsPage = (function () {
    function NewsPage(navCtrl, app, formBuilder, teamService, otherService, authService, newsService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.teamService = teamService;
        this.otherService = otherService;
        this.authService = authService;
        this.newsService = newsService;
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
        this.searchNewsForm = formBuilder.group({
            startDate: [],
            endDate: [],
            type: []
        });
    }
    NewsPage.prototype.addNews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__create_news_create_news__["a" /* CreateNewsPage */]);
    };
    NewsPage.prototype.editNews = function (news) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__create_news_create_news__["a" /* CreateNewsPage */], { news: news });
    };
    NewsPage.prototype.viewNews = function (news) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__viewnews_viewnews__["a" /* ViewNewsPage */], { news: news });
    };
    NewsPage.prototype.deleteNews = function (news) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        news.active = false;
        this.newsService.addNews(news).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.ionViewDidLoad();
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.newsService.getAllNewsSearch(this.searchNewsForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.newss = _this.responseData.results.result;
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
    NewsPage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.newsService.getAllNewsSearch(this.searchNewsForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.newss = _this.responseData.results.result;
            }
            else if (_this.responseData.statusCode == "403") {
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
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\news\news.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true" color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>News </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Search News\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n\n\n      <form [formGroup]="searchNewsForm">\n\n\n\n          <ion-item>\n\n              <ion-label>Type</ion-label>\n\n              <ion-select formControlName="type" >\n\n                <ion-option value="Local">Local</ion-option>\n\n                <ion-option value="International">International</ion-option>\n\n  \n\n              </ion-select>\n\n            </ion-item>\n\n        <ion-item>\n\n          <ion-label>Start Date</ion-label>\n\n          <ion-datetime formControlName="startDate" displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>End Date</ion-label>\n\n          <ion-datetime formControlName="endDate" displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n        </ion-item>\n\n        <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n          Filter\n\n\n\n        </button>\n\n\n\n      </form>\n\n\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card *ngFor="let news of newss">\n\n    <ion-card-header>\n\n      <ion-item text-center text-wrap>\n\n\n\n      \n\n           <h2><b>{{news.title}}</b></h2>\n\n       \n\n           <p *ngIf="news.publishedAt!= null">\n\n              <ion-item>{{news?.publishedAt | momentjs}}</ion-item>\n\n              </p>\n\n\n\n\n\n      </ion-item>\n\n    </ion-card-header>\n\n    <div class="header-banner">\n\n    <p *ngIf= "news.imgUrl!= null && news.imgUrl.length>0" >\n\n        <ion-slides autoplay="5000" loop="true" speed="3000">\n\n            <ion-slide *ngFor="let slide of news.imgUrl">\n\n              <img src="{{slide.url}}" />\n\n            </ion-slide>\n\n          </ion-slides>\n\n      \n\n      </p>\n\n      <p *ngIf= "news.imgUrl== null || news.imgUrl.length==0" ><img src="assets/img/noimage.png" /></p>\n\n                \n\n    </div>\n\n    <ion-card-content>\n\n        \n\n              \n\n        <ion-item> {{news.article}}</ion-item>\n\n         \n\n         \n\n            \n\n      <p *ngIf="news?.user?.id== userDetails.user.id">\n\n        \n\n          <button ion-button color="secondary" icon-left clear small (click)="editNews(news)">\n\n            Edit\n\n\n\n          </button>\n\n        \n\n        \n\n          <button ion-button color="secondary" icon-left clear small (click)="deleteNews(news)">\n\n              delete\n\n  \n\n            </button>\n\n       \n\n\n\n\n\n       \n\n      </p>\n\n      <button ion-button color="secondary" icon-left clear small (click)="viewNews(news)">\n\n          View\n\n\n\n        </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="addNews()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\news\news.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_7__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_news_news__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_product_product__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_product_create_product__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewproduct_viewproduct__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductPage = (function () {
    function ProductPage(navCtrl, app, formBuilder, teamService, otherService, authService, productService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.teamService = teamService;
        this.otherService = otherService;
        this.authService = authService;
        this.productService = productService;
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
        this.searchProductForm = formBuilder.group({
            startDate: [],
            endDate: [],
            title: []
        });
    }
    ProductPage.prototype.addProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__create_product_create_product__["a" /* CreateProductPage */]);
    };
    ProductPage.prototype.chatProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__chat_chat__["a" /* ChatPage */], { toUser: product.user });
    };
    ProductPage.prototype.editProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__create_product_create_product__["a" /* CreateProductPage */], { product: product });
    };
    ProductPage.prototype.viewProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__viewproduct_viewproduct__["a" /* ViewProductPage */], { product: product });
    };
    ProductPage.prototype.deleteProduct = function (product) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        product.active = false;
        this.productService.addProduct(product).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.ionViewDidLoad();
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    ProductPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.productService.getAllProductSearch(this.searchProductForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.products = _this.responseData.results.result;
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
    ProductPage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.productService.getAllProductSearch(this.searchProductForm.value).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.products = _this.responseData.results.result;
            }
            else if (_this.responseData.statusCode == "403") {
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
    return ProductPage;
}());
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\product\product.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true" color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Product </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Search Product\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n\n\n      <form [formGroup]="searchProductForm">\n\n        <ion-item>\n\n          <ion-label floating>Name</ion-label>\n\n          <ion-input formControlName="title" type="text"></ion-input>  </ion-item>\n\n          \n\n        <ion-item>\n\n          <ion-label>Start Date</ion-label>\n\n          <ion-datetime formControlName="startDate" displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>End Date</ion-label>\n\n          <ion-datetime formControlName="endDate" displayFormat="MMM DD, YYYY HH:mm"></ion-datetime>\n\n        </ion-item>\n\n        <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n          Filter\n\n\n\n        </button>\n\n\n\n      </form>\n\n\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card *ngFor="let product of products">\n\n    <ion-card-header>\n\n      <ion-item text-center text-wrap>\n\n\n\n      \n\n           <h2><b>{{product.title}}</b></h2>\n\n       \n\n           <p *ngIf="product.publishedAt!= null">\n\n              <ion-item>{{product?.publishedAt | momentjs}}</ion-item>\n\n              </p>\n\n\n\n\n\n      </ion-item>\n\n    </ion-card-header>\n\n    <div class="header-banner">\n\n    <p *ngIf= "product.imgUrl!= null && product.imgUrl.length>0" >\n\n        <ion-slides autoplay="5000" loop="true" speed="3000">\n\n            <ion-slide *ngFor="let slide of product.imgUrl">\n\n              <img src="{{slide.url}}" />\n\n            </ion-slide>\n\n          </ion-slides>\n\n      \n\n      </p>\n\n      <p *ngIf= "product.imgUrl== null || product.imgUrl.length==0" ><img src="assets/img/noimage.png" /></p>\n\n                \n\n    </div>\n\n    <ion-card-content>\n\n        \n\n              \n\n        <ion-item> {{product.description}}</ion-item>\n\n         \n\n         \n\n            \n\n      <p *ngIf="product.user?.id== userDetails.user.id">\n\n        \n\n          <button ion-button color="secondary" icon-left clear small (click)="editProduct(product)">\n\n            Edit\n\n\n\n          </button>\n\n        \n\n        \n\n          <button ion-button color="secondary" icon-left clear small (click)="deleteProduct(product)">\n\n              delete\n\n  \n\n            </button>\n\n       \n\n\n\n\n\n       \n\n      </p>\n\n      <button ion-button color="secondary" icon-left clear small (click)="viewProduct(product)">\n\n          View\n\n\n\n        </button>\n\n        <p *ngIf="product.user?.id!= userDetails.user.id"></p>\n\n        <button ion-button color="secondary" icon-left clear small (click)="chatProduct(product)">\n\n            Message\n\n \n\n           </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="addProduct()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\product\product.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_7__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_product_product__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(570);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FcmProvider = (function () {
    function FcmProvider(firebaseNative, afs, platform) {
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
    }
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        if (!token)
            return;
        localStorage.setItem('notificationtoken', token);
        var devicesRef = this.afs.collection('devices');
        var docData = {
            token: token,
            userId: 'testUser',
        };
        return devicesRef.doc(token).set(docData);
    };
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    return FcmProvider;
}());
FcmProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]])
], FcmProvider);

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChatRoomPage = (function () {
    function ChatRoomPage(navCtrl, app, formBuilder, teamService, otherService, authService, chatService, loadingController, admob) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.teamService = teamService;
        this.otherService = otherService;
        this.authService = authService;
        this.chatService = chatService;
        this.loadingController = loadingController;
        this.admob = admob;
        this.userPostData = { "user_id": "", "token": "" };
        var data = JSON.parse(localStorage.getItem('userData'));
        console.log("fetch data", data);
        this.user = data.user;
        this.searchChatForm = formBuilder.group({
            startDate: [],
            endDate: [],
            type: []
        });
    }
    ChatRoomPage.prototype.deleteChat = function (chat) {
        var _this = this;
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        chat.active = false;
        this.chatService.addChat(chat).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                _this.ionViewDidLoad();
            }
            else if (_this.responseData.statusCode == "404") {
                loading.dismiss();
                console.log("unauthorrised");
            }
            else {
                loading.dismiss();
                console.log("test others");
            }
        }, function (err) {
            console.log("error", err);
            loading.dismiss();
            // Error log
        });
    };
    ChatRoomPage.prototype.ionViewWillEnter = function () {
        this.ionViewDidLoad();
    };
    ChatRoomPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.chatService.getAllChat().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.chats = _this.responseData.results.result;
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
    ChatRoomPage.prototype.viewChat = function (chat) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */], { room: chat.room });
    };
    ChatRoomPage.prototype.search = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.chatService.getAllChat().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.chats = _this.responseData.results.result;
            }
            else if (_this.responseData.statusCode == "403") {
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
    return ChatRoomPage;
}());
ChatRoomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat-room',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\chat-room\chat-room.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true" color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Chats </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n\n\n  <ion-item class="ItemSpace" ion-item *ngFor="let conversation of chats" (click)="viewChat(conversation)" color="primary">\n\n   \n\n\n\n      <ion-avatar item-start>\n\n\n\n        <div *ngIf="conversation.room.type!= null&&conversation.room.type==\'PRIVATE\'">\n\n          <div *ngFor="let roomUser of conversation.room.roomUsers">\n\n            <div *ngIf="roomUser.user.id!=user.id">\n\n              <div *ngIf="roomUser.user.imgUr!=null">\n\n                <img src="{{roomUser.user.imgUrl}}" alt="user">\n\n              </div>\n\n              <div *ngIf="roomUser.user.imgUr==null">\n\n                <img src="assets/img/batsman.png" />\n\n              </div>\n\n            </div>\n\n        </div>\n\n        </div>\n\n        <div *ngIf="conversation.room.type== null||conversation.room.type!=\'PRIVATE\'">\n\n            <img src="assets/img/batsman.png" />\n\n          </div>\n\n      </ion-avatar>\n\n\n\n      <div *ngIf="conversation.room.type!= null&&conversation.room.type==\'PRIVATE\'">\n\n          <div *ngFor="let roomUser of conversation.room.roomUsers">\n\n            <div *ngIf="roomUser.user.id!=user.id">\n\n                <h2 class="truncate">{{roomUser.user.name}}</h2>\n\n            </div>\n\n        </div>\n\n        </div>\n\n        <div *ngIf="conversation.room.type== null||conversation.room.type!=\'PRIVATE\'">\n\n            <h2 class="truncate">{{conversation.room.name}}</h2>\n\n          </div>\n\n     \n\n      <p [class.not-read]="conversation.is_new" class="truncate" [innerHTML]="conversation.message.text"></p>\n\n\n\n\n\n      <!-- <span *ngIf="conversation.status == 1;then content else other_content">here is ignored</span>\n\n      <ng-template #content>\n\n        <p *ngIf="!conversation.last_message_text" class="truncate read">{{ LABEL_IMAGE | translate }}</p>\n\n        <p *ngIf="conversation.last_message_text" class="truncate not-read" [innerHTML]="conversation.last_message_text"></p>\n\n      </ng-template>\n\n      <ng-template #other_content>\n\n        <p *ngIf="!conversation.last_message_text" class="truncate read">{{ LABEL_IMAGE | translate }}</p>\n\n        <p *ngIf="conversation.last_message_text" class="truncate read" [innerHTML]="conversation.last_message_text"></p>\n\n      </ng-template> -->\n\n\n\n      <ion-note color="dark" item-end>{{conversation.message.createDate| momentjs}}</ion-note>\n\n    \n\n  </ion-item>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\chat-room\chat-room.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_7__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], ChatRoomPage);

//# sourceMappingURL=chat-room.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(718);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__momentjs_momentjs__ = __webpack_require__(753);
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

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_matches_matches__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_stats_stats__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_teams_teams__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_batting_batting__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_classifieds_classifieds__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_news_news__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_viewnews_viewnews__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_list_list__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_bowling_bowling__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_android_permissions__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_welcome_welcome_module__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_my_profile_my_profile__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_my_profile_my_profile_module__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_my_account_my_account__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_my_account_my_account_module__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_previous_matches_previous_matches__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_previous_matches_previous_matches_module__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_my_teams_my_teams__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_my_teams_my_teams_module__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_players_players__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_finance_finance__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_previous_match_details_previous_match_details__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_previous_match_details_previous_match_details_module__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_match_team_match_team__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_match_team_match_team_module__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_finance_finance__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_forgot_forgot__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_forgot_forgot_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_finance_finance_module__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_reset_reset__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_reset_reset_module__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_logout_logout__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_logout_logout_module__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_push__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_create_team_create_team__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_create_team_create_team_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_team_players_team_players__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_team_players_team_players_module__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_create_player_create_player__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_create_player_create_player_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_create_match_create_match__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_create_match_create_match_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_create_ad_create_ad__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_create_ad_create_ad_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_create_news_create_news__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_create_news_create_news_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_team_matches_team_matches__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_team_matches_team_matches_module__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_match_availability_match_availability__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_match_availability_match_availability_module__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_tournaments_tournaments__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_locations_locations__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_tournaments_tournaments_module__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_locations_locations_module__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_create_location_create_location__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_create_location_create_location_module__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_create_tournament_create_tournament__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_create_tournament_create_tournament_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_modeChange_modeChange__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_modeChange_modeChange_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_add_match_team_add_match_team__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_add_match_team_add_match_team_module__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_batting_batting__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_batting_batting_module__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_bowling_bowling__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_bowling_bowling_module__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_previous_match_details_edit_previous_match_details_edit__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_previous_match_details_edit_previous_match_details_edit_module__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__providers_images_images__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__providers_practice_practice__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__ionic_native_camera__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__ionic_native_file_transfer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pages_upload_modal_upload_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_upload_modal_upload_modal_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__pages_team_expense_team_expense__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__pages_team_expense_team_expense_module__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__pages_add_player_expense_add_player_expense__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__pages_add_player_expense_add_player_expense_module__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__pages_add_team_expense_add_team_expense__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__pages_add_team_expense_add_team_expense_module__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__pipes_pipes_module__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__pages_view_player_expenses_view_player_expenses__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__pages_view_player_expenses_view_player_expenses_module__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__pages_create_practice_create_practice__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__pages_practice_practice__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__pages_create_practice_create_practice_module__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__pages_team_practice_team_practice__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__pages_team_practice_team_practice_module__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__pages_practice_availability_practice_availability__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__pages_practice_availability_practice_availability_module__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__providers_classified_classified__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__providers_news_news__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__pages_classified_response_classified_response__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__pages_classified_response_classified_response_module__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__pages_classified_response_create_classified_response_create__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__pages_classified_response_create_classified_response_create_module__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__pages_product_product__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__pages_viewproduct_viewproduct__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__pages_create_product_create_product__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__pages_create_product_create_product_module__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__providers_product_product__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__providers_fcm_fcm__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__ionic_native_firebase__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__pages_chat_room_chat_room__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121_angularfire2__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122_angularfire2_firestore__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__pages_privacy_privacy__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__pages_privacy_privacy_module__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__pages_chat_chat__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__pages_chat_chat_module__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__providers_chat_chat__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__providers_message_message__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__ionic_native_deeplinks__ = __webpack_require__(587);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































































































































var firebase = {
    apiKey: "AIzaSyDuAXZK8lTb8lsbjeSIHWl21kpOKQIUal4",
    authDomain: "crickify-200803.firebaseapp.com",
    databaseURL: "https://crickify-200803.firebaseio.com",
    projectId: "crickify-200803",
    storageBucket: "crickify-200803.appspot.com",
    messagingSenderId: "402670322623"
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
            __WEBPACK_IMPORTED_MODULE_16__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_13__pages_classifieds_classifieds__["a" /* ClassifiedPage */],
            __WEBPACK_IMPORTED_MODULE_101__pages_practice_practice__["a" /* PracticePage */], __WEBPACK_IMPORTED_MODULE_14__pages_news_news__["a" /* NewsPage */], __WEBPACK_IMPORTED_MODULE_15__pages_viewnews_viewnews__["a" /* ViewNewsPage */], __WEBPACK_IMPORTED_MODULE_113__pages_product_product__["a" /* ProductPage */], __WEBPACK_IMPORTED_MODULE_114__pages_viewproduct_viewproduct__["a" /* ViewProductPage */], __WEBPACK_IMPORTED_MODULE_120__pages_chat_room_chat_room__["a" /* ChatRoomPage */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_121_angularfire2__["a" /* AngularFireModule */].initializeApp(firebase),
            __WEBPACK_IMPORTED_MODULE_122_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_54__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_97__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/match-team/match-team.module#MatchTeamPageModule', name: 'MatchTeamPage', segment: 'match-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-match/create-match.module#CreateMatchModule', name: 'CreateMatchPage', segment: 'create-match', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/upload-modal/upload-modal.module#UploadModalPageModule', name: 'UploadModalPage', segment: 'upload-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-news/create-news.module#CreateNewsPageModule', name: 'CreateNewsPage', segment: 'create-news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-product/create-product.module#CreateProductPageModule', name: 'CreateProductPage', segment: 'create-product', priority: 'low', defaultHistory: [] },
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
                    { loadChildren: '../pages/modeChange/modeChange.module#ModeChangeModule', name: 'ModeChangePage', segment: 'modeChange', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-team-expense/add-team-expense.module#AddTeamExpensePageModule', name: 'AddTeamExpensePage', segment: 'add-team-expense', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-player-expense/add-player-expense.module#AddPlayerExpensePageModule', name: 'AddPlayerExpensePage', segment: 'add-player-expense', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/view-player-expenses/view-player-expenses.module#ViewPlayerExpensePageModule', name: 'ViewPlayerExpensePage', segment: 'view-player-expenses', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-practice/create-practice.module#CreatePracticeModule', name: 'CreatePracticePage', segment: 'create-practice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/practice-availability/practice-availability.module#PracticeAvailabilityPageModule', name: 'PracticeAvailabilityPage', segment: 'practice-availability', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team-practice/team-practice.module#TeamPracticePageModule', name: 'TeamPracticePage', segment: 'team-practice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-ad/create-ad.module#CreateAdPageModule', name: 'CreateAdPage', segment: 'create-ad', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/classified-response/classified-response.module#ClassifiedResponsePageModule', name: 'ClassifiedResponsePage', segment: 'classified-response', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/classified-response-create/classified-response-create.module#ClassifiedResponseCreatePageModule', name: 'ClassifiedResponseCreatePage', segment: 'classified-response-create', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_44__pages_finance_finance_module__["a" /* FinancePageModule */], __WEBPACK_IMPORTED_MODULE_43__pages_forgot_forgot_module__["ForgotPageModule"], __WEBPACK_IMPORTED_MODULE_26__pages_login_login_module__["LoginPageModule"], __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup_module__["SignupPageModule"],
            __WEBPACK_IMPORTED_MODULE_28__pages_my_profile_my_profile_module__["MyProfilePageModule"],
            __WEBPACK_IMPORTED_MODULE_30__pages_my_account_my_account_module__["a" /* MyAccountPageModule */],
            __WEBPACK_IMPORTED_MODULE_32__pages_previous_matches_previous_matches_module__["PreviousMatchesPageModule"], __WEBPACK_IMPORTED_MODULE_124__pages_privacy_privacy_module__["a" /* PrivacyPageModule */], __WEBPACK_IMPORTED_MODULE_126__pages_chat_chat_module__["ChatPageModule"],
            __WEBPACK_IMPORTED_MODULE_34__pages_my_teams_my_teams_module__["a" /* MyTeamsPageModule */],
            __WEBPACK_IMPORTED_MODULE_38__pages_previous_match_details_previous_match_details_module__["PreviousMatchDetailsPageModule"], __WEBPACK_IMPORTED_MODULE_116__pages_create_product_create_product_module__["CreateProductPageModule"],
            __WEBPACK_IMPORTED_MODULE_40__pages_match_team_match_team_module__["MatchTeamPageModule"], __WEBPACK_IMPORTED_MODULE_60__pages_create_ad_create_ad_module__["CreateAdPageModule"],
            __WEBPACK_IMPORTED_MODULE_46__pages_reset_reset_module__["ResetPageModule"], __WEBPACK_IMPORTED_MODULE_104__pages_team_practice_team_practice_module__["TeamPracticePageModule"], __WEBPACK_IMPORTED_MODULE_62__pages_create_news_create_news_module__["CreateNewsPageModule"],
            __WEBPACK_IMPORTED_MODULE_48__pages_logout_logout_module__["LogoutPageModule"], __WEBPACK_IMPORTED_MODULE_110__pages_classified_response_classified_response_module__["ClassifiedResponsePageModule"],
            __WEBPACK_IMPORTED_MODULE_22__pages_welcome_welcome_module__["WelcomePageModule"], __WEBPACK_IMPORTED_MODULE_94__pages_add_player_expense_add_player_expense_module__["AddPlayerExpensePageModule"],
            __WEBPACK_IMPORTED_MODULE_51__pages_create_team_create_team_module__["CreateTeamModule"], __WEBPACK_IMPORTED_MODULE_106__pages_practice_availability_practice_availability_module__["PracticeAvailabilityPageModule"],
            __WEBPACK_IMPORTED_MODULE_53__pages_team_players_team_players_module__["a" /* TeamPlayersPageModule */], __WEBPACK_IMPORTED_MODULE_102__pages_create_practice_create_practice_module__["CreatePracticeModule"],
            __WEBPACK_IMPORTED_MODULE_56__pages_create_player_create_player_module__["CreatePlayerModule"],
            __WEBPACK_IMPORTED_MODULE_64__pages_team_matches_team_matches_module__["TeamMatchesPageModule"], __WEBPACK_IMPORTED_MODULE_99__pages_view_player_expenses_view_player_expenses_module__["ViewPlayerExpensePageModule"],
            __WEBPACK_IMPORTED_MODULE_58__pages_create_match_create_match_module__["CreateMatchModule"], __WEBPACK_IMPORTED_MODULE_112__pages_classified_response_create_classified_response_create_module__["ClassifiedResponseCreatePageModule"],
            __WEBPACK_IMPORTED_MODULE_66__pages_match_availability_match_availability_module__["MatchAvailabilityPageModule"], __WEBPACK_IMPORTED_MODULE_90__pages_upload_modal_upload_modal_module__["UploadModalPageModule"],
            __WEBPACK_IMPORTED_MODULE_69__pages_tournaments_tournaments_module__["a" /* TournamentsPageModule */], __WEBPACK_IMPORTED_MODULE_82__pages_bowling_bowling_module__["BowlingPageModule"], __WEBPACK_IMPORTED_MODULE_92__pages_team_expense_team_expense_module__["a" /* TeamExpensePageModule */], __WEBPACK_IMPORTED_MODULE_96__pages_add_team_expense_add_team_expense_module__["AddTeamExpensePageModule"],
            __WEBPACK_IMPORTED_MODULE_70__pages_locations_locations_module__["a" /* LocationsPageModule */], __WEBPACK_IMPORTED_MODULE_72__pages_create_location_create_location_module__["CreateLocationModule"], __WEBPACK_IMPORTED_MODULE_74__pages_create_tournament_create_tournament_module__["CreateTournamentModule"], __WEBPACK_IMPORTED_MODULE_76__pages_modeChange_modeChange_module__["ModeChangeModule"], __WEBPACK_IMPORTED_MODULE_78__pages_add_match_team_add_match_team_module__["AddMatchTeamPageModule"], __WEBPACK_IMPORTED_MODULE_84__pages_previous_match_details_edit_previous_match_details_edit_module__["PreviousMatchDetailsEditPageModule"], __WEBPACK_IMPORTED_MODULE_80__pages_batting_batting_module__["BattingPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_13__pages_classifieds_classifieds__["a" /* ClassifiedPage */], __WEBPACK_IMPORTED_MODULE_115__pages_create_product_create_product__["a" /* CreateProductPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */], __WEBPACK_IMPORTED_MODULE_98__pages_view_player_expenses_view_player_expenses__["a" /* ViewPlayerExpensePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_109__pages_classified_response_classified_response__["a" /* ClassifiedResponsePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_59__pages_create_ad_create_ad__["a" /* CreateAdPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_my_profile_my_profile__["a" /* MyProfilePage */], __WEBPACK_IMPORTED_MODULE_120__pages_chat_room_chat_room__["a" /* ChatRoomPage */], __WEBPACK_IMPORTED_MODULE_123__pages_privacy_privacy__["a" /* PrivacyPage */], __WEBPACK_IMPORTED_MODULE_125__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_my_account_my_account__["a" /* MyAccountPage */], __WEBPACK_IMPORTED_MODULE_114__pages_viewproduct_viewproduct__["a" /* ViewProductPage */], __WEBPACK_IMPORTED_MODULE_113__pages_product_product__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */], __WEBPACK_IMPORTED_MODULE_105__pages_practice_availability_practice_availability__["a" /* PracticeAvailabilityPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_my_teams_my_teams__["a" /* MyTeamsPage */], __WEBPACK_IMPORTED_MODULE_93__pages_add_player_expense_add_player_expense__["a" /* AddPlayerExpensePage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_previous_match_details_previous_match_details__["a" /* PreviousMatchDetailsPage */], __WEBPACK_IMPORTED_MODULE_14__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_match_team_match_team__["a" /* MatchTeamPage */], __WEBPACK_IMPORTED_MODULE_100__pages_create_practice_create_practice__["a" /* CreatePracticePage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_finance_finance__["a" /* FinancePage */], __WEBPACK_IMPORTED_MODULE_103__pages_team_practice_team_practice__["a" /* TeamPracticePage */], __WEBPACK_IMPORTED_MODULE_15__pages_viewnews_viewnews__["a" /* ViewNewsPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_forgot_forgot__["a" /* ForgotPage */], __WEBPACK_IMPORTED_MODULE_95__pages_add_team_expense_add_team_expense__["a" /* AddTeamExpensePage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_reset_reset__["a" /* ResetPage */], __WEBPACK_IMPORTED_MODULE_101__pages_practice_practice__["a" /* PracticePage */], __WEBPACK_IMPORTED_MODULE_111__pages_classified_response_create_classified_response_create__["a" /* ClassifiedResponseCreatePage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_logout_logout__["a" /* LogoutPage */], __WEBPACK_IMPORTED_MODULE_89__pages_upload_modal_upload_modal__["a" /* UploadModalPage */], __WEBPACK_IMPORTED_MODULE_91__pages_team_expense_team_expense__["a" /* TeamExpensePage */], __WEBPACK_IMPORTED_MODULE_61__pages_create_news_create_news__["a" /* CreateNewsPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_create_team_create_team__["a" /* CreateTeamPage */], __WEBPACK_IMPORTED_MODULE_52__pages_team_players_team_players__["a" /* TeamPlayersPage */], __WEBPACK_IMPORTED_MODULE_55__pages_create_player_create_player__["a" /* CreatePlayerPage */], __WEBPACK_IMPORTED_MODULE_63__pages_team_matches_team_matches__["a" /* TeamMatchesPage */], __WEBPACK_IMPORTED_MODULE_57__pages_create_match_create_match__["a" /* CreateMatchPage */], __WEBPACK_IMPORTED_MODULE_65__pages_match_availability_match_availability__["a" /* MatchAvailabilityPage */], __WEBPACK_IMPORTED_MODULE_67__pages_tournaments_tournaments__["a" /* TournamentsPage */], __WEBPACK_IMPORTED_MODULE_68__pages_locations_locations__["a" /* LocationsPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_create_location_create_location__["a" /* CreateLocationPage */], __WEBPACK_IMPORTED_MODULE_73__pages_create_tournament_create_tournament__["a" /* CreateTournamentPage */], __WEBPACK_IMPORTED_MODULE_75__pages_modeChange_modeChange__["a" /* ModeChangePage */], __WEBPACK_IMPORTED_MODULE_77__pages_add_match_team_add_match_team__["a" /* AddMatchTeamPage */], __WEBPACK_IMPORTED_MODULE_83__pages_previous_match_details_edit_previous_match_details_edit__["a" /* PreviousMatchDetailsEditPage */], __WEBPACK_IMPORTED_MODULE_79__pages_batting_batting__["a" /* BattingPage */], __WEBPACK_IMPORTED_MODULE_81__pages_bowling_bowling__["a" /* BowlingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_7__providers_stats_stats__["a" /* StatsService */], __WEBPACK_IMPORTED_MODULE_8__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_35__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_36__providers_finance_finance__["a" /* FinanceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_35__providers_players_players__["a" /* PlayersProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_49__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_9__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_10__providers_batting_batting__["a" /* BattingService */], __WEBPACK_IMPORTED_MODULE_17__providers_bowling_bowling__["a" /* BowlingService */],
            __WEBPACK_IMPORTED_MODULE_85__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_87__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_88__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_86__providers_practice_practice__["a" /* PracticeService */], __WEBPACK_IMPORTED_MODULE_107__providers_classified_classified__["a" /* ClassifiedService */], __WEBPACK_IMPORTED_MODULE_108__providers_news_news__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_117__providers_product_product__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_119__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_118__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_127__providers_chat_chat__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_128__providers_message_message__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_129__ionic_native_deeplinks__["a" /* Deeplinks */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_forgot__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_matches_matches__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_news_news__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewnews_viewnews__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_other_other__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_product_product__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_classified_classified__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__viewproduct_viewproduct__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__privacy_privacy__ = __webpack_require__(136);
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
    function WelcomePage(navCtrl, classifiedService, productService, otherService, newsService, plt, navParams, authService, loadingController, matchService, admob) {
        this.navCtrl = navCtrl;
        this.classifiedService = classifiedService;
        this.productService = productService;
        this.otherService = otherService;
        this.newsService = newsService;
        this.plt = plt;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingController = loadingController;
        this.matchService = matchService;
        this.admob = admob;
        this.getClassifieds();
        this.getNews();
        this.getProducts();
    }
    WelcomePage.prototype.showBanner = function () {
        var bannerConfig = {
            autoShow: true,
            id: 'ca-app-pub-7720772047232561/8941352265'
        };
        var iosBannerConfig = {
            autoShow: true,
            id: 'ca-app-pub-7720772047232561~7847498768'
        };
        if (this.plt.is('android')) {
            this.admob.banner.config(bannerConfig);
        }
        if (this.plt.is('ios')) {
            this.admob.banner.config(iosBannerConfig);
        }
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
    WelcomePage.prototype.privacyPolicy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__privacy_privacy__["a" /* PrivacyPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_forgot__["a" /* ForgotPage */]);
    };
    WelcomePage.prototype.viewNews = function (news) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__viewnews_viewnews__["a" /* ViewNewsPage */], { news: news });
    };
    WelcomePage.prototype.viewProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__viewproduct_viewproduct__["a" /* ViewProductPage */], { product: product });
    };
    WelcomePage.prototype.getNews = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.newsService.getAllNewsSearch(null).then(function (result) {
            _this.responseNewsData = result;
            console.log(_this.responseNewsData);
            if (_this.responseNewsData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseNewsData.results.result);
                _this.newss = _this.responseNewsData.results.result;
            }
            else if (_this.responseNewsData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseNewsData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    WelcomePage.prototype.getProducts = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.productService.getAllProductSearch(null).then(function (result) {
            _this.responseProductData = result;
            console.log(_this.responseProductData);
            if (_this.responseProductData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.responseProductData.results.result);
                _this.products = _this.responseProductData.results.result;
            }
            else if (_this.responseProductData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.responseProductData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    WelcomePage.prototype.getClassifieds = function () {
        var _this = this;
        console.log('ionViewDidLoad home page');
        var loading = this.loadingController.create({
            content: 'Please wait...'
        });
        loading.present();
        this.classifiedService.getAllClassifiedSearch(null).then(function (result) {
            _this.classifiedsresponseData = result;
            console.log(_this.classifiedsresponseData);
            if (_this.classifiedsresponseData.statusCode == '200') {
                loading.dismiss();
                console.log("test 200");
                console.log("result", _this.classifiedsresponseData.results.result);
                _this.classifieds = _this.classifiedsresponseData.results.result;
            }
            else if (_this.classifiedsresponseData.statusCode == "404") {
                console.log("unauthorrised");
                loading.dismiss();
            }
            else {
                loading.dismiss();
                console.log("error", _this.classifiedsresponseData);
            }
        }, function (err) {
            loading.dismiss();
            // Error log
        });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding class="login-background">\n\n  \n\n  <ion-grid>\n\n    <ion-row >\n\n      <ion-col col-3>\n\n        <ion-item color="primary"><img src="assets/img/icon.png" hieght="50" /></ion-item>\n\n      </ion-col>\n\n      <ion-col col-6 center>\n\n        <ion-label color="white" stacked class="my-label">\n\n          Crickify\n\n        </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col center text-center>\n\n        <button ion-button full color="success" (click)="signup()">Sign up</button>\n\n      </ion-col>\n\n\n\n\n\n      <ion-col center text-center>\n\n        <button ion-button full color="lightText" (click)="login()">Log in</button>\n\n      </ion-col>\n\n\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-label color="white" stacked class="my-label">\n\n    Cricket News\n\n  </ion-label>\n\n  <ion-scroll scrollX="true" direction="x">\n\n      <ion-card class="scrollcard" color="primary" *ngFor="let news of newss| slice:0:5;">\n\n  \n\n        <ion-card-header>\n\n          <ion-item text-center text-wrap>\n\n            <b>{{news.title}} </b>\n\n          </ion-item>\n\n        </ion-card-header>\n\n        <p *ngIf="news.imgUrl!= null && news.imgUrl.length>0">\n\n           \n\n                <img src="{{news.imgUrl[0].url}} " height="150" />\n\n           \n\n  \n\n          </p>\n\n          <p *ngIf="news.imgUrl== null || news.imgUrl.length==0">\n\n            <img src="assets/img/noimage.png" height="150" />\n\n          </p>\n\n        <ion-card-content>\n\n            <ion-item> {{news.article}}</ion-item>\n\n            <button ion-button color="secondary" icon-left clear small (click)="viewNews(news)">\n\n              View\n\n    \n\n            </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-scroll>\n\n  <p *ngIf="products!= null && products.length>0">\n\n    <ion-label color="white" stacked class="my-label">\n\n      Cricket Market\n\n    </ion-label>\n\n\n\n\n\n\n\n    <ion-scroll scrollX="true" direction="x">\n\n      <ion-card class="scrollcard" color="primary" *ngFor="let product of products| slice:0:3;">\n\n\n\n        <ion-card-header>\n\n          <ion-item text-center text-wrap>\n\n            <b>{{product?.title}} </b>\n\n          </ion-item>\n\n        </ion-card-header>\n\n        \n\n  \n\n          <ion-card-content>\n\n              <p *ngIf="product.imgUrl!= null && product.imgUrl.length>0">\n\n           \n\n                  <img src="{{product.imgUrl[0].url}} " height="150" />\n\n             \n\n      \n\n            </p>\n\n            <p *ngIf="product.imgUrl== null || product.imgUrl.length==0">\n\n              <img src="assets/img/noimage.png" height="150" />\n\n            </p>\n\n          <ion-item text-center text-wrap>\n\n            <p><b>${{product.price}}</b></p>\n\n                <button ion-button color="secondary" icon-left clear small (click)="viewProduct(product)">\n\n                    View\n\n          \n\n                  </button>\n\n            \n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-scroll>\n\n  </p>\n\n\n\n  <p *ngIf="classifieds!= null && classifieds.length>0">\n\n      <ion-label color="white" stacked class="my-label">\n\n        Classifieds\n\n      </ion-label>\n\n  \n\n  \n\n  \n\n      <ion-scroll scrollX="true" direction="x">\n\n        <ion-card class="scrollcard" color="primary" *ngFor="let classified of classifieds| slice:0:3;">\n\n  \n\n          <ion-card-header>\n\n            <ion-item text-center text-wrap>\n\n              <b>{{classified?.type}} </b>\n\n            </ion-item>\n\n          </ion-card-header>\n\n          \n\n    \n\n            <ion-card-content>\n\n                  <ion-item text-center text-wrap>\n\n                <ion-item> Description: {{classified.description}}</ion-item>\n\n                <p *ngIf="classified.team!= null">\n\n                <ion-item>Team: {{classified.team?.teamname}}</ion-item></p>\n\n                <p *ngIf="classified.classifiedTime!= null">\n\n                  <ion-item>Date: {{classified?.classifiedTime | momentjs}}</ion-item>\n\n                  </p>\n\n                  <p *ngIf="classified.location!= null">\n\n                    <ion-item>Location: {{classified.location?.name}}, {{classified.location?.address}}</ion-item>\n\n  </p>\n\n  \n\n                   \n\n              </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-scroll>\n\n    </p>\n\n  <ion-label color="white" stacked class="my-label">\n\n    Batting Performances\n\n  </ion-label>\n\n\n\n\n\n\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card class="scrollcard" color="primary" *ngFor="let batting of battings| slice:0:3;">\n\n\n\n      <ion-card-header>\n\n        <ion-item text-center text-wrap>\n\n          <b>{{batting.player?.name}} </b>\n\n        </ion-item>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n\n\n        <p *ngIf="batting.player?.imgUrl!= null">\n\n          <img height="150" src="{{batting.player?.imgUrl}}" />\n\n        </p>\n\n\n\n        <p *ngIf="batting.player?.imgUrl == null">\n\n          <img height="150" src="assets/img/batsman.png" />\n\n        </p>\n\n\n\n        <ion-item text-center text-wrap>\n\n          <p>{{batting.run}}({{batting.ball}})</p>\n\n\n\n          <p>{{batting.match.team.teamname}} vs {{batting.match.opponent}}\n\n          </p>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-scroll>\n\n\n\n\n\n\n\n\n\n  <ion-label color="white" stacked class="my-label">\n\n    Bowling Performances\n\n  </ion-label>\n\n\n\n  <ion-scroll scrollX="true" direction="x">\n\n    <ion-card class="scrollcard" color="primary" *ngFor="let bowling of bowlings| slice:0:3;">\n\n\n\n      <ion-card-header>\n\n        <ion-item text-center text-wrap>\n\n          <b>{{bowling.player.name}} </b>\n\n        </ion-item>\n\n\n\n      </ion-card-header>\n\n      <p *ngIf="bowling.player.imgUrl!= null">\n\n        <img height="150" src="{{bowling.player.imgUrl}}" />\n\n      </p>\n\n\n\n      <p *ngIf="bowling.player.imgUrl == null">\n\n        <img height="150" src="assets/img/bowler.png" />\n\n      </p>\n\n\n\n      <ion-card-content>\n\n        <ion-item text-center text-wrap>\n\n          <p>{{bowling.wickets}}/{{bowling.run}}</p>\n\n          <p>{{bowling.match.team.teamname}} vs {{bowling.match.opponent}}\n\n          </p>\n\n        </ion-item>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-scroll>\n\n\n\n\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n\n\n  <ion-card color="primary">\n\n    <ion-card-header>\n\n\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row color="primary" row-20 center text-center>\n\n          <ion-col>\n\n            <h2>About Crickify</h2>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row row-60 center text-center>\n\n          <ion-col>\n\n            Manage your entire cricket landscape. From league schedules to player registrations, Player availability to result management,\n\n            all available under one convenient account.Finance Mangement for the players.Take the hassle out of your club\n\n            or league site. With integrated cricket data it will always be up to date and looking sharp.Announce your team\n\n            and get your best team through interface.\n\n          </ion-col>\n\n          <br>\n\n          <br> </ion-row>\n\n        <ion-row row-20 center text-center>\n\n          <ion-col>\n\n            <h2>What are you waiting for?! Join us with Crickify today.</h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n\n\n  <ion-card color="primary">\n\n    <ion-card-header>\n\n\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-grid color="primary">\n\n        <ion-row center text-center>\n\n          <ion-col>\n\n            <h2>Contact Us</h2>\n\n          </ion-col>\n\n        </ion-row>\n\n        <br>\n\n        <br>\n\n        <ion-row center text-center>\n\n          <ion-col>\n\n            <b>Website Issues or Suggestions? Contact US @ support@crickify.com</b>\n\n          </ion-col>\n\n          <br>\n\n          <br>\n\n\n\n        </ion-row>\n\n        <ion-row center text-center>\n\n          <ion-col>\n\n            Copyright © 2018 All rights reserved by Crickify\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-item>\n\n          <button ion-button color="secondary" icon-left clear small (click)="privacyPolicy()">\n\n           Privacy Policy\n\n\n\n          </button>\n\n        </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_13__providers_classified_classified__["a" /* ClassifiedService */], __WEBPACK_IMPORTED_MODULE_12__providers_product_product__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_11__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_9__providers_news_news__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__["a" /* AdMobFree */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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
var playerapiUrl = 'https://crickify.herokuapp.com/player';
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
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    StatsService.prototype.getStats = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/stats', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
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

/***/ 753:
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

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 363,
	"./af.js": 363,
	"./ar": 364,
	"./ar-dz": 365,
	"./ar-dz.js": 365,
	"./ar-kw": 366,
	"./ar-kw.js": 366,
	"./ar-ly": 367,
	"./ar-ly.js": 367,
	"./ar-ma": 368,
	"./ar-ma.js": 368,
	"./ar-sa": 369,
	"./ar-sa.js": 369,
	"./ar-tn": 370,
	"./ar-tn.js": 370,
	"./ar.js": 364,
	"./az": 371,
	"./az.js": 371,
	"./be": 372,
	"./be.js": 372,
	"./bg": 373,
	"./bg.js": 373,
	"./bm": 374,
	"./bm.js": 374,
	"./bn": 375,
	"./bn.js": 375,
	"./bo": 376,
	"./bo.js": 376,
	"./br": 377,
	"./br.js": 377,
	"./bs": 378,
	"./bs.js": 378,
	"./ca": 379,
	"./ca.js": 379,
	"./cs": 380,
	"./cs.js": 380,
	"./cv": 381,
	"./cv.js": 381,
	"./cy": 382,
	"./cy.js": 382,
	"./da": 383,
	"./da.js": 383,
	"./de": 384,
	"./de-at": 385,
	"./de-at.js": 385,
	"./de-ch": 386,
	"./de-ch.js": 386,
	"./de.js": 384,
	"./dv": 387,
	"./dv.js": 387,
	"./el": 388,
	"./el.js": 388,
	"./en-au": 389,
	"./en-au.js": 389,
	"./en-ca": 390,
	"./en-ca.js": 390,
	"./en-gb": 391,
	"./en-gb.js": 391,
	"./en-ie": 392,
	"./en-ie.js": 392,
	"./en-il": 393,
	"./en-il.js": 393,
	"./en-nz": 394,
	"./en-nz.js": 394,
	"./eo": 395,
	"./eo.js": 395,
	"./es": 396,
	"./es-do": 397,
	"./es-do.js": 397,
	"./es-us": 398,
	"./es-us.js": 398,
	"./es.js": 396,
	"./et": 399,
	"./et.js": 399,
	"./eu": 400,
	"./eu.js": 400,
	"./fa": 401,
	"./fa.js": 401,
	"./fi": 402,
	"./fi.js": 402,
	"./fo": 403,
	"./fo.js": 403,
	"./fr": 404,
	"./fr-ca": 405,
	"./fr-ca.js": 405,
	"./fr-ch": 406,
	"./fr-ch.js": 406,
	"./fr.js": 404,
	"./fy": 407,
	"./fy.js": 407,
	"./gd": 408,
	"./gd.js": 408,
	"./gl": 409,
	"./gl.js": 409,
	"./gom-latn": 410,
	"./gom-latn.js": 410,
	"./gu": 411,
	"./gu.js": 411,
	"./he": 412,
	"./he.js": 412,
	"./hi": 413,
	"./hi.js": 413,
	"./hr": 414,
	"./hr.js": 414,
	"./hu": 415,
	"./hu.js": 415,
	"./hy-am": 416,
	"./hy-am.js": 416,
	"./id": 417,
	"./id.js": 417,
	"./is": 418,
	"./is.js": 418,
	"./it": 419,
	"./it.js": 419,
	"./ja": 420,
	"./ja.js": 420,
	"./jv": 421,
	"./jv.js": 421,
	"./ka": 422,
	"./ka.js": 422,
	"./kk": 423,
	"./kk.js": 423,
	"./km": 424,
	"./km.js": 424,
	"./kn": 425,
	"./kn.js": 425,
	"./ko": 426,
	"./ko.js": 426,
	"./ky": 427,
	"./ky.js": 427,
	"./lb": 428,
	"./lb.js": 428,
	"./lo": 429,
	"./lo.js": 429,
	"./lt": 430,
	"./lt.js": 430,
	"./lv": 431,
	"./lv.js": 431,
	"./me": 432,
	"./me.js": 432,
	"./mi": 433,
	"./mi.js": 433,
	"./mk": 434,
	"./mk.js": 434,
	"./ml": 435,
	"./ml.js": 435,
	"./mn": 436,
	"./mn.js": 436,
	"./mr": 437,
	"./mr.js": 437,
	"./ms": 438,
	"./ms-my": 439,
	"./ms-my.js": 439,
	"./ms.js": 438,
	"./mt": 440,
	"./mt.js": 440,
	"./my": 441,
	"./my.js": 441,
	"./nb": 442,
	"./nb.js": 442,
	"./ne": 443,
	"./ne.js": 443,
	"./nl": 444,
	"./nl-be": 445,
	"./nl-be.js": 445,
	"./nl.js": 444,
	"./nn": 446,
	"./nn.js": 446,
	"./pa-in": 447,
	"./pa-in.js": 447,
	"./pl": 448,
	"./pl.js": 448,
	"./pt": 449,
	"./pt-br": 450,
	"./pt-br.js": 450,
	"./pt.js": 449,
	"./ro": 451,
	"./ro.js": 451,
	"./ru": 452,
	"./ru.js": 452,
	"./sd": 453,
	"./sd.js": 453,
	"./se": 454,
	"./se.js": 454,
	"./si": 455,
	"./si.js": 455,
	"./sk": 456,
	"./sk.js": 456,
	"./sl": 457,
	"./sl.js": 457,
	"./sq": 458,
	"./sq.js": 458,
	"./sr": 459,
	"./sr-cyrl": 460,
	"./sr-cyrl.js": 460,
	"./sr.js": 459,
	"./ss": 461,
	"./ss.js": 461,
	"./sv": 462,
	"./sv.js": 462,
	"./sw": 463,
	"./sw.js": 463,
	"./ta": 464,
	"./ta.js": 464,
	"./te": 465,
	"./te.js": 465,
	"./tet": 466,
	"./tet.js": 466,
	"./tg": 467,
	"./tg.js": 467,
	"./th": 468,
	"./th.js": 468,
	"./tl-ph": 469,
	"./tl-ph.js": 469,
	"./tlh": 470,
	"./tlh.js": 470,
	"./tr": 471,
	"./tr.js": 471,
	"./tzl": 472,
	"./tzl.js": 472,
	"./tzm": 473,
	"./tzm-latn": 474,
	"./tzm-latn.js": 474,
	"./tzm.js": 473,
	"./ug-cn": 475,
	"./ug-cn.js": 475,
	"./uk": 476,
	"./uk.js": 476,
	"./ur": 477,
	"./ur.js": 477,
	"./uz": 478,
	"./uz-latn": 479,
	"./uz-latn.js": 479,
	"./uz.js": 478,
	"./vi": 480,
	"./vi.js": 480,
	"./x-pseudo": 481,
	"./x-pseudo.js": 481,
	"./yo": 482,
	"./yo.js": 482,
	"./zh-cn": 483,
	"./zh-cn.js": 483,
	"./zh-hk": 484,
	"./zh-hk.js": 484,
	"./zh-tw": 485,
	"./zh-tw.js": 485
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
webpackContext.id = 755;

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(134);
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
            else if (_this.responseData.statusCode == '403') {
                loading.dismiss();
                var alert_1 = _this.alertController.create({
                    title: 'Verification Required',
                    subTitle: 'Please verify the account to login',
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
            else {
                loading.dismiss();
                var alert_2 = _this.alertController.create({
                    title: 'Wrong login/password',
                    subTitle: 'Login and password combination doesnt seem to work. Please try again or reset your password',
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary"> \n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Login\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        \n\n          <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n\n          </ion-item>\n\n<ion-item>\n\n          <button ion-button full color="success" (click)="login()">Login</button></ion-item>\n\n  <ion-item>         <button ion-button full color="success" (click)="forgot()">Forgot Password</button></ion-item>\n\n   <ion-item>         <button ion-button full color="success" (click)="signup()">Sign Up</button></ion-item>\n\n\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RelativeTime = (function () {
    function RelativeTime() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTime.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default()(new Date(value), { addSuffix: true });
    };
    return RelativeTime;
}());
RelativeTime = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'relativeTime',
    })
], RelativeTime);

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_team_match_team__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__ = __webpack_require__(12);
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
        if (!localStorage.getItem('notificationtoken')) {
            this.authService.postNotification(localStorage.getItem('notificationtoken')).then(function (result) {
                console.log("success");
            }, function (err) {
                console.log("error");
            });
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
        selector: 'page-home',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar [hideBackButton]="true" color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Upcoming Matches </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="appBackground">\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Search Matches\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n        <form [formGroup]="searchMatchesForm">\n\n     \n\n            <ion-item>\n\n                <ion-label>Team</ion-label>\n\n                <ion-select formControlName="teamId"  >\n\n                  <ion-option *ngFor="let key of teams" [value]="key.id">{{key.teamname}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label>Tournament</ion-label>\n\n                  <ion-select formControlName="tournamentId"  >\n\n                    <ion-option *ngFor="let key of tournaments" [value]="key.id">{{key.name}}</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n     <button ion-button color="secondary" icon-left clear small (click)="search()">\n\n                Filter\n\n                \n\n              </button>\n\n     \n\n        </form>\n\n      \n\n    \n\n    </ion-card-content>\n\n    </ion-card>\n\n  <ion-card *ngFor="let match of matches">\n\n    <ion-card-header>\n\n      <b><h1>{{match.match.team.teamname}} versus\n\n      {{match.match.opponent}}</h1></b>\n\n      <p>{{match.match.tournament?.name}}</p>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <p><b>{{match.match.matchTime | momentjs}}</b></p>\n\n      <p>{{match.match.location?.name}}, {{match.match.location?.address}}</p>\n\n	  \n\n         <ion-label>\n\n          Select Attendance\n\n        </ion-label>\n\n		\n\n		   <ion-item>\n\n      <ion-select [(ngModel)]="match.status" (ionChange)="availabilitySelected($event, match)">\n\n          <ion-option value="0">Not Provided</ion-option>\n\n        <ion-option value="1">IN</ion-option>\n\n        <ion-option value="2">OUT</ion-option>\n\n        <ion-option value="3">Waitlist</ion-option>\n\n      </ion-select>\n\n	 \n\n    </ion-item>\n\n	\n\n      <ion-item>\n\n	  \n\n	      <ion-label floating>Comments</ion-label>\n\n    <ion-input [(ngModel)]="match.comments" (ionChange)="availabilitySelected($event, match)"></ion-input>\n\n	 </ion-item>\n\n	 <button ion-button icon-left clear small (click)="goToMatchTeam(match.id)">\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>Match Team</div>\n\n          </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_7__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_8__providers_other_other__["a" /* OtherService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_matches_matches__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_admob_free__["a" /* AdMobFree */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker__ = __webpack_require__(818);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmojiPickerComponentModule = (function () {
    function EmojiPickerComponentModule() {
    }
    return EmojiPickerComponentModule;
}());
EmojiPickerComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]
        ]
    })
], EmojiPickerComponentModule);

//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* forwardRef */])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    return EmojiPickerComponent;
}());
EmojiPickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'emoji-picker',
        providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"D:\ionicapp\crickify\src\components\emoji-picker\emoji-picker.html"*/'<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"D:\ionicapp\crickify\src\components\emoji-picker\emoji-picker.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji__["a" /* EmojiProvider */]])
], EmojiPickerComponent);

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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



var apiUrl = 'https://crickify.herokuapp.com/classified';
var apiresponseUrl = 'https://crickify.herokuapp.com/classifiedresponse';
var isAuthenticated;
var ClassifiedService = (function () {
    function ClassifiedService(http) {
        this.http = http;
    }
    ClassifiedService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('userData')).user.token;
    };
    ClassifiedService.prototype.getAllAdvetisements = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/classifieds', { headers: headers })
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
    ClassifiedService.prototype.getAllClassifiedAvailabilityFilter = function (filter) {
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
            _this.http.get(apiresponseUrl + '/classifiedresponse/response?' + urlSearchParams, { headers: headers })
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
    ClassifiedService.prototype.getAllClassifiedSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var urlSearchParams = new URLSearchParams();
            for (var key in filter) {
                if (filter[key] != null) {
                    urlSearchParams.append(key, filter[key]);
                }
            }
            _this.http.get(apiUrl + '/classifieds/search?' + urlSearchParams)
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
    ClassifiedService.prototype.getPreviousClassifieds = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiUrl + '/past', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ClassifiedService.prototype.getClassifiedAvailability = function (classifiedId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiresponseUrl + '/' + classifiedId + '/classifiedresponse/', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ClassifiedService.prototype.getClassifiedResponseForUser = function (classifiedId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.get(apiresponseUrl + '/' + classifiedId + '/classifiedresponsebyuser', { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                if (res.json().statusCode == '200') {
                }
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ClassifiedService.prototype.postAvailability = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.post(apiUrl + '/classified/availability', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ClassifiedService.prototype.updateResponse = function (classified, player, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("request", JSON.stringify(status));
            _this.http.post(apiUrl + '/classified/' + classified + '/availability/' + player.id, status, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast avail post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ClassifiedService.prototype.addClassified = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiUrl + '/classified', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ClassifiedService.prototype.addClassifiedResponse = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            console.log("requeset", JSON.stringify(data));
            _this.http.post(apiresponseUrl + '/classifiedresponse', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    ClassifiedService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            _this.http.delete(apiUrl + '/classified/' + id, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
                console.log("mast post resp", res.json());
            }, function (err) {
                reject(err);
                console.log("error", err);
            });
        });
    };
    return ClassifiedService;
}());
ClassifiedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ClassifiedService);

//# sourceMappingURL=classified.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
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
            _this.http.get(apiUrl + '/playerExpenseUser', { headers: headers })
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
            _this.http.get(apiUrl + '/playerExpense' + id, { headers: headers })
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
    FinanceProvider.prototype.getTeamPlayerExpenses = function (filter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.set('Content-Type', 'application/json');
            headers.set("token", _this.getToken());
            var urlSearchParams = new URLSearchParams();
            for (var key in filter) {
                if (filter[key] !== null) {
                    urlSearchParams.append(key, filter[key]);
                }
            }
            _this.http.get(apiUrl + '/playerExpense?' + urlSearchParams, { headers: headers })
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
            _this.http.put(apiUrl + '/playerExpense/' + data.id, JSON.stringify(data), { headers: headers })
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

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_matches_team_matches__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_finance_finance__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_team_players_team_players__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_push__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tournaments_tournaments__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_locations_locations__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_modeChange_modeChange__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_team_expense_team_expense__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_view_player_expenses_view_player_expenses__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_practice_practice__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_team_practice_team_practice__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_classifieds_classifieds__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_news_news__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_multi_image_upload_multi_image_upload__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_product_product__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_fcm_fcm__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_rxjs_operators__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_firebase__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_privacy_privacy__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_chat_chat__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_chat_room_chat_room__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_deeplinks__ = __webpack_require__(587);
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
    function MyApp(deeplinks, firebase, events, toastCtrl, fcm, platform, statusBar, splashScreen, androidPermissions, push, alertCtrl) {
        var _this = this;
        this.deeplinks = deeplinks;
        this.events = events;
        this.fcm = fcm;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.type = "normal";
        platform.ready().then(function () {
            _this.deeplinks.route({
                '/about-us': __WEBPACK_IMPORTED_MODULE_31__pages_privacy_privacy__["a" /* PrivacyPage */]
            }).subscribe(function (match) {
                console.log('Successfully matched route', match);
            }, function (nomatch) {
                console.error('Got a deeplink that didn\'t match', nomatch);
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                // Get a FCM token
                fcm.getToken();
                // Listen to incoming messages
                fcm.listenToNotifications().pipe(Object(__WEBPACK_IMPORTED_MODULE_29_rxjs_operators__["tap"])(function (msg) {
                    // show a toast
                    var toast = toastCtrl.create({
                        message: msg['body'],
                        duration: 3000
                    });
                    toast.present();
                }))
                    .subscribe();
            }
            androidPermissions.requestPermissions([androidPermissions.PERMISSION.INTERNET,
                androidPermissions.PERMISSION.ACCESS_NETWORK_STATE,
                androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
                androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
            ]);
        });
        this.initializeApp();
        this.adminPages = [{ title: 'Matches', component: __WEBPACK_IMPORTED_MODULE_10__pages_team_matches_team_matches__["a" /* TeamMatchesPage */] },
            { title: 'Practice', component: __WEBPACK_IMPORTED_MODULE_23__pages_team_practice_team_practice__["a" /* TeamPracticePage */] },
            { title: 'Players', component: __WEBPACK_IMPORTED_MODULE_14__pages_team_players_team_players__["a" /* TeamPlayersPage */] },
            { title: 'Team Stats', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Send Message', component: __WEBPACK_IMPORTED_MODULE_32__pages_chat_chat__["a" /* ChatPage */] },
            { title: 'Tournament', component: __WEBPACK_IMPORTED_MODULE_17__pages_tournaments_tournaments__["a" /* TournamentsPage */] },
            { title: 'Change Mode', component: __WEBPACK_IMPORTED_MODULE_19__pages_modeChange_modeChange__["a" /* ModeChangePage */] },
            { title: 'Team Expense', component: __WEBPACK_IMPORTED_MODULE_20__pages_team_expense_team_expense__["a" /* TeamExpensePage */] },
            { title: 'Player Payment Details', component: __WEBPACK_IMPORTED_MODULE_21__pages_view_player_expenses_view_player_expenses__["a" /* ViewPlayerExpensePage */] },
            { title: 'Location', component: __WEBPACK_IMPORTED_MODULE_18__pages_locations_locations__["a" /* LocationsPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__["a" /* LogoutPage */] },
        ];
        this.normalPages = [
            { title: 'Upcoming Matches', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Upcoming Practice', component: __WEBPACK_IMPORTED_MODULE_22__pages_practice_practice__["a" /* PracticePage */] },
            { title: 'Cricket News', component: __WEBPACK_IMPORTED_MODULE_25__pages_news_news__["a" /* NewsPage */] },
            { title: 'Cricket Market', component: __WEBPACK_IMPORTED_MODULE_27__pages_product_product__["a" /* ProductPage */] },
            { title: 'Cricket Classifieds', component: __WEBPACK_IMPORTED_MODULE_24__pages_classifieds_classifieds__["a" /* ClassifiedPage */] },
            { title: 'Messages', component: __WEBPACK_IMPORTED_MODULE_33__pages_chat_room_chat_room__["a" /* ChatRoomPage */] },
            { title: 'Completed Matches', component: __WEBPACK_IMPORTED_MODULE_9__pages_previous_matches_previous_matches__["a" /* PreviousMatchesPage */] },
            { title: 'Change Mode', component: __WEBPACK_IMPORTED_MODULE_19__pages_modeChange_modeChange__["a" /* ModeChangePage */] },
            { title: 'Account Details', component: __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__["a" /* MyAccountPage */] },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__["a" /* MyProfilePage */] },
            { title: 'Finance Details', component: __WEBPACK_IMPORTED_MODULE_11__pages_finance_finance__["a" /* FinancePage */] },
            { title: 'Update Password', component: __WEBPACK_IMPORTED_MODULE_12__pages_reset_reset__["a" /* ResetPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_13__pages_logout_logout__["a" /* LogoutPage */] },
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
    MyApp.prototype.initializeApp = function () {
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
], MyApp.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_26__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_26__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */])
], MyApp.prototype, "multiImageUpload", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionicapp\crickify\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\ionicapp\crickify\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_34__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_28__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_message__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatPage = (function () {
    function ChatPage(navParams, chatService, events, roomService) {
        this.chatService = chatService;
        this.events = events;
        this.roomService = roomService;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.room = navParams.get('room');
        this.toUser = navParams.get('toUser');
        this.team = JSON.parse(localStorage.getItem('team'));
        if (this.room == null && this.toUser != null) {
            this.searchPrivateChat(this.toUser.id);
        }
        else if (this.room == null && this.team != null) {
            this.searchTeamChatRoom(this.team.id);
        }
        var data = JSON.parse(localStorage.getItem('userData'));
        this.user = data.user;
    }
    ChatPage.prototype.searchTeamChatRoom = function (id) {
        var _this = this;
        console.log('ionViewDidLoad home page');
        this.roomService.getTeamChat(id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.room = _this.responseData.results.result;
                if (_this.room != null) {
                    _this.getMsg();
                }
            }
            else if (_this.responseData.statusCode == "403") {
                console.log("unauthorrised");
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    ChatPage.prototype.searchPrivateChat = function (id) {
        var _this = this;
        console.log('ionViewDidLoad home page');
        this.roomService.getPrivateChat(id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.statusCode == '200') {
                console.log("test 200");
                console.log("result", _this.responseData.results.result);
                _this.room = _this.responseData.results.result;
                if (_this.room != null) {
                    _this.getMsg();
                }
            }
            else if (_this.responseData.statusCode == "403") {
                console.log("unauthorrised");
            }
            else {
                console.log("error", _this.responseData);
            }
        }, function (err) {
            // Error log
        });
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.room != null) {
            this.getMsg();
        }
        // Subscribe to received  new message events
        this.events.subscribe('chat:received', function (msg) {
            _this.pushNewMsg(msg);
        });
    };
    ChatPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.getMsg = function () {
        var _this = this;
        // Get mock message list
        return this.chatService
            .getAllMessage(this.room.id)
            .subscribe(function (res) {
            if (res != null) {
                _this.msgList = res;
                _this.scrollToBottom();
            }
        });
    };
    /**
     * @name sendMsg
     */
    ChatPage.prototype.sendMsg = function () {
        if (!this.editorMsg.trim())
            return;
        var newMsg = {
            room: this.room,
            user: this.user,
            text: this.editorMsg
        };
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.focus();
        }
        this.chatService.addMessage(newMsg)
            .then(function () {
        });
    };
    /**
     * @name pushNewMsg
     * @param msg
     */
    ChatPage.prototype.pushNewMsg = function (msg) {
        this.msgList.push(msg);
        this.scrollToBottom();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    ChatPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], ChatPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('chat_input'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ChatPage.prototype, "messageInput", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\chat\chat.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="message-wrap">\n\n    <div *ngFor="let msg of msgList"\n         class="message"\n         [class.left]=" msg.user.id != user.id "\n         [class.right]=" msg.user.id === user.id ">\n      <img class="user-img" [src]="msg.user.imgUrl" alt="" src="">\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            {{msg.user.name}}&nbsp;&nbsp;&nbsp;{{msg.createDate | relativeTime}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{msg.text}}</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n  <div class="input-wrap">\n    <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n      <ion-icon name="md-happy"></ion-icon>\n    </button>\n    <textarea #chat_input\n              placeholder="Text Input"\n              [(ngModel)]="editorMsg"\n              (keyup.enter)="sendMsg()"\n              (focusin)="onFocus()">\n    </textarea>\n    <button ion-button clear icon-only item-right (click)="sendMsg()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n  </div>\n  <emoji-picker [(ngModel)]="editorMsg"></emoji-picker>\n</ion-footer>\n'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_message_message__["a" /* MessageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatService */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_account__ = __webpack_require__(247);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_account__["a" /* MyAccountPage */]),
        ],
    })
], MyAccountPageModule);

//# sourceMappingURL=my-account.module.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_teams__ = __webpack_require__(214);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_teams__["a" /* MyTeamsPage */]),
        ],
    })
], MyTeamsPageModule);

//# sourceMappingURL=my-teams.module.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finance__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(59);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finance__["a" /* FinancePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], FinancePageModule);

//# sourceMappingURL=finance.module.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPlayersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_players__ = __webpack_require__(249);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_players__["a" /* TeamPlayersPage */]),
        ],
    })
], TeamPlayersPageModule);

//# sourceMappingURL=team-players.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments__ = __webpack_require__(250);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tournaments__["a" /* TournamentsPage */]),
        ],
    })
], TournamentsPageModule);

//# sourceMappingURL=tournaments.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locations__ = __webpack_require__(251);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__locations__["a" /* LocationsPage */]),
        ],
    })
], LocationsPageModule);

//# sourceMappingURL=locations.module.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_expense__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(59);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team_expense__["a" /* TeamExpensePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
    })
], TeamExpensePageModule);

//# sourceMappingURL=team-expense.module.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hsuanlee on 2017/4/4.
 */



var PrivacyPageModule = (function () {
    function PrivacyPageModule() {
    }
    return PrivacyPageModule;
}());
PrivacyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__privacy__["a" /* PrivacyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__privacy__["a" /* PrivacyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__privacy__["a" /* PrivacyPage */]
        ]
    })
], PrivacyPageModule);

//# sourceMappingURL=privacy.module.js.map

/***/ })

},[588]);
//# sourceMappingURL=main.js.map