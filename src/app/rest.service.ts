import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {

  host: string = "http://osiris.ubishops.ca";

  constructor(private _http: Http) {}

  getMessages() {
    return this._http.get(this.host + '/~gbianchet/restapi?method=chat').map(res => res.json());
  }

  sendMessage(username: string, message: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.host + '/~gbianchet/restapi?method=chat1&username=' + username + '&message=' + message, {
      headers: headers
    }).map(res => res.json());
  }

  login(username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.host + '/~gbianchet/restapi?method=login&username=' + username + '&password=' + password, {
      headers : headers
    }).map(res => res.json());
  }

  createUser(firstname: string, lastname: string, email: string, username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.host + '/~gbianchet/restapi?method=create&firstname=' + firstname + "&lastname="
      + lastname + '&email=' + email + '&username=' + username + '&password=' + password,{
      headers : headers
    }).map(res => res.json());
  }

  getProfile(username: string) {
    return this._http.get(this.host + '/~gbianchet/restapi?method=profile&username=' + username).map(res => res.json());
  }

  getLeader() {
    return this._http.get(this.host + '/~gbianchet/restapi?method=leaderboard').map(res => res.json());
  }

  sendRes(username: string, res: number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.host + '/~gbianchet/restapi?method=stats&username=' + username + '&win=' + res, {
      headers : headers
    }).map(res => res.json());
  }

}
