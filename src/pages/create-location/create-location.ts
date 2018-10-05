import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TeamService } from '../../providers/teams/teams';
import { OtherService } from '../../providers/other/other';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CreateSubLocationPage } from '../create-sublocation/create-sublocation';
import { ViewSubLocationPage } from '../view-sublocation/view-sublocation';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-location',
  templateUrl: 'create-location.html',
})
export class CreateLocationPage {

  private createLocationForm: FormGroup;
  location: any;
  user: any;
  locationResponseData: any;
  locations: any;
  responseData: any;
  userDetails: any;
  locationresponseData:any;
  constructor(public navCtrl: NavController, public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController, formBuilder: FormBuilder, public otherService: OtherService) {

    this.location = navParams.get('location');
    this.createLocationForm = formBuilder.group({

      name: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      lat: [''],
      lng: [''],
      id: [],
      user: [],
      email: ['', Validators.compose([Validators.required])],
      contact: [],
      country: ['', Validators.compose([Validators.required])],
      subLocations: ['']


    });
    if (this.location != null) {
      this.createLocationForm.setValue(this.location);
    }


    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data;
    this.user = data.user;
    this.createLocationForm.controls['user'].setValue(this.user);

  }
  ionViewWillEnter() {
    this.getData();
   }

   getData(){
    if(this.location!=null&&this.location.id!=null){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.getLocationId(this.location.id).then((result) => {
      this.locationresponseData = result;
      console.log(this.locationresponseData); 
      if (this.locationresponseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.locationresponseData.results.result);
        this.location = this.locationresponseData.results.result;
      }  else if(this.locationresponseData.statusCode == "404") {
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.locationresponseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  createLocation() {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.createLocation(this.createLocationForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");


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

  view(location) {
    this.navCtrl.push(ViewSubLocationPage, { location: location });

  }

  createSubLocation() {
       this.navCtrl.push(CreateSubLocationPage, { location: this.location });
  }
  editLocation(sublocation) {

    sublocation.location = this.location;
    this.navCtrl.push(CreateSubLocationPage, { sublocation: sublocation });

  }

}
