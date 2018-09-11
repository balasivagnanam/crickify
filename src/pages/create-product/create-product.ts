import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,ActionSheetController,NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { TeamService } from '../../providers/teams/teams';
import { ProductService } from '../../providers/product/product';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OtherService } from '../../providers/other/other';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {UploadModalPage} from '../upload-modal/upload-modal';
import { ImagesProvider } from './../../providers/images/images';
import { MultiImageUpload } from '../../components/multi-image-upload/multi-image-upload';

@IonicPage()
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html',
})
export class CreateProductPage {
  @ViewChild(MultiImageUpload) multiImageUpload: MultiImageUpload;
  private createProductForm: FormGroup;
  protected uploadFinished = false;
  locations: any;
  product: any;
  type:any;
  team: any;
  opponent: any;
  username: any;
  responseData: any;
  responseProductData: any;
  teamResponseData: any;
  locationResponseData: any;
  locationDisabled = false;
  productTimeDisabled = false;
  teamDisabled = false;
  teams: any;
  deleteImageResponse:any;
  user: any;
  disabled=true;
  constructor(public navCtrl: NavController,private modalCtrl: ModalController,private imagesProvider: ImagesProvider, private camera: Camera, private actionSheetCtrl: ActionSheetController, public navParams: NavParams, public alertController: AlertController, public teamService: TeamService, public loadingController: LoadingController, formBuilder: FormBuilder, public productService: ProductService, public otherService: OtherService) {
    this.product = navParams.get('product');
    this.createProductForm = formBuilder.group({
      id: [''],
      price: [0,Validators.compose([Validators.required])],
      description: ['',Validators.compose([Validators.required])],
      sold: [false],
      active: [true],
      publishedAt: [''],
      location: ['',],
      title: ['',Validators.compose([Validators.required])],
      imgUrl: [],
      user: ['', Validators.compose([Validators.required])],
      createDate: [],
   modifyDate: []
    });
    this.type='product';
    this.getLocations();
  
    if (this.product != null) {
      this.createProductForm.setValue(this.product);
      this.disabled=false;
      if(this.product.publishedAt!=null){
      this.createProductForm.controls['publishedAt'].setValue(new Date(this.product.publishedAt).toISOString());}
    }
    const data = JSON.parse(localStorage.getItem('userData'));
    this.user = data.user;
    this.createProductForm.controls['user'].setValue(this.user);

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
  
  addProduct() {

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.productService.addProduct(this.createProductForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        this.product=this.responseData.results.result;
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

  getProduct() {

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.productService.getProductId(this.product.id).then((result) => {
      this.responseProductData = result;
      console.log(this.responseProductData);
      if (this.responseProductData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        this.product=this.responseProductData.results.result;
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
        this.getProduct();

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
      if (this.multiImageUpload.images.length == 0) {
        this.showToast("Please select at least 1 photo");
        
        return;
    }
    this.multiImageUpload.id=this.product.id;
    this.multiImageUpload.uploadImages().then((images) => {
        this.showToast("Upload successful, view console for details");
        this.uploadFinished = true;
        console.dir(images);
        
        this.getProduct();
    }).catch(() => {
      
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
