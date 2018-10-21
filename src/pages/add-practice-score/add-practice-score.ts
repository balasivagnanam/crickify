import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {PracticeService} from '../../providers/practice/practice';
import {ScoreService} from '../../providers/score/score';
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
  selector: 'page-add-practice-score',
  templateUrl: 'add-practice-score.html',
})
export class AddPracticeScorePage {

  practice: any;
  responseData: any;
  striker:any;
  nonStriker:any;
private addBallForm: FormGroup;
score:any=[];
  practiceplayers: any = [];
  players:any=[];
  team:any;
  run=0;
  ball=1;
  out=false;
  constructor(public scoreService:ScoreService,public navCtrl: NavController, public navParams: NavParams, public practiceService: PracticeService,public alertController: AlertController, public loadingController: LoadingController,public teamService:TeamService,formBuilder: FormBuilder) {
     this.addBallForm = formBuilder.group({
      striker:['', Validators.compose([Validators.required])],
      nonStriker: [],
      run:[ '',Validators.compose([Validators.required])],
      ball:[ '',Validators.compose([Validators.required])],
      bowler:['', Validators.compose([Validators.required])],
      extra:[0],
      out:[false],
      dismissal:[],
      shotType:[0],
      ballType:[0],
      text:[],
      practice:[ Validators.compose([Validators.required])]
  });
  

	
	
    this.practice = navParams.get('practice');
    this.team = JSON.parse(localStorage.getItem('team'));
    this.addBallForm.controls['ball'].setValue(this.ball);
    this.addBallForm.controls['practice'].setValue(this.practice);
  this.getData(this.practice.id);
  this.getScores();

  }

  createScore(value){

    this.scoreService.addpracticescore(value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){

     
      }else {

      }
      
    }, (err) => {

    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousPracticeDetailsPage');
  }

  onStrikerChange(player){

    this.addBallForm.controls['striker'].setValue(player);
  }

  onNonStrikerChange(player){

    this.addBallForm.controls['nonStriker'].setValue(player);
  }
  onRunChange(run){

    this.addBallForm.controls['run'].setValue(run);
    
  }

  onOutChange(out){

    this.addBallForm.controls['out'].setValue(out);
    
  }
  addBall(){
    var text='';
    if(this.out==true){
      text='W';
      this.addBallForm.controls['text'].setValue('W');
    }else{
      text=''+this.run;
      this.addBallForm.controls['text'].setValue(''+this.run);
    }
    if(this.addBallForm.controls['extra'].value>0){
if(this.addBallForm.controls['extra'].value<3){

  text='wd'
}else{
  text='nb'
}

    }
    this.addBallForm.controls['striker'].setValue(this.striker);
    this.addBallForm.controls['nonStriker'].setValue(this.nonStriker);
    this.addBallForm.controls['run'].setValue(this.run);
    this.score.push(this.addBallForm.value);
    this.createScore(this.addBallForm.value);
    this.ball=this.ball+1;
    this.addBallForm.reset();
    this.run=0;
    this.addBallForm.controls['ball'].setValue(this.ball);
    this.addBallForm.controls['striker'].setValue(this.striker);
    this.addBallForm.controls['nonStriker'].setValue(this.nonStriker);
    this.addBallForm.controls['practice'].setValue(this.practice);
    this.addBallForm.controls['shotType'].setValue(0);
    this.addBallForm.controls['extra'].setValue(0);
    this.addBallForm.controls['run'].setValue(this.run);
  }

  addtempPlayer(){
    
  }
  subresponseData:any;
  getScores(){
    if(this.practice!=null&&this.practice.id!=null){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.scoreService.getAllpracticescore(this.practice.id).then((result) => {
      this.subresponseData = result;
      console.log(this.subresponseData); 
      if (this.subresponseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.subresponseData.results.result);
        this.score = this.subresponseData.results.result;
      }  else if(this.subresponseData.statusCode == "404") {
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.subresponseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }
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
