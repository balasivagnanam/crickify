import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController,ActionSheetController,ModalController,AlertController} from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {UploadModalPage} from '../upload-modal/upload-modal';
import { ImagesProvider } from './../../providers/images/images';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController,public alertController: AlertController,private modalCtrl: ModalController, public navParams: NavParams, public authService: AuthService, formBuilder: FormBuilder, public loadingController:LoadingController,private imagesProvider: ImagesProvider, private camera: Camera, private actionSheetCtrl: ActionSheetController) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      this.editUserForm = formBuilder.group({
  id: ['', ],
     token: ['',],
    
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      phone: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      username: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'), Validators.required])],
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

  ionViewWillEnter() {
    this.getUser();
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
 this.alertDialog('Success','Update Success');
     
      }  else if(this.responseData.statusCode == "404") {
       loading.dismiss();
        console.log("unauthorrised");
        this.alertDialog('Error','unauthorrised');
      } else {
        loading.dismiss();
  console.log("test others");
        this.alertDialog('Error','Error');
      }
      
    }, (err) => {
    console.log("error",err);
     loading.dismiss();
      this.alertDialog('Error','Error');
      // Error log
    });
  }
  getUser(){
    const loading = this.loadingController.create({
       content: 'Please wait...'
     });
     loading.present();
     this.authService.getUserDetail(this.userDetails.id).then((result) => {
       this.responseData = result;
       console.log(this.responseData); 
       if (this.responseData.statusCode == '200'){
         loading.dismiss();
         this.editUserForm.setValue(this.responseData.results.user);
      
       }  else if(this.responseData.statusCode == "404") {
        loading.dismiss();
         console.log("unauthorrised");
         this.alertDialog('Error','unauthorrised');
       } else {
         loading.dismiss();
   console.log("test others");
         this.alertDialog('Error','Error');
       }
       
     }, (err) => {
     console.log("error",err);
      loading.dismiss();
       this.alertDialog('Error','Error');
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
  
   presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
 
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
 
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      let modal = this.modalCtrl.create(UploadModalPage, { data: imagePath });
      modal.present();
      modal.onDidDismiss(data => {
        if (data && data.reload) {
          this.reloadImages();
        }
      });
    }, (err) => {
      this.alertDialog('Error',err);
    });
  }
  alertDialog(title,message){
  
  let alert = this.alertController.create({
          title: title,
          subTitle: message,
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
  reloadImages() {
   
  }
}


