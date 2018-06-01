import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public matchService:MatchService,public otherService:OtherService) {
   this.createMatchForm = formBuilder.group({
     
      opponent: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
     description: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	 remarks: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	 matchTime:[''],
	 location: new FormControl([{address: "", lat: 0, lng: 0, name: "", id:0}, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])]),
	 tournament: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])]
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
