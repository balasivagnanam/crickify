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
  selector: 'page-add-player-expense',
  templateUrl: 'add-player-expense.html',
})
export class AddPlayerExpensePage {
  expense: any;
  responseData: any;
  deleteresponseData: any;
  playerresponseData: any;
  addresponseData: any;
private addExpenseForm: FormGroup;
playerExpenses:any;
  players:any=[];
  tabsvalues: any = "summary";
team:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public financeService: FinanceProvider,public alertController: AlertController, public loadingController: LoadingController,public teamService:TeamService,formBuilder: FormBuilder) {
   this.addExpenseForm = formBuilder.group({
    amount: ['', Validators.compose([Validators.required])],
    player: ['', Validators.compose([Validators.required])],
    expense: ['', Validators.compose([Validators.required])],
    createDate: [''],
    id: [''],
    cmnt: [''],
    remark: [''],
    paid: [''],
    paymentType: [''],
    modifyDate: [''],
    expenseDate: [''],
    paymentDate: ['']
});

 this.team = JSON.parse(localStorage.getItem('team'));
 this.getPlayers();
console.log("passed data",navParams.get('expense') );
  this.expense = navParams.get('expense');
  this.addExpenseForm.controls['expense'].setValue(this.expense);
  this.getData(this.expense);


}
compareFn(e1: any, e2: any): boolean {
  return e1 && e2 ? e1.id === e2.id : e1 === e2;
}
ionViewDidLoad() {
  console.log('ionViewDidLoad PreviousMatchDetailsPage');
}

getData(expense){
  const loading = this.loadingController.create({
    content: 'Please wait...'
  });
  loading.present();
  this.financeService.getPlayerExpenses(expense).then((result) => {
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
      this.getData(this.expense);
     
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
addPlayerExpense(){
  const loading = this.loadingController.create({
    content: 'Please wait...'
  });
  loading.present();
  this.financeService.createPlayerExpense(this.addExpenseForm.value).then((result) => {
    this.addresponseData = result;
    console.log(this.addresponseData); 
    if (this.addresponseData.statusCode == '200'){
      loading.dismiss();
     
       this.getData(this.expense);
       //this.getPlayers();
       this.alertDialog('Success','Player Success');
    }  else if(this.addresponseData.statusCode == "404") {
      loading.dismiss();
      this.alertDialog('Error','UnAuthorized');
    } else {
      loading.dismiss();
      console.log("error", this.addresponseData)
      this.alertDialog('Error','Error');
    }
    
  }, (err) => {
    // Error log
  loading.dismiss();
    this.alertDialog('Error','Error');
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

sendTeam(){
  this.financeService.sendTeamReminder(this.expense).then((result) => {
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
editPlayerExpense(playerExpense){
  this.addExpenseForm.setValue(playerExpense);
}

addNew(){
  this.addExpenseForm.reset();
  this.getPlayers();
  this.addExpenseForm.controls['expense'].setValue(this.expense);
}
}
