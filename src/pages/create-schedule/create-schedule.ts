import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,AlertController} from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {SlotScheduleService} from '../../providers/slotSchedule/slotSchedule';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewSubLocationPage } from '../view-sublocation/view-sublocation';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-schedule',
  templateUrl: 'create-schedule.html',
})
export class CreateSchedulePage {

  private createScheduleForm: FormGroup;
  schedule:any;
  name : any;
  user:any;
  responseData : any;
  subLocation :any;
  constructor(public navCtrl: NavController,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: SlotScheduleService) {
    this.schedule = navParams.get('schedule');
    this.subLocation = navParams.get('subLocation');
    this.createScheduleForm = formBuilder.group({
      id:[],
      build:[],
      subLocation:[''],
    startTime:['', Validators.compose([ Validators.required])],
    startDay:['', Validators.compose([ Validators.required])],
    rate: ['', Validators.compose([ Validators.required])],
    endTime:['', Validators.compose([ Validators.required])],
    endDay:['', Validators.compose([ Validators.required])],
    duration:['', Validators.compose([ Validators.required])]
  });
  if (this.schedule != null) {
    
    this.createScheduleForm.setValue(this.schedule);
  }else{
   
    
    this.createScheduleForm.controls['subLocation'].setValue(this.subLocation);
    
  }


  const data = JSON.parse(localStorage.getItem('userData'));
  this.user = data.user;




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  createSchedule(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.addSlotSchedule(this.createScheduleForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.navCtrl.pop();
     
      }  else if(this.responseData.statusCode == "404") {
		   loading.dismiss();
        console.log("unauthorrised");
         this.alertDialog('Error','Error');
        
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

 
  

}
