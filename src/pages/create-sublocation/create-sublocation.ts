import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TeamService } from '../../providers/teams/teams';
import { SubLocationService } from '../../providers/sublocation/sublocation';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewSubLocationPage } from '../view-sublocation/view-sublocation';
import { CreateSchedulePage } from '../create-schedule/create-schedule';
import {SlotScheduleService} from '../../providers/slotSchedule/slotSchedule';
import { SubLocationSlotsPage } from '../sublocation-slots/sublocation-slots';
import { SubLocationBookingPage } from '../sublocation-booking/sublocation-booking';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-sublocation',
  templateUrl: 'create-sublocation.html',
})
export class CreateSubLocationPage {

  private createSubLocationForm: FormGroup;
  sublocation: any;
  name: any;
  user: any;
  responseData: any;
  location:any;
  subresponseData:any;
  slotSchedule:any;
  constructor(public navCtrl: NavController,public scheduleService:SlotScheduleService, public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController, formBuilder: FormBuilder, public otherService: SubLocationService) {

    this.sublocation = navParams.get('sublocation');
    this.location = navParams.get('location');
    this.createSubLocationForm = formBuilder.group({

      name: ['', Validators.compose([Validators.required])],
      user: [],
      id: [],
      type:['', Validators.compose([Validators.required])],
      location: []
    });
    if (this.sublocation != null) {
      this.createSubLocationForm.setValue(this.sublocation);
    }else{
     
      
      this.createSubLocationForm.controls['location'].setValue(this.location);
      
    }
    const data = JSON.parse(localStorage.getItem('userData'));
    this.user = data.user;
    this.createSubLocationForm.controls['user'].setValue(this.user);


  }
  ionViewWillEnter() {
    this.getData();
   }

   getData(){
    if(this.sublocation!=null&&this.sublocation.id!=null){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.scheduleService.getAllSlotSchedule(this.sublocation.id).then((result) => {
      this.subresponseData = result;
      console.log(this.subresponseData); 
      if (this.subresponseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.subresponseData.results.result);
        this.slotSchedule = this.subresponseData.results.result;
      }  else if(this.subresponseData.statusCode == "404") {
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.subresponseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  createSubLocation() {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    
    this.otherService.addSubLocation(this.createSubLocationForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
this.navCtrl.pop();

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



  createSchedule() {
    //Login page link
    this.navCtrl.push(CreateSchedulePage, { subLocation: this.sublocation });
  }
  editSchedule(schedule) {
    schedule.subLocation = this.sublocation;
    this.navCtrl.push(CreateSchedulePage, { schedule: schedule });

  }
  viewSlots() {
    
    this.navCtrl.push(SubLocationSlotsPage, { subLocation: this.sublocation });

  }
  viewBookings() {
    
    this.navCtrl.push(SubLocationBookingPage, { subLocation: this.sublocation });

  }
}
