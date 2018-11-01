import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { OtherService } from '../../providers/other/other';
import { VerifyPage } from '../verify/verify';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-team',
  templateUrl: 'create-team.html',
})
export class CreateTeamPage {

  private createTeamForm: FormGroup;
team:any;
  teamname : any;
  responseData : any;
  locationResponseData: any;
  locations: any;
  phone:any;
  paynow=false;
  constructor(public otherService: OtherService,public navCtrl: NavController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public alertController: AlertController) {
   this.team = navParams.get('team');
   this.createTeamForm = formBuilder.group({
     id: [''],
      teamname: ['', Validators.compose([Validators.required])],
      phone:[''],
      country:['', Validators.compose([Validators.required])],
      owner: [],
   createDate: [''],
      modifyDate: [''],
      paynow:['']
     
  });
    
if(this.team!=null){
    this.getTeam();
    
    }
  this.teamname=this.createTeamForm.controls['teamname'];
  this.getLocations();
  }

  getLocations() {

    this.otherService.getAllCountries().then((result) => {
      this.locationResponseData = result;
      console.log(this.locationResponseData);
     
        this.locations = this.locationResponseData;
       


     

    }, (err) => {
      console.log("error", err);

      // Error log
    });
  }
  getTeam(){
  this.createTeamForm.setValue(this.team);
  this.phone=this.team.phone;
  if(this.team.paynow!=null)
  this.paynow=this.team.paynow;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  validatePhoneresponseData:any;
  verify(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.validatePhone(this.phone).then((result) => {
      this.validatePhoneresponseData = result;
      console.log(this.validatePhoneresponseData); 
      if (this.validatePhoneresponseData.statusCode == '200'){
        loading.dismiss();
        this.navCtrl.push(VerifyPage,{type: 'team',id:this.team.id,phone:this.phone});
     
      } else {
        loading.dismiss();
       
 this.alertDialog('Error','Could not complete Validation');
      }
      
    }, (err) => {
		console.log("error",err);
		 loading.dismiss();
     this.alertDialog('Error','Could not complete Validation');
    });
  }

  addTeam(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.createTeam(this.createTeamForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        this.team=this.responseData.results.team;
    this.alertDialog('Success','Team Created Success');
     
      } else {
        loading.dismiss();
 this.alertDialog('Error','Could not create team');
      }
      
    }, (err) => {
		console.log("error",err);
		 loading.dismiss();
       this.alertDialog('Error','Could not create team');
    });
  }
  paynowresponseData:any;
  paynowChange(event){

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.updatePayNow(this.team.id,this.paynow).then((result) => {
      this.paynowresponseData = result;
      console.log(this.responseData); 
      if (this.paynowresponseData.statusCode == '200'){
        loading.dismiss();
        
    this.alertDialog('Success','Pay now status changed success');
     
      } else {
        loading.dismiss();
 this.alertDialog('Error','Pay now can only be activated once the phone number is verified.');
      }
      
    }, (err) => {
		console.log("error",err);
		 loading.dismiss();
       this.alertDialog('Error','Pay now can only be activated once the phone number is verified.');
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
