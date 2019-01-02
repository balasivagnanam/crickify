import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/env';
let apiUrl = ENV.baseUrl+'/teamplayer';
let apiteamUrl = ENV.baseUrl+'/team';
let playerapiUrl = ENV.baseUrl+'/player';
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
          
          if(res.json().statusCode == '200'){
         
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  getTeamStatistics(teamid,filter) {
    console.log("passed team id", teamid);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
    let urlSearchParams = new URLSearchParams();
    for(let key in filter){
      if(filter[key]!=null){
    urlSearchParams.append(key, filter[key]);
      }
  }
      this.http.get(apiteamUrl + '/team/'+teamid+'/statistics?'+urlSearchParams , {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          
          if(res.json().statusCode == '200'){
         
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getStats() {
  
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/stats', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        
          if(res.json().statusCode == '200'){
            
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
}