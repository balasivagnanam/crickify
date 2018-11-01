import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/env';
let apiUrl = ENV.baseUrl+'';

let countryApi='https://restcountries.eu/rest/v2/all';
let masterApi='http://jal-dev.champ.aero/jal/booking/v1/bookings?marketDomain=Domestic&departureFrom=2018-10-30T00:00:00%2B09:00&departureUntil=2018-10-30T23:59:59%2B09:00&notDeparted=true&page=0&sort=segments.bookingClosedOn,desc';
let bookingApi='http://localhost:8004/jal/booking/v1/bookings';
let scoreApi='https://cricscore-api.appspot.com';
let imageUrl = ENV.baseUrl+'/image/';
let Authorization='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YjkyNWM5ZDlmMjg3Y2ZjZDBlZTZhNTIiLCJzdWRvZXJfc3ViIjpudWxsLCJzdWJzIjpbImFsbG90bWVudC1zZXJ2aWNlIiwiYm9va2luZy1zZXJ2aWNlIiwiY29udHJhY3QtZGF0YS1zZXJ2aWNlIiwiaW52b2ljZS1kYXRhLXNlcnZpY2UiLCJtYXN0ZXItZGF0YS1zZXJ2aWNlIiwibmV3cy1zZXJ2aWNlIiwicGlja3VwLXNlcnZpY2UiLCJ0cmFja2FuZHRyYWNlLXNlcnZpY2UiXSwidXNlcl9uYW1lIjoiY2hhbXBkZXYiLCJhdXRob3JpdGllcyI6WyJzb21lcm9sZUlkIl0sImNsaWVudF9pZCI6IjViNjJlNzJiOTRlMjE5NjA3ZjUyNjNmMiIsInNjb3BlIjpbIlVTRVIiLCJBRE1JTiJdLCJzdGF0aW9uIjpudWxsLCJuYW1lIjoiRmlyc3QgTGFzdCIsInRlbmFudElkIjpudWxsLCJleHAiOjE1NDA5OTI3NDksInN1Yl92ZXJzaW9uIjpudWxsLCJqdGkiOiIwYzgwMTk2YS0zODYxLTQ1ZDYtYjU0Zi1kYTBhZjZhYjBmN2IiLCJjaWQiOiJqYWwifQ.Ltv3iEWjo7P22d7WE_SYt6azoF4waeB92tveEwBQZz3bZFBSkW2-8O-wnJ5_xgm354RGJUPT8mUOSUZnlyXYH-BnQKOGTAT4YUCur_nE3S9HB-BwfvQ1OYRXi8B8QKpJP2XLNAJnq7eNlFzMU-Uj61IiEfMxeNWgBES4Cpp2suzKBbvdu4hzymVC8HoNamuBmO2PuUrqfUXa5MlaCwLt9SUwk3uj-GAIzT0u0jm1h_RCla_TQAjwJdajiE3zrHzPl1_CIugjcLiWHQr28z0qhdMLZC4pU49gb8u252GK4HHKz3ybZ-uJN2hCGQqX2uLWn52bO44Dw9m3QU9Shdywpg';
//let isLoggedIn : boolean;
let isAuthenticated : boolean;
@Injectable()
export class OtherService {

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }
  getLocationId(id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/location/location/'+id, {headers: headers})
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
  getAllMasterData() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set("Authorization",Authorization);
      headers.set('Access-Control-Allow-Origin','*');
      this.http.get(masterApi, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("auth response masterApi", res.json()); 
          if(res.json().statusCode == '200'){
            console.log("masterApi", res.json());
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
  validatePhone(phone) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	 headers.set("token",this.getToken());
      this.http.post(apiUrl + '/validate/phone/request/'+phone , null, {headers: headers})
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

  verify(type,id,data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
	 headers.set("token",this.getToken());
      this.http.post(apiUrl +'/validate/'+type+ '/'+id+'/phone', JSON.stringify(data), {headers: headers})
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