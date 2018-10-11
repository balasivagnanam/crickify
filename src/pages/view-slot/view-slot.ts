import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,AlertController} from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {SlotService} from '../../providers/slot/slot';
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
  selector: 'page-view-slot',
  templateUrl: 'view-slot.html',
})
export class ViewSlotPage {


  slot:any;
  name : any;
  user:any;
  responseData : any;
  booking:any;
  updateresponseData:any;
 
  constructor(public navCtrl: NavController,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: SlotService) {
    this.slot = navParams.get('slot');
    



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
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

 
  deleteSlot() {
    let alert = this.alertController.create({
      title: 'Cancel Slot',
      message: 'Do you want to cancel this slot?'
      ,
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
           
              this.cancel(this.slot.id);
            
          }
        }
      ]
    });
    alert.present();
  }
  cancel(id){
        const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.otherService.delete(id).then((result) => {
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
