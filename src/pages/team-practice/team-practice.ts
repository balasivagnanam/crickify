import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {AuthService} from '../../providers/auth/auth';
import moment from 'moment';
import {PreviousMatchDetailsPage} from '../previous-match-details/previous-match-details';
import {AddMatchTeamPage} from '../add-match-team/add-match-team';
import {CreatePracticePage} from '../create-practice/create-practice';
import {PracticeAvailabilityPage} from '../practice-availability/practice-availability';
import {PreviousMatchDetailsEditPage} from '../previous-match-details-edit/previous-match-details-edit';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';

import {OtherService} from '../../providers/other/other';
import { PracticeService } from '../../providers/practice/practice';
import { AddPracticeTeamPage } from '../add-practice-team/add-practice-team';
import { AddPracticeScorePage } from '../add-practice-score/add-practice-score';
/**
 * Generated class for the PreviousMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-practice',
  templateUrl: 'team-practice.html',
})
export class  TeamPracticePage {
  responseData: any;
  practices: any = '';
   team:any;
   deleteResponseData: any;
   teamresponseData: any;
 
  
   userPostData = {"user_id":"","token":""};
   private searchPracticesForm: FormGroup;
 
   teams:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public loadingController:LoadingController,public authService:AuthService, public practiceService:PracticeService) {
    this.team = JSON.parse(localStorage.getItem('team'));
	
  //this.getTeams();

  this.searchPracticesForm = formBuilder.group({
    endDate: [''],
    startDate: [''],
    teamId: this.team.id

  });
  this.getData();
  }
  ionViewWillEnter() {
   this.getData();
  }

  getData(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.getAllPracticeSearch(this.searchPracticesForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.practices = this.responseData.results.result;
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

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchesPage');

    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    
  }
  goToPracticeTeam(event){
    console.log("clicked match team", event);
    this.navCtrl.push(AddPracticeTeamPage, {"practice": event});
  }
  goToPracticeAvailability(event){
   
    this.navCtrl.push(PracticeAvailabilityPage, {"practiceId": event});
  }
  edit(event){
   
    this.navCtrl.push(CreatePracticePage, {"practice": event});
  }
  start(event){
   
    this.navCtrl.push(AddPracticeScorePage, {"practice": event});
  }
  delete(practice){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.delete(practice).then((result) => {
      this.deleteResponseData = result;
      console.log(this.deleteResponseData);
       
      if (this.deleteResponseData.statusCode == '200'){
        loading.dismiss();
     this.getData();
      }  else if(this.deleteResponseData.statusCode == "404") {
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.deleteResponseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }
   addPractice(){
    //Login page link
    this.navCtrl.push(CreatePracticePage);
  }
  

 

  search(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.getAllPracticeSearch(this.searchPracticesForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.practices = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
		loading.dismiss();

     
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

  }
}


