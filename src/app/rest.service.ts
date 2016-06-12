import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {

  host: string = "http://osiris.ubishops.ca";

  constructor(private _http: Http) {}

  getMessages() {
    return this._http.get(this.host + '/~gbianchet/restapi/chat').map(res => res.json());
  }

  sendMessage(username: string, message: string) {
    const body = new URLSearchParams();
    body.set('sender', username);
    body.set('message', message);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.host + '/~gbianchet/restapi/chat', body.toString(), {
      headers : headers
    }).map(res => res.json());
  }

  login(username: string, password: string) {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.host + '/~gbianchet/restapi?method=login', body.toString(), {
      headers : headers
    }).map(res => res.json());
  }

  createUser(firstname: string, lastname: string, email: string, username: string, password: string) {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('firstname', firstname);
    body.set('lastname', lastname);
    body.set('email', email);

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.host + '/~gbianchet/restapi/create', body.toString(), {
      headers : headers
    }).map(res => res.json());
  }

  getProfile(username: string) {
    return this._http.get(this.host + '/~gbianchet/restapi/profile?username=' + username).map(res => res.json());
  }

  getLeader() {
    return this._http.get(this.host + '/~gbianchet/restapi/leaderboard').map(res => res.json());
  }

  sendRes(username: string, res: number) {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('wins', res.toString());

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.host + '/~gbianchet/restapi/stats', body.toString(), {
      headers : headers
    }).map(res => res.json());
  }

}
