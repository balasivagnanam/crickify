import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://crickify.herokuapp.com/login';

@Injectable()
export class AuthService {

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
    headers.set('Content-Type', 'application/json');
      this.http.post(apiUrl + '/create', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log(res.json());
        }, (err) => {
          reject(err);
          console.log("error",err);
        });
    });

  }

}