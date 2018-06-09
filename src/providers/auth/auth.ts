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
     if(data == null){
          isAuthenticated = false;
    } else {
                 console.log("user data presnet");
                 isAuthenticated = true;
            }    
    }

  getToken(){
	  if(JSON.parse(localStorage.getItem('userData'))!=null&& JSON.parse(localStorage.getItem('userData')).user!=null){
  return JSON.parse(localStorage.getItem('userData')).user.token;}
  else{
	  return null;
  }
  }

  getUser(){
      if(JSON.parse(localStorage.getItem('userData'))!=null){
  return JSON.parse(localStorage.getItem('userData')).user;}
  else{
	  return null;
  }
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
editUser(credentials,id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
   headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.post(apiUrl + '/user/update/'+id, JSON.stringify(credentials), {headers: headers})
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
forgot(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	console.log("input",credentials.username);
      this.http.post(apiUrl + '/forgotpassword', credentials.username, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response signup", res.json()); 
          if(res.json().statusCode == '200' || res.json().statusCode == '401'){
            isAuthenticated = false;
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
          isAuthenticated = false;
          localStorage.clear();
        });
    });

  }
  
  reset(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	headers.set("token",this.getToken());
	 console.log("token", this.getToken());
      this.http.post(apiUrl + '/updatepassword', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response update", res.json()); 
          if(res.json().statusCode == '200' || res.json().statusCode == '401'){
            isAuthenticated = false;
			localStorage.clear();
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
	  if(this.getToken()==null){
		  return false;
	  }
      return isAuthenticated;
  }
 logout(){
      isAuthenticated = false;
  }
}