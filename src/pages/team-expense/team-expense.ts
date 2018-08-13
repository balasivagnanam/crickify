import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { MatchService } from '../../providers/matches/matches';
import { FinanceProvider } from '../../providers/finance/finance';
import {AddTeamExpensePage} from '../add-team-expense/add-team-expense';
import {AddPlayerExpensePage} from '../add-player-expense/add-player-expense';

/**
 * Generated class for the TeamExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-team-expense',
  templateUrl: 'team-expense.html',
})
export class TeamExpensePage {

  userDetails : any;
  responseData: any;
  updateresponseData: any;
  team:any;
  userPostData = {"user_id":"","token":""};
  paid: any = [];
  pending: any = [];
expenses : any;
total=0;
pendingAmount=0;
paidAmount=0;

  constructor(public navCtrl: NavController, public app:App, public authService:AuthService, public financeService:FinanceProvider, public loadingController: LoadingController) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
    this.team = JSON.parse(localStorage.getItem('team'));
  }

  ionViewCanEnter(){
   this.ionViewDidLoad();
  }
  
  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
    if (this.authService.getAuthenticated()){
      console.log("token", this.authService.getToken());
    }

    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.financeService.getTeamExpense(this.team.id).then((result) => {
      this.responseData = result;
      this.paid=[];
      this.pending=[];
      this.total=0;
      this.pendingAmount=0;
      this.paidAmount=0;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.expense);
        this.expenses = this.responseData.results.expense;
        for(let data of this.expenses) {
          if(data.status==1){
            this.paidAmount+=data.amount;
            this.total+=data.amount;
            this.paid.push(data)
          }else if(data.status==0){
            this.pendingAmount+=data.amount;
            this.total+=data.amount;
            this.pending.push(data)
          }}
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");

      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
    });

    
  }
  
  expenseSelected(event, expense){
    console.log("selected",event, expense);
    
    console.log("after change", expense);
    
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });

    this.financeService.postTeamExpenseUpdate(expense).then((result) => {
      this.updateresponseData = result;
      console.log(this.updateresponseData); 
      if (this.updateresponseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200", this.updateresponseData);
        this.ionViewDidLoad();
       // console.log("result", this.responseData.results.matches);
        //this.matches = this.responseData.results.matches;
      }  else if(this.updateresponseData.statusCode == "404") {
        console.log("unauthorrised");
      
      } else {
        loading.dismiss();
        console.log("error", this.updateresponseData)
      }
      
    }, (err) => {
      // Error log
    });

  }


 addExpense(){
  //Login page link
  this.navCtrl.push(AddTeamExpensePage);
}

editExpense(expense){

  this.navCtrl.push(AddTeamExpensePage, {"expense": expense});
}
addPlayerExpense(expense){

  this.navCtrl.push(AddPlayerExpensePage, {"expense": expense});
}
}

