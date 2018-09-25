import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController,Slides } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AuthService} from '../../providers/auth/auth';
import {SignupPage} from '../signup/signup';
import {WelcomePage} from '../welcome/welcome';
import {ForgotPage} from '../forgot/forgot';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *  reference http://www.9lessons.info/2017/06/ionic-angular-php-login-restful-api.html tutorial
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  responseData : any;
  userData = {"username": "","password": ""};
  public loginForm: any;

  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;
  constructor(public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
    });
  }

  login(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.authService.login(this.loginForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results);
        localStorage.setItem('userData', JSON.stringify(this.responseData.results));
       
        this.navCtrl.push(HomePage);
        this.navCtrl.setRoot(HomePage);
      }else if (this.responseData.statusCode == '403'){
        loading.dismiss();
        let alert = this.alertController.create({
          title: 'Verification Required',
          subTitle: 'Please verify the account to login',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
             
            }
          }
        ]
        });
        alert.present();
      }  else {
        loading.dismiss();
        let alert = this.alertController.create({
          title: 'Wrong login/password',
          subTitle: 'Login and password combination doesnt seem to work. Please try again or reset your password',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
             
            }
          }
        ]
        });
        alert.present();
      }
      
    }, (err) => {
       loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }
   homePage(){
    //Login page link
    this.navCtrl.push(WelcomePage);
  }
   forgot(){
    this.navCtrl.push(ForgotPage);
    }

}
