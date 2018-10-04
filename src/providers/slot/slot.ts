import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '@app/env';
let apiUrl = ENV.baseUrl+'/slot';

let isAuthenticated : boolean;
@Injectable()
export class SlotService {

  constructor(public http : Http) {
  }

  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }

  getAllSlot(locationId) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/sublocation/'+locationId+'/slot', {headers: headers})
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
  
  getAllSlotSearch(filter) {
    return new Promise((resolve, reject) => {
      
     

    let urlSearchParams = new URLSearchParams();
    for(let key in filter){
      if(filter[key]!=null){
    urlSearchParams.append(key, filter[key]);
      }
  }
      this.http.get(apiUrl + '/slot/search?'+urlSearchParams)
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

 
  
  getSlotId(id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
      this.http.get(apiUrl + '/slot/'+id, {headers: headers})
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
    
 
  
  

 addSlot(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set("token",this.getToken());
	console.log("requeset", JSON.stringify(data)); 
      this.http.post(apiUrl + '/slot', JSON.stringify(data), {headers: headers})
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
	this.http.delete(apiUrl + '/slot/'+id, {headers: headers})
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