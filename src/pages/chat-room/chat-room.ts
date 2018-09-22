import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { ChatService } from '../../providers/chat/chat';
import {MatchTeamPage} from '../match-team/match-team';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { PipesModule } from '../../pipes/pipes.module';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';

import {OtherService} from '../../providers/other/other';

import {ChatPage} from '../../pages/chat/chat';
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html'
})

export class ChatRoomPage {

  userDetails : any;
  responseData: any;
  teamresponseData: any;
  tournamentresponseData: any;
 
  userPostData = {"user_id":"","token":""};
  private searchChatForm: FormGroup;
 
  teams:any;
chats : any;
user:any;
  constructor(public navCtrl: NavController, public app:App, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public chatService:ChatService, public loadingController: LoadingController,public admob: AdMobFree) {
  
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.user = data.user;
    
    
    
    this.searchChatForm = formBuilder.group({

      startDate: [],
      endDate: [],
      type: []
      
    });

  }


  deleteChat(chat) {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    chat.active=false;
    this.chatService.addChat(chat).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");

      this.ionViewDidLoad();
      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        console.log("unauthorrised");
        
      } else {
        loading.dismiss();
        console.log("test others");
      
      }

    }, (err) => {
      console.log("error", err);
      loading.dismiss();
     
      // Error log
    });
  }

  ionViewWillEnter(){

    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
  
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.chatService.getAllChat().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.chats = this.responseData.results.result;
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
  
  
  viewChat(chat){

    this.navCtrl.push(ChatPage,{room: chat.room});

  }
 

  

  search(){
    console.log('ionViewDidLoad home page');
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.chatService.getAllChat().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.chats = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "403") {
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
