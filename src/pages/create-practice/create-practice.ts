import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {PracticeService} from '../../providers/practice/practice';
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
  selector: 'page-create-practice',
  templateUrl: 'create-practice.html',
})
export class CreatePracticePage {

  private createPracticeForm: FormGroup;
  locations:any;
  practice:any;
team:any;
opponent:any;
  username : any;
  responseData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public practiceService:PracticeService,public otherService:OtherService) {
   this.createPracticeForm = formBuilder.group({
     
    id: [],
     description: [],
	 	 practiceTime:[Validators.compose([ Validators.required])],
   location: [Validators.compose( [Validators.required])],
   team:[Validators.compose( [Validators.required])],
   createDate: [],
   modifyDate: []
	
  });

   this.getLocations();
 
 
  
 this.team = JSON.parse(localStorage.getItem('team'));
 this.practice =  navParams.get('practice');
 if(this.practice!=null){
   this.createPracticeForm.setValue(this.practice);
   this.createPracticeForm.controls['practiceTime'].setValue(new Date(this.practice.practiceTime).toISOString());
  }
 this.createPracticeForm.controls['team'].setValue(this.team);


  }
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
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

  addPractice(){
	   
	   
	   const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.addPractice(this.createPracticeForm.value).then((result) => {
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
