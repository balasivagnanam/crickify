import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,ActionSheetController,NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { TeamService } from '../../providers/teams/teams';
import { NewsService } from '../../providers/news/news';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OtherService } from '../../providers/other/other';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {UploadModalPage} from '../upload-modal/upload-modal';
import { ImagesProvider } from './../../providers/images/images';
import { MultiImageUpload } from '../../components/multi-image-upload/multi-image-upload';

@IonicPage()
@Component({
  selector: 'page-create-news',
  templateUrl: 'create-news.html',
})
export class CreateNewsPage {
  @ViewChild(MultiImageUpload) multiImageUpload: MultiImageUpload;
  private createNewsForm: FormGroup;
  protected uploadFinished = false;
  locations: any;
  news: any;
  type:any;
  team: any;
  opponent: any;
  username: any;
  responseData: any;
  responseNewsData: any;
  teamResponseData: any;
  locationResponseData: any;
  locationDisabled = false;
  newsTimeDisabled = false;
  teamDisabled = false;
  teams: any;
  deleteImageResponse:any;
  user: any;
  disabled=true;
  constructor(public navCtrl: NavController,private modalCtrl: ModalController,private imagesProvider: ImagesProvider, private camera: Camera, private actionSheetCtrl: ActionSheetController, public navParams: NavParams, public alertController: AlertController, public teamService: TeamService, public loadingController: LoadingController, formBuilder: FormBuilder, public newsService: NewsService, public otherService: OtherService) {
    this.news = navParams.get('news');
    this.createNewsForm = formBuilder.group({
      id: [''],
      type: ['', Validators.compose([Validators.required])],
      description: [''],
      urlToImage: [''],
      active: [true],
      publishedAt: [''],
      location: ['',],
      title: [],
      imgUrl: [],
      user: ['', Validators.compose([Validators.required])],
      createDate: [],
   modifyDate: []
    });
    this.type='news';
    this.getLocations();
  
    if (this.news != null) {
      this.createNewsForm.setValue(this.news);
      this.disabled=false;
      if(this.news.publishedAt!=null){
      this.createNewsForm.controls['publishedAt'].setValue(new Date(this.news.publishedAt).toISOString());}
    }
    const data = JSON.parse(localStorage.getItem('userData'));
    this.user = data.user;
    this.createNewsForm.controls['user'].setValue(this.user);

  }
  getLocations() {

    this.otherService.getAllCountries().then((result) => {
      this.locationResponseData = result;
      console.log(this.locationResponseData);
     
        this.locations = this.locationResponseData;
       


     

    }, (err) => {
      console.log("error", err);

      // Error log
    });
  }

  ionViewWillEnter(){
    //calling an API
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.name === e2.name : e1 === e2;
  }
  
  addNews() {

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.newsService.addNews(this.createNewsForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        this.news=this.responseData.results.news;
        this.disabled=false;
        this.alertDialog('Success', 'Added');
      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        console.log("unauthorrised");
        this.alertDialog('Error', 'Error');
      } else {
        loading.dismiss();
        console.log("test others");
        this.alertDialog('Error', 'Error');
      }

    }, (err) => {
      console.log("error", err);
      loading.dismiss();
      this.alertDialog('Error', 'Error');
      // Error log
    });
  }

  getNews() {

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.newsService.getNewsId(this.news.id).then((result) => {
      this.responseNewsData = result;
      console.log(this.responseNewsData);
      if (this.responseNewsData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        this.news=this.responseNewsData.results.result;
        this.disabled=false;
      
      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        console.log("unauthorrised");
      
      } else {
        loading.dismiss();
        console.log("test others");
      
      }

    }, (err) => {
      console.log("error", err);
      loading.dismiss();
    
      // Error log
    });
  }
  delete(slide){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.deleteImage(slide).then((result) => {
      this.deleteImageResponse = result;
      console.log(this.deleteImageResponse);
      if (this.deleteImageResponse.statusCode == '200') {
       
        console.log("test 200");
        loading.dismiss();
        this.getNews();

      } else if (this.deleteImageResponse.statusCode == "404") {

        console.log("unauthorrised");
        loading.dismiss();
      } else {

        console.log("test others");
        loading.dismiss();
      }

    }, (err) => {
      console.log("error", err);
      loading.dismiss();
      // Error log
    });

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

  reloadImages() {
   
  }
  alertDialog(title, message) {

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

  protected submit() {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    if (this.multiImageUpload.images.length == 0) {
        this.showToast("Please select at least 1 photo");
        loading.dismiss();
        return;
    }

    this.multiImageUpload.uploadImages().then((images) => {
        this.showToast("Upload successful, view console for details");
        this.uploadFinished = true;
        console.dir(images);
        loading.dismiss();
        this.getNews();
    }).catch(() => {
      loading.dismiss();
    });
}

protected cancel() {
    this.confirm('Are you sure to cancel?').then(value => {
        if (value) {
            this.multiImageUpload.abort();
        }
    })
}

private showToast(text: string) {
    
}

private confirm(text: string) {
    return new Promise(
        (resolve) => {
            this.alertController.create({
                message: text,
                buttons: [
                    {
                        text: "No",
                        role: 'cancel',
                        handler: () => {
                            resolve(false);
                        }
                    },
                    {
                        text: "Yes",
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            }).present();
        }
    );
}
}
