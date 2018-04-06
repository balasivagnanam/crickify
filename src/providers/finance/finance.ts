import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://crickify.herokuapp.com/finance';

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
      this.http.get(apiUrl + '/playerExpense', {headers: headers})
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


 
  postUpdate(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.post(apiUrl + '/playerExpense/update', JSON.stringify(data), {headers: headers})
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