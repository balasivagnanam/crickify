import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/env';
let matchapiUrl = ENV.baseUrl+'/match';
let apiUrl = ENV.baseUrl+'/teamplayer';
let teamapiUrl = ENV.baseUrl+'/team';
//let isLoggedIn : boolean;
let isAuthenticated : boolean;
@Injectable()
export class TeamService {

   

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }

  getAllTeams() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/teams' , {headers: headers})
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
  
    getAllPlayers(team) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/teams/players/'+team.id , {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response players", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("players", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  getOtherMatchPlayers(team,matchId) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(matchapiUrl + '/players/'+matchId , {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response players", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("players", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
   getAllTeamPlayers(team) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/teamplayers/team//'+team.id , {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response players", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("players", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  createTeam(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	 headers.set("token",this.getToken());
      this.http.post(teamapiUrl + '/team' , JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("response", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("value", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);

        });
    });

  }
  
  roleUpdate(value) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
   headers.set("token",this.getToken());
      this.http.put(apiUrl + '/team/player/'+value.team.id+'/status/'+value.status ,JSON.stringify(value.player), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("response", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("value", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);

        });
    });

  }  
addPlayer(credentials,team) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	 headers.set("token",this.getToken());
	  console.log("request", JSON.stringify(credentials));
      this.http.post(apiUrl + '/team/player/'+team.id , JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("response", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("value", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);

        });
    });

  }
  
  deletePlayer(player,team) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	 headers.set("token",this.getToken());
	       this.http.delete(apiUrl + '/team/'+team.id+'/player/'+player.id , {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("response", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("value", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);

        });
    });

  }
  
   getAdminTeams() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/teamadmin' , {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response teams", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("teams", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
}