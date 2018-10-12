import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,AlertController} from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {SlotService} from '../../providers/slot/slot';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import moment from 'moment';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-slot',
  templateUrl: 'create-slot.html',
})
export class CreateSlotPage {

  private createSlotForm: FormGroup;
  slot:any;
  name : any;
  user:any;
  responseData : any;
  minDate: string = moment.utc(new Date()).local().format();
  subLocation :any;
  constructor(public navCtrl: NavController,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: SlotService) {
    this.slot = navParams.get('slot');
    this.subLocation = navParams.get('subLocation');
    this.createSlotForm = formBuilder.group({
      id:[],
      available:[true],
      active: [true],
      subLocation:['', Validators.compose([ Validators.required])],
    startDate:['', Validators.compose([ Validators.required])],  
    rate: ['', Validators.compose([ Validators.required])],
    endDate:['', Validators.compose([ Validators.required])] 
  
  });
  if (this.slot != null) {
    
    this.createSlotForm.setValue(this.slot);
  }else{
   
    
    this.createSlotForm.controls['subLocation'].setValue(this.subLocation);
    
  }


  const data = JSON.parse(localStorage.getItem('userData'));
  this.user = data.user;




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  createSlot(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.addSlot(this.createSlotForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.navCtrl.pop();
     
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
