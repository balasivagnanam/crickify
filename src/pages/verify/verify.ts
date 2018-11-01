import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController,NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {OtherService} from '../../providers/other/other';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import {WelcomePage} from '../welcome/welcome';
/**
 * Generated class for the Forgot page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {
  private createVerifyForm: FormGroup;
  type:any;
  phone:any;
  id:any;
  constructor(formBuilder: FormBuilder,private menu: MenuController,public navCtrl: NavController, public navParams: NavParams, public otherService: OtherService, public alertController: AlertController, public loadingController: LoadingController) {
    this.createVerifyForm = formBuilder.group({
      phone: ['', Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])]
    });
    this.type = navParams.get('type');
    this.phone = navParams.get('phone');
    this.id = navParams.get('id');
    this.createVerifyForm.controls['phone'].setValue(this.phone);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgot');
  }

  responseData : any;
  

  

  verify(){

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
     this.otherService.verify(this.type,this.id,this.createVerifyForm.value).then((result) => {
      this.responseData = result;
      console.log("response in signup", this.responseData);
      console.log("response code", this.responseData.statusCode);
      loading.dismiss();
      if (this.responseData.statusCode == '200'){
        console.log("test 200");
        console.log("result", this.responseData.results);
       
        let alert = this.alertController.create({
          title: 'Success',
          subTitle: 'Phone Verification is successful',
          buttons: [
          {
            text: 'OK',
            handler: data => {
              console.log('ok clicked');
              this.navCtrl.pop();
            }
          }
        ]
        });
        alert.present();
      }  {
        
        let alert = this.alertController.create({
          title: ' Error',
          subTitle: 'Phone Verification is not Successfull.Please check the phone number.',
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

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }
    homePage(){
    //Login page link
    this.navCtrl.push(WelcomePage);
  }
}
