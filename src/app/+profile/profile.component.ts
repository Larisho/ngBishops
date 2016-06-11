import { Component, OnInit } from '@angular/core';
import { NgBishopsAppComponent } from '../ng-bishops.component';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoggedIn: boolean;

  constructor() {}

  ngOnInit() {
    this.isLoggedIn = false;

    if (NgBishopsAppComponent.getCookie("check") === "123") {
      this.isLoggedIn = true;
    }
  }
}
