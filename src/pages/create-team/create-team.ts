import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public alertController: AlertController) {
   this.team = navParams.get('team');
   this.createTeamForm = formBuilder.group({
     id: [''],
      teamname: ['', Validators.compose([Validators.required])],
      owner: [''],
   createDate: [''],
      modifyDate: ['']
     
  });
    
if(this.team!=null){
    this.getTeam();
    
    }
  this.teamname=this.createTeamForm.controls['teamname'];

  }

  
  getTeam(){
  this.createTeamForm.setValue(this.team);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
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
        console.log("test 200");
    this.alertDialog('Success','Team Created Success');
     
      }  else if(this.responseData.statusCode == "404") {
		   loading.dismiss();
        console.log("unauthorrised");
         this.alertDialog('Error','UnAuthorized');
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
