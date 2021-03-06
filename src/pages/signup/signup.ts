import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController,MenuController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import {WelcomePage} from '../welcome/welcome';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  private signupForm: FormGroup;
username : any;
password : any;
name : any;
phone : any;
  constructor(private menu: MenuController,public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertController: AlertController, public loadingController: LoadingController, formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      username: ['', Validators.compose([Validators.maxLength(25), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(25), Validators.required])],
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      phone: ['']
  });
  this.username=this.signupForm.controls['username'];
  this.password=this.signupForm.controls['password'];
  this.name=this.signupForm.controls['name'];
  this.phone=this.signupForm.controls['phone'];
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  responseData : any;
  userData = {"username": "","password": "", "name": "","phone": ""};

  

  signup(){

    //  this.submitAttempt = true;
    
       if(!this.signupForm.valid){
           //this.signupForm.slideTo(0);
           console.log("not valid")
       }
       else {
           console.log("success!")
           console.log(this.signupForm.value);
           //console.log(this.signupForm.value);
       }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
     this.authService.signup(this.signupForm.value).then((result) => {
      this.responseData = result;
      console.log("response in signup", this.responseData);
      console.log("response code", this.responseData.statusCode);
      loading.dismiss();
      if (this.responseData.statusCode == '200'){
        console.log("test 200");
        console.log("result", this.responseData.results);
       let alert = this.alertController.create({
          title: 'Registration Successful',
          subTitle: 'Your Registration is successful',
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
      } else if(this.responseData.statusCode == '401'){
        
        let alert = this.alertController.create({
          title: 'User account exists!',
          subTitle: 'This user account exists in the list. Please login or reset your password!',
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
      } else {
        
        let alert = this.alertController.create({
          title: 'Server Unavailable!',
          subTitle: 'There seems to be some problem with our servers. Please try later, if the problem persists. Contact Us',
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
      //this.navCtrl.push(HomePage);
    }, (err) => {
      loading.dismiss();
	  console.log("error",err);
    });

  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }
   homePage(){
    //Login page link
    this.navCtrl.push(WelcomePage);
  }
}
