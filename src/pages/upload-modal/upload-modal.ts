import { ImagesProvider } from './../../providers/images/images';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,AlertController,LoadingController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-upload-modal',
  templateUrl: 'upload-modal.html',
})
export class UploadModalPage {
  imageData: any;
 
 
  constructor(public navCtrl: NavController,public alertController: AlertController,public loadingController:LoadingController, private navParams: NavParams, private viewCtrl: ViewController, private imagesProvider: ImagesProvider) {
    this.imageData = this.navParams.get('data');
  }
 
  saveImage() {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.imagesProvider.uploadImage(this.imageData).then(res => {
      this.alertDialog('Success','Upload Success');
      loading.dismiss();
      //this.viewCtrl.dismiss({reload: true});
    }, err => {
      this.alertDialog('Error during upload',err.statusMessage);
      loading.dismiss();
      //this.dismiss();
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
  dismiss() {
    this.viewCtrl.dismiss();
  }
 
}