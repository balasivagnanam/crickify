import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController,AlertController} from 'ionic-angular';
import {MatchService} from '../../providers/matches/matches';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {OtherService} from '../../providers/other/other';
import {BattingPage} from '../batting/batting';
import {BowlingPage} from '../bowling/bowling';
/**
 * Generated class for the PreviousMatchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previous-match-details-edit',
  templateUrl: 'previous-match-details-edit.html',
})
export class PreviousMatchDetailsEditPage {

  matchId: any;
  responseData: any;
  matchSummary: any;
  batting: any = [];
  bowling: any = [];
  match: any = "";
  tabsvalues: any = "summary";
  private createMatchForm: FormGroup;
  locations: any;
  tournaments: any;
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController, public matchService: MatchService, public loadingController: LoadingController, formBuilder: FormBuilder, public otherService: OtherService) {
    console.log("passed data", navParams.get('matchId'));
    this.matchId = navParams.get('matchId');
    this.getLocations();
    this.getTournament();

    this.team = JSON.parse(localStorage.getItem('team'));
    this.createMatchForm = formBuilder.group({

      opponent: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      description: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      remarks: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      matchTime: [''],
      location: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      tournament: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      deadline: [''],
      points: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      team: [''],
      createDate: [''],
      modifyDate: [''],
      id: [''],
      oppositionScore: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      oppositionWickets: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      oppositionOvers: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      score: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      wickets: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      overs: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      result: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*')])],
      tossWon: [''],
      played: [''],
      battingFirst: [''],
    });
	    this.getData(this.matchId);
  }
  ionViewWillEnter() {
   this.getData(this.matchId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchDetailsPage');
  }
compareFn(e1: any, e2: any): boolean {
  return e1 && e2 ? e1.id === e2.id : e1 === e2;
}
  getData(matchId) {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.getMatchSummary(matchId).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.matchSummary);
        this.matchSummary = this.responseData.results.matchSummary;
        this.match = this.responseData.results.matchSummary.match;

        this.createMatchForm.setValue(this.match);
        this.createMatchForm.controls['matchTime'].setValue(new Date(this.match.matchTime).toISOString());
  
		this.createMatchForm.controls['location'].patchValue(this.match.location);
        this.batting = this.responseData.results.matchSummary.batting;
        this.bowling = this.responseData.results.matchSummary.bowling;
      } else if (this.responseData.statusCode == "404") {
        console.log("unauthorrised");
         this.alertDialog('Error','Error');
        
      } else {
        loading.dismiss();
       
         this.alertDialog('Error','Error');
      }

    }, (err) => {
        loading.dismiss();
      this.alertDialog('Error','Error');
    });
  }
  getLocations() {

    this.otherService.getAllLocation().then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        this.locations = this.responseData.results.locations;
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
  getTournament() {
    this.otherService.getAllTournament().then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        this.tournaments = this.responseData.results.Tournaments;
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
  editMatch() {


    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.matchService.addMatch(this.createMatchForm.value, this.team).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");


      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        console.log("unauthorrised");
 this.alertDialog('Error','Error');
      } else {
        loading.dismiss();
        console.log("test others");
         this.alertDialog('Error','Error');
      }

    }, (err) => {
      console.log("error", err);
      loading.dismiss();
       this.alertDialog('Error','Error');
      // Error log
    });
  }

  addBatting() {
this.navCtrl.push(BattingPage, {matchId: this.matchId});
  }
  editBatting(battingId) {
this.navCtrl.push(BattingPage, {matchId: this.matchId,
battingId:battingId
});
  }
  
   editBowling(bowlingId) {
this.navCtrl.push(BowlingPage, {matchId: this.matchId,
bowlingId:bowlingId
});
  }
  addBowling() {

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
