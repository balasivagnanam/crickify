import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/env';
let apiUrl = ENV.baseUrl+'/finance';

//let isLoggedIn : boolean;
let isAuthenticated : boolean;
@Injectable()
export class FinanceProvider {

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }

  getAllExpense() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/playerExpenseUser', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("expense", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  getExpenseSummary(id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/playerExpense'+id, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("expense", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getTeamExpense(teamId) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/team/'+teamId, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("expense", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getPlayerExpenses(expense) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/expense/'+expense.id+'/playerExpenses', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("expense", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getTeamPlayerExpenses(filter) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
    let urlSearchParams = new URLSearchParams();
    for(let key in filter){
      if(filter[key]!==null){
    urlSearchParams.append(key, filter[key]);
      }
  }
      this.http.get(apiUrl + '/playerExpense?'+urlSearchParams, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("expense", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  createPlayerExpense(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.post(apiUrl + '/playerExpense', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("expense update", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  deletePlayerExpense(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.delete(apiUrl + '/playerExpense/'+data.id, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("expense update", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  postUpdate(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.put(apiUrl + '/playerExpense/'+data.id, JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("expense update", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  sendTeamReminder(expense){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.post(apiUrl + '/expense/reminder'+expense,{headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("expense update", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  postTeamExpenseUpdate(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.put(apiUrl + '/teamExpense/'+data.id, JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("expense update", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });
    
  }
  addExpense(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.post(apiUrl + '/teamExpense/', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("expense update", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });
  }
  
}