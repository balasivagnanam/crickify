import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {PracticeService} from '../../providers/practice/practice';

/**
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practice-availability',
  templateUrl: 'practice-availability.html',
})
export class PracticeAvailabilityPage {

  practiceId: any;
  responseData: any;
status: any;
  avaailability: any = [];
  available: any = [];
  unavailable: any = [];
  tentative: any = [];
  unknown: any = [];
  tabsvalues: any = "available";

  constructor(public navCtrl: NavController, public navParams: NavParams, public practiceService: PracticeService, public loadingController: LoadingController) {
    console.log("passed data",navParams.get('practiceId') );
    this.practiceId = navParams.get('practiceId');
    this.getData(this.practiceId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchDetailsPage');
  }

  getData(practiceId){
	    this.available= [];
  this.unavailable= [];
  this.tentative= [];
  this.unknown= [];
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.getPracticeAvailability(practiceId).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
		  
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.Availibilties);
  
        this.avaailability = this.responseData.results.Availibilties;
		for(let data of this.avaailability) {
  if(data.status==0){
	  this.unknown.push(data)
  }else if(data.status==1){
	  this.available.push(data)
  }else if(data.status==2){this.unavailable.push(data)
	  
  }else if(data.status==3){this.tentative.push(data)
	  
  }
}
     
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
    });
  }
 availabilitySelected(event, stat){

    
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });

    this.practiceService.updateAvailability(this.practiceId ,stat.player,stat.status).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200", this.responseData);
		 this.getData(this.practiceId);
       // console.log("result", this.responseData.results.matches);
        //this.matches = this.responseData.results.matches;
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
}
