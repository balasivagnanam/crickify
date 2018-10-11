import { Component } from '@angular/core';
import { NavController, App, LoadingController,AlertController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { MatchService } from '../../providers/matches/matches';
import { BookingService } from '../../providers/booking/booking';
import {MatchTeamPage} from '../match-team/match-team';
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  userDetails : any;
  responseData: any;
  updateresponseData: any;

  userPostData = {"user_id":"","token":""};
  tabsvalues : String = "new";
  bookings : any;
total=0;
pendingAmount=0;
paidAmount=0;
new:any[];
old:any[];

  constructor(public navCtrl: NavController,public alertController: AlertController, public app:App, public authService:AuthService, public service:BookingService, public loadingController: LoadingController) {
  
  }

  ionViewCanEnter(){
  
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.service.getMyBooking().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        this.new=[];
        this.old=[];
  
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.bookings = this.responseData.results.result;

        for(let data of this.bookings) {
          if(data.slot.startDate>=new Date()){
       
            this.new.push(data)
          }else if(data.slot.startDate<new Date()){
   
            this.old.push(data)
          }}
      }  else if(this.responseData.statusCode == "404") {
        loading.dismiss();
   
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });

    
  }
  cancel(booking) {
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
              this.cancelBooking(booking.id,data.reason);
            } else {
            
              
            }
          }
        }
      ]
    });
    alert.present();
  }
  cancelBooking(id,reason){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.service.cancelMyBooking(id,reason).then((result) => {
      this.updateresponseData = result;
      console.log(this.updateresponseData); 
      if (this.updateresponseData.statusCode == '200'){
        loading.dismiss();
      this.ionViewDidLoad();
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
