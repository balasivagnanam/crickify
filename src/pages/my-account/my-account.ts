import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  userDetails : any;
  responseData: any;
  private editUserForm: FormGroup;
  userPostData = {"user_id":"","token":""};
  user : any = " ";

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, formBuilder: FormBuilder, public loadingController:LoadingController) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      this.editUserForm = formBuilder.group({
  id: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
     token: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      phone: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      username: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      playerType: [''],
      bowlerType: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      batsmanType: [''],
      createDate: [''],
      modifyDate: [''],
       verified: [''],
  
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
saveUser(){
   const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.authService.editUser(this.editUserForm.value,this.userDetails.id).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();

     
      }  else if(this.responseData.statusCode == "404") {
       loading.dismiss();
        console.log("unauthorrised");
        
      } else {
        loading.dismiss();
  console.log("test others");
      }
      
    }, (err) => {
    console.log("error",err);
     loading.dismiss();
      // Error log
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("user", this.authService.getUser());
      this.user = JSON.parse(JSON.stringify(this.authService.getUser()));
    }
  }

}
