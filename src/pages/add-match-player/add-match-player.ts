import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {MatchService} from '../../providers/matches/matches';
import {TeamService} from '../../providers/teams/teams';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
/**
 * Generated class for the MatchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-match-player',
  templateUrl: 'add-match-player.html',
})
export class AddMatchPlayerPage {

  matchId: any;
  responseData: any;
private addPlayerForm: FormGroup;
  batting: any = [];
  players:any=[];
  selected:any=[];
  tabsvalues: any = "summary";
team:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public matchService: MatchService,public alertController: AlertController, public loadingController: LoadingController,public teamService:TeamService,formBuilder: FormBuilder) {
     this.addPlayerForm = formBuilder.group({   
      
      player: ['']
  });
  
	 this.team = JSON.parse(localStorage.getItem('team'));
	console.log("passed data",navParams.get('matchId') );
    this.matchId = navParams.get('matchId');
    
	this.getPlayers();
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchDetailsPage');
  }

  updatePlayer(stat){

    var index = this.selected.indexOf(stat);
    if(index > -1) {
        this.selected.splice(index, 1);
        
    } else {
      this.selected.push(stat);
       
    }
    
  }
  addPlayers(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    for (let entry of this.selected) {
      this.addPlayer(entry);
  }
  loading.dismiss();
    
  }
  addPlayer(value){

    this.addPlayerForm.controls['player'].setValue(value);
    this.matchService.createMatchTeam(this.matchId,this.addPlayerForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
       
       
        
      }  else if(this.responseData.statusCode == "404") {
       
      
      } else {
       
        console.log("error", this.responseData)
       
      }
      
    }, (err) => {
      console.log("error", err)
    });
  }
   getPlayers(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.teamService.getOtherMatchPlayers(this.team,this.matchId).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log(this.responseData.results.players);
        this.players = this.responseData.results.players;
        loading.dismiss();
         }  else if(this.responseData.statusCode == "404") {
     
          loading.dismiss();
      } else {
        
        console.log("error", this.responseData)
        loading.dismiss();
      }
      
    }, (err) => {
      loading.dismiss();
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
