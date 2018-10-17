import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {PracticeService} from '../../providers/practice/practice';
import {TeamService} from '../../providers/teams/teams';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
/**
 * Generated class for the PracticeTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-practice-team',
  templateUrl: 'add-practice-team.html',
})
export class AddPracticeTeamPage {

  practice: any;
  responseData: any;
private addPracticeTeamForm: FormGroup;
private addPracticeTeamTempForm: FormGroup;
  practiceplayers: any = [];
  players:any=[];
  tabsvalues: any = "summary";
team:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public practiceService: PracticeService,public alertController: AlertController, public loadingController: LoadingController,public teamService:TeamService,formBuilder: FormBuilder) {
     this.addPracticeTeamForm = formBuilder.group({
      practice:['', Validators.compose([Validators.required])],
      player: ['', Validators.compose([Validators.required])]
    
  });
  
  this.addPracticeTeamTempForm = formBuilder.group({
    name:['', Validators.compose([Validators.required])],
    username: ['',]
  
});
	 this.team = JSON.parse(localStorage.getItem('team'));
	console.log("passed data",navParams.get('practiceId') );
    this.practice = navParams.get('practice');
    this.addPracticeTeamForm.controls['practice'].setValue(this.practice);
    this.getData(this.practice.id);
	this.getPlayers();
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousPracticeDetailsPage');
  }

  getData(practiceId){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.getPracticeTeam(practiceId).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
  
        this.practiceplayers = this.responseData.results.result;
     
      }  else if(this.responseData.statusCode == "404") {
      loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }
delete(practiceteam){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.deletePracticeTeam(practiceteam.id).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        this.getData(this.practice.id);
       
     this.alertDialog('Success','Player Success');
      }  else if(this.responseData.statusCode == "404") {
       loading.dismiss();
          this.alertDialog('Error','UnAuthorized');
      } else {
        loading.dismiss();
         this.alertDialog('Error','Error');
      }
      
    }, (err) => {
		loading.dismiss();
        this.alertDialog('Error','Error');
      // Error log
    });
  }
  addPlayer(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.createPracticeTeam(this.addPracticeTeamForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
       
         this.getData(this.practice.id);
         this.getPlayers();
         this.alertDialog('Success','Player Success');
      }  else if(this.responseData.statusCode == "404") {
        loading.dismiss();
        this.alertDialog('Error','UnAuthorized');
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
        this.alertDialog('Error','Error');
      }
      
    }, (err) => {
      // Error log
	  loading.dismiss();
      this.alertDialog('Error','Error');
    });
  }

  addtempPlayer(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.createTempPracticeTeamPlater(this.practice.id,this.addPracticeTeamTempForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
       
         this.getData(this.practice.id);
         this.getPlayers();
         this.alertDialog('Success','Player Success');
      }  else if(this.responseData.statusCode == "404") {
        loading.dismiss();
        this.alertDialog('Error','UnAuthorized');
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
        this.alertDialog('Error','Error');
      }
      
    }, (err) => {
      // Error log
	  loading.dismiss();
      this.alertDialog('Error','Error');
    });
  }
   getPlayers(){
    this.teamService.getOtherPracticePlayers(this.team,this.practice.id).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log("test 200");
        this.players = this.responseData.results.players;
         }  else if(this.responseData.statusCode == "404") {
     
      } else {
        
        console.log("error", this.responseData)
      }
      
    }, (err) => {
     
    });
  }
  
  sendTeam(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.sendTeamList(this.practice.id).then((result) => {
      loading.dismiss();
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        this.alertDialog('Success','Email Success');
      
         }  else if(this.responseData.statusCode == "404") {
          this.alertDialog('Error','Email Error');
      } else {
        
        this.alertDialog('Error','Email Error');
      }
      
    }, (err) => {
      loading.dismiss();
      this.alertDialog('Error','Email Error');
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
