import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,AlertController} from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {BookingService} from '../../providers/booking/booking';
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
  selector: 'page-create-booking',
  templateUrl: 'create-booking.html',
})
export class CreateBookingPage {

  private CreateBookingForm: FormGroup;
  slot:any;
  name : any;
  user:any;
  responseData : any;
 
  constructor(public navCtrl: NavController,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: BookingService) {
    this.slot = navParams.get('slot');
    this.CreateBookingForm = formBuilder.group({
      id:[],
     slot:['', Validators.compose([ Validators.required])],
    user:['', Validators.compose([ Validators.required])],
    createDate: [],
    modifyDate: []
  });

   
    
    this.CreateBookingForm.controls['slot'].setValue(this.slot);
    
  


  const data = JSON.parse(localStorage.getItem('userData'));
  this.user = data.user;
  this.CreateBookingForm.controls['user'].setValue(this.user);




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  createSchedule(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.addBooking(this.CreateBookingForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.alertDialog('Booking Success','Booking Success');
     
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
