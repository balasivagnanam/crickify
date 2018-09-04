import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {ClassifiedService} from '../../providers/classified/classified';

/**
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classified-response',
  templateUrl: 'classified-response.html',
})
export class ClassifiedResponsePage {

  classified: any;
  responseData: any;
  responseCreateData:any;
status: any;
  avaailability: any = [];
  available: any = [];

  tabsvalues: any = "available";

  constructor(public navCtrl: NavController, public navParams: NavParams, public classifiedService: ClassifiedService, public loadingController: LoadingController) {
  
    this.classified = navParams.get('classified');
    this.getData(this.classified.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifiedResponsePage');
  }

  getData(id){
	    this.available= [];

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.classifiedService.getClassifiedAvailability(id).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
		  
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.classifieds);
  
        this.avaailability = this.responseData.results.classifieds;
		for(let data of this.avaailability) {
  if(data.interested){
	  this.available.push(data)
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
  acceptedSelected(event,value) {
    
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.classifiedService.addClassifiedResponse(value).then((result) => {
      this.responseCreateData = result;
      console.log(this.responseCreateData);
      if (this.responseCreateData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");

      
      } else if (this.responseCreateData.statusCode == "404") {
        loading.dismiss();
        console.log("unauthorrised");
      
      } else {
        loading.dismiss();
        console.log("test others");
       
      }

    }, (err) => {
      console.log("error", err);
      loading.dismiss();
       });
  }
}
