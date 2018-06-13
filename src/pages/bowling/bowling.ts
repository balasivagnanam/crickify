import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController,AlertController} from 'ionic-angular';
import {BowlingService} from '../../providers/bowling/bowling';
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
  selector: 'bowling',
  templateUrl: 'bowling.html',
})
export class BowlingPage {

  bowlingId: any;
  responseData: any;
  dismissals: any;
  players: any;
  bowling: any = "";
  tabsvalues: any = "summary";
  private createBowlingForm: FormGroup;
  team: any;
  match: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController, public bowlingService: BowlingService, public loadingController: LoadingController, formBuilder: FormBuilder, public otherService: OtherService, public teamService: TeamService) {
    console.log("passed data", navParams.get('bowlingId'));
    this.team = JSON.parse(localStorage.getItem('team'));
    this.bowlingId = navParams.get('bowlingId');
    this.getDismissals();
    this.getPlayers();
    this.match = navParams.get('matchId');


    this.createBowlingForm = formBuilder.group({
      maiden: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      run: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      ball: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      six: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      overs: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      wide: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      noBall: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      wickets:['', Validators.compose([Validators.pattern('[0-9]*')])],
      four: [''],
      dismisal: ['', Validators.compose([])],
      catches: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      stumpings: [''],
      runOuts: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      team: [''],
      match: [''],
      createDate: [''],
      modifyDate: [''],
      dnb: [''],
      fieldingmvp: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      id: [''],
      player: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*')])],
      mvp: ['', ],
      economy: ['', ],


    });
    if (this.bowlingId != null) {
      this.getData(this.bowlingId);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchDetailsPage');
  }
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }
  getData(bowlingId) {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.bowlingService.getBowlingSummary(bowlingId).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.bowling);
        this.bowling = this.responseData.results.bowling;


        this.createBowlingForm.setValue(this.bowling);



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
  getPlayers() {
    this.teamService.getAllPlayers(this.team).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {

        console.log("test 200");
        this.players = this.responseData.results.teams;
      } else if (this.responseData.statusCode == "404") {

      } else {

        console.log("error", this.responseData)
      }

    }, (err) => {

    });
  }
  saveBowling() {


    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.bowlingService.addBowling(this.createBowlingForm.value, this.match).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
this.alertDialog('Success','Bowling added Success');

      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        console.log("unauthorrised");
this.alertDialog('Error','unauthorrised');
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
