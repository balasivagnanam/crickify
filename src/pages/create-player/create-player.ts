import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  selector: 'page-create-player',
  templateUrl: 'create-player.html',
})
export class CreatePlayerPage {

  private createPlayerForm: FormGroup;
team:any;
  username : any;
  responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder) {
   this.createPlayerForm = formBuilder.group({
     
      username: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])]
     
  });

  
  
  this.username=this.createPlayerForm.controls['username'];
  
 this.team = JSON.parse(localStorage.getItem('team'));
 


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  addPlayer(){
	   const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.addPlayer(this.createPlayerForm.value,this.team).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
    
     
      }  else if(this.responseData.statusCode == "404") {
		   loading.dismiss();
        console.log("unauthorrised");
        
      } else {
        loading.dismiss();
  console.log("test others");
      }
      
    }, (err) => {
		console.log("error",err);
		 loading.dismiss();
      // Error log
    });
  }

}
