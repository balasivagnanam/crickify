import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://crickify.herokuapp.com/match';

//let isLoggedIn : boolean;
let isAuthenticated : boolean;
@Injectable()
export class MatchService {

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }

  getAllMatches() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/matches/availabilities', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  getPreviousMatches() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/playedmatches', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response matches", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("played matches", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  postAvailability(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.post(apiUrl + '/availability', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast avail post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }


  
}