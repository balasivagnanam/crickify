import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {MatchService} from '../../providers/matches/matches';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import {OtherService} from '../../providers/other/other';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-match',
  templateUrl: 'create-match.html',
})
export class CreateMatchPage {

  private createMatchForm: FormGroup;
  locations:any;
  tournaments:any;
team:any;
opponent:any;
  username : any;
  responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public matchService:MatchService,public otherService:OtherService) {
   this.createMatchForm = formBuilder.group({
     
      opponent: ['', Validators.compose([Validators.required])],
     description: ['', ],
	 remarks: ['', ],
	 matchTime:['',Validators.compose([ Validators.required])],
	 location: ['', Validators.compose( [Validators.required])],
	 tournament: ['', Validators.compose([ Validators.required])]
  });

   this.getLocations();
  this.getTournament();
  this.opponent=this.createMatchForm.controls['opponent'];
  
 this.team = JSON.parse(localStorage.getItem('team'));
 


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }
  
  getLocations(){
    
    this.otherService.getAllLocation().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        this.locations=this.responseData.results.locations;
        console.log("test 200");
    
     
      }  else if(this.responseData.statusCode == "404") {
		  
        console.log("unauthorrised");
        
      } else {
       
  console.log("test others");
      }
      
    }, (err) => {
		console.log("error",err);
		 
      // Error log
    });
  }
getTournament(){
    this.otherService.getAllTournament().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        this.tournaments=this.responseData.results.Tournaments;
        console.log("test 200");
    
     
      }  else if(this.responseData.statusCode == "404") {
		  
        console.log("unauthorrised");
        
      } else {
       
  console.log("test others");
      }
      
    }, (err) => {
		console.log("error",err);
		 
      // Error log
    });
  }
  addMatch(){
	   
	   
	   const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.addMatch(this.createMatchForm.value,this.team).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
    
     this.alertDialog('Success','Added');
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
