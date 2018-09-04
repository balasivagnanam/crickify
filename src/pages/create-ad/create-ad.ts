import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TeamService } from '../../providers/teams/teams';
import { ClassifiedService } from '../../providers/classified/classified';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OtherService } from '../../providers/other/other';

@IonicPage()
@Component({
  selector: 'page-create-ad',
  templateUrl: 'create-ad.html',
})
export class CreateAdPage {

  private createClassifiedForm: FormGroup;
  locations: any;
  classified: any;
  team: any;
  opponent: any;
  username: any;
  responseData: any;
  teamResponseData: any;
  locationResponseData: any;
  locationDisabled = false;
  classifiedTimeDisabled = false;
  teamDisabled = false;
  teams: any;
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public teamService: TeamService, public loadingController: LoadingController, formBuilder: FormBuilder, public classifiedService: ClassifiedService, public otherService: OtherService) {
    this.createClassifiedForm = formBuilder.group({
      id: [''],
      type: ['', Validators.compose([Validators.required])],
      description: ['',],
      active: [true],
      classifiedTime: [''],
      location: ['',],
      team: [],
      user: ['', Validators.compose([Validators.required])],
      createDate: [],
   modifyDate: []
    });
    
    this.getLocations();
    this.getTeams();
    this.classified = navParams.get('classified');
    if (this.classified != null) {
      this.createClassifiedForm.setValue(this.classified);
      this.onChange(this.classified.type);
      if(this.classified.classifiedTime!=null){
      this.createClassifiedForm.controls['classifiedTime'].setValue(new Date(this.classified.classifiedTime).toISOString());}
    }
    const data = JSON.parse(localStorage.getItem('userData'));
    this.user = data.user;
    this.createClassifiedForm.controls['user'].setValue(this.user);

  }
  onChange(value) {
  
    if (value == 'findopponent' || value == 'groundavailablity') {
      this.locationDisabled = false;
      this.classifiedTimeDisabled = false;
    } else {

      this.locationDisabled = true;
      this.classifiedTimeDisabled = true;
    }
    if (value == 'findopponent' || value == 'findplayer') {
      this.teamDisabled = false;

    } else {

      this.teamDisabled = true;
     
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }
  getLocations() {

    this.otherService.getAllLocation().then((result) => {
      this.teamResponseData = result;
      console.log(this.teamResponseData);
      if (this.teamResponseData.statusCode == '200') {
        this.locations = this.teamResponseData.results.locations;
        console.log("test 200");


      } else if (this.teamResponseData.statusCode == "404") {

        console.log("unauthorrised");

      } else {

        console.log("test others");
      }

    }, (err) => {
      console.log("error", err);

      // Error log
    });
  }
  getTeams() {
    console.log('ionViewDidLoad home page');
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.getAdminTeams().then((result) => {
      this.teamResponseData = result;
      console.log(this.responseData);
      if (this.teamResponseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        this.teams = this.teamResponseData.results.teams;
      } else if (this.teamResponseData.statusCode == "404") {
        console.log("unauthorrised");
        loading.dismiss();
        //  this.backToWelcome();
      } else {
        loading.dismiss();
        console.log("error", this.teamResponseData);
      }

    }, (err) => {

      loading.dismiss();
      // Error log
    });
  }

  addClassified() {
    var value = this.createClassifiedForm.controls['type'].value;
    if (!(value == 'findopponent' || value == 'groundavailablity')) {
      this.createClassifiedForm.controls['classifiedTime'].setValue(null);
      this.createClassifiedForm.controls['location'].setValue(null);
    }

    if (!(value == 'findopponent' || value == 'findplayer')) {
      this.createClassifiedForm.controls['team'].setValue(null);

    }
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.classifiedService.addClassified(this.createClassifiedForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");

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
