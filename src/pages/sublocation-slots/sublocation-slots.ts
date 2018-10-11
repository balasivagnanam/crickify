import { Component } from '@angular/core';
import { NavController, App, LoadingController,NavParams } from 'ionic-angular';
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
import { CreateSlotPage } from '../create-slot/create-slot';
import { ViewBookingPage } from '../view-booking/view-booking';
import { ViewSlotPage } from '../view-slot/view-slot';


@Component({
  selector: 'page-sublocation-slots',
  templateUrl: 'sublocation-slots.html'
})

export class SubLocationSlotsPage {

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
subLocation:any;
  constructor(public navCtrl: NavController,public navParams: NavParams, public app:App, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public slotsService:SlotService, public loadingController: LoadingController,public admob: AdMobFree) {
  
this.subLocation = navParams.get('subLocation');
    
    
    
    this.searchSlotsForm = formBuilder.group({

      startDate: [moment.utc(new Date()).local().format()],
      endDate: [],
      subLocationId:[],
      
    });
    this.searchSlotsForm.controls['subLocationId'].setValue(this.subLocation.id);
  }
  ionViewWillEnter(){

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
  viewBooking(slot){

    this.navCtrl.push(ViewBookingPage, {"slot": slot});
  }
  viewSlot(slot){

    this.navCtrl.push(ViewSlotPage, {"slot": slot});
  }
  addSlot(){

    this.navCtrl.push(CreateSlotPage, {"subLocation": this.subLocation});
  }
}
