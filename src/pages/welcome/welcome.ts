import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { ForgotPage } from '../forgot/forgot';
import { AuthService } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController,ToastController } from 'ionic-angular';
import { MatchService } from '../../providers/matches/matches';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { Platform } from 'ionic-angular';
import { NewsService } from '../../providers/news/news';
import { ViewNewsPage } from '../viewnews/viewnews';
import { OtherService } from '../../providers/other/other';
import { ProductService } from '../../providers/product/product';
import { ClassifiedService } from '../../providers/classified/classified';
import { ViewProductPage } from '../viewproduct/viewproduct';
import { PrivacyPage } from '../privacy/privacy';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  battings: any;
  bowlings: any;
  responseData: any;
  newss: any;
  products: any;
  scores: any;
  responseNewsData: any;
  responseProductData: any;
  constructor(private toastCtrl: ToastController,private menu: MenuController, public navCtrl: NavController, public classifiedService: ClassifiedService, public productService: ProductService, public otherService: OtherService, public newsService: NewsService, public plt: Platform, public navParams: NavParams, public authService: AuthService, public loadingController: LoadingController, public matchService: MatchService, public admob: AdMobFree) {
    

  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
  }

  showBanner() {

    let bannerConfig: AdMobFreeBannerConfig = {

      autoShow: true,
      id: 'ca-app-pub-7720772047232561/8941352265'
    };


    let iosBannerConfig: AdMobFreeBannerConfig = {

      autoShow: true,
      id: 'ca-app-pub-7720772047232561/2648166418'
    };
    if (this.plt.is('android')) {
      this.admob.banner.config(bannerConfig);
    }
    if (this.plt.is('ios')) {
      this.admob.banner.config(iosBannerConfig);
    }
    this.admob.banner.prepare().then(() => {
      {    
     console.log('view did enter ad');
   this.presentToast('admob added success');
   }
       }).catch(e => {console.log("view did error enter ad",e);
     
       this.presentToast('admob added failure '+e);
     });
    console.log('view did after enter ad');

    this.presentToast('Token is '+localStorage.getItem('notificationtoken'));
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  ionViewDidLoad() {
    this.plt.ready().then((readySource) => {
      this.showBanner();      
    });
    
    console.log('ionViewDidLoad WelcomePage');
    if (this.authService.getAuthenticated()) {
      //console.log("token", this.authService.getToken());
      this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage);

    }
    this.getClassifieds();
    this.getNews();
    this.getProducts();
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getBestBatting().then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {

        console.log("test 200");
        console.log("result", this.responseData.results.Batting);
        this.battings = this.responseData.results.Batting;
      }
      else {

        console.log("error", this.responseData)
      }

    }, (err) => {

      // Error log
    });

    this.matchService.getBestBowling().then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {

        console.log("test 200");
        console.log("result", this.responseData.results.Bowling);
        this.bowlings = this.responseData.results.Bowling;
      }
      else {

        console.log("error", this.responseData)
      }

    }, (err) => {

      // Error log
    });

    loading.dismiss();
  }
  
  login() {
    this.navCtrl.push(LoginPage);
  }
  privacyPolicy() {
    this.navCtrl.push(PrivacyPage);

  }
  signup() {
    this.navCtrl.push(SignupPage);
  }
  forgot() {
    this.navCtrl.push(ForgotPage);
  }
  viewNews(news) {
    this.navCtrl.push(ViewNewsPage, { news: news });

  }
  viewProduct(product) {
    this.navCtrl.push(ViewProductPage, { product: product });

  }
  getNews() {
    console.log('ionViewDidLoad home page');

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.newsService.getAllNewsSearch(null).then((result) => {
      this.responseNewsData = result;
      console.log(this.responseNewsData);
      if (this.responseNewsData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseNewsData.results.result);
        this.newss = this.responseNewsData.results.result;
      } else if (this.responseNewsData.statusCode == "404") {
        console.log("unauthorrised");
        loading.dismiss();

      } else {
        loading.dismiss();
        console.log("error", this.responseNewsData)
      }

    }, (err) => {
      loading.dismiss();
      // Error log
    });


  }

  getProducts() {
    console.log('ionViewDidLoad home page');

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.productService.getAllProductSearch(null).then((result) => {
      this.responseProductData = result;
      console.log(this.responseProductData);
      if (this.responseProductData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseProductData.results.result);
        this.products = this.responseProductData.results.result;
      } else if (this.responseProductData.statusCode == "404") {
        console.log("unauthorrised");
        loading.dismiss();

      } else {
        loading.dismiss();
        console.log("error", this.responseProductData)
      }

    }, (err) => {
      loading.dismiss();
      // Error log
    });


  }
  classifiedsresponseData: any;
  classifieds: any;
  getClassifieds() {
    console.log('ionViewDidLoad home page');

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.classifiedService.getAllClassifiedSearch(null).then((result) => {
      this.classifiedsresponseData = result;
      console.log(this.classifiedsresponseData);
      if (this.classifiedsresponseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.classifiedsresponseData.results.result);
        this.classifieds = this.classifiedsresponseData.results.result;
      } else if (this.classifiedsresponseData.statusCode == "404") {
        console.log("unauthorrised");
        loading.dismiss();

      } else {
        loading.dismiss();
        console.log("error", this.classifiedsresponseData)
      }

    }, (err) => {
      loading.dismiss();
      // Error log
    });


  }
}
