import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://crickify.herokuapp.com/login';

//let isLoggedIn : boolean;
let isAuthenticated : boolean;
@Injectable()
export class AuthService {

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
    const data = JSON.parse(localStorage.getItem('userData'));
    if(data != ""){
        console.log("user data presnet");
        isAuthenticated = true;
    } else {
        isAuthenticated = false;
    }
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).token;
  }

  signup(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
      this.http.post(apiUrl + '/create', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response signup", res.json()); 
          if(res.json().statusCode == '200' || res.json().statusCode == '401'){
            isAuthenticated = true;
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
          isAuthenticated = false;
          localStorage.clear();
        });
    });

  }


  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
      this.http.post(apiUrl + '/userLogin', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response login", res.json()); 
          if(res.json().statusCode == '200' || res.json().statusCode == '401'){
            isAuthenticated = true;
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
          isAuthenticated = false;
          localStorage.clear();
        });
    });

  }

  getAuthenticated(){
      return isAuthenticated;
  }

}