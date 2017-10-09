import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://crickify.herokuapp.com/teamplayer';

//let isLoggedIn : boolean;
let isAuthenticated : boolean;
@Injectable()
export class StatsService {

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }

  getTeamStats(teamid) {
    console.log("passed team id", teamid);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/tournament/stats/' + teamid , {headers: headers})
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
}