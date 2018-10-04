import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/env';
let apiUrl = ENV.baseUrl+'';

let countryApi='https://restcountries.eu/rest/v2/all';

let scoreApi='https://cricscore-api.appspot.com';
let imageUrl = ENV.baseUrl+'/image/';
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

  getImages(type,id) {
    return new Promise((resolve, reject) => {
       this.http.get(imageUrl + type+'/image/'+id,)
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
  getAllCountries() {
    return new Promise((resolve, reject) => {

      this.http.get(countryApi)
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

  getAllScores() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.set('Access-Control-Allow-Origin' , '*');
    
      this.http.get(scoreApi+'/csa',{ headers:headers})
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
  getAllScoresDetails(id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.set('Access-Control-Allow-Origin' , '*');
          this.http.get(scoreApi+'/csa?id='+id,{ headers:headers})
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

  deleteImage(image) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	 headers.set("token",this.getToken());
      this.http.post(imageUrl + '/image/delete' , JSON.stringify(image), {headers: headers})
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