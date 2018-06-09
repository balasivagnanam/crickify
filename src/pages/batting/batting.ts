import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {BattingService} from '../../providers/batting/batting';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {OtherService} from '../../providers/other/other';
import {TeamService} from '../../providers/teams/teams';
/**
 * Generated class for the PreviousMatchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'batting',
  templateUrl: 'batting.html',
})
export class BattingPage {

  battingId: any;
  responseData: any;
  dismissals: any;
players: any;
  batting: any = "";
  tabsvalues: any = "summary";
  private createBattingForm: FormGroup;
  team: any;
  match: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public battingService: BattingService, public loadingController: LoadingController, formBuilder: FormBuilder, public otherService: OtherService,public teamService:TeamService) {
    console.log("passed data", navParams.get('battingId'));
    this.team = JSON.parse(localStorage.getItem('team'));
    this.battingId = navParams.get('battingId');
    this.getDismissals();
    this.getPlayers();
    this.match = navParams.get('matchId');

    
    this.createBattingForm = formBuilder.group({

      run: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      ball: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      six: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      four: [''],
      dismisal: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      team: [''],
      match: [''],
      createDate: [''],
      modifyDate: [''],
      dnb: [''],
      out: [''],
      id: [''],
      player: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      mvp: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      sr: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      battingDown: [''],

    });
    if (this.battingId != null) {
      this.getData(this.battingId);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchDetailsPage');
  }
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }
  getData(battingId) {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.battingService.getBattingSummary(battingId).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.batting);
        this.batting = this.responseData.results.batting;


        this.createBattingForm.setValue(this.batting);

        

      } else if (this.responseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }

    }, (err) => {
      // Error log
    });
  }
  getDismissals() {

    this.otherService.getAllDismisals().then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        this.dismissals = this.responseData.results.dismisals;
        console.log("test 200");


      } else if (this.responseData.statusCode == "404") {

        console.log("unauthorrised");

      } else {

        console.log("test others");
      }

    }, (err) => {
      console.log("error", err);

      // Error log
    });
  }
 getPlayers(){
    this.teamService.getAllPlayers(this.team).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        
        console.log("test 200");
        this.players = this.responseData.results.teams;
         }  else if(this.responseData.statusCode == "404") {
     
      } else {
        
        console.log("error", this.responseData)
      }
      
    }, (err) => {
     
    });
  }
  saveBatting() {


    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.battingService.addBatting(this.createBattingForm.value, this.match).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");


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


}
