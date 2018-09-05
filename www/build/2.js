webpackJsonp([2],{

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewsPageModule", function() { return CreateNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_news__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_multi_image_upload_multi_image_upload__ = __webpack_require__(137);
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
            __WEBPACK_IMPORTED_MODULE_2__create_news__["a" /* CreateNewsPage */], __WEBPACK_IMPORTED_MODULE_3__components_multi_image_upload_multi_image_upload__["a" /* MultiImageUpload */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_news__["a" /* CreateNewsPage */]),
        ],
    })
], CreateNewsPageModule);

//# sourceMappingURL=create-news.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_news_news__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_other_other__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upload_modal_upload_modal__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_images_images__ = __webpack_require__(74);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-news',template:/*ion-inline-start:"D:\ionicapp\crickify\src\pages\create-news.1\create-news.html"*/'<!--\n\n  Generated template for the PreviousMatchDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>News</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="appBackground">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Add News\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list no-lines>\n\n      \n\n          <multi-image-upload [type]="type" [id]="news?.id"></multi-image-upload>\n\n          <button ion-button block (click)="submit()" *ngIf="!multiImageUpload.isUploading && !uploadFinished&&!disabled">\n\n              <ion-icon name="checkmark"></ion-icon>\n\n              Upload\n\n          </button>\n\n          <button ion-button block (click)="cancel()" color="danger" *ngIf="multiImageUpload.isUploading && !uploadFinished&&!disabled">\n\n              <ion-icon name="close"></ion-icon>\n\n              Cancel\n\n          </button>\n\n\n\n \n\n            \n\n\n\n            <p *ngIf= "news?.imgUrl!= null && news?.imgUrl.length>0" >\n\n                <ion-slides autoplay="5000" loop="true" speed="3000">\n\n                    <ion-slide *ngFor="let slide of news.imgUrl">\n\n                      \n\n                        <ion-item><img src="{{slide.url}}" /></ion-item>\n\n                        <ion-item> <button ion-button block (click)="delete(slide)" color="danger">\n\n                          <ion-icon name="close"></ion-icon>\n\n                          Delete\n\n                      </button></ion-item>\n\n                    </ion-slide>\n\n                 \n\n                  </ion-slides>\n\n              \n\n              </p>\n\n                 <form [formGroup]="createNewsForm">\n\n\n\n          <ion-item>\n\n            <ion-label>Type</ion-label>\n\n            <ion-select formControlName="type" >\n\n              <ion-option value="Local">Local</ion-option>\n\n              <ion-option value="International">International</ion-option>\n\n\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Title</ion-label>\n\n              <ion-input formControlName="title" type="text"></ion-input>  </ion-item>\n\n              <ion-item>\n\n          \n\n            <ion-label floating>Description</ion-label>\n\n            <ion-textarea formControlName="article" type="text"></ion-textarea>  </ion-item>\n\n            <ion-item>\n\n\n\n              <ion-label>Date</ion-label>\n\n              <ion-datetime formControlName="publishedAt" displayFormat="MMM DD, YYYY HH:mm" ></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Country</ion-label>\n\n              <ion-select formControlName="location">\n\n                <ion-option *ngFor="let key of locations" [value]="key.name">{{key.name}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n \n\n            <ion-item>\n\n              <button ion-button color="secondary" icon-left clear small [disabled]="!createNewsForm.valid" (click)="addNews()">\n\n                Save News\n\n\n\n              </button>\n\n            </ion-item>\n\n        </form>\n\n\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n \n\n</ion-content>'/*ion-inline-end:"D:\ionicapp\crickify\src\pages\create-news.1\create-news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__providers_images_images__["a" /* ImagesProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_teams_teams__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_news_news__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_5__providers_other_other__["a" /* OtherService */]])
], CreateNewsPage);

//# sourceMappingURL=create-news.js.map

/***/ })

});
//# sourceMappingURL=2.js.map