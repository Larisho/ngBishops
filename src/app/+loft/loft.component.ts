import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgBishopsAppComponent } from '../ng-bishops.component';
import { GameComponent } from '../+game/';
import { ChatComponent } from '../+chat/';

@Component({
  moduleId: module.id,
  selector: 'app-loft',
  templateUrl: 'loft.component.html',
  styleUrls: ['loft.component.css']
})
export class LoftComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.isLoggedIn = false;

    if (NgBishopsAppComponent.getCookie("check") === "123") {
      this.isLoggedIn = true;
    }
  }
}
