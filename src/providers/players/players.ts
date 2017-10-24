import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlayersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'https://crickify.herokuapp.com/player';
let apiUrlTeam = 'https://crickify.herokuapp.com/teamplayer';

@Injectable()
export class PlayersProvider {

  constructor(public http: Http) {
    console.log('Hello PlayersProvider Provider');
  }

  getToken(){
    return JSON.parse(localStorage.getItem('userData')).user.token;
}

getPlayerStats() {
  return new Promise((resolve, reject) => {
    let headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set("token",this.getToken());
    this.http.get(apiUrl + '/stats' , {headers: headers})
      .subscribe(res => {
        resolve(res.json());
        console.log("auth response matches", res.json()); 
        if(res.json().statusCode == '200'){
          console.log("player stats", res.json());
        }
      }, (err) => {
        reject(err);
        console.log("error",err);
      });
  });

}

getPlayerTournamentStats(teamid) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set("token",this.getToken());
    this.http.get(apiUrlTeam+ '/tournament/stats/' + teamid + "/player" , {headers: headers})
      .subscribe(res => {
        resolve(res.json());
        console.log("auth response matches", res.json()); 
        if(res.json().statusCode == '200'){
          console.log("player stats", res.json());
        }
      }, (err) => {
        reject(err);
        console.log("error",err);
      });
  });

}
}
