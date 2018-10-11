import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,AlertController} from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {OtherService} from '../../providers/other/other';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { getScrollData } from 'ionic-angular/umd/components/input/input';
import { SubLocationService } from '../../providers/sublocation/sublocation';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-location',
  templateUrl: 'view-location.html',
})
export class ViewLocationPage {



  location : any;
  sublocations : any;
  locationresponseData:any;
  constructor(public navCtrl: NavController,public sublocationService:SubLocationService,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: OtherService) {
    this.location = navParams.get('location');
  
this.getData();
  }
  getData(){
    if(this.location!=null&&this.location.id!=null){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.sublocationService.getAllSubLocation(this.location.id).then((result) => {
      this.locationresponseData = result;
      console.log(this.locationresponseData); 
      if (this.locationresponseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.locationresponseData.results.result);
        this.sublocations = this.locationresponseData.results.result;
       
      }  else if(this.locationresponseData.statusCode == "404") {
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.locationresponseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  
}
