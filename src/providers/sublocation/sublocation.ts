import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost:8181/auth/sublocation';

let isAuthenticated : boolean;
@Injectable()
export class SubLocationService {

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }

  getAllSubLocation(locationId) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/location/'+locationId+'/sublocation', {headers: headers})
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
  
  getAllSubLocationSearch(filter) {
    return new Promise((resolve, reject) => {
      
     

    let urlSearchParams = new URLSearchParams();
    for(let key in filter){
      if(filter[key]!=null){
    urlSearchParams.append(key, filter[key]);
      }
  }
      this.http.get(apiUrl + '/sublocation/search?'+urlSearchParams)
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

 
  
  getSubLocationId(id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/sublocation/'+id, {headers: headers})
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
    
 
  
  

 addSubLocation(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
	console.log("requeset", JSON.stringify(data)); 
      this.http.post(apiUrl + '/sublocation', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

  
  delete(id) {
    return new Promise((resolve, reject) => {
	let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());	
	this.http.delete(apiUrl + '/sublocation/'+id, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log("mast post resp", res.json()); 
          
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }
}