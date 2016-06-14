import { Component, OnInit } from '@angular/core';
import { NgBishopsAppComponent } from '../ng-bishops.component';
import { RestService } from '../rest.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoggedIn: boolean;

  username: string;
  first: string;
  last: string;
  email: string;

  constructor(private _service: RestService) {}

  getProfile(username: string) {
    this._service.getProfile(username)
      .subscribe(
        data => {
          this.first = data.data.first_name;
          this.last = data.data.last_name;
          this.email = data.data.email
        },
        error => console.error(error)
      );
  }

  ngOnInit() {
    this.isLoggedIn = false;

    if (NgBishopsAppComponent.getCookie("check") === "123") {
      this.isLoggedIn = true;
    }
    this.username = NgBishopsAppComponent.getCookie('username');
    this.getProfile(this.username);
  }
}
