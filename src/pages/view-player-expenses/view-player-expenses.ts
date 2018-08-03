import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {FinanceProvider} from '../../providers/finance/finance';
import {TeamService} from '../../providers/teams/teams';
import {Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';

/**
 * Generated class for the AddPlayerExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-player-expenses',
  templateUrl: 'view-player-expenses.html',
})
export class ViewPlayerExpensePage {
  
  responseData: any;
  deleteresponseData: any;
  playerresponseData: any;
  addresponseData: any;
private searchExpenseForm: FormGroup;
playerExpenses:any;
  players:any=[];
  tabsvalues: any = "summary";
team:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public financeService: FinanceProvider,public alertController: AlertController, public loadingController: LoadingController,public teamService:TeamService,formBuilder: FormBuilder) {
   this.searchExpenseForm = formBuilder.group({
    
    playerid: [],
    
   
    paid: [],
   teamId:[],
    startDate: [],
    endDate: []
});

 this.team = JSON.parse(localStorage.getItem('team'));
 this.getPlayers();
console.log("passed data",navParams.get('expense') );
 
this.searchExpenseForm.controls['teamId'].setValue(this.team.id);
  this.getData();


}
compareFn(e1: any, e2: any): boolean {
  return e1 && e2 ? e1.id === e2.id : e1 === e2;
}
ionViewDidLoad() {
  console.log('ionViewDidLoad PreviousMatchDetailsPage');
}

getData(){
  const loading = this.loadingController.create({
    content: 'Please wait...'
  });
  loading.present();
  this.financeService.getTeamPlayerExpenses(this.searchExpenseForm.value).then((result) => {
    this.responseData = result;
    console.log(this.responseData); 
    if (this.responseData.statusCode == '200'){
      loading.dismiss();
      console.log("test 200");
      console.log("result", this.responseData.results.result);

      this.playerExpenses = this.responseData.results.result;
   
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
delete(playerExpense){
  const loading = this.loadingController.create({
    content: 'Please wait...'
  });
  loading.present();
  this.financeService.deletePlayerExpense(playerExpense).then((result) => {
    this.deleteresponseData = result;
    console.log(this.deleteresponseData); 
    if (this.deleteresponseData.statusCode == '200'){
      loading.dismiss();
      console.log("test 200");
      this.getData();
     
   this.alertDialog('Success','Player Success');
    }  else if(this.deleteresponseData.statusCode == "404") {
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

 getPlayers(){
  this.teamService.getAllPlayers(this.team).then((result) => {
    this.playerresponseData = result;
    console.log(this.playerresponseData); 
    if (this.playerresponseData.statusCode == '200'){
      
      console.log("test 200");
      this.players = this.playerresponseData.results.teams;
       }  else if(this.playerresponseData.statusCode == "404") {
   
    } else {
      
      console.log("error", this.playerresponseData);
    }
    
  }, (err) => {
    console.log("error", this.playerresponseData);
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
editPlayerExpense(playerExpense){
  
}

}
