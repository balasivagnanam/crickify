import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { SlotService } from '../../providers/slot/slot';
import {MatchTeamPage} from '../match-team/match-team';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { PipesModule } from '../../pipes/pipes.module';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';
import moment from 'moment';
import {OtherService} from '../../providers/other/other';
import { CreateBookingPage } from '../create-booking/create-booking';


@Component({
  selector: 'page-slots',
  templateUrl: 'slots.html'
})

export class SlotsPage {

  userDetails : any;
  responseData: any;
  teamresponseData: any;
  tournamentresponseData: any;
 
  userPostData = {"user_id":"","token":""};
  private searchSlotsForm: FormGroup;
 minDate: string = moment.utc(new Date()).local().format();
  teams:any;
slotss : any;
selectdate:any;
  constructor(public navCtrl: NavController, public app:App, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public slotsService:SlotService, public loadingController: LoadingController,public admob: AdMobFree) {
  
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    
    
    
    this.searchSlotsForm = formBuilder.group({

      startDate: [moment.utc(new Date()).local().format()],
      endDate: [],
      type: []
      
    });

  }
  ionViewWillEnter(){
    this.selectdate=null;
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
  
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.slotsService.getAllSlotSearch(this.searchSlotsForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.slotss = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
		loading.dismiss();
   
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

    
  }
  
  
 
 

  

  search(){
    console.log('ionViewDidLoad home page');
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.slotsService.getAllSlotSearch(this.searchSlotsForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.slotss = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "403") {
        console.log("unauthorrised");
		loading.dismiss();
       
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

  }

  viewSlots(slot){

    this.selectdate=slot;
  }

  createBooking(slot){

    this.navCtrl.push(CreateBookingPage,{slot:slot});
  }
}
