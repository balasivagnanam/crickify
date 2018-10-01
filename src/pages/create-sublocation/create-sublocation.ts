import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,AlertController} from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {SubLocationService} from '../../providers/sublocation/sublocation';
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
  selector: 'page-create-sublocation',
  templateUrl: 'create-sublocation.html',
})
export class CreateSubLocationPage {

  private createLocationForm: FormGroup;
location:any;
  name : any;
  user:any;
  responseData : any;
  constructor(public navCtrl: NavController,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: SubLocationService) {
   
    this.location = navParams.get('sublocation');
    this.createLocationForm = formBuilder.group({
     
      name: ['', Validators.compose([ Validators.required])],
      user:[],
    id:[],
    rate: ['', Validators.compose([ Validators.required])]

     
  });
  if (this.location != null) {
    this.createLocationForm.setValue(this.location);
  }
  const data = JSON.parse(localStorage.getItem('userData'));
  this.user = data.user;
  this.createLocationForm.controls['user'].setValue(this.user);
  this.name=this.createLocationForm.controls['name'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  createSubLocation(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.addSubLocation(this.createLocationForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
    
     
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
