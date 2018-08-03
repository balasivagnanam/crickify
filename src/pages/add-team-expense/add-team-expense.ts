import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController,AlertController} from 'ionic-angular';
import {FinanceProvider} from '../../providers/finance/finance';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {OtherService} from '../../providers/other/other';
import {TeamService} from '../../providers/teams/teams';
/**
 * Generated class for the AddTeamExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-team-expense',
  templateUrl: 'add-team-expense.html',
})
export class AddTeamExpensePage {
  team: any;
  expenseId:any;
  private createExpenseForm: FormGroup;
  responseData:any;
  expense:any;
  constructor(public navCtrl: NavController,public alertController: AlertController, public navParams: NavParams, public financeService: FinanceProvider, public loadingController: LoadingController, formBuilder: FormBuilder) {

    this.team = JSON.parse(localStorage.getItem('team'));
    this.expense = navParams.get('expense');
  
   

    
    this.createExpenseForm = formBuilder.group({

      amount: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      name: [''],
      team: [''],
      description: [''],
      status: ['', Validators.compose([Validators.pattern('[0-9]*')])],
      createDate: [''],
      id: [''],
      modifyDate: [''],
      expenseDate: [''],
      invoice:[''],
      paymentDate:['']
    });
    this.createExpenseForm.controls['team'].setValue(this.team);
    if (this.expense != null) {
      this.createExpenseForm.setValue(this.expense);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousMatchDetailsPage');
  }
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }
  

  addExpense() {


    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    if(this.expense==null){
    this.financeService.addExpense(this.createExpenseForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
this.alertDialog('Success','Batting added Success');

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
  }else{
    this.financeService.addExpense(this.createExpenseForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");
this.alertDialog('Success','Batting added Success');

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
