import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://crickify.herokuapp.com';

//let isLoggedIn : boolean;
let isAuthenticated : boolean;
@Injectable()
export class OtherService {

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }

  getAllLocation() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/location/locations', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response locations", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("locations", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  
   getAllDismisals() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/batting/batting/dismisals', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response locations", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("locations", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
  
    getAllTournament() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/tournament/tournaments', {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response tournaments", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("tournaments", res.json());
          }
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  createLocation(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	 headers.set("token",this.getToken());
      this.http.post(apiUrl + '/location/location' , JSON.stringify(credentials), {headers: headers})
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
    createTournament(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	 headers.set("token",this.getToken());
      this.http.post(apiUrl + '/tournament/tournament' , JSON.stringify(credentials), {headers: headers})
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

  
}