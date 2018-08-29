import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {ClassifiedService} from '../../providers/classified/classified';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classified-response-create',
  templateUrl: 'classified-response-create.html',
})
export class ClassifiedResponseCreatePage {
  private createClassifiedResponseForm: FormGroup;
  classified: any;
  responseData: any;
  responseCreateData: any;
status: any;
  avaailability: any = [];
  available: any = [];
  user:any;
  tabsvalues: any = "available";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController,public classifiedService: ClassifiedService,formBuilder: FormBuilder, public loadingController: LoadingController) {
  
    this.classified = navParams.get('classified');
    this.createClassifiedResponseForm = formBuilder.group({
      id: [''],
      interested: ['', Validators.compose([Validators.required])],
      accepted: ['',],
      comments: ['',],
      player: [],
      classified: ['', Validators.compose([Validators.required])],
      createDate: [],
   modifyDate: []
    });
    const data = JSON.parse(localStorage.getItem('userData'));
    this.user = data.user;
    this.createClassifiedResponseForm.controls['player'].setValue(this.user);
    this.createClassifiedResponseForm.controls['classified'].setValue(this.classified);
   this.getData(this.classified.id);


  }
  getData(id){
    this.available= [];

  const loading = this.loadingController.create({
    content: 'Please wait...'
  });
  loading.present();
  this.classifiedService.getClassifiedResponseForUser(id).then((result) => {
    this.responseData = result;
    console.log(this.responseData); 
    if (this.responseData.statusCode == '200'){
    
      loading.dismiss();
      console.log("test 200");
            if(this.responseData!=null&&this.responseData.results!=null&&this.responseData.results.classifieds!=null){

        this.createClassifiedResponseForm.setValue(this.responseData.results.classifieds);
       }
 
}
   
      else if(this.responseData.statusCode == "404") {
      console.log("unauthorrised");
      localStorage.clear();
    } else {
      loading.dismiss();
      console.log("error", this.responseData)
    }
    
  }, (err) => {
    loading.dismiss();
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifiedResponsePage');
  }

  addClassifiedResponse() {
   
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.classifiedService.addClassifiedResponse(this.createClassifiedResponseForm.value).then((result) => {
      this.responseCreateData = result;
      console.log(this.responseCreateData);
      if (this.responseCreateData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");

        this.alertDialog('Success', 'Added');
      } else if (this.responseCreateData.statusCode == "404") {
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
 
}
