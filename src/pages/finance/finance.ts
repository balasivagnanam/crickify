import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { MatchService } from '../../providers/matches/matches';
import { FinanceProvider } from '../../providers/finance/finance';
import {MatchTeamPage} from '../match-team/match-team';
@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html'
})
export class FinancePage {

  userDetails : any;
  responseData: any;
  updateresponseData: any;
  paid: any = [];
  pending: any = [];
  userPostData = {"user_id":"","token":""};
  tabsvalues : String = "pending";
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
  }

  ionViewCanEnter(){
    console.log("view did enter", this.authService.getAuthenticated());
      return this.authService.getAuthenticated();
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
    this.financeService.getAllExpense().then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        this.paid=[];
        this.pending=[];
        this.total=0;
        this.pendingAmount=0;
        this.paidAmount=0;
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.expenses = this.responseData.results.result;

        for(let data of this.expenses) {
          if(data.paid){
            this.paidAmount+=data.amount;
            this.total+=data.amount;
            this.paid.push(data)
          }else if(!data.paid){
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
  
  availabilitySelected(event, expense){
    console.log("selected",event, expense);
    expense.player = this.authService.getUser();
    console.log("after change", expense);
    
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });

    this.financeService.postUpdate(expense).then((result) => {
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


  
 goToMatchTeam(event){
    console.log("clicked match team", event);
    this.navCtrl.push(MatchTeamPage, {"matchId": event});
  }
}
