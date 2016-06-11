import { Component, OnInit } from '@angular/core';
import { NgBishopsAppComponent } from '../ng-bishops.component';

@Component({
  moduleId: module.id,
  selector: 'app-loft',
  templateUrl: 'loft.component.html',
  styleUrls: ['loft.component.css']
})
export class LoftComponent implements OnInit {

  isLoggedIn: boolean;

  constructor() {}

  ngOnInit() {
    this.isLoggedIn = false;

    if (NgBishopsAppComponent.getCookie("check") === "123") {
      this.isLoggedIn = true;
    }
  }
}
