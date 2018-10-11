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
  selector: 'page-view-booking',
  templateUrl: 'view-booking.html',
})
export class ViewBookingPage {


  slot:any;
  name : any;
  user:any;
  responseData : any;
  booking:any;
  updateresponseData:any;
 
  constructor(public navCtrl: NavController,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: BookingService) {
    this.slot = navParams.get('slot');
    
this.getData();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  getData(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.getBookingId(this.slot.id).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.booking=this.responseData.result;
     
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

 
  cancelBooking() {
    let alert = this.alertController.create({
      title: 'Cancel Booking',
      message: 'Do you want to cancel this booking?',
      inputs: [
        {
          name: 'reason',
          placeholder: 'Cancellation Reason',
          min:1
        }
      ],
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            if (data.reason.length>0) {
              this.cancel(this.booking.id,data.reason);
            } else {
            
              
            }
          }
        }
      ]
    });
    alert.present();
  }
  cancel(id,reason){
        const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.cancelOwnerBooking(id,reason).then((result) => {
      this.updateresponseData = result;
      console.log(this.updateresponseData); 
      if (this.updateresponseData.statusCode == '200'){
        loading.dismiss();
        this.navCtrl.pop();
      }  else if(this.updateresponseData.statusCode == "404") {
        console.log("unauthorrised");
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.updateresponseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });

    
  }

}
